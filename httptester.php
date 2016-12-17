<?php
namespace HttpTester;

use HttpTester;

class HttpSendProvider
{
  private $url;
  private $text;
  private $type;
  private $check;
  
  public function __construct($postData){  
    $this->check=true;

    if(!empty($postData["url"])){
      $this->url = htmlspecialchars($postData["url"]);
    }else{
      $this->url="";
      $this->check=false;
    }
    
    if(!empty($postData["text"])){
      $this->text = htmlspecialchars($postData["text"]);
    }else{
      $this->text="";
    }
    
    if(!empty($postData["type"])){
      $this->type = htmlspecialchars($postData["type"]);
    }else{
      $this->type="";
      $this->check=false;
    }
  }
  
  public function echoSendHttp(){
    if($this->check){
      $header = array(
          "Content-Type: application/x-www-form-urlencoded",
          "Content-Length: ".strlen($this->text)
      );
      $context = array(
          "http" => array(
              "method"  => $this->type,
              "header"  => implode("\r\n", $header),
              "content" => $this->text
          )
      );
      $responseData = @file_get_contents($this->url, false, stream_context_create($context));
      $responseData = htmlspecialchars($responseData);
    }else{
      $responseData = "";
    }

    $responseData = [
      "status"=>$this->check,
      "responseData"=>$responseData,
      "sendData"=>[
        "url"=>$this->url,
        "text"=>$this->text,
        "type"=>$this->type,
    ],
    ];

    echo json_encode($responseData);
  }
}