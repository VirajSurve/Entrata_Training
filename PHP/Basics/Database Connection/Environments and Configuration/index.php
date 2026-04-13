<?php

require "functions.php";
// require "router.php";
require "Database.php";

$config=require('config.php');

$db=new Database($config['database'],'root','1234');

$posts=$db->query("SELECT * FROM posts")->fetchAll();

dd($posts);
