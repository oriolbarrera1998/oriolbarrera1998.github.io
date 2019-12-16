var jugadors;

var userSelection = document.getElementsByClassName("option");
var modal = document.getElementsByClassName("modal")[0];
var span = document.getElementsByClassName("close")[0]

for (let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("click", function() {
    if (!userSelection[i].className.includes("highlighted")) {
      userSelection[i].className = "option highlighted";
    }
    for (let j = 0; j < userSelection.length; j++) {
      if (j != i) {
        userSelection[j].className = "option";
      }
    }
  });
}

function compare(a, b) {
  if (a.puntuacio > b.puntuacio) {
    return -1;
  }
  if (a.puntuacio < b.puntuacio) {
    return 1;
  }
  return 0;
}

function sameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function sameMonth(m1, m2) {
  return (
    m1.getFullYear() === m2.getFullYear() && m1.getMonth() === m2.getMonth()
  );
}

function crearRanking(jugadores) {
  var primero = jugadores[0];

  var segundo;
  var tercero;
  if(jugadores.length > 1) {
    segundo = jugadores[1];
  }
  if (jugadores.length > 2) {
    tercero = jugadores[2]; 
  }

  var nombre_primero = document.querySelector(".podium.gold .title");
  nombre_primero.innerHTML = primero.nom;

  var date_primero = document.querySelector(".podium.gold .year-group");
  date_primero.innerHTML = new Date(primero.data).getFullYear();
  
  var nombre_primero = document.querySelector(".podium.gold .points");
  nombre_primero.innerHTML = primero.puntuacio;

  if (typeof segundo !== 'undefined') {
    var nombre_segundo = document.querySelector(".podium.silver .title");
    nombre_segundo.innerHTML = segundo.nom;
    
    var date_segundo = document.querySelector(".podium.silver .year-group");
    date_segundo.innerHTML = new Date(segundo.data).getFullYear();

    var nombre_segundo = document.querySelector(".podium.silver .points");
    nombre_segundo.innerHTML = segundo.puntuacio;
  } else {
    document.querySelector(".podium.silver").style.display = "none";
  }

  if (typeof tercero !== 'undefined') {
    var nombre_tercero = document.querySelector(".podium.bronze .title");
    nombre_tercero.innerHTML = tercero.nom;
    
    var date_tercero = document.querySelector(".podium.bronze .year-group");
    date_tercero.innerHTML = new Date(tercero.data).getFullYear();

    var nombre_tercero = document.querySelector(".podium.bronze .points");
    nombre_tercero.innerHTML = tercero.puntuacio;
  } else {
    document.querySelector(".podium.bronze").style.display = "none";
  }

  if (jugadores.length > 3) {
    for (var i = 3; i < jugadores.length; i++) {
      var list_item = document.createElement("div");
      list_item.className = "list-item";

      var position = document.createElement("div");
      position.className = "position";
      position.innerHTML = i + 1;

      var class_information = document.createElement("div");
      class_information.className = "class-information";

      var title = document.createElement("div");
      title.className = "title";
      title.innerHTML = jugadores[i].nom;

      var year = document.createElement("div");
      year.className = "year";
      year.innerHTML = new Date(jugadores[i].data).getFullYear();

      class_information.append(title);
      class_information.append(year);

      var points = document.createElement("div");
      points.className = "points";
      points.innerHTML = jugadores[i].puntuacio;

      list_item.append(position);
      list_item.append(class_information);
      list_item.append(points);
      var container = document.querySelector(".places-list-container");
      container.append(list_item);
    }
  }
}

function daylyPlayers() {
  var list_container = document.getElementsByClassName(
    "places-list-container"
  )[0];
  var child = list_container.lastElementChild;
  while (child) {
    list_container.removeChild(child);
    child = list_container.lastElementChild;
  }

  var dateToday = new Date();
  var jugadorsDaily = [];

  if (typeof jugadors !== "undefined") {
    for (var i = 0; i < jugadors.length; i++) {
      if (sameDay(new Date(jugadors[i].data), dateToday)) {
        jugadorsDaily.push(jugadors[i]);
      }
    }
  }
  
  if(jugadorsDaily.length > 1) {
    var content = document.getElementsByClassName("podium-places-container")[0];
    content.style.display = "flex";
    crearRanking(jugadorsDaily);
  } else {
    modalNoJugadors();
  }
}
function monthlyPlayers() {
  var list_container = document.getElementsByClassName(
    "places-list-container"
  )[0];
  var child = list_container.lastElementChild;
  while (child) {
    list_container.removeChild(child);
    child = list_container.lastElementChild;
  }

  var dateToday = new Date();
  var jugadorsMonthly = [];
  if (typeof jugadors !== "undefined") {
    for (var i = 0; i < jugadors.length; i++) {
      if (sameMonth(new Date(jugadors[i].data), dateToday)) {
        jugadorsMonthly.push(jugadors[i]);
      }
    }
  }
  
  if(jugadorsMonthly.length > 1) {
    var content = document.getElementsByClassName("podium-places-container")[0];
    content.style.display = "flex";
    crearRanking(jugadorsMonthly);
  } else {
    modalNoJugadors();
  }
}

function allTimePlayers() {
  var content = document.getElementsByClassName("podium-places-container")[0];
    content.style.display = "flex";

  var list_container = document.getElementsByClassName(
    "places-list-container"
  )[0];
  var child = list_container.lastElementChild;
  while (child) {
    list_container.removeChild(child);
    child = list_container.lastElementChild;
  }
  
  if(typeof jugadors !== "undefined") {
    crearRanking(jugadors);
  } else {
    modalNoJugadors();
  }
}

//Botó sortir (elimina la cookie)
var sortir = document.getElementById("esborrarCookie");

sortir.addEventListener("click", function() {
  delete_cookie("currentUser");
});

function modalNoJugadors() {
  var content = document.getElementsByClassName("podium-places-container")[0];
  content.style.display = "none";
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onload = function() {
  if (getCookie("jugadorsRanking") != "") {
    jugadors = getCookie("jugadorsRanking");
    jugadors = JSON.parse(jugadors);
    jugadors.sort(compare); //Ordena el array por puntuación descendente

    daylyPlayers();
  }
  else {
    modalNoJugadors();
  }

  userSelection[0].addEventListener("click", monthlyPlayers);
  userSelection[1].addEventListener("click", daylyPlayers);
  userSelection[2].addEventListener("click", allTimePlayers);

};
