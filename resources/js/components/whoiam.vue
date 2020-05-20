    <template>
     <section class="twitter">
        <div class="container">
            <h1 class="titleProject">
                    ABOUT ME
                </h1>
            <div class="row">
                <div class="col-6">
                  <h2 class="section-heading" style="font-weight: bold">Hi, I'm Oriol</h2>
                <p class="lead">I'm a fullstack programmer who loves coding, I completed two CFGS, and have worked for two companies as an intern, in one of them I worked developing mobile APPs with Flutter and Ionic, and the other one I worked developing websites with Fiori SAPUI5.  </p>
                <p class="lead">I want to focus myself on developing websites, trying to innovate and satisfy my costumer demands. I prefer working with a team, I think is a good way to work like and I consider myself as a capable self-taught person.</p>
                </div>
                <div class="col-6">
                    <img class="img-circle" src="https://i.imgur.com/cPXwXmO.jpg" style="height: 35vh" alt="">
                </div>
            </div>
            <div class="intro">
            <h3>Working Experience</h3>
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
            <div class="process process2"> <h4>EY Web Developer</h4><h5>January 2020 - Now</h5> </div>
            <div class="process process1"> <h4>Serca App Developer</h4><h5>January 2019 - July 2019</h5> </div>
            </div>

            <div class="intro2">
            <h3>Education</h3>
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
            <div class="process process2"> <h4>CFGS DAW</h4><h5>September 2019 - June 2020</h5> </div>
            <div class="process process1"> <h4>CFGS DAM</h4><h5>September 2017 - June 2019</h5> </div>
            </div>
            <span>
                <a href="https://imgur.com/a/iSgB72g" class="buttonSWOAT" target="_blank">SWOT analysis</a>
            </span>
        </div>
        
    </section>
</template>

<style>
.img-circle {
  border: 1px outset rgba(255, 255, 255, 0.3);
  box-shadow: 1px 1px 1px rgba(0,0,0,0.6);
  float: right;
    border-radius: 50%;
}
.intro{
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 15%;
  margin-left: 10%;
}
.intro2{
  position: absolute;
  bottom: 0;
  margin-bottom: 15%;
  margin-left: 10px;

}
.intro h3{
  line-height: 50px;
  font-weight: bold;
}
.intro2 h3{
  line-height: 50px;
  font-weight: bold;

}

.intro .process{
  position: relative;
  margin-left: 20px;
  margin-top: 10px;
  padding: 8px;
  border-left: solid 2px black;
  line-height: 2px;
}
.intro2 .process{
  position: relative;
  margin-left: 20px;
  margin-top: 10px;
  padding: 8px;
  border-left: solid 2px black;
  line-height: 2px;
}

  .process h5{
    color: #0F637F;
}
.buttonSWOAT {
    text-decoration: none !important;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 3px;
    font-family: "Open Sans";
    font-weight: lighter;
    font-size: 14px;
    display: inline-block;
    padding: 15px 20px;
    position: absolute !important;
    z-index: 1;
    right: 0;
    overflow: hidden;
    bottom: 0;
    background-color: black;
    margin: 40px;
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.1, 0.2, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.2, 1);
}
.buttonSWOAT:before, .buttonSWOAT:after {
  position: absolute;
  content: "";
  display: block;
}
.buttonSWOAT:before {
  top: -120px;
  left: 50px;
  z-index: -1;
  width: calc(100% + 140px);
  height: 100px;
  -webkit-transition: all 0.4s cubic-bezier(0.25, 0.1, 0.2, 1);
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.2, 1);
  -webkit-transform: skew(70deg);
          transform: skew(70deg);
  background: white;
}
.buttonSWOAT:after {
  top: 0;
  left: 0;
  z-index: -2;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border: 1px solid #fff;
}
.buttonSWOAT:hover:before {
  left: -50px;
  top: -20px;
  
}

</style>

<script>

    export default {
        
    }
</script>

