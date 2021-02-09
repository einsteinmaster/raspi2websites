<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body style="background-color:black;">

<?php
require 'data.php';
if ($_GET["key"] != $loginkey) {
    die("permission denied");
}
?>

<p style="color:white">
    Du hast dich erfolgreich eingeloggt.
    Hier der Content:
</p>
<p style="color:white">
    Links zu anderen wichtigen Seiten<br>
    <a href="phpVersionInfo.php">phpVersion</a><br>
    <a href="../heysteimke/index.html">HeySteimke Seite</a><br>
    <a href="../rkpsearch/index.html">RKPSearch Seite</a><br>
    <a href="../steimkebioladen/index.html">SteimkeBioladen Seite</a><br>
    <a href="myreact_site.php">React Dynamic Site</a><br>
    <a href="react-tutorial/build/index.html">React Static Site</a><br>
    <a href="getTotal.php?amount=1&price=2">Get Total Test</a>
</p>
<p style="color:white">
    PHP User:
    <?php
    echo shell_exec("whoami");
    ?>
</p>
<p style="color:white">
    Website-Version: 5.0
</p>
</body>
</html>



