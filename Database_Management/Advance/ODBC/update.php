<?php
require "connect.php";

$name = "Shardul";
$new_age = 23;

$sql = "
UPDATE students
SET age = ?
WHERE name = ?
";

$stmt = odbc_prepare($conn, $sql);

$result = odbc_execute($stmt, [$new_age, $name]);

if ($result) {
    echo "Student updated successfully!";
} else {
    echo "Update failed: " . odbc_errormsg($conn);
}

odbc_close($conn);