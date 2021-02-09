<?php
if($GLOBALS['config'] == null){
    $config = json_decode(file_get_contents("config.json"));
    $GLOBALS['config'] = $config;
}else{
    $config = $GLOBALS['config'];
}
$loginkey = $config->password;
$layout_file = $config->layout_files[0]->name;
$db_server = $config->database->server;
$db_user = $config->database->username;
$db_pw = $config->database->password;
$db_name = $config->database->db;
$rkps_db_server = $config->rkpsearch->database->server;
$rkps_db_user = $config->rkpsearch->database->username;
$rkps_db_pw = $config->rkpsearch->database->password;
$rkps_db_name = $config->rkpsearch->database->db;
