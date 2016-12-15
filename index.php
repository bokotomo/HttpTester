<?php
  
?><!DOCTYPE html>
<html lang="ja"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Title</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta name="viewport" content="width=device-width">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">
<link href="" rel="shortcut icon" type="image/x-icon">
<link rel='stylesheet' type='text/css' href='design.css'>
<link rel="stylesheet" href="font/font-awesome/css/font-awesome.min.css"/><script src="js/jquery-2.0.2.min.js" type="text/javascript"></script>
<script type="text/javascript">
//jQuery
$(document).ready(function(){

});
</script>
</head>
<body>
<div id="page">
  <header style="height:50px;line-height:50px;border-bottom: 1px solid #E8E8E8;position: relative;">
    <h1 style="position: absolute;width:100%;color: #5C9EE9;font-size:20px;text-align: center;">HTTPTESTER</h1>
    <div style="position: absolute;right:10px; background: #7CBDF1;font-size: 14px;color:#fff;border-radius: 20px;text-align: center;width:90px;height:30px;line-height:30px;margin-top: 10px;cursor: pointer;">New App</div>
  </header>
  <div>
    <div style="position: absolute;background: #73A5D2;width:165px;height:800px;z-index: 3;"></div>
    <div style="position: absolute;background: #F1F4F5;width: 100%;height:800px;z-index: 2;">
      <div style="padding:10px 10px 10px 175px;">
        <div style="background: #fff;padding:10px;">
          <form action="./http.php" method="post">
            <p><input type="text" name="name" style="border:1px solid #DEE3E5;height:35px;line-height:35px;font-size:16px;width: 100%;box-sizing: border-box;padding:0px 8px;" placeholder="URL"></p>
            <p><textarea type="text" name="text" style="border:1px solid #DEE3E5;height:125px;font-size:16px;width: 100%;box-sizing: border-box;padding:8px 8px;margin-top: 10px;" placeholder="name=tomo&age=23"></textarea></p>
            <div style="padding-top: 3px;">
              <p><input type="submit" value="POST" style="background:none;width:70px;border:1px solid #DEE3E5;border-radius: 50px;text-align: center;height:30px;line-height:23px;font-size:14px;color: #707070;float:left;cursor: pointer;"></p>
              <p><input type="submit" value="GET" style="background:none;width:70px;border:1px solid #DEE3E5;border-radius: 50px;text-align: center;height:30px;line-height:23px;font-size:14px;color: #707070;float:left;margin-left: 10px;cursor: pointer;"></p>
              <div class="clear-fix"></div>
            </div>
          </form>
        </div>
        
        <div style="background: #fff;margin-top: 10px;">
            <p><input type="text" name="name" style="padding:0px 10px;border:none;height:45px;line-height:45px;font-size:16px;width: 100%;box-sizing: border-box;color: #D8D8D8;" placeholder="Time(sec)"></p>
            <p style="border-top: 1px solid #f1f1f1;"><textarea type="text" name="text" style="border:none;height:125px;font-size:16px;width: 100%;box-sizing: border-box;padding:10px 10px;" placeholder="name=tomo&age=23"></textarea></p>
        </div>
      </div>
    </div>
  </div>

<div>
  
</div>

</div>
</body>
</html>