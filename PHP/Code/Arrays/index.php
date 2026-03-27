<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!-- Indexed Arrays -->
    <h1>Recommended books</h1>
    <?php
        $books=[
            "Book 1",
            "Book 2",
            "Book 3"
        ];
    ?>

    <ul>
        <?php
            foreach($books as $book){
                echo "<li>$book</li>";
            }
        ?>
    </ul>

    <?= $books[1] ?>

    <!-- Associative -->

    <p>
       <?php
            $student = [
                "name" => "Viraj",
                "age" => 21,
                "city" => "Pune"
            ];

            foreach($student as $detail){
                echo "$detail<br>";
            }

            echo $student["name"];
        ?> 
    </p>

    <!-- Multidiamentional -->
    <p>
        <?php
            $students = [
                ["name"=>"Viraj","age"=>21,"city"=>"Pune"],
                ["name"=>"Rahul","age"=>22,"city"=>"Mumbai"],
                ["name"=>"Amit","age"=>20,"city"=>"Delhi"]
            ];

            foreach ($students as $student) {
                echo "<li>{$student['name']} - {$student['city']}</li>";
            }
        ?>
    </p>
    
</body>
</html>