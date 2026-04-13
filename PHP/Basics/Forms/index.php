<!DOCTYPE html>
<html>
<head>
    <title>PHP Forms and User Input</title>
</head>
<body>

<h2>Student Form</h2>

<form method="POST">
    Name: <input type="text" name="name"><br><br>
    Email: <input type="text" name="email"><br><br>
    Marks: <input type="number" name="marks"><br><br>
    <input type="submit" value="Submit">
</form>

<?php

if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["marks"])){

    $name=$_POST["name"];
    $email=$_POST["email"];
    $marks=$_POST["marks"];

    if(empty($name) || empty($email) || empty($marks)){
        echo "<br>Please fill all fields";
    }else{

        echo "<h3>Submitted Data</h3>";

        echo "Name: ".$name."<br>";
        echo "Email: ".$email."<br>";
        echo "Marks: ".$marks."<br>";

        if($marks>=40){
            echo "Result: Pass<br>";
        }else{
            echo "Result: Fail<br>";
        }

    }

}

?>

</body>
</html>