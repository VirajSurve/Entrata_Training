<?php

require "functions.php";

// require "router.php";

$dsn="mysql:host=localhost;port=3306;dbname=myapp;user=root;password=1234";

$pdo=new PDO($dsn);

$statement=$pdo->prepare("SELECT * FROM posts");
$statement->execute();

$posts=$statement->fetchAll(PDO::FETCH_ASSOC);

dd($posts);