const sendHttpRequestUrl = "https://tomo.syo.tokyo/httptester/cgi/send_httprequest.php";
const getAppListUrl = "https://tomo.syo.tokyo/httptester/cgi/get_applist.php";

renderView();

function renderView(){
  var Page = pageView();
  React.render(<Page />, document.getElementById('react-httptester'));
}

function modalView(){
  var CreateAppButton = React.createClass({
    onClick(e) {
      var modalAreaInput = document.getElementById("modal-area-input");
      if(modalAreaInput.value == ""){
        alert("空です。");
      }else{
        alert(modalAreaInput.value);
      }
    },
    render: function(){
      return (
        <div onClick={this.onClick} id="modal-area-button">Create App</div>
      );
    }
  });

  var ModalArea = React.createClass({
    render: function(){
      return (
        <div id="modal-area">
          <div id="modal-area-title">New APP</div>
          <div id="modal-area-subtitle">アプリごとにリクエストを管理できます</div>
          <p id="modal-area-input-back"><input id="modal-area-input" placeholder="NewAPPName" /></p>
          <CreateAppButton />
        </div>
      );
    }
  });

  var ModalBack = React.createClass({
    onClick(e) {
      var modalBack = document.getElementById("modal-back");
      modalBack.style.display = "none";
      var modal = document.getElementById("modal");
      modal.style.display = "none";
    },
    render: function(){
      return (
        <div onClick={this.onClick} id="modal-back"></div>
      );
    }
  });

  var Modal = React.createClass({
    render: function() {
    return (
      <div>
        <ModalBack />
        <div id="modal">
          <ModalArea />
        </div>
      </div>
    );
    }
  });

  return Modal;
}

function headerView(){
  var NewAppButton = React.createClass({
    onClick(e) {
      var modalBack = document.getElementById("modal-back");
      modalBack.style.display = "block";
      var modal = document.getElementById("modal");
      modal.style.display = "block";
    },
    render: function(){
      return (
        <div onClick={this.onClick} className="header-newapp-button">New App</div>
      );
    }
  });

  var Header = React.createClass({
    render: function() {
    return (
      <header id="header">
        <h1 className="header-title">HTTPTESTER</h1>
        <NewAppButton />
      </header>
    );
    }
  });

  return Header;
}

function sideBarView(){
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

  return SideBar;
}

function contentView(){
  var SendPostButton = React.createClass({
    onClick(e) {
      sendHttpRequest("POST", sendHttpRequestUrl);
    },
    render: function(){
      return (
        <p><button onClick={this.onClick} className="contens-input-sendbutton">POST</button></p>
      );
    }
  });

  var SendGetButton = React.createClass({
    onClick(e) {
      sendHttpRequest("GET", sendHttpRequestUrl);
    },
    render: function(){
      return (
        <p><button onClick={this.onClick} className="contens-input-sendbutton contens-input-sendbutton-marginleft">GET</button></p>
      );
    }
  });

  var SaveRequestButton = React.createClass({
    onClick(e) {
      alert("save");
    },
    render: function(){
      return (
        <p><button onClick={this.onClick} className="contens-input-savebutton">SAVE</button></p>
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
              <p><input type="text" name="url" id="contens-input-text" placeholder="URL" /></p>
              <p><textarea type="text" name="text" id="contens-input-textarea" placeholder="name=tomo&age=23"></textarea></p>
              <div className="contens-input-area">
                <SendPostButton />
                <SendGetButton />
                <SaveRequestButton />
                <p><input type="text" placeholder="save RequestName" className="contens-input-saveinput" /></p>
                <div className="clear-fix"></div>
              </div>
            </div>
          </div>
          
          <div id="contens-logarea">
            <textarea type="text" name="text" id="contens-logarea-textarea"></textarea>
          </div>
        </div>
      </div>
    );
    }
  });

  return Content;
}

function sideBarRightView(){
  var SideBarRight = React.createClass({
    render: function() {
    return (
      <div id="sidebar-right">user&lsquo;s Log and image</div>
    );
    }
  });

  return SideBarRight;
}

function pageView(){
  var Header = headerView();
  var Modal = modalView();
  var SideBar = sideBarView();
  var SideBarRight = sideBarRightView();
  var Content = contentView();

  var Page = React.createClass({
    render: function() {
    return (
      <div id="page">
        <Modal />
        <Header />
        <SideBar />
        <Content />
        <SideBarRight />
      </div>
    );
    }
  });

  return Page;
}

function sendHttpRequest(type, serverUrl){
  var request = window.superagent;
  var url = document.getElementById("contens-input-text").value;
  var text = document.getElementById("contens-input-textarea").value;
  request
  .post(serverUrl)
  .type('form')
  .send({url: url, text: text, type: type})
  .end(function(err, res){
    console.log(res);
    var data = JSON.parse(res.text);
    if(data.status){
      var elements = document.getElementById("contens-logarea-textarea");
      if(data.responseData != ""){
        elements.innerHTML = data.responseData;
      }else{
        elements.innerHTML = "Empty data!";
      }
    }else{
      alert("requestError");
    }
  });
}
