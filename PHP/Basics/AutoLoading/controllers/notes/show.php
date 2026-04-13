<?php


$config = require base_path('config.php');
$db = new Database($config['database']);

$currentUserId = 1;

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
