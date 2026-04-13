<!DOCTYPE html>
<html>
<head>
<title>PHP Output Formatting Example</title>
</head>
<body>

<h2>PHP Basic Output Formatting</h2>

<?php

echo "<h3>Using echo</h3>";
echo "Hello Viraj<br>";
echo "Welcome to PHP formatting<br>";


echo "<h3>Using print</h3>";
print "This line is printed using print<br>";


echo "<h3>Formatting with HTML tags</h3>";
echo "<b>This text is bold</b><br>";
echo "<i>This text is italic</i><br>";


echo "<h3>Displaying variables</h3>";
$name="Viraj";
$city="Pune";

echo "Name: ".$name."<br>";
echo "City: ".$city."<br>";


echo "<h3>New line formatting using nl2br()</h3>";
$text="PHP is simple\nPHP is powerful\nPHP is widely used";

echo nl2br($text);


echo "<h3>Formatted output using printf()</h3>";
$marks=85.75;

printf("Marks obtained: %.2f",$marks);

?>

</body>
</html>