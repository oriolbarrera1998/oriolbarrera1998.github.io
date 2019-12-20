// agafem idioma
var missatges = getCookie("idioma");
missatges = JSON.parse(missatges);

function idioma() {
    
    // items
    document.getElementById("titol1").innerHTML = missatges.jocs.tutorialMemory.item1.titol;
    document.getElementById("descripcio1").innerHTML = missatges.jocs.tutorialMemory.item1.descripcio;

    document.getElementById("titol2").innerHTML = missatges.jocs.tutorialMemory.item2.titol;
    document.getElementById("descripcio2").innerHTML = missatges.jocs.tutorialMemory.item2.descripcio;

    document.getElementById("titol3").innerHTML = missatges.jocs.tutorialMemory.item3.titol;
    document.getElementById("descripcio3").innerHTML = missatges.jocs.tutorialMemory.item3.descripcio;
    
    //botons
    document.getElementById("boto1").innerHTML =  missatges.jocs.tutorialMemory.boto1;  
    document.getElementById("boto2").innerHTML =  missatges.jocs.tutorialMemory.boto2; 
  }