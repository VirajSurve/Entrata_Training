<?php

namespace App\Controllers;

use App\Models\Todo;

class TodoController
{
    private Todo $model;

    public function __construct()
    {
        $this->model = new Todo();
    }

    private function json(array $payload, int $status = 200): void
    {
        http_response_code($status);
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode($payload, JSON_UNESCAPED_SLASHES);
        exit;
    }

    private function inputJson(): array
    {
        $raw = file_get_contents('php://input');
        return json_decode($raw, true) ?? [];
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

            if (in_array($normalized, ['1', 'true', 'yes', 'on'], true)) {
                return true;
            }

            if (in_array($normalized, ['0', 'false', 'no', 'off'], true)) {
                return false;
            }
        }

        return null;
    }

    public function index(): void
    {
        $todos = $this->model->all();
        $this->json(['status' => 'success', 'data' => $todos]);
    }

    public function show(array $params): void
    {
        $id = (int) ($params['id'] ?? 0);
        $todo = $this->model->find($id);

        if (!$todo) {
            $this->json(['status' => 'error', 'message' => 'Todo not found'], 404);
        }

        $this->json(['status' => 'success', 'data' => $todo]);
    }

    public function store(): void
    {
        $body = $this->inputJson();
        $title = trim((string) ($body['title'] ?? ''));
        $description = isset($body['description']) ? trim((string) $body['description']) : null;

        if ($title === '') {
            $this->json(['status' => 'error', 'message' => 'Title is required'], 422);
        }

        $todo = $this->model->create($title, $description);
        $this->json(['status' => 'success', 'data' => $todo], 201);
    }

    public function update(array $params): void
    {
        $id = (int) ($params['id'] ?? 0);

        if (!$this->model->find($id)) {
            $this->json(['status' => 'error', 'message' => 'Todo not found'], 404);
        }

        $body = $this->inputJson();
        $fields = [];

        if (array_key_exists('title', $body)) {
            $title = trim((string) $body['title']);
            if ($title === '') {
                $this->json(['status' => 'error', 'message' => 'Title cannot be empty'], 422);
            }
            $fields['title'] = $title;
        }

        if (array_key_exists('description', $body)) {
            $fields['description'] = $body['description'] === null ? null : trim((string) $body['description']);
        }

        if (array_key_exists('is_completed', $body)) {
            $isCompleted = $this->normalizeBoolean($body['is_completed']);

            if ($isCompleted === null) {
                $this->json(['status' => 'error', 'message' => 'is_completed must be a boolean'], 422);
            }

            $fields['is_completed'] = $isCompleted;
        }

        $todo = $this->model->updatePartial($id, $fields);
        $this->json(['status' => 'success', 'data' => $todo]);
    }

    public function destroy(array $params): void
    {
        $id = (int) ($params['id'] ?? 0);

        if (!$this->model->delete($id)) {
            $this->json(['status' => 'error', 'message' => 'Todo not found'], 404);
        }

        $this->json(['status' => 'success', 'message' => 'Todo deleted']);
    }
}
