<?php

use Core\App;
use Core\Database;

$db=App::resolve(Database::class);
//dd($db);

$currentUserId = 1;

$note = $db->query('select * from notes where id = :id', [
    'id' => $_POST['id']
])->findOrFail();

authorize((int) $note['user_id'] === $currentUserId);

$db->query('DELETE FROM notes WHERE id=:id',[
    'id'=>$_GET['id']
]);

header('location: /notes');
exit();
