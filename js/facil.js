// taula
var taula = {
  element: document.getElementById("llista"),
  width: 1500,
  height: 900,
  inicialitzacio: function () {
    document.body.appendChild(this.element);
  }
};

// valor de les cartes
var valor_cartes = [
  "antena",
  "antena",
  "microfon",
  "microfon",
  "amplificador",
  "amplificador",
  "ona",
  "ona",
  "Radio FM",
  "Radio FM",
  "dial",
  "dial",
  "meth",
  "meth",
  "on-air",
  "on-air"
];

// creem l'objecte carta
var carta = {
  crear: function (id, valor) {
    var novaCarta = Object.create(this);
    // creem l'element div
    novaCarta.element = document.createElement("li");
    novaCarta.element.className += "carta";
    // li assignem el valor a carta
    novaCarta.element.setAttribute("id", "carta_" + id);
    novaCarta.element.setAttribute("type", valor);
    //novaCarta.element.innerHTML = valor;

    var img = document.createElement("img");
    img.src = "../media/" + valor + ".png";
    novaCarta.element.appendChild(img);
    //novaCarta.element.setAttribute("onclick", "mostrarCarta(this, '" + valor + "')");
    return novaCarta.element;
  }
};

// temporitzador
var temporitzador = {};
function iniciarTemporitzador() {
  // en segons
  temporitzador.acaba = 300;

  // agafem els elements
  temporitzador.min = document.getElementById("min");
  temporitzador.sec = document.getElementById("sec");

  // afegim els elements del modal
  var modal = {};
  modal.mins = document.getElementById("mins");
  modal.secs = document.getElementById("secs");
  //debugger;
  if (temporitzador.acaba > 0) {
    temporitzador.compteEnrere = setInterval(function () {
      // Stop if passed end time
      temporitzador.acaba--;
      if (temporitzador.acaba <= 0) {
        // esborrrar
        //aturarTemporitzador(counter.ticker);
        endGame(false);
        temporitzador.acaba = 0;
      }

      // Calculate remaining time
      var secs = temporitzador.acaba;
      var mins = Math.floor(secs / 60); // 1 min = 60 secs
      secs -= mins * 60;

      // Update HTML
      temporitzador.min.innerHTML = mins;
      modal.mins.innerHTML = mins;

      if (secs < 10) {
        temporitzador.sec.innerHTML = "0" + secs;
        modal.secs.innerHTML = "0" + secs;
      } else {
        temporitzador.sec.innerHTML = secs;
        modal.secs.innerHTML = secs;
      }


    }, 1000);
  }
}

function aturarTemporitzador() {
  clearTimeout(temporitzador.compteEnrere);
}

// cartes
var cartes = [];

for (var i = 0; i < valor_cartes.length; i++) {
  cartes[i] = carta.crear(i, valor_cartes[i]);
}

// declaring move variable
var moviments = 0;
var contador_moviments = document.getElementById("moviments");

// encerts
var encerts = 0;
var contador_encerts = document.getElementById("encerts");

// cartes girades
cartesGirades = [];

// cartes encertades
var matchedCard = document.getElementsByClassName("match");

document.body.onload = startGame();

function startGame() {
  iniciarTemporitzador();

  var cartesBarregades = barrejarCartes(cartes);
  for (var i = 0; i < cartesBarregades.length; i++) {
    taula.element.innerHTML = "";
    [].forEach.call(cartesBarregades, function (item) {
      taula.element.appendChild(item);
    });
    cartes[i].classList.remove("show", "open", "match", "disabled");
  }
}

// creem un metode per a barrejar l'array
function barrejarCartes(array) {
  // declarem variables
  var indexActual = array.length,
    valorTemporal,
    indexRandom;
  // fem un bucle que durarà mentre i sigui mes gran que 0
  while (indexActual !== 0) {
    indexRandom = Math.floor(Math.random() * indexActual);

    indexActual--;

    valorTemporal = array[indexActual];
    array[indexActual] = array[indexRandom];
    array[indexRandom] = valorTemporal;
  }

  // tornem l'array
  return array;
}

// mostrar carta (displayCard)
var mostrarCarta = function () {
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
};

// carta girada (cardOpen)
function cartaGirada() {
  cartesGirades.push(this);
  var len = cartesGirades.length;
  if (len === 2) {
    //moveCounter();
    if (cartesGirades[0].type === cartesGirades[1].type) {
      matched();
    } else {
      unmatched();
    }
  }
}

// @description when cards match
function matched() {
  cartesGirades[0].classList.add("match", "disabled");
  cartesGirades[1].classList.add("match", "disabled");
  cartesGirades[0].classList.remove("show", "open", "no-event");
  cartesGirades[1].classList.remove("show", "open", "no-event");
  cartesGirades = [];
  // augemntem el nombre d'encerts
  encerts++;
  contador_encerts.innerHTML = encerts;
  moviments++;
  contador_moviments.innerHTML = moviments;
  if (cartes.length / 2 == encerts) {
    endGame(true);
  }
}

// description when cards don't match
function unmatched() {
  cartesGirades[0].classList.add("unmatched");
  cartesGirades[1].classList.add("unmatched");
  disable();
  setTimeout(function () {
    cartesGirades[0].classList.remove("show", "open", "no-event", "unmatched");
    cartesGirades[1].classList.remove("show", "open", "no-event", "unmatched");
    enable();
    cartesGirades = [];
  }, 1100);
  moviments++;
  contador_moviments.innerHTML = moviments;
}

// @description disable cards temporarily
function disable() {
  Array.prototype.filter.call(cartes, function (card) {
    card.classList.add("disabled");
  });
}

// @description enable cards and disable matched cards
function enable() {
  Array.prototype.filter.call(cartes, function (card) {
    card.classList.remove("disabled");
    for (var i = 0; i < matchedCard.length; i++) {
      matchedCard[i].classList.add("disabled");
    }
  });
}

// comptador
function moveCounter() {
  moviments++;
  contador.innerHTML = moviments;
}

// afegim events
for (var i = 0; i < cartes.length; i++) {
  cartaX = cartes[i];
  cartaX.addEventListener("click", mostrarCarta);
  cartaX.addEventListener("click", cartaGirada);
}

puntuacio = 0;
// quan s'acaba el joc
function endGame(acabat) {
  // busquem el modal
  aturarTemporitzador();
  var modal = $("#modalFinal");

  if (acabat) {
    modal.find(".modal-title").text("Felicitats has acabat el memory");
  }
  puntuacio = (encerts * 4 + 1 - moviments) * 3;
  if (puntuacio <= 0) {
    puntuacio = 10;
  }

  // agafem els moviments
  var a = document.querySelector("#moves");
  a.innerHTML = moviments;
  // agafem la puntuacio
  var b = document.querySelector("#puntuacio");
  b.innerHTML = puntuacio.toFixed(0);

  /**
   *  Cookies 
   **/
  var currentUser = getCookie("currentUser");
  currentUser = JSON.parse(currentUser);
  currentUser.puntuacio =
    parseInt(currentUser.puntuacio) + parseInt(puntuacio.toFixed(0));
  currentUser.memory = true;
  currentUser = JSON.stringify(currentUser);
  setCookie("currentUser", currentUser, 365);


  setTimeout(function () {
    $(".cover").slideDown(350);
  }, 500);
  return 0;
}

document.querySelector(".OK").addEventListener("click", function () {
  onclick = "location.href='jocsMenu.html'";
});
