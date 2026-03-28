<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        // string
        $name="Viraj";
        echo $name;
    ?>
    <?php
        // age
        $age=21;
        echo $age;
    ?>
    <?php
        // bool
        $isMarried=false;
    ?>
    <?php
        // float
        $marks=85.9;
        echo $marks;
    ?>
    <?php
        //array
        $colors=["white","orange","yellow"];
        foreach($colors as $color){
            echo $color;
        }
    ?>
    <?php
        // var_dump
        $name="Viraj";
        var_dump($name);
    ?>
</body>
</html>