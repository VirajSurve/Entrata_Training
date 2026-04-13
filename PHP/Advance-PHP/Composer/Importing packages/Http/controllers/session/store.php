<?php

use Core\App;
use Core\Authenticator;
use Core\Database;
use Core\Session;
use Core\ValidationException;
use Http\Forms\LoginForm;

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// $form=new LoginForm([
//     'email'=>$email,
//     'password'=>$password
// ]);

$form=LoginForm::validate([
    'email'=>$email,
    'password'=>$password
]);



$auth=(new Authenticator())->attempt($email,$password);

if(!$auth){
    $form->error('email','No matching account found for the given email and password')->throw();

}

redirect('/');





