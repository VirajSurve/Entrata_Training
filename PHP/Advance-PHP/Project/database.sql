-- ============================================
-- PostgreSQL setup + all API-related queries
-- ============================================

-- 1) Create database (run from psql connected to postgres DB)
CREATE DATABASE todo_app;

-- 2) Connect to database
-- \c todo_app

-- 3) Table schema
CREATE TABLE IF NOT EXISTS todos (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    is_completed BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4) Trigger function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_todos_updated_at ON todos;
CREATE TRIGGER trg_todos_updated_at
BEFORE UPDATE ON todos
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- REQUIRED QUERIES USED BY THIS PROJECT
-- (matches app/Models/Todo.php)
-- ============================================

-- 1) GET /api/todos -> Todo::all()
SELECT *
FROM todos
ORDER BY id DESC;

-- 2) GET /api/todos/{id} -> Todo::find()
SELECT *
FROM todos
WHERE id = :id
LIMIT 1;

-- 3) POST /api/todos -> Todo::create()
INSERT INTO todos (title, description, is_completed)
VALUES (:title, :description, FALSE)
RETURNING *;

-- 4) PATCH /api/todos/{id} -> Todo::updatePartial()
-- Dynamic SQL pattern built by PHP based on provided fields:
-- UPDATE todos SET <dynamic_set_clause> WHERE id = :id;
--
-- Example A (title only):
UPDATE todos
SET title = :title
WHERE id = :id;
-- Example B (description only):
UPDATE todos
SET description = :description
WHERE id = :id;
-- Example C (is_completed only):
UPDATE todos
SET is_completed = :is_completed
WHERE id = :id;
-- Example D (title + description + is_completed):
UPDATE todos
SET title = :title,
    description = :description,
    is_completed = :is_completed
WHERE id = :id;

-- 5) DELETE /api/todos/{id} -> Todo::delete()
DELETE FROM todos
WHERE id = :id;

-- Optional: seed data
INSERT INTO todos (title, description, is_completed)
VALUES
('Learn PostgreSQL', 'Set up schema and CRUD queries', FALSE),
('Build Todo API', 'Implement GET/POST/PATCH/DELETE', FALSE);
