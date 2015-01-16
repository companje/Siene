<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/plain; charset=utf-8");


if (!isset($_POST["a"]) && !isset($_POST["b"]) && !isset($_POST["c"]) && !isset($_POST["foto"])) {  
  ?>
     _                 
    (_)                
 ___ _  ___ _ __   ___ 
/ __| |/ _ \ '_ \ / _ \
\__ \ |  __/ | | |  __/
|___/_|\___|_| |_|\___|
                       
<?php
  die();
}

$from_name = "Rick Companje";
$from_mail = "rick@companje.nl";
$replyto = "rick@companje.nl";
$subject = "Berichtje voor Siene";
$message = $_POST["a"] . "<br>" . $_POST["b"] . "<br>" . $_POST["c"] . "<br>";
$mailto = 'siene@companje.nl';

if (!isset($_POST["foto"])) {
  //no attachment
  $header  = 'MIME-Version: 1.0' . "\r\n";
  $header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $header .= "From: ".$from_name." <".$from_mail.">\r\n";
  $header .= "Reply-To: ".$replyto."\r\n";  
  mail($mailto, $subject, $message, $header);
} 
else {
  //with attachment
  $image = explode(",",$_POST["foto"]);
  $type = $image[0];
  $type = explode("/",$type)[1];
  $type = explode(";",$type)[0];
  $image = $image[1];
  $output_hex_string_img = $image;
  $output_bin_string_img = base64_decode($output_hex_string_img);
  //echo base64_encode( $output_bin_string_img );
  $XXX = base64_encode( $output_bin_string_img );
  $file = $XXX;
  $filename = "foto.".$type;
  $uid = md5(uniqid(time()));
  $name = basename($file);
  $header = "From: ".$from_name." <".$from_mail.">\r\n";
  $header .= "Reply-To: ".$replyto."\r\n";
  $header .= "MIME-Version: 1.0\r\n";
  $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
  $header .= "This is a multi-part message in MIME format.\r\n";
  $header .= "--".$uid."\r\n";
  $header .= "Content-type:text/html; charset=iso-8859-1\r\n";
  $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
  $header .= $message."\r\n\r\n";
  $header .= "--".$uid."\r\n";
  $header .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n"; // use different content types here
  $header .= "Content-Transfer-Encoding: base64\r\n";
  $header .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
  $header .= $file."\r\n\r\n";
  $header .= "--".$uid."--";
  mail($mailto, $subject, "", $header);
}

?>