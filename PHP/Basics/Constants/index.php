<!DOCTYPE html>
<html>
<head>
<title>PHP Constants Example</title>
</head>
<body>

<h2>PHP Constants Demonstration</h2>

<?php

echo "<h3>Using define()</h3>";

define("SITE_NAME","Entrata Training");

echo SITE_NAME."<br>";


echo "<h3>Using const keyword</h3>";

const CITY="Pune";

echo CITY."<br>";


echo "<h3>Constants are global</h3>";

function showConstant(){
echo SITE_NAME."<br>";
}

showConstant();


echo "<h3>Constants inside expressions</h3>";

define("MARKS",85);

echo "Marks obtained: ".MARKS."<br>";

?>

</body>
</html>