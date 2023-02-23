<?php
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json;");
 header("Access-Control-Allow-Methods: post");
 header("Content-Type: application/json; charset=UTF-8");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

 
// define("DB_SERVER", "localhost");
// define("DB_USER", "root");
// define("DB_PASSWORD", "");
// define("DB_DATABASE", "gifts");

// // // Creating database connection
// $con = mysqli_connect(DB_SERVER , DB_USER, DB_PASSWORD, DB_DATABASE);
 $hostName = "localhost";
 $userName = "root";
 $password = "";
 $dbName = "reactapi";

 $con= new mysqli($hostName,$userName,$password,$dbName);
 
 if($con){
    // echo "connected";
 }else{
    echo "not connected";
 }

  ?>