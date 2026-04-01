<?php

use Core\App;
use Core\Database;
use Core\Validator;

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

$db=App::resolve(Database::class);

$errors = [];

if (!Validator::email($email)) {
    $errors['email'] = 'Please provide a valid email address';
}

if (!Validator::string($password, 7, 255)) {
    $errors['password'] = 'Password must be at least 7 characters';
}

if (!empty($errors)) {
    return view('session/create.view.php', [
        'errors' => $errors
    ]);
}

$user=$db->query('SELECT * FROM users WHERE email=:email',[
    'email'=>$email
])->find();

if(!$user){
    $errors['email'] = 'No matching email found';
    return view('session/create.view.php', [
        'errors' => $errors,
    ]);
}

if(password_verify($password,$user['password'])){
    login($user);
    header('location:/');
    exit();
}else{
    $errors['password'] = 'Wrong password';
    return view('session/create.view.php', [
        'errors' => $errors,
    ]);
}

$_SESSION['user']=$user;