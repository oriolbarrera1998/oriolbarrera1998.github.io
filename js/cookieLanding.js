function checkCookie() {
  var username = getCookie("currentUser");
  if (username != "") {
    document.querySelector(".cover1").style.display = "none";
  } else {
    document.querySelector(".cover1").style.display = "block";
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
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

function delete_cookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
