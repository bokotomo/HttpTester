<?php
header('Access-Control-Allow-Origin: *');
require_once(__DIR__."/httptester.php");

$httpSendProvider = new HttpTester\HttpSendProvider($_POST);
$responseData = $httpSendProvider->echoSendHttp();