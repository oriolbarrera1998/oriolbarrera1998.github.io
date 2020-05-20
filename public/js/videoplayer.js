$(document).ready(function(){

    var $source = $("#clip-track")[0],
        $progress = $("#progress"),
        $play = $("#play"),
        $pause = $("#pause"),
        $mute = $("#mute"),
        $volume = $("#volume"),
        $level = $("#level");
    
    var totalTime,
        timeBar,
        newTime,
        volumeBar,
        newVolume,
        cursorX,
        currTime,
        dataVisibility;
    
    var interval = 50; //ms.
    
    function barState(){
      if (!$source.ended){
        var totalTime = parseInt($source.currentTime / $source.duration * 100);
        $progress.css({"width": totalTime + "%"});
      }
      else if ($source.ended){
        clipPause();
        $progress.css({"width": "100%"});
      };
      reveal(); 
    };
    
    $("#track").click(function(e){
      if (!$source.paused){
        var timeBar = $(this).width();
        var cursorX = e.pageX - $(this).offset().left;
        var newTime = cursorX * $source.duration / timeBar;
        $source.currentTime = newTime;
        $progress.css({"width": cursorX + "%"});
      };
      reveal();
    });
    $pause.hide();
    
    function clipPlay(){
      $source.play();
      $pause.show();
      $play.hide();
      interval = setInterval(barState, interval);
    };
    
    function clipPause(){
            $source.pause();
            $play.show();
            $pause.hide();
            clearInterval(interval);
    };
    
    function clipPlayPause(){
      if ($source.paused){
            clipPlay();
      }
      else {
            clipPause();
      };
    };
    $("#play, #pause").click(function(){
      clipPlayPause();
    });
    function stop(){
      $source.pause();
      $source.currentTime = 0;
      $progress.css({"width": "0%"});
      $play.show();
      $pause.hide();
      clearInterval(interval);
    };
    
    $("#stop").click(function(){
      stop();
    });
    $volume.click(function(e){
      var volumeBar = $volume.width();
      var cursorX = e.pageX - $volume.offset().left;
      var newVolume = cursorX / volumeBar;
      $source.volume = newVolume;
      $level.css({"width": cursorX + "px"});
      $source.muted = false;
      $mute.removeClass("mute");
    });
    function mute(){
      if ($source.muted){
        $source.muted = false;
        $mute.removeClass("mute");
      }
      else {
        $source.muted = true;
        $mute.addClass("mute");
      };
    };
    
    $mute.click(function(){
      mute();
    });
    $("#full").on('click', function(){
      if ($source.requestFullscreen){
        $source.requestFullscreen();
      }
      else if ($source.mozRequestFullScreen){
        $source.mozRequestFullScreen();
      }
      else if ($source.webkitRequestFullScreen){
        $source.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      };
    });
    if (document.addEventListener){
      document.addEventListener('webkitfullscreenchange', exitHandler, false);
      document.addEventListener('mozfullscreenchange', exitHandler, false);
      document.addEventListener('fullscreenchange', exitHandler, false);
      document.addEventListener('MSFullscreenChange', exitHandler, false);
    };
    
    function exitHandler(){
      var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
      if (!state){
        if ($source.paused){
          $play.show();
          $pause.hide();
        }
        else {
          $pause.show();
          $play.hide();
        };
        $level.css({"width": $source.volume * $volume.width() + "px"});
        if ($source.muted){
          $mute.addClass("mute");
        }
        else {
          $mute.removeClass("mute");
        };
      };
    };
    function reveal(){
      $(".track-btn").each(function(){
        var dataVisibility = $(this).attr("data-visibility");
        if(dataVisibility){
          var currTime = $source.currentTime;
          var visibleInterval = dataVisibility.split('-');
          if (visibleInterval[0]>currTime || visibleInterval[1]<currTime) {
            $(this).hide();
          }
          else {
            $(this).show();
          };
        };
      });
    };
    
    $("*[class*='track-btn']").click(function(){
      clipPause();
    });
    
    $(".modalButton").click(function(e){
      e.preventDefault();
      $(".modal2").css({"display":"block"});
    });
    
    $(".close-modal, .modal-sandbox").click(function(){
      $(".modal2").css({"display":"none"});
        clipPlay();
    });
    
    document.getElementById("btn-2").addEventListener("click", function(){
        window.open("https://twitter.com/explore", '_blank');
    });
    document.getElementById("btn-3").addEventListener("click", function(){
        window.open("https://www.linkedin.com/in/oriol-barrera-rodr%C3%ADguez-938589164/", '_blank');
    });
    });