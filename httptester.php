<?php
if(!empty($_POST["url"])){
  $url = htmlspecialchars($_POST["url"]);
}else{
  $url="";
}
if(!empty($_POST["text"])){
  $text = htmlspecialchars($_POST["text"]);
}else{
  $text="";
}
$responseData = [
  "data"=>"ok",
  "status"=>"true",
  "sendData"=>[
    "url"=>$url,
    "text"=>$text,
  ],
];
echo json_encode($responseData);