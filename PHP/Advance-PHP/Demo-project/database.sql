
CREATE DATABASE todo_app;

CREATE TABLE IF NOT EXISTS todos (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    is_completed BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

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

SELECT *
FROM todos
ORDER BY id DESC;

SELECT *
FROM todos
WHERE id = :id
LIMIT 1;

INSERT INTO todos (title, description, is_completed)
VALUES (:title, :description, FALSE)
RETURNING *;

UPDATE todos
SET title = :title
WHERE id = :id;

UPDATE todos
SET description = :description
WHERE id = :id;

UPDATE todos
SET is_completed = :is_completed
WHERE id = :id;

UPDATE todos
SET title = :title,
    description = :description,
    is_completed = :is_completed
WHERE id = :id;

DELETE FROM todos
WHERE id = :id;


INSERT INTO todos (title, description, is_completed)
VALUES
('Learn PostgreSQL', 'Set up schema and CRUD queries', FALSE),
('Build Todo API', 'Implement GET/POST/PATCH/DELETE', FALSE);
