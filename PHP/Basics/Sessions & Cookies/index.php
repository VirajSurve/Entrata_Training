<!DOCTYPE html>
<html>
<head>
    <title>PHP Sessions and Cookies Example</title>
</head>
<body>

<?php

session_start();

echo "<h3>Creating session variable</h3>";
$_SESSION["username"]="Viraj";
$_SESSION["role"]="Trainee";
echo "Session variables created<br>";

echo "<h3>Reading session variables</h3>";
echo "Username: ".$_SESSION["username"]."<br>";
echo "Role: ".$_SESSION["role"]."<br>";

echo "<h3>Creating cookie</h3>";
setcookie("user","Viraj",time()+3600,"/");
echo "Cookie created (valid for 1 hour)<br>";

echo "<h3>Reading cookie</h3>";
if(isset($_COOKIE["user"])){
    echo "Cookie value: ".$_COOKIE["user"]."<br>";
}else{
    echo "Cookie not available yet (refresh page)<br>";
}

echo "<h3>Destroying session</h3>";
session_unset();
session_destroy();
echo "Session destroyed<br>";

?>
</body>
</html>