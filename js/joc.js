const pregunta = document.getElementById("pregunta");
const opcions = Array.from(document.getElementsByClassName("textOpcio"));
const contPreguntesText = document.getElementById("barraText");
const puntsText = document.getElementById("punts");
const estatBarraProgres = document.getElementById("estatBarraProgres");


const PUNTS_ENCERTAR = 10;
const NUM_PREGUNTES = 5;
//const TEMPS_PREGUNTA = 30;

let preguntaActual = {};
//var girar = true;
let respondre = true;
let punts = 0;
let contPreguntes = 0;
let tipus;
let llistaPreguntesEmissio = [];
let llistaPreguntesRecepcio = [];
let llistaPreguntesTransmissio = [];


fetch("../utils/JSONPreguntes/preguntesEmissio.json").then(res =>{
    return res.json();
}).then(preguntesJsonEmissio =>{
    preguntesEmissio = preguntesJsonEmissio;
    
    comencarJoc();
});

fetch("../utils/JSONPreguntes/preguntesRecepcio.json").then(res =>{
    return res.json();
}).then(preguntesJsonRecepcio =>{
    preguntesRecepcio = preguntesJsonRecepcio;
    
    comencarJoc();
});

fetch("../utils/JSONPreguntes/preguntesTransmissio.json").then(res =>{
    return res.json();
}).then(preguntesJsonTransmissio =>{
    preguntesTransmissio = preguntesJsonTransmissio;
    
    comencarJoc();
});



//Funció per inicialitzar el joc
comencarJoc = () => {
    contPreguntes = 0;
    punts = 0;
    llistaPreguntesEmissio = [ ... preguntesEmissio];
    llistaPreguntesRecepcio = [ ... preguntesRecepcio];
    llistaPreguntesTransmissio = [ ... preguntesTransmissio];
    console.log(llistaPreguntesEmissio);
    console.log(llistaPreguntesRecepcio);
    console.log(llistaPreguntesTransmissio);
    //novaPregunta();
    comencarConta();
};

/*novaPregunta = () => {

    if(llistaPreguntesEmissio.length === 0 || llistaPreguntesTransmissio.length === 0 || llistaPreguntesRecepcio.length === 0 ||contPreguntes >= NUM_PREGUNTES){
        localStorage.setItem("puntuacioFinal2", punts);
        return window.location.assign("../views/final.html");
    };

    //girar = true;

    contPreguntes++;


    const indexPreguntaEmissio = Math.floor(Math.random() * llistaPreguntesEmissio.length);
    const indexPreguntaRecepcio = Math.floor(Math.random() * llistaPreguntesRecepcio.length);
    const indexPreguntaTransmissio = Math.floor(Math.random() * llistaPreguntesTransmissio.length);

    if(tipusPregunta = "Emissio"){
      preguntaActual = llistaPreguntesEmissio[indexPreguntaEmissio];
    }
    else if(tipusPregunta = "Recepcio"){
      preguntaActual = llistaPreguntesEmissio[indexPreguntaRecepcio];
    }
    else if(tipusPregunta = "Transmissio"){
      preguntaActual = llistaPreguntesTransmissio[indexPreguntaTransmissio];
    }
    pregunta.innerText = preguntaActual.pregunta;
    opcions.forEach( opcio => {
        const numResposta = opcio.dataset["numero"];
        opcio.innerText = preguntaActual["opcio" + numResposta];
    });

    llistaPreguntesEmissio.splice(indexPreguntaEmissio, 1);
    //girar = false;
    respondre = true;
};*/

novaPreguntaEmissio = () => {
  if(llistaPreguntesEmissio.length === 0 ||contPreguntes >= NUM_PREGUNTES){
    localStorage.setItem("puntuacioFinal2", punts);
    return window.location.assign("../views/final.html");
};

//girar = true;

contPreguntes++;

barraText.innerText = `Pregunta ${contPreguntes}/${NUM_PREGUNTES}`;
estatBarraProgres.style.width = `${(contPreguntes / NUM_PREGUNTES) * 100}%`;

const indexPreguntaEmissio = Math.floor(Math.random() * llistaPreguntesEmissio.length);

preguntaActual = llistaPreguntesEmissio[indexPreguntaEmissio];

pregunta.innerText = preguntaActual.pregunta;
opcions.forEach( opcio => {
    const numResposta = opcio.dataset["numero"];
    opcio.innerText = preguntaActual["opcio" + numResposta];
});

llistaPreguntesEmissio.splice(indexPreguntaEmissio, 1);
//girar = false;
respondre = true;
};

novaPreguntaRecepcio = () => {
  if(llistaPreguntesRecepcio.length === 0 || contPreguntes >= NUM_PREGUNTES){
    localStorage.setItem("puntuacioFinal2", punts);
    return window.location.assign("../views/final.html");
};

//girar = true;

contPreguntes++;
barraText.innerText = `Pregunta ${contPreguntes}/${NUM_PREGUNTES}`;
estatBarraProgres.style.width = `${(contPreguntes / NUM_PREGUNTES) * 100}%`;

const indexPreguntaRecepcio = Math.floor(Math.random() * llistaPreguntesRecepcio.length);

preguntaActual = llistaPreguntesRecepcio[indexPreguntaRecepcio];

pregunta.innerText = preguntaActual.pregunta;
opcions.forEach( opcio => {
    const numResposta = opcio.dataset["numero"];
    opcio.innerText = preguntaActual["opcio" + numResposta];
});

llistaPreguntesRecepcio.splice(indexPreguntaRecepcio, 1);
//girar = false;
respondre = true;
};

novaPreguntaTransmissio = () => {
  if(llistaPreguntesTransmissio.length === 0 || contPreguntes >= NUM_PREGUNTES){
    localStorage.setItem("puntuacioFinal2", punts);
    return window.location.assign("../views/final.html");
};

//girar = true;

contPreguntes++;
barraText.innerText = `Pregunta ${contPreguntes}/${NUM_PREGUNTES}`;
estatBarraProgres.style.width = `${(contPreguntes / NUM_PREGUNTES) * 100}%`;

const indexPreguntaTransmissio = Math.floor(Math.random() * llistaPreguntesTransmissio.length);

preguntaActual = llistaPreguntesTransmissio[indexPreguntaTransmissio];

pregunta.innerText = preguntaActual.pregunta;
opcions.forEach( opcio => {
    const numResposta = opcio.dataset["numero"];
    opcio.innerText = preguntaActual["opcio" + numResposta];
});

llistaPreguntesTransmissio.splice(indexPreguntaTransmissio, 1);
//girar = false;
respondre = true;
};

opcions.forEach(opcio => {
    opcio.addEventListener("click", e => {
        if(!respondre) return;

        respondre = false;
        //const opcioCorrecta = preguntaActual.resposta;
        const opcioEscollida = e.target;
        const respostaEscollida = opcioEscollida.dataset["numero"];

        //const respostaCorrect = "correcte";
        const feedbackResposta = respostaEscollida == preguntaActual.resposta ? "correcte" : "incorrecte";

        if(feedbackResposta === "correcte") {
            sumarPunts(PUNTS_ENCERTAR);
        }
       // else{
         // opcioCorrecta.parentElement.classList.add(respostaCorrect);
        //}

        
        
        opcioEscollida.parentElement.classList.add(feedbackResposta);

        //Aquesta funció serveix per indicar un temps fins que surt la següent pregunta perquè es pugui veure si la resposta donada es correcte o incorrecte.
        setTimeout(() => {
            opcioEscollida.parentElement.classList.remove(feedbackResposta);
            //opcioCorrecta.parentElement.classList.remove(respostaCorrect);
            novaPregunta();
            //girar = true;
        }, 1000);

        //Ho poso separat perqué es poguin cambiar els dos temps per separat
        setTimeout(() =>{
          document.querySelector("#spin").disabled = false;
          document.querySelector(".cover").style.display = "inline";
        }, 1000);

    });
});

sumarPunts = (num) => {
    punts += num;
    puntsText.innerText = punts;
}

contaEnrera = (duration, display) => {
    var contador = duration, seconds;
    setInterval(function () {
        seconds = parseInt(contador % 60, 10);
        
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--contador < 0) {
          contador = duration;
        }
    }, 1000);
}

comencarConta = () => {
    var thirtySeconds = 59, display = document.querySelector('#temps');
    contaEnrera(thirtySeconds, display);
};


var options = ["Emissió", "Transmissió", "Recepció"];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;


var ctx;

document.getElementById("spin").addEventListener("click", spin);



function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

var preguntesEmissio = ["Pregunta emissió1", "Pregunta emissió2", "Pregunta emissió3"];

var preguntesTransmissio = ["Pregunta transmissió1", "Pregunta transmissió2", "Pregunta transmissió3"];

var preguntesRecepcio = ["Pregunta recepció1", "Pregunta recepció2", "Pregunta recepció3"];

var questions = document.getElementById("PREGUNTES");



function RGB2Color(r,g,b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item, maxitem) {
  var phase = 0;
  var center = 128;
  var width = 127;
  var frequency = Math.PI*2/maxitem;
  
  red   = Math.sin(frequency*item+2+phase) * width + center;
  green = Math.sin(frequency*item+0+phase) * width + center;
  blue  = Math.sin(frequency*item+4+phase) * width + center;
  
  return RGB2Color(red,green,blue);
}

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var textRadius = 160;
    var insideRadius = 100;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.font = 'bold 12px Helvetica, Arial';

    for(var i = 0; i < options.length; i++) {
      var angle = startAngle + i * arc;
      //ctx.fillStyle = colors[i];
      ctx.fillStyle = getColor(i, options.length);

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowOffsetX = -1;
      ctx.shadowOffsetY = -1;
      ctx.shadowBlur    = 0;
      ctx.shadowColor   = "rgb(220,220,220)";
      ctx.fillStyle = "black";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    } 

    //Arrow
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
  }
}

function spin() {
  //if(girar == true){
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    rotateWheel();
 // }
  document.querySelector("#spin").disabled = true;
}

function rotateWheel() {
 // if(girar == true){
    spinTime += 30;
    if(spinTime >= spinTimeTotal) {
      stopRotateWheel();
      return;
    }
    var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 180);
    drawRouletteWheel();
    spinTimeout = setTimeout('rotateWheel()', 30);
  //}
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var numRandom = Math.floor(Math.random() * 3);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  tipus = options[index];
  ctx.fillText(tipus, 250 - ctx.measureText(tipus).width / 2, 250 + 10);
  ctx.restore();
  if(tipus == "Emissió"){
    //preguntaActual = llistaPreguntesEmissio[indexPreguntaEmissio];
    novaPreguntaEmissio();
  }
  else if(tipus == "Transmissió"){
    novaPreguntaTransmissio();
    //preguntaActual = llistaPreguntesRecepcio[indexPreguntaRecepcio];
  }
  else if(tipus == "Recepció"){
    novaPreguntaRecepcio();
    //preguntaActual = llistaPreguntesTransmissio[indexPreguntaTransmissio];
  }

  pregunta.innerText = preguntaActual.pregunta;
  opcions.forEach( opcio => {
      const numResposta = opcio.dataset["numero"];
      opcio.innerText = preguntaActual["opcio" + numResposta];
  });
  setTimeout(() =>{  
    document.querySelector(".cover").style.display = "none";
  }, 1000);
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();