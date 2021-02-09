<?php
$price = floatval($_GET["price"]);
$amount = floatval($_GET["amount"]);
$retobj->total = $amount * $price;
echo json_encode($retobj);
