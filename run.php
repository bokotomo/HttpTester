<?php
header('Access-Control-Allow-Origin: *');
require_once(__DIR__."/httptester.php");

use HttpTester\HttpSendProvider;

$httpSendProvider = new HttpSendProvider($_POST);
$responseData = $httpSendProvider->echoSendHttp();