<?php

use Core\App;
use Core\Database;

$db=App::resolve(Database::class);

$currentUserId = 1;

$errors = [];

$id = $_GET['id'] ?? null;

if (!$id) {
    abort();
}

$note = $db->query('select * from notes where id = :id', [
    'id' => $id
])->findOrFail();

authorize((int) $note['user_id'] === $currentUserId);

view("notes/show.view.php",[
    'heading'=>'Note',
    'note'=> $note
]);
