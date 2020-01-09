// agafem idioma
var missatges = getCookie("idioma");
missatges = JSON.parse(missatges);

function idioma() {
    
    // descripcio
    document.getElementById("descripcio").innerHTML = missatges.jocs.about_us.descripcio;
    debugger;
  }