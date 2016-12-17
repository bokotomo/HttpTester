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
<link rel='stylesheet' type='text/css' href='design.css?id=4'>
<script src="https://fb.me/react-0.13.3.js"></script>
<script src="https://fb.me/JSXTransformer-0.13.3.js"></script>
<script type="text/jsx">
  
  var Header = React.createClass({
    render: function() {
    return (
      <header id="header">
        <h1 className="header-title">HTTPTESTER</h1>
        <div className="header-newapp-button">New App</div>
      </header>
    );
    }
  });

  var SideBar = React.createClass({
    render: function() {
    return (
      <div id="sidebar">
        <div className="sidebar-tag sidebar-tag-on">Default</div>
        <div className="sidebar-tag-title">RequestList</div>
        <div className="sidebar-tag sidebar-tag-on">Empty</div>
        <div className="sidebar-tag sidebar-tag-off">test</div>
      </div>
    );
    }
  });

  var SideBarRight = React.createClass({
    render: function() {
    return (
      <div id="sidebar-right">user's Log and image</div>
    );
    }
  });

  var Content = React.createClass({
    render: function() {
    return (
      <div id="contens">
        <div className="contens-in">
          <div className="contens-sendarea-padding">
            <div className="contens-sendarea">
              <form action="./index.php" method="post">
                <p><input type="text" name="url" className="contens-input-text" placeholder="URL" required  /></p>
                <p><textarea type="text" name="text" className="contens-input-textarea" placeholder="name=tomo&age=23" required></textarea></p>
                <div className="contens-input-area">
                  <p><button className="contens-input-sendbutton">POST</button></p>
                  <p><button className="contens-input-sendbutton contens-input-sendbutton-marginleft">GET</button></p>
                  <p><button className="contens-input-savebutton">SAVE</button></p>
                  <p><input type="text" placeholder="save RequestName" className="contens-input-saveinput" /></p>
                  <div className="clear-fix"></div>
                </div>
              </form>
            </div>
          </div>
          
          <div className="contens-logarea">
            <textarea type="text" name="text" className="contens-logarea-textarea"><?php echo json_encode($_REQUEST);?></textarea>
          </div>
          
        </div>
      </div>
    );
    }
  });

  var Page = React.createClass({
    render: function() {
    return (
      <div id="page">
        <Header />
        <SideBar />
        <Content />
        <SideBarRight />
      </div>
    );
    }
  });  
  React.render(<Page />, document.getElementById('react-httptester'));

</script>
</head>
<body>
  <div id="react-httptester"></div>
</body>
</html>