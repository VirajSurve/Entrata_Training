<!DOCTYPE html>
<html>
<head>
    <title>PHP Namespaces Example</title>
</head>
<body>

<?php

require "User.php";
require "Admin.php";

use App\User\Profile as UserProfile;
use App\Admin\Profile as AdminProfile;

echo "<h3>Using namespace classes</h3>";

$user=new UserProfile();
echo $user->show()."<br>";

$admin=new AdminProfile();
echo $admin->show()."<br>";

?>

</body>
</html>