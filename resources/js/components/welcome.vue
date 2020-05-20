    <template>
     <section class="twitter">
	 	<div class="content">
			<div class="int-clip-box">
				<div class="clip-layer">
					<video id="clip-track" class="clip" preload="auto">
					<source :src="'images/video.mp4'" type="video/mp4">
					</video>
				</div>
				<div class="int-layer">
					<div class="int">
						<div id="btn-1" class="track-btn modalButton" data-visibility="20.1-24.4">
							<div class="ripple"></div>
						</div>
						<div id="btn-2" class="track-btn" data-visibility="25.4-30.0">
							<div class="ripple"></div>
						</div>
						<div id="btn-3" class="track-btn" data-visibility="25.4-30.0">
							<div class="ripple"></div>
						</div>
						<div id="btn-4" class="track-btn" data-visibility="73.8-30">
							<div class="ripple"></div>
						</div>
						<div id="btn-5" class="track-btn" data-visibility="85.55-46.34">
							<div class="ripple"></div>
						</div>
						<div id="btn-6" class="track-btn" data-visibility="90.1">
							<div class="ripple"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="controls-box">
			<div id="player">
				<div id="track">
				<div id="progress"></div>
				</div>
				<div id="controls">
				<div class="controllers" id="full"></div>
				<div class="controllers" id="play"></div>
				<div class="controllers" id="pause"></div>
				<div class="controllers" id="stop"></div>
				<div class="controllers" id="mute"></div>
				<div id="volume">
					<div id="level"></div>
				</div>
				</div>
			</div>
			</div>
			<div class="modal2">
			<div class="modal-sandbox"></div>
			<div class="modal-box">
				<div class="modal-body1">
				<div class="close-modal1">&#10006;</div>
				<h3>Broggi</h3>
				<p>
					This is the most recent project I've done, you can check it's source code from this link.
					<a href="https://github.com/oriolbarrera1998/Broggi"> Broggi Project </a>
				</p>
				</div>
			</div>
			</div>
		</div>
    </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
 html {
	 font-family: Arial;
	 font-size: 16px;
	 background: #89DAD3;
	 height: 100%;
}

 .twitter {
	 box-shadow: inset 0px 0px 64px 0px rgba(50,50,50,0.75);
	 position: relative;
	 width: 75%;
	 float: right;
	 height: 100vh;
}
 .twitter .container {
	 display: flex;
	 flex-direction: column;
	 align-items: center;
}
.container {
	 margin-top: 15% !important;
}
 .twitter a {
	 position: relative;
}
 .twitter a img {
	 width: 48px;
	 height: 48px;
}
 .twitter p {
	font-size: 1.2em;
	color: #0F637F;
	margin-top: 20px;
	font-weight: 500;
    line-height: 1.2;
}

.int-clip-box {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -60%);
  -ms-transform: translate(-50%, -60%);
  -o-transform: translate(-50%, -60%);
  transform: translate(-50%, -60%);
  background: transparent;
}

video {
  width: 100%;
}

.int-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
}

/* Controls box */
.controls-box {
	z-index: 1;
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 0;
}

#player {
  overflow: hidden;
}
#track {
  width: 100%;
  height: 6px;
  background: #72B0C1;
  overflow: hidden;
  cursor: pointer !important;
}

#progress {
  width: 0%;
  height: 100%;
  background: #009688;
}
#controls {
  padding: 32px 0;
  text-align: center;
  vertical-align: middle;
}

#controls > div {
  vertical-align: middle;
}
.controllers {
  display: inline-block;
  position: relative;
  margin: 4px 12px;
  cursor: pointer;
}
#full {
  width: 18px;
  height: 18px;
  border: 3px solid #26A69A;
}

#full:hover {
  border: 3px solid #009688;
}
#play {
  position: relative;
  border-style: solid;
  border-width: 10px 0 10px 16px;
  border-color: transparent transparent transparent #26A69A;
}

#play:hover {
  border-color: transparent transparent transparent #009688;
}
#pause {
  position: relative;
  width: 16px;
  height: 18px;
}
#pause:before {
  content: "";
  position: absolute;
  width: 6px;
  height: 18px;
  top: 0;
  left: 0;
  background: #26A69A;
}
#pause:after {
  content: "";
  position: absolute;
  width: 6px;
  height: 18px;
  top: 0;
  right: 0;
  background: #26A69A;
}
#pause:hover:before,
#pause:hover:after {
  background: #009688;
}
#stop {
  width: 18px;
  height: 18px;
  background: #26A69A;
}
#stop:hover {
  background: #009688;
}
#mute {
  position: relative;
  border-style: solid;
  border-width: 10px 14px 10px 0;
  border-color: transparent #26A69A transparent transparent;
}
#mute:after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  top: 50%;
  margin-top: -4px;
  right: -8px;
  background: #26A69A;
}
#mute:before {
  content: "";
  position: absolute;
  width: 4px;
  height: 8px;
  top: 50%;
  margin-top: -4px;
  left: 16px;
  background: #26A69A;
  border-radius: 0 100% 100% 0;
}
#mute:hover,
.mute {
  border-color: transparent #009688 transparent transparent !important;
}
#mute:hover:after,
.mute:after {
  background: #009688 !important;
}
#mute:hover:before,
.mute:before {
  content: none !important;
}
#volume {
  display: inline-block;
  width: 60px;
  height: 6px;
  margin-right: -60px;
  background: #26A69A;
  visibility: hidden;
  cursor: pointer;
}
#level {
  width: 100%;
  height: 100%;
  background: #009688;
}
#controls:hover #volume {
  visibility: visible;
}
*[class*="track-btn"] {
  position: absolute;
  background: rgba(244,143,177,.5);
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
}

*[class*="track-btn"]:after,
*[class*="track-btn"]:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 4px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 2px;
  background: #DDDDDD;
  z-index: 2;
}

*[class*="track-btn"]:after {
  -webkit-transform: translate(-50%, -50%) rotate(90deg);
  -ms-transform: translate(-50%, -50%) rotate(90deg);
  -o-transform: translate(-50%, -50%) rotate(90deg);
  transform: translate(-50%, -50%) rotate(90deg);
}

*[data-visibility] {
  display: none;
}
.ripple,
.ripple:before,
.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 0px;
  height: 0px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: rgba(255,255,255,.3);
  border-radius: 100%;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3);
  animation: ripple linear 1.8s infinite;
  cursor: pointer;
  z-index: 1;
}

.ripple:before {
  animation-delay: .6s;
}

.ripple:after {
  animation-delay: 1.2s;
}

@keyframes ripple {
  from {
    width: 0px;
    height: 0px;
    background: rgba(255,255,255,.3);
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3);
  }
  to {
    width: 120px;
    height: 120px;
    background: rgba(255,255,255,0);
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0);
  }
}

#btn-1 {
    width: 55.5%;
    height: 55%;
    top: 22%;
    left: 4%;
}

#btn-2 {
	width: 23%;
    height: 28.5%;
    top: 36%;
    left: 44%;
}

#btn-3 {
  	width: 23%;
	height: 28.5%;
	top: 36%;
	left: 69.5%;
}

.modal2,
.modal-box {
  z-index: 900;
}

.modal-sandbox {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
}

.modal2 {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(255,255,255,.6);
  overflow: auto;
}

.modal-box {
  position: relative;
  width: 80%;
  top: 50%;
  -webkit-transform: translateY(-65%);
  -ms-transform: translateY(-65%);
  -o-transform: translateY(-65%);
  transform: translateY(-65%);
  max-width: 620px;
  margin: 0 auto;
  box-shadow:
    0 15px 30px rgba(0,0,0,0.30),
    0 10px 10px rgba(0,0,0,0.20);
  animation: modalbox .3s cubic-bezier(.42,1.12,.68,1.44);
}

.modal-body1 {
  background: #FFFFFF;
  padding: 40px 10% 50px 10%;
  line-height: 1.6em;
  color: #333333;
}

.close-modal1 {
  text-align: right;
  cursor: pointer;
}

@keyframes modalbox {
  from {
    top: -250px;
    opacity: 0;
  }
  to {
    top: 50%;
    opacity: 1;
  }
}

</style>

<script>
    export default {
        mounted() {
			console.log("asd");
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
				
				var interval = 50; 
				
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
					
						debugger;
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
				
				$(".close-modal1, .modal-sandbox").click(function(){
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
		}
    }
</script>

