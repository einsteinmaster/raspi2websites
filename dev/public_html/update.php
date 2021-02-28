<?php
$user = $_COOKIE["name"];
$layout = $_GET["layout"];
$entry = $_GET["entry"];
$value = $_GET["value"];

require 'data.php';

try{

    // Create connection
    $conn = new mysqli($db_server, $db_user, $db_pw, $db_name);
    // Check connection
    if ($conn->connect_error) {
        $resp->status = 3;
        $resp->message = ("Connection failed: " . $conn->connect_error);
    }else{

        $sql =
            "update cache set mvalue=".$value." where muser='".$user."' layout='".$layout."' and entry='".$entry."';".
            "select layout,entry,mvalue from cache where muser='".$user."';";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()){
                $data[$row["layout"]][$row["entry"]] = $row["mvalue"];
            }



            $resp->status = 0;
            $resp->message = "Item found in DB";
        } else {
            $resp->status = 1;
            $resp->message = "Not enough Cache entrys";
        }
        $conn->close();
    }

}catch(Exception $exc){
    $resp->status = 2;
    $resp->message = "Exception " . $exc->getMessage();
}

echo json_encode($resp);