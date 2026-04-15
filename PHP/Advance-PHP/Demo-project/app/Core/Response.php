<?php

namespace App\Core;

class Response
{
    public static function json(array $payload, int $status = 200): void
    {
        http_response_code($status);
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode($payload, JSON_UNESCAPED_SLASHES);
        exit;
    }

    public static function success(array $data, string $message = 'Success', int $status = 200): void
    {
        self::json([
            'status' => 'success',
            'message' => $message,
            'data' => $data,
        ], $status);
    }

    public static function error(string $message, int $status = 400): void
    {
        self::json([
            'status' => 'error',
            'message' => $message,
        ], $status);
    }

    public static function notFound(string $message = 'Not found'): void
    {
        self::error($message, 404);
    }

    public static function unprocessable(string $message): void
    {
        self::error($message, 422);
    }
}
