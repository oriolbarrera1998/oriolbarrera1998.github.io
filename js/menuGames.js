$(document).ready(function () {
  $("#buttonPuzzle").hover(function () {
    $(".titleRadio")[0].innerText = "LA EMISSIÓ";
  });
  $("#buttonMemory").hover(function () {
    $(".titleRadio")[0].innerText = "LA TRANSMISSIÓ";
  });
  $("#buttonEsbrina").hover(function () {
    $(".titleRadio")[0].innerText = "LA RECEPCIÓ";
  });
  $("#buttonQuiz").hover(function () {
    $(".titleRadio")[0].innerText = "LA VALIDACIÓ";
  });
});

// creem la cookiee
function funcio() {
  var username = document.querySelector("#username");
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
  /*
    mirar que el nom no sigui buit
    */
  document.querySelector(".cover1").style.display = "none";
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

        if(currentUser.esbrina) {
          
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

comprovarJocs();
