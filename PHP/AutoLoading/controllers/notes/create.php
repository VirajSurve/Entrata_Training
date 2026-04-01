<?php

$config = require base_path('config.php');
$db = new Database($config['database']);

$errors = [];

if($_SERVER['REQUEST_METHOD']=== 'POST'){
    

    $body = $_POST['body'] ?? '';

    if (!Validator::string($body, 1, 1000)) {
        if (strlen(trim($body)) === 0) {
            $errors['body'] = 'A body is required';
        } else {
            $errors['body'] = 'Body cannot be more than 1000 characters';
        }
    }

    if (empty($errors)) {
        $db->query('INSERT INTO notes (id, body, user_id)
            SELECT COALESCE(MAX(id), 0) + 1, :body, :user_id FROM notes', [
            'body' => $body,
            'user_id' => 1
        ]);

        header('location: /notes');
        exit();
    }
}

view("notes/create.view.php",[
    'heading'=>'Create Note',
    'errors'=> $errors
]);