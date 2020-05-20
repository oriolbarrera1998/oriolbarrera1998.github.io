   <template>
     <section class="twitter">
        
		<div class="contentTitle">
            <h1 class="titleProject">
                SKILLS
            </h1>
        </div>
	<div class="intro-block" id="lod">
		<div class="centerfold-wrap">
			<div class="hex-master-wrap">
				<div class="grid-1">
					<div class="hex-wrap backend" data-title="JAVASCRIPT" data-content="a1-desc" data-color="#333333">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
					<div class="hex-wrap frontend" data-title="VUE" data-content="a2-desc" data-color="#16A085">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="grid-2">
					<div class="hex-wrap html" data-title="PHP" data-content="a3-desc" data-color="#2C3E52">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img  style="width: 100px !important" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
					<div class="hex-wrap css" data-title="LARAVEL" data-content="a4-desc" data-color="#FF2D20">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img style="width: 100px !important" src="https://desarrolloweb.com/storage/tag_images/actual/7sY8a8whbcQcFvkV3nQGiCjXYITUgdLALYqlFzmM.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
					<div class="hex-wrap jquery"  data-title="SAPUI5" data-content="a5-desc" data-color="#0083de">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img style="width: 80px !important; height: 80px !important"  src="https://www.seekpng.com/png/full/145-1457731_2-color-tracks-sap-ui-5-logo.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="grid-3">
					<div class="hex-wrap gui" data-title="JAVA" data-content="a6-desc" data-color="#E34C26">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img style="width: 100px !important; height: 100px !important" src="https://i.blogs.es/8d2420/650_1000_java/1366_2000.png"></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
					<div class="hex-wrap seo" data-title="C#" data-content="a7-desc" data-color="#953DAC">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img style="width: 100px !important; height: 100px !important"  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="code-display">
				<div class="code-description">
					<div v-for="skill in skills" :key="skill.id" :class="'a'+skill.id+'-desc'">
						<p class="code-title"> {{skill.nom}} </p>
						<p><span>Duration: </span>{{ skill.duracio }}</p>
						<p><span>Experience: </span>{{ skill.experiencia }}</p>
						<div class="code-icon"></div>
					</div>
				</div>

			</div>
		<div class="hoverblock"></div>
		</div> <!-- End Centerfold-Wrap -->
	</div>

        
    </section>
</template>

<style>
* {
box-sizing: border-box;
margin: 0;
}
section.intro {
position: relative;
height: 100vh;
width: 100%;
background: #f6f6f6;
background: -moz-radial-gradient(center, ellipse cover, #f6f6f6 1%, #d3d3d3 100%);
background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(1%,#f6f6f6), color-stop(100%,#d3d3d3));
background: -o-radial-gradient(center, ellipse cover, #f6f6f6 1%,#d3d3d3 100%);
background: -ms-radial-gradient(center, ellipse cover, #f6f6f6 1%,#d3d3d3 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6f6f6', endColorstr='#d3d3d3',GradientType=1 );
overflow: hidden;
z-index: 1;
}
.welcome {
font-size: 60px;
text-align: center;
color: #333;
}
.intro-block {
position: relative;
display: flex;
align-items: center;
height: 100%;
}
.hex-bg-big-text {
position: absolute;
z-index: -1;
height: 100%;
width: 100%;
}
.centerfold-wrap {
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex: 1;
}
.hoverblock {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
.hover-notify {
position: absolute;
bottom: -80px;
left: 0;
width: 100%;
text-align: center;
font-size: 50px;
}
.code-display {
position: relative;
color: #f6f6f6;
width: 600px;
height: 260px;
}
.code-display::before {
content: "";
position: absolute;
top: -70px;
left: 0;
font-size: 3.0rem;
color: #333;
}
.code-display h1 {
color: #333;
}
.code-description {
width: 100%;
height: 100%;
color: #333;
}
.code-description * {
display: none;
}
.code-description > div {
padding: 0px 40px;
font-size: 14px;
border-left: 2px solid #DDDDDD;
}
.desc-active {
display: block;
position: relative;
}
.desc-active > p {
display: block;
margin: 0;
}
.desc-active > p > span {
display: inline-block;
width: 125px;
}
p.code-title {
position: relative;
font-size: 4rem;
}
.desc-active::after {
position: absolute;
height: 100%;
width: 100%;
top: 0;
left: 0;
content: "";
opacity: .2;
z-index: -1;
}
.a1-desc.desc-active::after {
background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}
.a2-desc.desc-active::after {
background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}
.a3-desc.desc-active::after {
background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}
.a4-desc.desc-active::after {
background: url(https://desarrolloweb.com/storage/tag_images/actual/7sY8a8whbcQcFvkV3nQGiCjXYITUgdLALYqlFzmM.png);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}
.a5-desc.desc-active::after {
background: url(https://www.seekpng.com/png/full/145-1457731_2-color-tracks-sap-ui-5-logo.png);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}
.a6-desc.desc-active::after {
background: url(https://i.blogs.es/8d2420/650_1000_java/1366_2000.png);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}
.a7-desc.desc-active::after {
background: url(https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png);
background-repeat: no-repeat;
background-size: contain;
background-position: right center;
}
.hex-master-wrap {
position: relative;
height: 460px;
}
.border-1,
.border-2,
.border-3 {
position: absolute;
width: 100%;
height: 88px;
top: 46px;
left: 0;
border-left: 3px solid;
border-right: 3px solid;
border-radius: 8px;
z-index: 2;
border-color: #333;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
}
.border-2 {
transform: rotate(60deg);
}
.border-3 {
transform: rotate(120deg);
}
.border-3::before {
display: none;
position: absolute;
content: "";
bottom: 10%;
left: 42px;
width: 50%;
height: 83%;
background-color: rgba(255, 255, 255, 0);
border-top: 1px solid;
border-bottom: 1px solid;
border-color: white;
border-radius: 50%;
visibility: visible;
z-index: -1;
}
.intro-block .grid-1,
.intro-block .grid-2,
.intro-block .grid-3 {
display: flex;
align-items: center;
justify-content: center;
width: 75%;
}
.intro-block .grid-3 {
margin-bottom: -50px;
}
.intro-block .grid-2,
.intro-block .grid-3 {
margin-top: -50px;
}
.hex-wrap {
position: relative;
width: 150px;
height: 190px;
margin: 0 1em 0 0;
border-top-left-radius: 100%;
border-top-right-radius: 100%;
border-bottom-left-radius: 100%;
border-bottom-right-radius: 100%;
border: 0px solid;
transform: scale(1.1);
}
.hex-wrap .label {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
width: 100%;
height: 58px;
color: #f6f6f6;
display: flex;
justify-content: center;
align-items: center;
z-index: 3;
}
.hex-wrap .label svg, .hex-wrap .label img {
height: 50px;
width: 50px;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
}
.hexagon {
width: 300px;
height: 150px;
margin: 15px 0 0 -75px;
overflow: hidden;
visibility: hidden;
-webkit-transform: rotate(120deg);
-moz-transform: rotate(120deg);
-ms-transform: rotate(120deg);
-o-transform: rotate(120deg);
transform: rotate(90deg);
cursor: pointer;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
}
.hex-inner-1 {
overflow: hidden;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
-webkit-transform: rotate(-60deg);
-moz-transform: rotate(-60deg);
-ms-transform: rotate(-60deg);
-o-transform: rotate(-60deg);
transform: rotate(-60deg);
}
.hex-inner-2 {
position: relative;
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-position: 50%;
visibility: visible;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
-webkit-transform: rotate(-60deg);
-moz-transform: rotate(-60deg);
-ms-transform: rotate(-60deg);
-o-transform: rotate(-60deg);
transform: rotate(-60deg);
overflow: hidden;
}
.hex-inner-2::before, .hex-inner-2::after {
position: absolute;
background-repeat: no-repeat;
background-position: 50%;
background-size: contain;
top: 0;
left: 0;
height: 110%;
width: 110%;
content: "";
-webkit-transform: rotate(30deg);
transform: rotate(30deg);
}
.hex-init {
position: absolute;
top: 46px;
left: 0px;
height: 46%;
width: 100%;
z-index: 9;
transform: rotate(-60deg);
cursor: pointer;
}
.hex-init::after {
width: 100%;
height: 100%;
display: block;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
content: "";
transform: rotate(-60deg);
}
.hex-init::before {
width: 100%;
height: 100%;
display: block;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
content: "";
transform: rotate(60deg);
}
</style>

<script>
    var mask_script = require('../../../public/js/scriptwhatido.js');
    export default {
        data() {
            return {
                skills: [],
                skill: {
                    'id': null,
                    'nom': '',
                    'duracio': '',
                    'experiencia': '',
                }
            }
		},
		created() {
			this.getSkills();
		},
        methods: {
            getSkills () {
                let me = this;
                axios.get('/itsmyturn/public/api/skills').then(function (response) {
                    me.skills = response.data;
                    const items = data.items;
                    return(items);
                })
                .catch (function (error) {
                    console.log(error);
                })
            },
        }
    }
</script>

