<?php
namespace App\Core;

class Router
{
    private array $routes = [];

    public function get(string $path, string $controller): void
    {
        $this->addRoute('GET', $path, $controller);
    }

    public function post(string $path, string $controller): void
    {
        $this->addRoute('POST', $path, $controller);
    }

    public function patch(string $path, string $controller): void
    {
        $this->addRoute('PATCH', $path, $controller);
    }

    public function delete(string $path, string $controller): void
    {
        $this->addRoute('DELETE', $path, $controller);
    }

    private function addRoute(string $method, string $path, string $controller): void
    {
        $this->routes[] = [
            'method' => $method,
            'path' => $path,
            'controller' => $controller,
        ];
    }

    public function dispatch(): void
    {
        $method = Request::method();
        $uri = Request::path();

        foreach ($this->routes as $route) {
            if ($route['method'] !== $method) {
                continue;
            }

            $params = $this->matchRoute($route['path'], $uri);
            if ($params !== null) {
                $this->callController($route['controller'], $params);
                return;
            }
        }

        Response::notFound('Route not found');
    }

    private function matchRoute(string $pattern, string $uri): ?array
    {
        // Handle exact match
        if ($pattern === $uri) {
            return [];
        }

        // Handle parameterized routes like /api/todos/{id}
        $parts = explode('/', trim($pattern, '/'));
        $uriParts = explode('/', trim($uri, '/'));

        if (count($parts) !== count($uriParts)) {
            return null;
        }

        $params = [];
        foreach ($parts as $index => $part) {
            if (preg_match('/^\{(\w+)\}$/', $part, $matches)) {
                $params[$matches[1]] = $uriParts[$index];
            } elseif ($part !== $uriParts[$index]) {
                return null;
            }
        }

        return $params;
    }

    private function callController(string $controller, array $params): void
    {
        [$class, $method] = explode('@', $controller);
        $class = 'App\\Controllers\\' . $class;

        $instance = new $class();
        $instance->$method($params);
    }
}
