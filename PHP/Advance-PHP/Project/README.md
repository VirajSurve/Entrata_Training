# Advanced PHP Todo App

A simple MVC-style PHP project that demonstrates REST methods:

- GET
- POST
- PATCH
- DELETE

## Project Structure

- `app/Core` - Router and Database classes
- `app/Models` - Todo model
- `app/Controllers` - Todo controller
- `routes/web.php` - Route definitions
- `public/index.php` - Entry point
- `public/frontend.html` - Browser demo page

## Setup

1. Create DB and table:
  - Run `database.sql` in PostgreSQL.
2. Update DB credentials in `.env`.
3. Start Apache (or use XAMPP) and point document root to `public`.

## API Endpoints

- `GET /api/todos` - list todos
- `GET /api/todos/{id}` - get one todo
- `POST /api/todos` - create todo
- `PATCH /api/todos/{id}` - update partial fields
- `DELETE /api/todos/{id}` - delete todo

## Example JSON Bodies

Create (POST):

```json
{
  "title": "Learn Advanced PHP",
  "description": "Build CRUD API"
}
```

Patch (PATCH):

```json
{
  "is_completed": true
}
```

(Note: I have used AI agents to help me build this project.)
