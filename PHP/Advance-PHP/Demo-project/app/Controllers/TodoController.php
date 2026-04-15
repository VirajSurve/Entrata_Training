<?php

namespace App\Controllers;

use App\Core\Request;
use App\Core\Response;
use App\Models\Todo;

class TodoController
{
    private Todo $model;

    public function __construct()
    {
        $this->model = new Todo();
    }

    public function welcome(array $params = []): void
    {
        $html = file_get_contents(__DIR__ . "/../../public/frontend.html");
        header("Content-Type: text/html; charset=UTF-8");
        echo $html;
    }

    public function index(array $params = []): void
    {
        $todos = $this->model->all();
        Response::success($todos);
    }

    public function show(array $params): void
    {
        $id = (int)($params["id"] ?? 0);
        $todo = $this->model->find($id);

        if (!$todo) {
            Response::notFound("Todo not found");
        }

        Response::success($todo);
    }

    public function store(array $params = []): void
    {
        $body = Request::json();
        $title = trim((string)($body["title"] ?? ""));
        $description = isset($body["description"]) ? trim((string)$body["description"]) : null;

        if ($title === "") {
            Response::unprocessable("Title is required");
        }

        $todo = $this->model->create($title, $description);
        Response::success($todo, "Todo created", 201);
    }

    public function update(array $params): void
    {
        $id = (int)($params["id"] ?? 0);

        if (!$this->model->find($id)) {
            Response::notFound("Todo not found");
        }

        $body = Request::json();
        $fields = [];

        if (array_key_exists("title", $body)) {
            $title = trim((string)$body["title"]);
            if ($title === "") {
                Response::unprocessable("Title cannot be empty");
            }
            $fields["title"] = $title;
        }

        if (array_key_exists("description", $body)) {
            $fields["description"] = $body["description"] === null ? null : trim((string)$body["description"]);
        }

        if (array_key_exists("is_completed", $body)) {
            $isCompleted = $this->normalizeBoolean($body["is_completed"]);

            if ($isCompleted === null) {
                Response::unprocessable("is_completed must be a boolean");
            }

            $fields["is_completed"] = $isCompleted;
        }

        $todo = $this->model->updatePartial($id, $fields);
        Response::success($todo);
    }

    public function destroy(array $params): void
    {
        $id = (int)($params["id"] ?? 0);

        if (!$this->model->delete($id)) {
            Response::notFound("Todo not found");
        }

        Response::success([], "Todo deleted");
    }

    private function normalizeBoolean(mixed $value): ?bool
    {
        if (is_bool($value)) {
            return $value;
        }

        if (is_int($value)) {
            if ($value === 1) {
                return true;
            }

            if ($value === 0) {
                return false;
            }
        }

        if (is_string($value)) {
            $normalized = strtolower(trim($value));

            if (in_array($normalized, ["1", "true", "yes", "on"], true)) {
                return true;
            }

            if (in_array($normalized, ["0", "false", "no", "off"], true)) {
                return false;
            }
        }

        return null;
    }
}
