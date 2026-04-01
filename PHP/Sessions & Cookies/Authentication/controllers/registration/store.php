<?php

use Core\App;
use Core\Database;
use Core\Validator;

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

$errors = [];

if (!Validator::email($email)) {
    $errors['email'] = 'Please provide a valid email address';
}

if (!Validator::string($password, 7, 255)) {
    $errors['password'] = 'Password must be at least 7 characters';
}

if (!empty($errors)) {
    return view('registration/create.view.php', [
        'errors' => $errors
    ]);
}

$db=App::resolve(Database::class);

$user=$db->query('SELECT * FROM users WHERE email=:email',[
    'email'=>$email
])->find();

if($user){
    $errors['email'] = 'Email already taken';
    return view('registration/create.view.php', [
        'errors' => $errors,
        'email' => $email
    ]);
}

$db->query('INSERT INTO users (email, password) VALUES (:email, :password)',[
    'email'=>$email,
    'password'=> $password
]);

$user=$db->query('SELECT * FROM users WHERE email=:email',[
    'email'=>$email
])->find();

$_SESSION['user']=$user;

header('location: /');
exit();

