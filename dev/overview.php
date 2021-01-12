<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<?php
require 'data.php';
if($_GET["key"] != $loginkey){
    die("permission denied");
}
?>

<div>
    <a href="phpVersionInfo.php">phpVersion</a>
</div>


<p>
    <?php

    echo shell_exec("whoami");

    ?>
</p>

<p>
    Version5
</p>


</body>
</html>



