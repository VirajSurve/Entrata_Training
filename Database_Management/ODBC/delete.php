<?php

require "connect.php";

$name = "Shardul";

$sql = "
DELETE FROM students
WHERE name = ?
";

$stmt = odbc_prepare($conn, $sql);

$result = odbc_execute($stmt, [$name]);

if ($result) {
    echo "Student deleted successfully!";
} else {
    echo "Delete failed: " . odbc_errormsg($conn);
}

odbc_close($conn);
