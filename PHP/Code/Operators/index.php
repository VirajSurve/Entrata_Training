<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

        echo "<h2>Arithmetic Operators</h2>";

        $a = 10;
        $b = 5;

        echo "Addition: " . ($a + $b) . "<br>";
        echo "Subtraction: " . ($a - $b) . "<br>";
        echo "Multiplication: " . ($a * $b) . "<br>";
        echo "Division: " . ($a / $b) . "<br>";
        echo "Modulus: " . ($a % $b) . "<br>";



        echo "<h2>Assignment Operators</h2>";

        $x = 10;

        $x += 5;
        echo "x += 5 => $x <br>";

        $x -= 3;
        echo "x -= 3 => $x <br>";

        $x *= 2;
        echo "x *= 2 => $x <br>";

        $x /= 4;
        echo "x /= 4 => $x <br>";



        echo "<h2>Comparison Operators</h2>";

        $p = 10;
        $q = "10";

        var_dump($p == $q);
        echo "<br>";

        var_dump($p === $q);
        echo "<br>";

        var_dump($p != $q);
        echo "<br>";

        var_dump($p > 5);
        echo "<br>";

        var_dump($p < 5);
        echo "<br>";

        var_dump($p >= 10);
        echo "<br>";

        var_dump($p <= 10);
        echo "<br>";



        echo "<h2>Logical Operators</h2>";

        $age = 20;
        $isStudent = true;

        if ($age >= 18 && $isStudent == true) {
            echo "Eligible using AND operator<br>";
        }

        if ($age >= 18 || $isStudent == false) {
            echo "Eligible using OR operator<br>";
        }

        if (!$isStudent == false) {
            echo "Using NOT operator<br>";
        }



        echo "<h2>String Operators</h2>";

        $name = "Viraj";
        $city = "Pune";

        echo "Hello " . $name . " from " . $city . "<br>";



        echo "<h2>Increment / Decrement Operators</h2>";

        $num = 5;

        $num++;
        echo "After increment: $num <br>";

        $num--;
        echo "After decrement: $num <br>";

    ?>
</body>
</html>