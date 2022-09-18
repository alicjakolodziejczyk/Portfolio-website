<?php
if(isset($_POST['name'], $_POST['email'], $_POST['message'])){
  print_r($_POST);
}

$to = "alicja.kolodziejczyk.01@gmail.com";
$body = "";

$keys = array_keys($_POST);
$body .= "From: ".keys[0]. "\r\n";
$body .= "Email: ".keys[1]. "\r\n";
$body .= "Message: ".keys[2]. "\r\n";

mail($to,$body);
