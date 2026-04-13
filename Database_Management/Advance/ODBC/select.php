<?php

require "connect.php";

$sql="SELECT * FROM students";

$stmt=odbc_prepare($conn,$sql);

if(!odbc_execute($stmt)){
    die("Query failed: ".odbc_errormsg($conn));
}

echo "Student list";

while($row=odbc_fetch_array($stmt)){
    echo PHP_EOL . $row['student_id'] . " - " . $row['name'] . " - " . $row['email'];
}

odbc_close($conn);