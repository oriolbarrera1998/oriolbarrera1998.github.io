// agafem idioma
var missatges = getCookie("idioma");
missatges = JSON.parse(missatges);

$(document).ready(function () {
  $("#buttonPuzzle").hover(function () {
    $(".titleRadio")[0].innerText = missatges.jocs.titol1;
  });
  $("#buttonMemory").hover(function () {
    $(".titleRadio")[0].innerText = missatges.jocs.titol2;
  });
  $("#buttonEsbrina").hover(function () {
    $(".titleRadio")[0].innerText = missatges.jocs.titol3;
  });
  $("#buttonQuiz").hover(function () {
    $(".titleRadio")[0].innerText = missatges.jocs.titol4;
  });
});

// creem la cookie del jugador
function funcio() {
  var username = document.querySelector("#username");
  var name = username.value;
  if (name.trim() != "" && isNaN(name) && name.length <= 8) {
    if (getCookie("currentUser") == "") {
      var currentUser = {
        nom: username.value,
        puzzle: false,
        memory: false,
        esbrina: false,
        puntuacio: 0,
        data: new Date()
      };
      currentUser = JSON.stringify(currentUser);
      setCookie("currentUser", currentUser, 365);
    }
    comprovarJocs();

    document.querySelector(".cover1").style.display = "none";
  }
}

/**
 * Mirem quins jocs ha fet hagi fet els jocs
 * */

function comprovarJocs() {
  // si la cokie exiteix
  if (getCookie("currentUser") != "") {
    var currentUser = getCookie("currentUser");
    currentUser = JSON.parse(currentUser);

    var buttonMemory = document.getElementById("buttonMemory");
    var buttonEsbrina = document.getElementById("buttonEsbrina");
    var buttonQuiz = document.getElementById("buttonQuiz");
    // comprovem que hagi fet el puzzle
    if (currentUser.puzzle) {
      buttonEsbrina.classList.add("disabled");
      buttonQuiz.classList.add("disabled");

      if (currentUser.memory) {
        buttonEsbrina.classList.remove("disabled");

        if (currentUser.esbrina) {
          buttonQuiz.classList.remove("disabled");
        }
      }
    } else {
      buttonMemory.classList.add("disabled");
      buttonEsbrina.classList.add("disabled");
      buttonQuiz.classList.add("disabled");
    }
  }
}

/*IDIOMA*/
function idioma() {
  // modal
  document.getElementById("username").placeholder = missatges.jocs.modal;
  
  // menu
  document.getElementById("titol").innerHTML = missatges.jocs.titol1;

  // items
  document.getElementById("item1").innerHTML = missatges.jocs.item1;
  document.getElementById("item2").innerHTML = missatges.jocs.item2;
  document.getElementById("item3").innerHTML = missatges.jocs.item3;
  document.getElementById("item4").innerHTML = missatges.jocs.item4;

}

comprovarJocs();
