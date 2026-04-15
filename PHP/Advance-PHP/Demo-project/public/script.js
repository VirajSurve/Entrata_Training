const state = {
  todos: [],
  filter: 'all',
  editingId: null,
  loading: false,
};

const elements = {
  form: document.getElementById('create-form'),
  newTitle: document.getElementById('new-title'),
  list: document.getElementById('todo-list'),
  stats: document.getElementById('stats'),
  status: document.getElementById('status'),
  clearCompleted: document.getElementById('clear-completed'),
  filters: document.querySelectorAll('[data-filter]'),
};

async function apiRequest(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(body.message || 'Something went wrong');
  }

  return body;
}

function setStatus(message = '') {
  elements.status.textContent = message;
}

function visibleTodos() {
  if (state.filter === 'active') {
    return state.todos.filter((todo) => !todo.is_completed);
  }

  if (state.filter === 'completed') {
    return state.todos.filter((todo) => Boolean(todo.is_completed));
  }

  return state.todos;
}

function renderStats() {
  const total = state.todos.length;
  const completed = state.todos.filter((todo) => Boolean(todo.is_completed)).length;
  const active = total - completed;

  elements.stats.textContent = `${total} total • ${active} active • ${completed} completed`;
  elements.clearCompleted.disabled = completed === 0;
}

function renderFilters() {
  elements.filters.forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === state.filter);
  });
}

function todoMarkup(todo) {
  const safeTitle = escapeHtml(todo.title || 'Untitled Task');
  const isEditing = state.editingId === todo.id;

  if (isEditing) {
    return `
      <li class="todo ${todo.is_completed ? 'done' : ''}" data-id="${todo.id}">
        <input class="todo-check" type="checkbox" ${todo.is_completed ? 'checked' : ''} data-action="toggle" />
        <input class="edit-input" type="text" value="${safeTitle}" maxlength="255" data-action="save-input" />
        <div class="todo-actions">
          <button type="button" class="btn-inline" data-action="save">Save</button>
          <button type="button" class="btn-inline" data-action="cancel">Cancel</button>
        </div>
      </li>
    `;
  }

  return `
    <li class="todo ${todo.is_completed ? 'done' : ''}" data-id="${todo.id}">
      <input class="todo-check" type="checkbox" ${todo.is_completed ? 'checked' : ''} data-action="toggle" />
      <div class="todo-title" title="${safeTitle}">${safeTitle}</div>
      <div class="todo-actions">
        <button type="button" class="btn-inline" data-action="edit">Edit</button>
        <button type="button" class="btn-danger" data-action="delete">Delete</button>
      </div>
    </li>
  `;
}

function renderTodos() {
  const todos = visibleTodos();

  if (todos.length === 0) {
    const emptyMessage =
      state.filter === 'all'
        ? 'No tasks yet. Add your first task above.'
        : state.filter === 'active'
          ? 'No active tasks right now.'
          : 'No completed tasks yet.';

    elements.list.innerHTML = `<li class="empty">${emptyMessage}</li>`;
    return;
  }

  elements.list.innerHTML = todos.map(todoMarkup).join('');
}

function renderAll() {
  renderFilters();
  renderTodos();
  renderStats();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function loadTodos() {
  state.loading = true;
  setStatus('Loading tasks...');

  try {
    const result = await apiRequest('/api/todos');
    state.todos = Array.isArray(result.data) ? result.data : [];
    setStatus('');
  } catch (error) {
    setStatus(error.message);
  } finally {
    state.loading = false;
    renderAll();
  }
}

async function addTodo(title) {
  try {
    await apiRequest('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ title, description: null }),
    });

    elements.newTitle.value = '';
    setStatus('Task added.');
    await loadTodos();
  } catch (error) {
    setStatus(error.message);
  }
}

async function toggleTodo(id, nextValue) {
  try {
    await apiRequest(`/api/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ is_completed: nextValue }),
    });

    await loadTodos();
  } catch (error) {
    setStatus(error.message);
  }
}

async function saveTodo(id, title) {
  if (!title.trim()) {
    setStatus('Task title cannot be empty.');
    return;
  }

  try {
    await apiRequest(`/api/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ title: title.trim() }),
    });

    state.editingId = null;
    await loadTodos();
  } catch (error) {
    setStatus(error.message);
  }
}

async function deleteTodo(id) {
  try {
    await apiRequest(`/api/todos/${id}`, {
      method: 'DELETE',
    });

    await loadTodos();
  } catch (error) {
    setStatus(error.message);
  }
}

async function clearCompleted() {
  const completedIds = state.todos
    .filter((todo) => Boolean(todo.is_completed))
    .map((todo) => todo.id);

  if (completedIds.length === 0) {
    return;
  }

  try {
    await Promise.all(
      completedIds.map((id) => apiRequest(`/api/todos/${id}`, { method: 'DELETE' }))
    );
    setStatus('Completed tasks cleared.');
    await loadTodos();
  } catch (error) {
    setStatus(error.message);
  }
}

elements.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = elements.newTitle.value.trim();

  if (!title) {
    setStatus('Please type a task first.');
    return;
  }

  addTodo(title);
});

elements.filters.forEach((button) => {
  button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    renderAll();
  });
});

elements.clearCompleted.addEventListener('click', clearCompleted);

elements.list.addEventListener('click', (event) => {
  const actionEl = event.target.closest('[data-action]');
  if (!actionEl) {
    return;
  }

  const todoEl = event.target.closest('[data-id]');
  if (!todoEl) {
    return;
  }

  const todoId = Number(todoEl.dataset.id);
  const todo = state.todos.find((item) => Number(item.id) === todoId);
  if (!todo) {
    return;
  }

  const action = actionEl.dataset.action;

  if (action === 'toggle') {
    toggleTodo(todoId, !todo.is_completed);
    return;
  }

  if (action === 'edit') {
    state.editingId = todoId;
    renderAll();
    const rerenderedTodo = elements.list.querySelector(`[data-id="${todoId}"]`);
    const input = rerenderedTodo ? rerenderedTodo.querySelector('.edit-input') : null;
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
    return;
  }

  if (action === 'cancel') {
    state.editingId = null;
    renderAll();
    return;
  }

  if (action === 'save') {
    const input = todoEl.querySelector('.edit-input');
    saveTodo(todoId, input ? input.value : '');
    return;
  }

  if (action === 'delete') {
    deleteTodo(todoId);
  }
});

elements.list.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') {
    return;
  }

  const input = event.target.closest('.edit-input');
  if (!input) {
    return;
  }

  const todoEl = event.target.closest('[data-id]');
  if (!todoEl) {
    return;
  }

  saveTodo(Number(todoEl.dataset.id), input.value);
});

loadTodos();
