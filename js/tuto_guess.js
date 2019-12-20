// agafem idioma
var missatges = getCookie("idioma");
missatges = JSON.parse(missatges);

function idioma() {
    
    // items
    document.getElementById("titol1").innerHTML = missatges.jocs.tutoEsbrina.item1.titol;
    document.getElementById("descripcio1").innerHTML = missatges.jocs.tutoEsbrina.item1.descripcio;

    document.getElementById("titol2").innerHTML = missatges.jocs.tutoEsbrina.item2.titol;
    document.getElementById("descripcio2").innerHTML = missatges.jocs.tutoEsbrina.item2.descripcio;

    document.getElementById("titol3").innerHTML = missatges.jocs.tutoEsbrina.item3.titol;
    document.getElementById("descripcio3").innerHTML = missatges.jocs.tutoEsbrina.item3.descripcio;
    
    //botons
    document.getElementById("boto").innerHTML =  missatges.jocs.tutoEsbrina.boto;  
    
  }