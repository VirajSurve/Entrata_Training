<?php


$config = require('config.php');
$db = new Database($config['database']);

$heading="Note";

$currentUserId = 1;

$id = $_GET['id'] ?? null;

if (!$id) {
    abort();
}

$note = $db->query('select * from notes where id = :id', [
    'id' => $id
])->fetch();

if(!$note){
    abort();
}

if ((int) $note['user_id'] !== $currentUserId) {
    abort(Response::FORBIDDEN);
}

require "views/note.view.php";
