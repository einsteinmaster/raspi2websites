<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Developer Login</title>
    <?php
    require 'data.php';
    $val_key_user = $_GET["key"];
    if ($val_key_user == $loginkey) {
        echo '<meta http-equiv="refresh" content="0; url=overview.php?key=ichbindeveloper">';
    }
    ?>
</head>
<body>


<div>
    <form action="login.php">

        <label for="psw"><b>Password</b></label>
        <input type="text" placeholder="Enter Password" name="key" required>

        <button type="submit">Login</button>
    </form>
</div>


<div>
    <p>
        <?php
        require 'data.php';
        if (!is_null($_GET["key"]) && $_GET["key"] != $loginkey) {
            echo "Password Incorrect!";
        }
        ?>
    </p>
</div>


</body>
</html>
