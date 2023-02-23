<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json;");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	
include 'conn.php';

		if(isset($_REQUEST['id'])){
             $id = $_REQUEST['id'];
            $sql = "DELETE FROM `users` WHERE id='$id'";
            $res = mysqli_query($con, $sql);
         if($res){
                echo "Success!";
            }
            else{
                echo "Error!";
            }
            $conn->close();
         }else{
            echo "data sent wrong";
        }


?>