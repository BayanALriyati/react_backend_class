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
$role= isset($_REQUEST['role'])?$_REQUEST['role']:"";
// $FullName = isset($_REQUEST['FullName'])?$_REQUEST['FullName']:"";
// $image = isset($_REQUEST['image'])?$_REQUEST['image']:"";
// $RegStatus= isset($_REQUEST['Re$RegStatus'])?$_REQUEST['Re$RegStatus']:"";
// $created_at = isset($_REQUEST['created_at'])?$_REQUEST['created_at']:"";

if($name!="" && $email!="" && $password!="" && $role!=""){
  $sql ="INSERT INTO users ( name,email,password, role) VALUES ('$name', '$email', '$password','$role');";
  $res = mysqli_query($con, $sql);
  if($res){
    echo "Success!";
  }
  else{
    echo "Error!";
  }
  $con->close();
}else{
  echo "data sent wrong";
}
  

;
?>