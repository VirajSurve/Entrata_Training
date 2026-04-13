const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const template = document.getElementById("todo-item-template");
const filterButtons = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.getElementById("clear-completed");
const stats = document.getElementById("stats");
const errorEl = document.getElementById("form-error");

const STORAGE_KEY = "pulse_tasks_v1";

let todos = loadTodos();
let activeFilter = "all";

render();

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function createTodo(text) {
  return {
    id: crypto.randomUUID(),
    text,
    completed: false
  };
}

function filteredTodos() {
  if (activeFilter === "active") return todos.filter((item) => !item.completed);
  if (activeFilter === "completed") return todos.filter((item) => item.completed);
  return todos;
}

function render() {
  todoList.innerHTML = "";

  const shown = filteredTodos();

  shown.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.dataset.id = item.id;

    const checkbox = node.querySelector(".toggle");
    const text = node.querySelector(".task-text");

    checkbox.checked = item.completed;
    text.textContent = item.text;

    if (item.completed) {
      node.classList.add("done");
    }

    todoList.appendChild(node);
  });

  updateStats();
}

function updateStats() {
  const total = todos.length;
  const completed = todos.filter((item) => item.completed).length;
  const active = total - completed;
  stats.textContent = `${total} total • ${active} active • ${completed} completed`;
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = todoInput.value.trim();

  if (!value) {
    errorEl.textContent = "Please enter a task.";
    return;
  }

  errorEl.textContent = "";
  todos.unshift(createTodo(value));
  saveTodos();
  render();

  todoInput.value = "";
  todoInput.focus();
});

todoList.addEventListener("click", function (event) {
  const item = event.target.closest(".todo-item");
  if (!item) return;

  const id = item.dataset.id;
  const todo = todos.find((entry) => entry.id === id);
  if (!todo) return;

  if (event.target.classList.contains("delete-btn")) {
    todos = todos.filter((entry) => entry.id !== id);
    saveTodos();
    render();
    return;
  }

  if (event.target.classList.contains("toggle") || event.target.classList.contains("checkmark") || event.target.classList.contains("task-text")) {
    todo.completed = !todo.completed;
    saveTodos();
    render();
  }
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    activeFilter = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    render();
  });
});

clearCompletedBtn.addEventListener("click", function () {
  todos = todos.filter((item) => !item.completed);
  saveTodos();
  render();
});
