<?php
class totalRet{
	public $total = 0.0;
}
$price = floatval($_GET["price"]);
$amount = floatval($_GET["amount"]);
$retobj = new totalRet;
$retobj->total = $amount * $price;
echo json_encode($retobj);
