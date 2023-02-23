


<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json;");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	
include 'conn.php';
$name = isset($_REQUEST['name'])?$_REQUEST['name']:"";
		$email = isset($_REQUEST['email'])?$_REQUEST['email']:"";
		$password = isset($_REQUEST['password'])?$_REQUEST['password']:"";
        $role = isset($_REQUEST['role'])?$_REQUEST['role']:"";
		$id = isset($_REQUEST['id'])?$_REQUEST['id']:"";

        if($name!=""&&$email!=""&& $password!="" && $role!=""){
            $sql = "UPDATE users SET name='$name', email='$email' ,password='$password', role='$role' WHERE id='$id';";
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


// mysqli_query($conn,$sql);
?>