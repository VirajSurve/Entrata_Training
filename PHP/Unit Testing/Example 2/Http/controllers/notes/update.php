<?php

use Core\App;
use Core\Database;
use Core\Validator;

$db=App::resolve(Database::class);

$currentUserId = 1;

$id = $_POST['id'] ?? null;

if (!$id) {
    abort();
}

$body = $_POST['body'] ?? '';

$note = $db->query('select * from notes where id = :id', [
    'id' => $id
])->findOrFail();

authorize((int) $note['user_id'] === $currentUserId);

$errors=[];

if (!Validator::string($body, 1, 1000)) {
    if (strlen(trim($body)) === 0) {
        $errors['body'] = 'A body is required';
    } else {
        $errors['body'] = 'Body cannot be more than 1000 characters';
    }
}

if(count($errors)){
    return view("notes/edit.view.php",[
        'heading'=>'Edit Note',
        'errors'=> $errors,
        'note' => $note
    ]);
}

$db->query('UPDATE notes SET body=:body WHERE id=:id',[
    'id'=> $id,
    'body'=> $body
]);

header('location:/notes');
die();