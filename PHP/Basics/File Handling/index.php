<!DOCTYPE html>
<html>
<head>
    <title>PHP File Handling Example</title>
</head>
<body>

<h2>PHP File Handling Demonstration</h2>

<?php

$filename="sample.txt";

echo "<h3>Checking if file exists</h3>";
if(file_exists($filename)){
    echo "File exists<br>";
}else{
    echo "File not found<br>";
}

echo "<h3>Writing to file</h3>";
$file=fopen($filename,"w");
fwrite($file,"Hello Viraj\nWelcome to PHP File Handling");
fclose($file);
echo "Data written successfully<br>";

echo "<h3>Reading from file</h3>";
$file=fopen($filename,"r");
$content=fread($file,filesize($filename));
echo nl2br($content)."<br>";
fclose($file);

echo "<h3>Appending data to file</h3>";
$file=fopen($filename,"a");
fwrite($file,"\nThis line is appended later");
fclose($file);
echo "Data appended successfully<br>";

echo "<h3>Reading updated file content</h3>";
$file=fopen($filename,"r");
$content=fread($file,filesize($filename));
echo nl2br($content);
fclose($file);

?>

</body>
</html>