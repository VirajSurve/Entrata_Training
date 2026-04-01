<?php

const BASE_PATH = __DIR__ . '/../';

require BASE_PATH . 'Core/Response.php';
require BASE_PATH . 'Core/Validator.php';
require BASE_PATH . 'Core/functions.php';

spl_autoload_register(function($class){
    $class = str_replace('\\', DIRECTORY_SEPARATOR, $class);
    
    require base_path($class . '.php');
});

// require base_path('Response.php');
// require base_path('Validator.php');
// require base_path('Database.php');

$router= new \Core\Router();

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$routes = require base_path('routes.php');

$method=$_POST['_method'] ?? $_SERVER['REQUEST_METHOD'];

$router->route($uri,$method);

