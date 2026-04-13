<?php
require_once "connect.php";

$sql = "
SELECT students.name, departments.dept_name
FROM students
LEFT JOIN departments
ON students.dept_id = departments.dept_id
";

$stmt = odbc_prepare($conn, $sql);

if (!odbc_execute($stmt)) {
    die("JOIN query failed: " . odbc_errormsg($conn));
}

echo "Students with Departments";

while ($row = odbc_fetch_array($stmt)) {
    echo PHP_EOL . $row['name'] . " - " . $row['dept_name'];
}

odbc_close($conn);
