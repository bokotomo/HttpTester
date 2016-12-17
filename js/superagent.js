!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.superagent=t()}}(function(){return function t(e,r,i){function s(o,a){if(!r[o]){if(!e[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(n)return n(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var p=r[o]={exports:{}};e[o][0].call(p.exports,function(t){var r=e[o][1][t];return s(r?r:t)},p,p.exports,t,e,r,i)}return r[o].exports}for(var n="function"==typeof require&&require,o=0;o<i.length;o++)s(i[o]);return s}({1:[function(t,e,r){function i(t){var e=s(t)?Object.prototype.toString.call(t):"";return"[object Function]"===e}var s=t("./is-object");e.exports=i},{"./is-object":2}],2:[function(t,e,r){function i(t){return null!==t&&"object"==typeof t}e.exports=i},{}],3:[function(t,e,r){function i(){}function s(t){if(!y(t))return t;var e=[];for(var r in t)n(e,r,t[r]);return e.join("&")}function n(t,e,r){if(null!=r)if(Array.isArray(r))r.forEach(function(r){n(t,e,r)});else if(y(r))for(var i in r)n(t,e+"["+i+"]",r[i]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));else null===r&&t.push(encodeURIComponent(e))}function o(t){for(var e,r,i={},s=t.split("&"),n=0,o=s.length;n<o;++n)e=s[n],r=e.indexOf("="),r==-1?i[decodeURIComponent(e)]="":i[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return i}function a(t){var e,r,i,s,n=t.split(/\r?\n/),o={};n.pop();for(var a=0,u=n.length;a<u;++a)r=n[a],e=r.indexOf(":"),i=r.slice(0,e).toLowerCase(),s=v(r.slice(e+1)),o[i]=s;return o}function u(t){return/[\/+]json\b/.test(t)}function h(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var r=this.xhr.status;1223===r&&(r=204),this._setStatusProperties(r),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&t._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function p(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new h(r)}catch(i){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=i,r.xhr?(t.rawResponse="undefined"==typeof r.xhr.responseType?r.xhr.responseText:r.xhr.response,t.status=r.xhr.status?r.xhr.status:null,t.statusCode=t.status):(t.rawResponse=null,t.status=null),r.callback(t)}r.emit("response",e);var s;try{r._isResponseOK(e)||(s=new Error(e.statusText||"Unsuccessful HTTP response"),s.original=t,s.response=e,s.status=e.status)}catch(i){s=i}s?r.callback(s,e):r.callback(null,e)})}function c(t,e){var r=b("DELETE",t);return e&&r.end(e),r}var l;"undefined"!=typeof window?l=window:"undefined"!=typeof self?l=self:(console.warn("Using browser-only version of superagent in non-browser environment"),l=this);var f=t("emitter"),d=t("./request-base"),y=t("./is-object"),m=t("./is-function"),_=t("./response-base"),b=r=e.exports=function(t,e){return"function"==typeof e?new r.Request("GET",t).end(e):1==arguments.length?new r.Request("GET",t):new r.Request(t,e)};r.Request=p,b.getXHR=function(){if(!(!l.XMLHttpRequest||l.location&&"file:"==l.location.protocol&&l.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only verison of superagent could not find XHR")};var v="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};b.serializeObject=s,b.parseString=o,b.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},b.serialize={"application/x-www-form-urlencoded":s,"application/json":JSON.stringify},b.parse={"application/x-www-form-urlencoded":o,"application/json":JSON.parse},_(h.prototype),h.prototype._parseBody=function(t){var e=b.parse[this.type];return this.req._parser?this.req._parser(this,t):(!e&&u(this.type)&&(e=b.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null)},h.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,i="cannot "+e+" "+r+" ("+this.status+")",s=new Error(i);return s.status=this.status,s.method=e,s.url=r,s},b.Response=h,f(p.prototype),d(p.prototype),p.prototype.type=function(t){return this.set("Content-Type",b.types[t]||t),this},p.prototype.accept=function(t){return this.set("Accept",b.types[t]||t),this},p.prototype.auth=function(t,e,r){switch(r||(r={type:"function"==typeof btoa?"basic":"auto"}),r.type){case"basic":this.set("Authorization","Basic "+btoa(t+":"+e));break;case"auto":this.username=t,this.password=e}return this},p.prototype.query=function(t){return"string"!=typeof t&&(t=s(t)),t&&this._query.push(t),this},p.prototype.attach=function(t,e,r){if(this._data)throw Error("superagent can't mix .send() and .attach()");return this._getFormData().append(t,e,r||e.name),this},p.prototype._getFormData=function(){return this._formData||(this._formData=new l.FormData),this._formData},p.prototype.callback=function(t,e){var r=this._callback;this.clearTimeout(),t&&this.emit("error",t),r(t,e)},p.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},p.prototype.buffer=p.prototype.ca=p.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},p.prototype.pipe=p.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},p.prototype._appendQueryString=function(){var t=this._query.join("&");if(t&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+t),this._sort){var e=this.url.indexOf("?");if(e>=0){var r=this.url.substring(e+1).split("&");m(this._sort)?r.sort(this._sort):r.sort(),this.url=this.url.substring(0,e)+"?"+r.join("&")}}},p.prototype._isHost=function(t){return t&&"object"==typeof t&&!Array.isArray(t)&&"[object Object]"!==Object.prototype.toString.call(t)},p.prototype.end=function(t){var e=this,r=this.xhr=b.getXHR(),s=this._formData||this._data;this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=t||i,r.onreadystatechange=function(){var t=r.readyState;if(t>=2&&e._responseTimeoutTimer&&clearTimeout(e._responseTimeoutTimer),4==t){var i;try{i=r.status}catch(s){i=0}if(!i){if(e.timedout||e._aborted)return;return e.crossDomainError()}e.emit("end")}};var n=function(t,r){r.total>0&&(r.percent=r.loaded/r.total*100),r.direction=t,e.emit("progress",r)};if(this.hasListeners("progress"))try{r.onprogress=n.bind(null,"download"),r.upload&&(r.upload.onprogress=n.bind(null,"upload"))}catch(o){}if(this._appendQueryString(),this._setTimeouts(),this.username&&this.password?r.open(this.method,this.url,!0,this.username,this.password):r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof s&&!this._isHost(s)){var a=this._header["content-type"],h=this._serializer||b.serialize[a?a.split(";")[0]:""];!h&&u(a)&&(h=b.serialize["application/json"]),h&&(s=h(s))}for(var p in this.header)null!=this.header[p]&&r.setRequestHeader(p,this.header[p]);return this._responseType&&(r.responseType=this._responseType),this.emit("request",this),r.send("undefined"!=typeof s?s:null),this},b.get=function(t,e,r){var i=b("GET",t);return"function"==typeof e&&(r=e,e=null),e&&i.query(e),r&&i.end(r),i},b.head=function(t,e,r){var i=b("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},b.options=function(t,e,r){var i=b("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},b.del=c,b["delete"]=c,b.patch=function(t,e,r){var i=b("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},b.post=function(t,e,r){var i=b("POST",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},b.put=function(t,e,r){var i=b("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i}},{"./is-function":1,"./is-object":2,"./request-base":4,"./response-base":5,emitter:7}],4:[function(t,e,r){function i(t){if(t)return s(t)}function s(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}var n=t("./is-object");e.exports=i,i.prototype.clearTimeout=function(){return this._timeout=0,this._responseTimeout=0,clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),this},i.prototype.parse=function(t){return this._parser=t,this},i.prototype.responseType=function(t){return this._responseType=t,this},i.prototype.serialize=function(t){return this._serializer=t,this},i.prototype.timeout=function(t){return t&&"object"==typeof t?("undefined"!=typeof t.deadline&&(this._timeout=t.deadline),"undefined"!=typeof t.response&&(this._responseTimeout=t.response),this):(this._timeout=t,this._responseTimeout=0,this)},i.prototype.then=function(t,e){if(!this._fullfilledPromise){var r=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(t,e){r.end(function(r,i){r?e(r):t(i)})})}return this._fullfilledPromise.then(t,e)},i.prototype["catch"]=function(t){return this.then(void 0,t)},i.prototype.use=function(t){return t(this),this},i.prototype.ok=function(t){if("function"!=typeof t)throw Error("Callback required");return this._okCallback=t,this},i.prototype._isResponseOK=function(t){return!!t&&(this._okCallback?this._okCallback(t):t.status>=200&&t.status<300)},i.prototype.get=function(t){return this._header[t.toLowerCase()]},i.prototype.getHeader=i.prototype.get,i.prototype.set=function(t,e){if(n(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},i.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},i.prototype.field=function(t,e){if(null===t||void 0===t)throw new Error(".field(name, val) name can not be empty");if(n(t)){for(var r in t)this.field(r,t[r]);return this}if(Array.isArray(e)){for(var i in e)this.field(t,e[i]);return this}if(null===e||void 0===e)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof e&&(e=""+e),this._getFormData().append(t,e),this},i.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},i.prototype.withCredentials=function(){return this._withCredentials=!0,this},i.prototype.redirects=function(t){return this._maxRedirects=t,this},i.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},i.prototype.send=function(t){var e=n(t),r=this._header["content-type"];if(e&&!this._data)Array.isArray(t)?this._data=[]:this._isHost(t)||(this._data={});else if(t&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(e&&n(this._data))for(var i in t)this._data[i]=t[i];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],"application/x-www-form-urlencoded"==r?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(r||this.type("json"),this)},i.prototype.sortQuery=function(t){return this._sort="undefined"==typeof t||t,this},i.prototype._timeoutError=function(t,e){if(!this._aborted){var r=new Error(t+e+"ms exceeded");r.timeout=e,r.code="ECONNABORTED",this.timedout=!0,this.abort(),this.callback(r)}},i.prototype._setTimeouts=function(){var t=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout)},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout)},this._responseTimeout))}},{"./is-object":2}],5:[function(t,e,r){function i(t){if(t)return s(t)}function s(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}var n=t("./utils");e.exports=i,i.prototype.get=function(t){return this.header[t.toLowerCase()]},i.prototype._setHeaderProperties=function(t){var e=t["content-type"]||"";this.type=n.type(e);var r=n.params(e);for(var i in r)this[i]=r[i];this.links={};try{t.link&&(this.links=n.parseLinks(t.link))}catch(s){}},i.prototype._setStatusProperties=function(t){var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.redirect=3==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.forbidden=403==t,this.notFound=404==t}},{"./utils":6}],6:[function(t,e,r){r.type=function(t){return t.split(/ *; */).shift()},r.params=function(t){return t.split(/ *; */).reduce(function(t,e){var r=e.split(/ *= */),i=r.shift(),s=r.shift();return i&&s&&(t[i]=s),t},{})},r.parseLinks=function(t){return t.split(/ *, */).reduce(function(t,e){var r=e.split(/ *; */),i=r[0].slice(1,-1),s=r[1].split(/ *= */)[1].slice(1,-1);return t[s]=i,t},{})},r.cleanHeader=function(t,e){return delete t["content-type"],delete t["content-length"],delete t["transfer-encoding"],delete t.host,e&&delete t.cookie,t}},{}],7:[function(t,e,r){function i(t){if(t)return s(t)}function s(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}"undefined"!=typeof e&&(e.exports=i),i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},i.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i,s=0;s<r.length;s++)if(i=r[s],i===e||i.fn===e){r.splice(s,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var i=0,s=r.length;i<s;++i)r[i].apply(this,e)}return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}]},{},[3])(3)});