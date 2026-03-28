<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        // String Funtions
        echo strlen("Viraj");
        echo "<br>";
        echo strtoupper("viraj");
        echo "<br>";
        echo strtolower("VIRAJ");
        echo "<br>";
        echo str_replace("World", "Viraj", "Hello World");
        echo "<br>";

        //Number Functions
        echo abs(-10);
        echo "<br>";
        echo round(5.7);
        echo "<br>";
        echo max(10, 20, 30);
        echo "<br>";
        echo min(10, 20, 30);
        echo "<br>";

        //Array Functions
        $colors = ["Red", "Blue", "Green"];
        echo count($colors);
        echo "<br>";

        $numbers = [3, 1, 5];
        sort($numbers);
        print_r($numbers);
        echo "<br>";

        $colors = ["Red", "Blue"];
        array_push($colors, "Green");
        print_r($colors);
        echo "<br>";

        //Date and Time
        echo date("Y-m-d");
        echo "<br>";
        echo time();
        echo "<br>";

        // Others
        $name = "Viraj";
        if (isset($name)) {
            echo "Variable exists";
        }

        echo "<br>";

        $name = "";
        if (empty($name)) {
            echo "Variable is empty";
        }

        echo "<br>";

        $colors = ["Red", "Blue"];
        print_r($colors);

        echo "<br>";

        $name = "Viraj";
        var_dump($name);
    ?>
</body>
</html>