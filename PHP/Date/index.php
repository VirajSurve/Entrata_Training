<!DOCTYPE html>
<html>
<head>
    <title>PHP Dates Example</title>
</head>
<body>

<h2>PHP Dates Demonstration</h2>

<?php

echo "<h3>Current date</h3>";
echo date("Y-m-d")."<br>";

echo "<h3>Current time</h3>";
echo date("h:i:s A")."<br>";

echo "<h3>Full formatted date</h3>";
echo date("l d-m-Y")."<br>";

echo "<h3>Current timestamp</h3>";
echo time()."<br>";

echo "<h3>Convert string to date</h3>";
$date=strtotime("2026-04-01");
echo date("d-m-Y",$date)."<br>";

echo "<h3>Tomorrow's date</h3>";
$tomorrow=strtotime("+1 day");
echo date("Y-m-d",$tomorrow)."<br>";

echo "<h3>Next week date</h3>";
$nextweek=strtotime("+1 week");
echo date("Y-m-d",$nextweek)."<br>";

echo "<h3>Previous month date</h3>";
$lastmonth=strtotime("-1 month");
echo date("Y-m-d",$lastmonth)."<br>";

?>

</body>
</html>