<?php
header('Access-Control-Allow-Origin: *');
$check=true;
if(!empty($_POST["url"])){
  $url = htmlspecialchars($_POST["url"]);
}else{
  $url="";
  $check=false;
}

if(!empty($_POST["text"])){
  $text = htmlspecialchars($_POST["text"]);
}else{
  $text="";
}

if(!empty($_POST["type"])){
  $type = htmlspecialchars($_POST["type"]);
}else{
  $type="";
  $check=false;
}

$responseData="";
if($check){
  $header = array(
      "Content-Type: application/x-www-form-urlencoded",
      "Content-Length: ".strlen($text)
  );
  $context = array(
      "http" => array(
          "method"  => $type,
          "header"  => implode("\r\n", $header),
          "content" => $text
      )
  );
  $responseData = @file_get_contents($url, false, stream_context_create($context));
  $responseData = htmlspecialchars($responseData);
}


$responseData = [
  "status"=>$check,
  "responseData"=>$responseData,
  "sendData"=>[
    "url"=>$url,
    "text"=>$text,
    "type"=>$type,
  ],
];

echo json_encode($responseData);