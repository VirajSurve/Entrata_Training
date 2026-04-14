<?php
use App\Controllers\TodoController;

$controller=new TodoController();

$router->get('/api/todos',fn()=>$controller->index());
$router->get('/api/todos/{id}',fn(array $params)=>$controller->show($params));
$router->post('/api/todos',fn()=>$controller->store());
$router->patch('/api/todos/{id}',fn(array $params)=>$controller->update($params));
$router->delete('/api/todos/{id}',fn(array $params)=>$controller->destroy($params));

$router->get('/',function (): void {
    $html=file_get_contents(__DIR__.'/../public/frontend.html');
    header('Content-Type: text/html; charset=UTF-8');
    echo $html;
});
