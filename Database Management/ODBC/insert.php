<?php

require "connect.php";

$name="Shardul";
$email="shardul@gmail.com";
$age=25;
$dept_id=3;

$sql="INSERT INTO students (name,email,age,dept_id) VALUES (?,?,?,?)";

$stmt=odbc_prepare($conn,$sql);

$result=odbc_execute($stmt,[$name,$email,$age,$dept_id]);

if($result){
    echo "Student inserted successfully!";
}else{
    echo "Insert failed: ".odbc_errormsg($conn);
}

odbc_close($conn);
