<!DOCTYPE html>
<html>
<head>
    <title>PHP Control Structures Example</title>
</head>
<body>

<h2>PHP Control Structures</h2>

<?php

echo "<h3>if statement</h3>";

$age=20;

if($age>=18){
    echo "You can vote<br>";
}


echo "<h3>if else statement</h3>";

$marks=35;

if($marks>=40){
    echo "Pass<br>";
}else{
    echo "Fail<br>";
}


echo "<h3>if elseif else statement</h3>";

$marks=75;

if($marks>=90){
    echo "Grade A<br>";
}elseif($marks>=60){
    echo "Grade B<br>";
}else{
    echo "Grade C<br>";
}


echo "<h3>switch statement</h3>";

$day="Monday";

switch($day){
    case "Monday":
        echo "Start of week<br>";
        break;

    case "Friday":
        echo "Weekend coming<br>";
        break;

    default:
        echo "Normal day<br>";
}


echo "<h3>for loop</h3>";

for($i=1;$i<=5;$i++){
    echo "Number: ".$i."<br>";
}


echo "<h3>while loop</h3>";

$j=1;

while($j<=3){
    echo "Count: ".$j."<br>";
    $j++;
}


echo "<h3>foreach loop</h3>";

$colors=["white","orange","green"];

foreach($colors as $color){
    echo $color."<br>";
}

?>

</body>
</html>