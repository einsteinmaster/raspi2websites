<?php
$val_key = $_GET["key"];
if ($val_key != "lay1") {
    die("permission denied");
}
require 'data.php';
$content = file_get_contents($layout_file);
echo $content;
