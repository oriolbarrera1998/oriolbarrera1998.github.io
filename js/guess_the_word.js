var palabras = [
  "antena",
  "amplificador",
  "mesclador",
  "interferencia",
  "filtre"
];
var nPalabrasTotal = palabras.length;

var rWord;
var domWord;
var nLetras; //Numero de letras (sin repeticiones) de la palabra actual.

var aciertosActual = 0;
var aciertosTotal = 0;
var fallosActual = 0;
var fallosTotal = 0;
var contadorSinTiempo = 0;
var porcentajeJuego = 0;
var puntuacion = 0;
var puntuacionPalabra = 0;
const puntosAcierto = 25;
const puntosLetra = 5;
const puntosFallo = -15;
const duration = 20;
var duracion = duration;

var puntuacionJuego = document.getElementsByClassName("button-puntuacion")[0];
var bar = document.getElementsByClassName("barStatus")[0];
var progreso = document.getElementsByClassName("progreso")[0];
var porcentaje = document.getElementsByClassName("porcentaje")[0];
var modalNext = document.getElementsByClassName("nextWord")[0];
var modalEnd = document.getElementsByClassName("end")[0];
var modalFailure = document.getElementsByClassName("failure")[0];
var game = document.getElementsByClassName("game")[0];
var modalEndPuntuacion = document.getElementById("modalEnd-puntuacion");
var canvas = document.querySelector("canvas");
let timer = document.getElementsByClassName("js-timer")[0];
let timer_part = document.getElementsByClassName("js-timer_part");
var temporizador = document.getElementById("seconds");

var terminado = false;
var pausa = false;
var temporizadorON = false;

var interval;

function randomLetter() {
  var result = "";
  var characters = "abcdefghijklmnñopqrstuvwxyz";
  var charactersLength = characters.length;
  //for ( var i = 0; i < length; i++ ) {
  result = characters.charAt(Math.floor(Math.random() * charactersLength));
  //}
  return result;
}

function randomWord() {
  rWord = palabras[Math.floor(Math.random() * palabras.length)];
  console.log(rWord);

  //Eliminamos la palabra del array
  palabras = palabras.filter(e => e !== rWord);
}

function createWord() {
  randomWord(); //variable global rWord tendrá una palabra aleatoria
  var palabra = rWord;
  palabra = palabra.split("");

  palabra.forEach(iterar);

  function iterar(value, index, array) {
    var word = document.getElementById("word");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("\xa0\xa0"));
    li.setAttribute("class", "letter");
    li.setAttribute("data-letter", value);
    word.appendChild(li);
  }

  domWord = document.querySelectorAll(".letter");
}

function createLetterPannel() {
  var palabra = rWord;
  palabra = palabra.split(""); //Lo transformamos a array

  var letras = palabra;
  //Le quitamos las letras repetidas
  letras = letras.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);

  nLetras = letras.length;

  //Hasta que no haya 12 letras
  while (letras.length < 12) {
    //Generamos letra aleatoria
    var rLetter = randomLetter();
    //Si no está en el array la añadimos
    if (!letras.includes(rLetter)) {
      letras.push(rLetter);
    }
  }

  //Desordenamos el array
  letras.sort(() => Math.random() - 0.5);

  letras.forEach(iterar);

  function iterar(value, index, array) {
    var pannel = document.getElementById("pannel");
    var letter = document.createElement("div");
    letter.appendChild(document.createTextNode(value));
    letter.setAttribute("id", "pannelLetter");
    pannel.appendChild(letter);
  }
}

function removeElements() {
  var word = document.getElementById("word");
  while (word.firstChild) {
    word.removeChild(word.firstChild);
  }
  var pannel = document.getElementById("pannel");
  while (pannel.firstChild) {
    pannel.removeChild(pannel.firstChild);
  }
}

function updateBar() {
  porcentajeJuego = Number(
    (((aciertosTotal + contadorSinTiempo) / nPalabrasTotal) * 100).toFixed(1)
  );
  bar.style.width = porcentajeJuego + "%";
  progreso.innerHTML = aciertosTotal + contadorSinTiempo + "/" + nPalabrasTotal;
  porcentaje.innerHTML = porcentajeJuego + "%";
}

function openModalNext() {
  pausa = true;
  document.getElementsByClassName("modal-word")[0].innerHTML = rWord;
  modalNext.style.display = "block";
  game.style.opacity = "0";

  for (var i = 0, len = timer_part.length; i < len; i++) {
    timer_part[i].style.animationDuration = "99999s";
  }

  temporizadorON = false;
}

function nextWord() {
  pausa = false;
  canvas.style.display = "none";
  modalNext.style.display = "none";
  modalFailure.style.display = "none";
  game.style.opacity = "1";
  removeElements();

  aciertosActual = 0;
  fallosActual = 0;
  puntuacionPalabra = 0;
  juego();
}

function openModalEnd() {
  for (var i = 0, len = timer_part.length; i < len; i++) {
    timer_part[i].style.animationDuration = "99999s";
  }
  temporizadorON = false;
  modalEnd.style.display = "block";
  game.style.opacity = "0";
  document.getElementsByClassName("modal-word")[1].innerHTML = rWord;
  /*modalEndPuntuacion.innerHTML =
    "Has ganado un total de " + puntuacion + " puntos.";*/
  modalEndPuntuacion.innerHTML = puntuacion;
  fireworks();

  var currentUser = getCookie("currentUser");
  currentUser = JSON.parse(currentUser);
  currentUser.puntuacio =
    parseInt(currentUser.puntuacio) + parseInt(puntuacion);
  currentUser.esbrina = true;
  currentUser = JSON.stringify(currentUser);
  setCookie("currentUser", currentUser, 365);
}

function salir() {
  location.href = "../views/jocsMenu.html";
}

function openModalFailure() {
  temporizadorON = false;
  pausa = true;
  modalFailure.style.display = "block";
  game.style.opacity = "0";
  document.getElementsByClassName("modal-word")[2].innerHTML = rWord;
}

//TODO
function updateScore() {
  puntuacionPalabra = puntosAcierto + puntosLetra * nLetras;
  puntuacion += puntuacionPalabra + (puntosFallo - fallosActual);
  puntuacionJuego.innerHTML = "Puntuació: " + puntuacion;
}

function startTimer() {
  temporizadorON = true;
  duracion = duration;
  timer_part[0].addEventListener(animationEvent, sinTiempo);
  timer.classList.remove("start");
  void timer.offsetWidth;
  timer.classList.add("start");

  for (var i = 0, len = timer_part.length; i < len; i++) {
    timer_part[i].style.animationDuration = duracion + "s";
  }

  duracion--;
  temporizador.innerHTML = duracion + " s";
  duracion--;
  interval = setInterval(function () {
    temporizador.innerHTML = duracion + " s";
    duracion--;

    if (parseInt(duracion) <= -1) {
      temporizador.innerHTML = duracion + 1 + " s";
      clearInterval(interval);
    }
  }, 1060);
}

function whichAnimationEvent() {
  var t;

  var animations = {
    animation: "animationend",
    OAnimation: "oAnimationEnd",
    MozAnimation: "animationend",
    WebkitAnimation: "webkitAnimationEnd"
  };

  for (t in animations) {
    if (timer_part[0].style[t] !== undefined) {
      return animations[t];
    }
  }
}

var animationEvent = whichAnimationEvent();

function sinTiempo(event) {
  contadorSinTiempo++;
  updateBar();
  if (palabras.length > 0) {
    openModalFailure();
  } else {
    openModalEnd();
  }
}

juego();

function juego() {
  createWord();
  createLetterPannel();
  updateBar();
  //flechaSalir.addEventListener("click", salir);
  for (var i = 0, len = timer_part.length; i < len; i++) {
    timer_part[i].style.animationDuration = "99999s";
  }
  temporizador.innerHTML = duration + " s";
  puntuacionJuego.innerHTML = "Puntuació: " + puntuacion;
  document.querySelectorAll("#pannelLetter").forEach(item => {
    item.addEventListener("click", event => {
      if (!terminado && !pausa) {
        if (!temporizadorON) {
          startTimer();
        }
        var letra = item.innerHTML;
        var encontrado = false;
        for (let index = 0; index < domWord.length; index++) {
          var element = domWord[index];
          if (element.getAttribute("data-letter") == letra) {
            encontrado = true;
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }
            element.appendChild(document.createTextNode(letra));
            element.removeAttribute("data-letter");
            aciertosActual++;
          }
        }

        if (item.getAttribute("id") == "pannelLetter") {
          if (encontrado) {
            item.removeAttribute("id");
            item.setAttribute("id", "pannelLetterGreen");
          } else {
            item.removeAttribute("id");
            item.setAttribute("id", "pannelLetterRed");
            fallosActual++;
          }
        }

        if (aciertosActual == rWord.length) {
          aciertosTotal++;
          if (aciertosTotal + contadorSinTiempo != nPalabrasTotal) {
            pausa = true;
            fallosTotal += fallosActual;
            updateScore();
            if (pausa || terminado) {
              clearInterval(interval);
              timer_part[0].removeEventListener(animationEvent, sinTiempo);
              duracion = duration;
              temporizador.innerHTML = duracion + " s";
            }
            setTimeout(() => {
              openModalNext();
            }, 250);
          } else {
            updateScore();
            openModalEnd();
            terminado = true;
          }
          updateBar();
        }
      }
    });
  });
}

function fireworks() {
  var gctx; // Graphic context
  var fireworks = []; // Each firework will be an element of this array

  canvas.style.display = "block";
  // If canvas is supported
  if (canvas.getContext) {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    gctx = canvas.getContext("2d");

    window.addEventListener("resize", handlePageResize);
    document.body.addEventListener("click", handleCanvasClick);
    window.requestAnimationFrame(animationLoop);
  }

  function animationLoop() {
    gctx.clearRect(0, 0, canvas.width, canvas.height);

    // Randomly generate a firework
    if (Math.random() < 0.03)
      fireworks.push(
        new Firework(
          Math.floor(Math.random() * canvas.width),
          Math.floor(Math.random() * canvas.height)
        )
      );

    // Draw each firework in the array (so you can have multiple fireworks at the same time)
    fireworks.forEach(function (f) {
      // Draw a firework only if it still has visible particles
      if (!f.isFinished()) f.draw(gctx);
    });

    window.requestAnimationFrame(animationLoop);
  }

  /** Resizes the canvas to make it look responsive. */
  function handlePageResize() {
    canvas.width = document.querySelector("body").clientWidth;

    canvas.height = document.querySelector("body").clientHeight;
  }

  function handleCanvasClick(e) {
    //gctx.fillStyle = "#a55";
    //gctx.fillRect(e.clientX, e.clientY, 2, 2);
    fireworks.push(new Firework(e.clientX, e.clientY));
  }

  var Firework = function (_x, _y) {
    var targetX = _x;
    var targetY = _y;
    var power = 0.9; // Affects the movement speed of the particles
    var particles = [];
    var hue = Math.floor(Math.random() * 360);

    var deadCount = 0;
    var numParticles = 100;

    var gravity = 0.1;
    var airResistence = 1.02; // It must be greater than 1 to avoid weird results.

    this.draw = function (context) {
      // TODO - Animation should stop when all particles are invisible
      particles.forEach(function (p) {
        p.update(gravity, airResistence);
        p.draw(context);
      });
    };

    this.particleDead = function () {
      deadCount++;
    };

    this.isFinished = function () {
      return deadCount == numParticles;
    };

    for (var i = 0; i < numParticles; i++) {
      var randomAngle = Math.random() * Math.PI * 2;
      var dx = Math.cos(randomAngle) * (power * Math.random());
      var dy = Math.sin(randomAngle) * (power * Math.random());
      particles.push(
        new Particle(targetX, targetY, 2, dx, dy, hue, this.particleDead)
      );
    }
  };

  var Particle = function (_x, _y, _radius, _dx, _dy, _hue, onDeath) {
    var x = _x;
    var y = _y;
    var radius = _radius;
    var dx = _dx;
    var dy = _dy;
    var hue = _hue;
    var timeOfLife = 0;
    var opacity = 1;
    var dead = false;

    // Gravity and air resistance affect how X and Y change
    this.update = function (gravity, airResistance) {
      timeOfLife++;

      if (timeOfLife > 144 && !dead) {
        // Opacity decreases only after a certain time (35 frames)
        opacity -= 0.03;
        if (opacity < 0) {
          opacity = 0;
          dead = true;
          onDeath(); // Tells the firework object this particle should not be drawn again (increase a counter, if the counter = numParticles stop drawing the firework)
        }
      }

      //dy += gravity;
      //dx /= airResistance;
      x += dx;
      y += dy;
    };

    this.draw = function (context) {
      // NOTE: lightness 100% will make every color white.
      context.fillStyle = "hsla(" + hue + ", 60%, 42%, " + opacity + ")";
      context.fillRect(x, y, radius, radius);
    };
  };
}
