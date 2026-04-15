<?php

namespace App\Core;

class Request
{
    public static function json(): array
    {
        $raw = file_get_contents('php://input');
        return json_decode($raw, true) ?? [];
    }

    public static function input(string $key, mixed $default = null): mixed
    {
        return $_POST[$key] ?? $default;
    }

    public static function method(): string
    {
        return $_SERVER['REQUEST_METHOD'] ?? 'GET';
    }

    public static function path(): string
    {
        $uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
        $script = dirname($_SERVER['SCRIPT_NAME'] ?? '/');
        
        if ($script !== '/' && str_starts_with($uri, $script)) {
            $uri = substr($uri, strlen($script));
        }

        return '/' . ltrim($uri, '/');
    }
}
