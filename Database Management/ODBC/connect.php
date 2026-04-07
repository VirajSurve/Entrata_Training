<?php

$dsn="university_db";
$user="postgres";
$password="1234";

$conn=odbc_connect($dsn,$user,$password);

if($conn){
    echo "Database connected successfully" . PHP_EOL;
}else{
    die("Database connection failed: ".odbc_errormsg() . PHP_EOL);
}