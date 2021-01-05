let window_m = document.querySelector(".window");
let screen_m = document.querySelector(".screen");
let location_m = document.querySelector(".location");
let navigator_m = document.querySelector(".navigator");

//
let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.documentElement.clientHeight;
window_m.innerHTML = "Your Browser Width: " + windowWidth + "px, " + "Your Browser Height: " + windowHeight + "px";

//
let screenWidth = screen.width;
let screenHeight = screen.height;
screen_m.innerHTML = "Your Screen Width: " + screenWidth + "px, " + "Your Screen Height: " + screenHeight + "px";

//
let locationHref = location.href;
let locationHost = location.hostname;
let locationPath = location.pathname;
let locationProtocol = location.protocol;
let locationPort = location.port;
function newPage() {
  location.assign("https://airbnb.com/");
}
location_m.innerHTML =
  "Your location Href: " +
  locationHref +
  ", Your location host: " +
  locationHost +
  ", Your location path: " +
  locationPath +
  ", Your location protocol: " +
  locationProtocol +
  ", Your location port: " +
  locationPort;
//
function goBack() {
  history.back();
}
function goForward() {
  history.forward();
}

//
let cookieEnabled = navigator.cookieEnabled;
let appName = navigator.appName;
let appCodeName = navigator.appCodeName;
let product = navigator.product;
let appVersion = navigator.appVersion;
let userAgent = navigator.userAgent;
let browserOperatingSystem = navigator.platform;
let browserLanguage = navigator.language;
let browserOnline = navigator.onLine;
let javaEnabled = navigator.javaEnabled();

navigator_m.innerHTML =
  "cookiesEnabled is: " +
  cookieEnabled +
  ", Browser App Name: " +
  appName +
  ", App Code Name: " +
  appCodeName +
  ", Browser Product Name: " +
  product +
  ", Browser Version: " +
  appVersion +
  ", User Agent: " +
  userAgent +
  ", Browser Operating System: " +
  browserOperatingSystem +
  ", Browser Language: " +
  browserLanguage +
  ", Browser Online: " +
  browserOnline +
  ", Java Enabled: " +
  javaEnabled;

//COOKIE
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  console.log("ca", ca);
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}
