<html>
 <head>
  <title>RKP Article Availability Request</title>
 </head>
 <body>

<form action="requestAvailabilityHtml.php">
<label for="articlenum">Pumpennummer</label><br> 
<input id="article" type="text" name="article" placeholder="article.."><br><br>
<input type="submit" value="Verfuegbarkeit pruefen"/>
</form>

<div>

<?php

require 'data.php';

if(!is_null($_GET["article"])){
	$article = htmlspecialchars($_GET["article"]);
	$servername = $rkps_db_server;
	$username = $rkps_db_username;
	$password = $rkps_db_password;
	$dbname = $rkps_db_name;

	try{

		// Create connection
		$conn = new mysqli($servername, $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
			$resp->status = 3;
			$resp->message = ("Connection failed: " . $conn->connect_error);
			$resp->avai = 0;
		}else{

			$sql = "SELECT avai FROM availability WHERE pumpid='" . $article . "'";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				$row = $result->fetch_assoc();
				$resp->status = 0;
				$resp->message = "Item found in DB";
				$resp->avai = $row["avai"];
			} else {
				$resp->status = 1;
				$resp->message = "Item not found in DB";
				$resp->avai = 0;
			}
			$conn->close();
		}

	}catch(Exception $exc){
		$resp->status = 2;
		$resp->message = "Exception " . $exc->getMessage();
		$resp->avai = 0;
	}

	if($resp->status == 0){
		echo "<p>Request for " . $article . " ok.</p>";
		if($resp->avai == 1){
			echo "<p>RKP with ID " . $article . " is availible.</p>";
		}else{
			echo "<p>RKP with ID " . $article . " is NOT availible.</p>";
		}
	}else{
		echo "<p>Error Occured At Request of " . $article . "</p>";
		echo "<p>" . $resp->message . "</p>";
	}

}

?>

</div>

 </body>
</html>



