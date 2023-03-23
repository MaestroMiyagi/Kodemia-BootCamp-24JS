"use strict";

var isLogged = function isLogged() {
  var token = localStorage.getItem("token");
  token ? window.open("/views/home.html", "_self") : window.open("/views/login.html", "_self");
};

isLogged();
var loginEvent = document.querySelector("#loginBtn");
/* localStorage.setItem("token", token) */