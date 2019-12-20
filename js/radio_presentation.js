window.HTML5PRO = window.HTML5PRO || {};
HTML5PRO.APPS = HTML5PRO.APPS || {};

YUI().use(["node", "event-move"], function(Y) {
  HTML5PRO.APPS.Radio = function() {
    var audio,
      audioChiado,
      audioList = Y.one("audio"),
      audioContainner = Y.one("#audio_containner"),
      audioSource,
      volumeAudio = 1,
      anguloAtual = 0,
      anguloInicial = null,
      tuner = Y.one(".tuner .controllerCont"),
      tunerRotElement = Y.one(".tuner .controller"),
      tunerCenterX = tuner.getXY()[0] + tuner._node.offsetWidth / 2,
      tunerCenterY = tuner.getXY()[1] + tuner._node.offsetHeight / 2,
      tunerDown = false,
      numChannels = 10,
      displayWidth = 230,
      channel = 88.0,
      audios = {},
      volume = {},
      pointer = Y.one(".pointer"),
      pointerPosInicial = 0,
      pointerPosFinal = 227,
      volume = Y.one(".volume .controllerCont"),
      volumeRotElement = Y.one(".volume .controller"),
      volumeCenterX = volume.getXY()[0] + volume._node.offsetWidth / 2,
      volumeCenterY = volume.getXY()[1] + volume._node.offsetHeight / 2,
      volumeDown = false,
      volumeAnguloAtual = 0,
      volumeAnguloInicial = null,
      // blockMove = 0,
      playing = false /*;*/,
      speaker = Y.one(".speaker");
    bind = function() {
      Y.one(".on-off").on("click", onOff);

      Y.one("doc").on("keydown", function(e) {
        if (e.keyCode == 32) onOff(e);
      });

      Y.one(".global-radio").on("mouseup", function(e) {
        volumeDown = false;
        volumeAnguloInicial = null;
        anguloInicial = null;
        blockMove = 0;
      });

      // --- Volume --- //

      volume.on("click", function() {
        var tema = document.querySelector(".chrome h1");

        var pointerLeft = pointer.getStyle("left");
        pointerLeft = pointerLeft.substring(0, pointerLeft.length - 2);
        if (pointerLeft <= 8.33 * 26) {
          pointer.setStyle("left", parseFloat(pointerLeft) + 8.33);
        } else {
          pointer.setStyle("left", 0);
        }

        pointerLeft = pointer.getStyle("left");
        pointerLeft = pointerLeft.substring(0, pointerLeft.length - 2);

        if (parseFloat(pointerLeft) == 0) {
          tema.innerHTML = "";
          Y.one(speaker).setStyle("background", "url('../media/weave.jpg')");
        }

        switch (parseFloat(pointerLeft)) {
          case parseFloat((8.33 * 1).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_1.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 2).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_2.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 3).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_3.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 4).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_4.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 5).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_5.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 6).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_6.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 7).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_7.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 8).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_8.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 9).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_9.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 10).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_10.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 11).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_11.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 12).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_12.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 13).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_13.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 14).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_14.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 15).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_1.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 16).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_2.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 17).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_3.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 18).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_4.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 19).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_5.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 20).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_6.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 21).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_7.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 22).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_8.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 23).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_9.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 24).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_10.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 25).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_11.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 26).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_12.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 27).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_13.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
        }

        console.log(pointerLeft);
      });

      // --- Tuner --- //
      tuner.on("click", function() {
        var tema = document.querySelector(".chrome h1");

        var pointerLeft = pointer.getStyle("left");
        pointerLeft = pointerLeft.substring(0, pointerLeft.length - 2);
        if (pointerLeft >= 8.33) {
          pointer.setStyle("left", parseFloat(pointerLeft) - /*25*/ 8.33);
        }

        pointerLeft = pointer.getStyle("left");
        pointerLeft = pointerLeft.substring(0, pointerLeft.length - 2);

        if (parseFloat(pointerLeft) == 0) {
          tema.innerHTML = "";
          Y.one(speaker).setStyle("background", "url('../media/weave.jpg')");
        }

        switch (parseFloat(pointerLeft)) {
          case parseFloat((8.33 * 1).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_1.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 2).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_2.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 3).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_3.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 4).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_4.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 5).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_5.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 6).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_6.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 7).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_7.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 8).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_8.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 9).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_9.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 10).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_10.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 11).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_11.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 12).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_12.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 13).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_13.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 14).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/transmissio_14.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Transmissió";
            break;
          case parseFloat((8.33 * 15).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_1.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 16).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_2.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 17).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_3.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 18).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_4.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 19).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_5.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 20).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_6.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 21).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_7.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 22).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_8.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 23).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_9.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 24).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_10.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 25).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_11.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 26).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_12.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
          case parseFloat((8.33 * 27).toFixed(2)):
            Y.one(speaker).setStyle(
              "background",
              "url('../media/recepcio_13.jpg') no-repeat center"
            );
            Y.one(speaker).setStyle("backgroundSize", "100% 100%");
            tema.innerHTML = "Recepció";
            break;
        }
        console.log(pointerLeft);
      });
    };

    onOff = function(e) {
      e.preventDefault();
      if (playing) {
        playing = false;
        //setVolume(0);
        Y.one(".case").removeClass("on");
      } else {
        playing = true;
        //setVolume(volumeAudio);
        Y.one(".case").addClass("on");
      }
      //setVolume(volumeAudio);
    };

    return {
      init: function() {
        bind();
      }
    };
  };

  var radio = new HTML5PRO.APPS.Radio();
  radio.init();
});

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
