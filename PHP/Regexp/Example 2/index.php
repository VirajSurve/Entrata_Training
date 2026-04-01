<?php
session_start();

$states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

$genders = ["Male", "Female", "Other"];

$values = [
    "name" => "",
    "address" => "",
    "state" => "",
    "city" => "",
    "pincode" => "",
    "gender" => "",
    "mobile" => "",
    "email" => ""
];

$errors = [
    "name" => "",
    "address" => "",
    "state" => "",
    "city" => "",
    "pincode" => "",
    "gender" => "",
    "mobile" => "",
    "email" => ""
];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    foreach ($values as $field => $_) {
        $values[$field] = trim($_POST[$field] ?? "");
    }

    if ($values["name"] === "" || !preg_match('/^[A-Za-z\s]+$/', $values["name"])) {
        $errors["name"] = "Please enter a valid name.";
    }

    if ($values["address"] === "") {
        $errors["address"] = "Address cannot be empty.";
    }

    if ($values["city"] === "" || !preg_match('/^[A-Za-z\s]+$/', $values["city"])) {
        $errors["city"] = "Please enter a valid city.";
    }

    if ($values["pincode"] === "" || !preg_match('/^\d{6}$/', $values["pincode"])) {
        $errors["pincode"] = "Please enter a valid 6-digit pin code.";
    }

    if ($values["state"] === "" || !in_array($values["state"], $states, true)) {
        $errors["state"] = "Please select a state.";
    }

    if ($values["gender"] === "" || !in_array($values["gender"], $genders, true)) {
        $errors["gender"] = "Please select a gender.";
    }

    if ($values["mobile"] === "" || !preg_match('/^[6-9]\d{9}$/', $values["mobile"])) {
        $errors["mobile"] = "Enter a valid 10-digit mobile number.";
    }

    if ($values["email"] === "" || !preg_match('/^[A-Za-z0-9_.-]+@[A-Za-z0-9.-]+\.com$/', $values["email"])) {
        $errors["email"] = "Please check your email";
    }

    $hasErrors = false;
    foreach ($errors as $message) {
        if ($message !== "") {
            $hasErrors = true;
            break;
        }
    }

    if (!$hasErrors) {
        $parts = preg_split('/\s+/', $values["name"]);
        $_SESSION["studentName"] = $parts[0] ?? "Student";
        header("Location: success.php");
        exit;
    }
}

function h(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Information Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Student Information Form</h1>
        <form method="post" action="index.php" autocomplete="off" novalidate>
            <div class="form-group">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" value="<?= h($values['name']) ?>" placeholder="e.g., Viraj Surve" class="<?= $errors['name'] !== '' ? 'invalid' : '' ?>">
                <span class="error" id="nameError"><?= h($errors['name']) ?></span>
            </div>
            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" value="<?= h($values['address']) ?>" placeholder="e.g., Pict, Trimurti chowk, Pune" class="<?= $errors['address'] !== '' ? 'invalid' : '' ?>">
                <span class="error" id="addressError"><?= h($errors['address']) ?></span>
            </div>
            <div class="form-group">
                <label for="state">State:</label>
                <select id="state" name="state" class="<?= $errors['state'] !== '' ? 'invalid' : '' ?>">
                    <option value="">-- Select State --</option>
                    <?php foreach ($states as $state): ?>
                        <option value="<?= h($state) ?>" <?= $values['state'] === $state ? 'selected' : '' ?>><?= h($state) ?></option>
                    <?php endforeach; ?>
                </select>
                <span class="error" id="stateError"><?= h($errors['state']) ?></span>
            </div>
            <div class="form-group">
                <label for="city">City:</label>
                <input type="text" id="city" name="city" value="<?= h($values['city']) ?>" placeholder="e.g., Pune" class="<?= $errors['city'] !== '' ? 'invalid' : '' ?>">
                <span class="error" id="cityError"><?= h($errors['city']) ?></span>
            </div>
            <div class="form-group">
                <label for="pincode">Pin Code:</label>
                <input type="text" id="pincode" name="pincode" value="<?= h($values['pincode']) ?>" placeholder="Enter 6-digit pin code" class="<?= $errors['pincode'] !== '' ? 'invalid' : '' ?>">
                <span class="error" id="pincodeError"><?= h($errors['pincode']) ?></span>
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <select id="gender" name="gender" class="<?= $errors['gender'] !== '' ? 'invalid' : '' ?>">
                    <option value="">-- Select Gender --</option>
                    <?php foreach ($genders as $gender): ?>
                        <option value="<?= h($gender) ?>" <?= $values['gender'] === $gender ? 'selected' : '' ?>><?= h($gender) ?></option>
                    <?php endforeach; ?>
                </select>
                <span class="error" id="genderError"><?= h($errors['gender']) ?></span>
            </div>
            <div class="form-group">
                <label for="mobile">Mobile Number:</label>
                <input type="tel" id="mobile" name="mobile" value="<?= h($values['mobile']) ?>" placeholder="e.g., 9876543210" class="<?= $errors['mobile'] !== '' ? 'invalid' : '' ?>">
                <span class="error" id="mobileError"><?= h($errors['mobile']) ?></span>
            </div>
            <div class="form-group">
                <label for="email">Email ID:</label>
                <input type="email" id="email" name="email" value="<?= h($values['email']) ?>" placeholder="e.g., name@domain.com" class="<?= $errors['email'] !== '' ? 'invalid' : '' ?>">
                <span class="error" id="emailError"><?= h($errors['email']) ?></span>
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
        <div id="result"></div>
    </div>
</body>
</html>
