<!DOCTYPE html>
<html>
<head>
<title>PHP Concatenation Example</title>
</head>
<body>

<h2>PHP Concatenation Demonstration</h2>

<?php

echo "<h3>Basic String Concatenation</h3>";

$first="Hello";
$second="Viraj";

echo $first." ".$second."<br>";


echo "<h3>Concatenation with Variables</h3>";

$name="Viraj";
$city="Pune";

echo "Name: ".$name.", City: ".$city."<br>";


echo "<h3>Concatenation with Numbers</h3>";

$a=10;
$b=20;

echo "Sum is: ".($a+$b)."<br>";


echo "<h3>Concatenation Assignment Operator (.=)</h3>";

$message="Hello";
$message.=" Viraj";

echo $message."<br>";


echo "<h3>Concatenation vs Interpolation</h3>";

echo "Using concatenation: ".$name."<br>";
echo "Using interpolation: $name <br>";

?>

</body>
</html>