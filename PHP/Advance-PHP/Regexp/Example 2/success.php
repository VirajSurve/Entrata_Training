<?php
session_start();

if (isset($_GET["logout"])) {
    $_SESSION = [];
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), "", time() - 42000, $params["path"], $params["domain"], $params["secure"], $params["httponly"]);
    }
    session_destroy();
    header("Location: index.php");
    exit;
}

$name = $_SESSION['studentName'] ?? 'Student';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submission Successful</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <a href="success.php?logout=1" class="btn btn-logout">Logout</a>

    <div class="container">
        <div class="success-message">
            <h1>Congratulations, <?= htmlspecialchars($name, ENT_QUOTES, 'UTF-8') ?>!</h1>
            <p>Your form has been submitted successfully.</p>
        </div>
    </div>
</body>
</html>
