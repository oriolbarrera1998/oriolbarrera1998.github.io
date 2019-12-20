if (getCookie("idioma") == "") {
    var missatges = CAT;
    missatges = JSON.stringify(missatges);
    setCookie("idioma", missatges, 365);
}

var missatges = CAT;


//index
/**
 * @Roger 
 * Utilitzar aquest mètode per agafar el JSON corresponent a l'idioma que hi hagi dins de la cookie
 * Al html importar CAT.js i ESP.js
 **/ 
function canviarIdioma(){
    var imatgeBoto = document.getElementById("imatgeBoto");
    var missatges = getCookie("idioma");
    missatges = JSON.parse(missatges);
    if(JSON.stringify(missatges) === JSON.stringify(CAT) ){
        missatges = ESP
        missatges = JSON.stringify(missatges);
        setCookie("idioma", missatges, 365);
        
        imatgeBoto.src = "https://images.vexels.com/media/users/3/164599/isolated/preview/ce858535b77f22068049aca2457e59ad-spain-flag-language-icon-circle-by-vexels.png";
        
    }else{
        missatges = CAT;
        missatges = JSON.stringify(missatges);
        setCookie("idioma", missatges, 365);

        imatgeBoto.src = "media/senyera.png";
    }
    aplicarCanvis()
}

function aplicarCanvis(){
    /**
    *  INDEX 
    **/   
    var missatges = getCookie("idioma");
    missatges = JSON.parse(missatges);
    document.getElementById("titol").innerHTML = missatges.index.titol;
    document.getElementById("item1").innerHTML = missatges.index.item1;
    document.getElementById("item2").innerHTML = missatges.index.item2;
    document.getElementById("item3").innerHTML = missatges.index.item3;

    var imatgeBoto = document.getElementById("imatgeBoto");
    if(JSON.stringify(missatges) === JSON.stringify(CAT) ){
              
        imatgeBoto.src = "media/senyera.png";        
    }else{
        
        imatgeBoto.src = "https://images.vexels.com/media/users/3/164599/isolated/preview/ce858535b77f22068049aca2457e59ad-spain-flag-language-icon-circle-by-vexels.png";
    }
}



