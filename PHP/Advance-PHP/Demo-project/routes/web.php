<?php
use App\Controllers\TodoController;

$router->get('/api/todos', 'TodoController@index');
$router->get('/api/todos/{id}', 'TodoController@show');
$router->post('/api/todos', 'TodoController@store');
$router->patch('/api/todos/{id}', 'TodoController@update');
$router->delete('/api/todos/{id}', 'TodoController@destroy');

$router->get('/', 'TodoController@welcome');
