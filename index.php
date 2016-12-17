<?php
  if(!empty($_POST["url"])){
    $url = htmlspecialchars($_POST["url"]);
  }
  if(!empty($_POST["text"])){
    $text = htmlspecialchars($_POST["text"]);
  }
  
?><!DOCTYPE html>
<html lang="ja"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>HttpTester</title>
<meta name="viewport" content="width=device-width">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">
<link href="" rel="shortcut icon" type="image/x-icon">
<link rel='stylesheet' type='text/css' href='design.css?id=3'>
<script src="https://unpkg.com/react@15/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
<script type="text/jsx">

</script>
</head>
<body>
<div id="page">
  <header id="header">
    <h1 class="header-title">HTTPTESTER</h1>
    <div class="header-newapp-button">New App</div>
  </header>
  
  <div>
    <div id="sidebar">
      <div class="sidebar-tag sidebar-tag-on">Default</div>
      <div class="sidebar-tag-title">RequestList</div>
      <div class="sidebar-tag sidebar-tag-on">Empty</div>
      <div class="sidebar-tag sidebar-tag-off">test</div>
    </div>

    <div id="contens">
      <div class="contens-in">
        <div class="contens-sendarea-padding">
          <div class="contens-sendarea">
            <form action="./index.php" method="post">
              <p><input type="text" name="url" class="contens-input-text" placeholder="URL" required></p>
              <p><textarea type="text" name="text" class="contens-input-textarea" placeholder="name=tomo&age=23" required></textarea></p>
              <div class="contens-input-area">
                <p><button class="contens-input-sendbutton">POST</button></p>
                <p><button class="contens-input-sendbutton contens-input-sendbutton-marginleft">GET</button></p>
                <p><button class="contens-input-savebutton">SAVE</button></p>
                <p><input type="text" placeholder="save RequestName" class="contens-input-saveinput"></p>
                <div class="clear-fix"></div>
              </div>
            </form>
          </div>
        </div>
        
        <div class="contens-logarea">
          <textarea type="text" name="text" class="contens-logarea-textarea"><?php echo json_encode($_REQUEST);?></textarea>
        </div>
        
      </div>
    </div>
  </div>

<div>
  
</div>

</div>
</body>
</html>