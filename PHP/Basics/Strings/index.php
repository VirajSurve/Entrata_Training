<!DOCTYPE html>
<html>
<head>
    <title>PHP Strings Example</title>
</head>
<body>

<?php

echo "<h3>1. Single vs Double Quotes</h3>";

$name="Viraj";

echo 'Single quotes: $name <br>';
echo "Double quotes: $name <br>";


echo "<h3>2. String Concatenation</h3>";

$first="Hello";
$last="World";

echo $first." ".$last."<br>";


echo "<h3>3. String Interpolation</h3>";

echo "Hello $name <br>";
echo "Hello {$name} <br>";


echo "<h3>4. String Length</h3>";

$text="Hello Viraj";

echo strlen($text) . "<br>";


echo "<h3>5. Word Count</h3>";

echo str_word_count($text) . "<br>";


echo "<h3>6. Uppercase and Lowercase</h3>";

echo strtoupper($text) . "<br>";
echo strtolower($text) . "<br>";


echo "<h3>7. Replace Text</h3>";

echo str_replace("Viraj", "User", $text) . "<br>";


echo "<h3>8. Escape Characters</h3>";

echo "He said \"Hello\" <br>";
echo 'It\'s a PHP string example <br>';


echo "<h3>9. Multiline String (Heredoc)</h3>";

$multi=<<<TEXT
Hello $name
Welcome to PHP Strings Example
TEXT;

echo nl2br($multi);

?>

</body>
</html>