<?php

$nl = PHP_SAPI === 'cli' ? PHP_EOL : '<br>';

$string = "Hello Viraj";

// preg_match
if (preg_match("/Viraj/", $string)) {
    echo "Viraj exists inside the string \"$string\"" . $nl;
}

$text = "cat bat mat";

// preg_match_all
preg_match_all("/at/", $text, $matches);

print_r($matches);
echo $nl;

// preg_replace
$result = preg_replace("/Viraj/", "World", $string);

echo $result . $nl;

$text = "apple,banana,mango";

// preg_split
$result = preg_split("/,/", $text);

print_r($result);
echo $nl;

echo $nl;
echo "Regex character class examples" . $nl;

// [abc] Character set
$text = "cat cab";
preg_match_all('/[abc]/', $text, $matches);
echo "[abc]: ";
print_r($matches);
echo $nl;

// [^abc] Negated character set
$text = "dog";
preg_match_all('/[^abc]/', $text, $matches);
echo "[^abc]: ";
print_r($matches);
echo $nl;

// [a-z] Range
$text = "Zebra";
preg_match_all('/[a-z]/', $text, $matches);
echo "[a-z]: ";
print_r($matches);
echo $nl;

// . Any character
$text = "Hi";
preg_match_all('/./', $text, $matches);
echo ".: ";
print_r($matches);
echo $nl;

// \d Digit
$text = "Room 7, floor 2";
preg_match_all('/\d/', $text, $matches);
echo "\\d: ";
print_r($matches);
echo $nl;

// \D Non-digit
$text = "123A";
preg_match_all('/\D/', $text, $matches);
echo "\\D: ";
print_r($matches);
echo $nl;

// \w Word character
$text = "***code";
preg_match_all('/\w/', $text, $matches);
echo "\\w: ";
print_r($matches);
echo $nl;

// \W Non-word character
$text = "code!";
preg_match_all('/\W/', $text, $matches);
echo "\\W: ";
print_r($matches);
echo $nl;

// \s Whitespace
$text = "a b c";
preg_match_all('/\s/', $text, $matches);
echo "\\s: ";
print_r($matches);
echo $nl;

// \S Non-whitespace
$text = " a";
preg_match_all('/\S/', $text, $matches);
echo "\\S: ";
print_r($matches);
echo $nl;

echo $nl;
echo "Regex quantifier examples" . $nl;

// * Zero or more
$text = "ac abc abbc";
preg_match_all('/ab*c/', $text, $matches);
echo "*: ";
print_r($matches);
echo $nl;

// + One or more
$text = "ac abc abbc";
preg_match_all('/ab+c/', $text, $matches);
echo "+: ";
print_r($matches);
echo $nl;

// ? Zero or one
$text = "color colour";
preg_match_all('/colou?r/', $text, $matches);
echo "?: ";
print_r($matches);
echo $nl;

// {n} Exactly n
$text = "aa aaa aaaa";
preg_match_all('/a{3}/', $text, $matches);
echo "{n}: ";
print_r($matches);
echo $nl;

// {n,} At least n
$text = "aa aaa aaaa";
preg_match_all('/a{3,}/', $text, $matches);
echo "{n,}: ";
print_r($matches);
echo $nl;

// {n,m} Between n and m
$text = "a aa aaa aaaa aaaaa";
preg_match_all('/a{2,4}/', $text, $matches);
echo "{n,m}: ";
print_r($matches);
echo $nl;