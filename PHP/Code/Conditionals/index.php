<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>
        <?php
            $age = 20;

            if ($age >= 18) {
                echo "You can vote";
            }
        ?>
    </p>
    <p>
        <?php
            $marks = 35;

            if ($marks >= 40) {
                echo "Pass";
            } else {
                echo "Fail";
            }
        ?>
    </p>
    <p>
        <?php
            $marks = 75;

            if ($marks >= 90) {
                echo "Grade A";
            }
            elseif ($marks >= 60) {
                echo "Grade B";
            }
            else {
                echo "Grade C";
            }
        ?>
    </p>
    <p>
        <?php
            $day = "Monday";

            switch ($day) {
                case "Monday":
                    echo "Start of week";
                    break;

                case "Friday":
                    echo "Weekend coming";
                    break;

                default:
                    echo "Normal day";
            }
        ?>
    </p>
</body>
</html>