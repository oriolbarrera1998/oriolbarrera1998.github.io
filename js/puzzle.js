document.addEventListener("DOMContentLoaded", function () {
  var box = $(".box"),
    orginal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    temp = orginal,
    x = [],
    sec = 0,
    date1,
    date2,
    moves = 0,
    mm = 0,
    ss = 0,
    upIMG,
    images = [
      "http://www.voceslab.com/wp-content/uploads/2017/09/voz-sintetica.jpg",
      "https://mnactec.cat/assets/uploads/gallery/imatgeweb-600x396.jpg",
      "http://blogingenieria.com/wp-content/uploads/2014/04/antena-radio.jpg",
    ];
  img = 0;
  var points;
  var secs;
  var totaltime = -1;

  document.querySelector(".me").style.backgroundImage =
    "url(" + images[0] + ")";

  // Funció que fa servir el temporitzador per anar sumant cada segon.
  function update(percent) {
    var deg;
    if (percent < totaltime / 2) {
      deg = 90 + (360 * percent) / totaltime;
    } else if (percent >= totaltime / 2) {
      deg = -90 + (360 * percent) / totaltime;
    }
  }

  // Funcio que s'executa quan clickem a "Començar", crida a la funció Start i comença a funcionar el temporitzador.
  document.querySelector(".start").addEventListener("click", function () {
    $(".start")
      .delay(100)
      .slideUp(500);
    document.querySelector(".full").style.display = "none";
    $(".pre_img").addClass("prevent_click");

    date1 = new Date();
    Start();

    var count = parseInt(document.querySelector(".timeClock").innerText);
    myCounter = setInterval(function () {
      count += 1;
      document.querySelector(".timeClock").innerText = count;
      update(count);

      if (count == totaltime) clearInterval(myCounter);
    }, 1000);
    return 0;
  });

  // Funció que s'executa quan comença el joc i que crida a totes les funcions que fan que el joc funcioni. A part crea atributs per als divs i els hi dona un numero.
  function Start() {
    document.querySelector(".start").style.display = "none";
    divRandom();
    cambiarBackground(img);
    var count = 0,
      a,
      b,
      A,
      B;
    $(".me").click(function () {
      count++;
      if (count == 1) {
        a = this.getAttribute("data-bid");
        document.querySelector(".me_" + a).style.opacity = ".65";
      } else {
        b = this.getAttribute("data-bid");
        document.querySelector(".me_" + a).style.opacity = "1";
        if (a == b) {
        } else {
          document.querySelector(".me_" + a).classList.add("me_" + b);
          document.querySelector(".me_" + a).classList.remove("me_" + a);
          this.classList.add("me_" + a);
          this.classList.remove("me_" + b);
          document.querySelector(".me_" + a).setAttribute("data-bid", a);
          document.querySelector(".me_" + b).setAttribute("data-bid", b);
        }
        moves++;
        intercambiar(a, b);
        esCorrecto(a);
        esCorrecto(b);
        a = b = count = A = B = 0;
      }
      if (arraysEqual(x)) {
        clearInterval(myCounter);
        date2 = new Date();
        recuperarTiempo();
        muestraResultado();
        return 0;
      }
    });
    return 0;
  }

  // Ordena els divs de manera random en la taula.
  function divRandom() {
    var i;
    for (i = orginal.length - 1; i >= 0; i--) {
      var flag = recuperarRandom(0, i);
      x[i] = temp[flag];
      temp[flag] = temp[i];
      temp[i] = x[i];
    }
    for (i = 0; i < orginal.length; i++) {
      box.append(
        '<div  class="me me_' + x[i] + ' tile" data-bid="' + x[i] + '"></div>'
      );
    }
    i = 17;
    return 0;
  }

  // Funció que s'executa quan clickem a un div del Puzzle i que ens permet saber si el puzzle està completat.
  function arraysEqual(arr) {
    var i;
    for (i = orginal.length - 1; i >= 0; i--) {
      if (arr[i] != i) return false;
    }
    return true;
  }
  // Comproba si la posició del div es correcte i si ho és bloqueja el div.
  function esCorrecto(N1) {
    var pos = x.indexOf(parseInt(N1, 10));
    if (pos != N1) {
      return;
    }
    $(".me_" + N1).addClass("correct , prevent_click ");
    return;
  }

  // Intercanvia les posicions seleccionades.
  function intercambiar(N1, N2) {
    var first = x.indexOf(parseInt(N1, 10)),
      second = x.indexOf(parseInt(N2, 10));
    x[first] = parseInt(N2, 10);
    x[second] = parseInt(N1, 10);
    return 0;
  }

  // Crea un numero random.
  function recuperarRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Funció que fa els calculs per treure el temps, els moviments i la puntuació
  function recuperarTiempo() {
    var diff = date2 - date1;
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    secs = mm * 60 + ss;
    points = 0.5 / secs + (0.5 / moves) * 1000;
    return 0;
  }

  // Posa a cada div la seva imatge.
  function cambiarBackground(img) {
    if (img != 3) {
      $(".me").css({
        "background-image": "url(" + images[img] + ")"
      });
      return;
    } else $(".me").css({ "background-image": "url(" + upIMG + ")" });
  }

  $(".pre_img li").click(function () {
    img = this.getAttribute("data-bid");
    cambiarBackground(img);
  });

  // Mostra els resultats
  function muestraResultado() {
    document.querySelector("#min").innerHTML = mm;
    document.querySelector("#sec").innerHTML = ss;
    document.querySelector("#moves").innerHTML = moves;
    document.querySelector("#points").innerHTML = points.toFixed(0);
    setTimeout(function () {
      $(".cover").slideDown(350);
    }, 1050);

    //Afegim la puntuació a la cookie
    var currentUser = getCookie("currentUser");
    currentUser = JSON.parse(currentUser);
    currentUser.puntuacio =
      parseInt(currentUser.puntuacio) + parseInt(points.toFixed(0));
    currentUser.puzzle = true;
    currentUser = JSON.stringify(currentUser);
    setCookie("currentUser", currentUser, 365);

    return 0;
  }
  // Funcio que ens porta al principi.
  document.querySelector(".OK").addEventListener("click", function () {
    onclick = "location.href='jocsMenu.html'";
  });
  // Funcio que reseteja el puzzle.
  document.querySelector(".reset").addEventListener("click", function () {
    document.querySelector("#cameraOn").style.display = "inline";
    clearInterval(myCounter);
    totaltime = -1;
    document.querySelector(".timeClock").innerText = 0;
    var tiles = document.querySelectorAll(".tile");
    for (var i = 0; i < tiles.length; i++) {
      tiles[i].remove();
    }
    document.querySelector(".full").style.display = "block";
    document.querySelector(".start").style.display = "block";

    $(".pre_img").removeClass("prevent_click");

    temp = orginal;
    x = [];
    moves = ss = mm = 0;
    return 0;
  });

  document.querySelector("#upfile1").addEventListener("click", function () {
    $("#file1").trigger("click");
  });
  document.querySelector("#cameraOn").addEventListener("click", function () {
    cambiarBackground(4);
    document.querySelector("#videoElement").style.display = "block";
  });
  $("#file1").change(function () {
    readURL(this);
  });


  // Funció que llegeix el ficher que recollim i que l'afegeix al puzzle
  function readURL(input) {
    if (input.files && input.files[0]) {
      document.querySelector("#videoElement").style.display = "none";
      var reader = new FileReader();

      reader.onload = function (e) {
        upIMG = e.target.result;
        img = 3;
        cambiarBackground(3);
      };
      reader.readAsDataURL(input.files[0]);
      document.querySelector(".start").style.pointerEvents = "auto";
    }
  }
});
