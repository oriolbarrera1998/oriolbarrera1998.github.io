<template>
    <section class="twitter">
        <div class="content">
                <h1 class="titleProject">
                    PROJECTS
                </h1>
                <div class="card">
                        <div class="icon"><i class="material-icons md-36">local_hospital</i></div>
                        <p class="title">Broggi Project</p>
                        <p class="text">Click to see the project I did with Pol and Lluís.</p>
                </div>
                <div class="card">
                    <div class="icon"><i class="material-icons md-36">museum</i></div>
                    <p class="title">mNACTEC Project</p>
                    <p class="text">Click to see the project I did with Roger, Lluís and Martí.</p>
                </div>
                <div class="card">
                    <div class="icon"><i class="material-icons md-36">sports_soccer</i></div>
                    <p class="title">Sant Cugat Project</p>
                    <p class="text">Click to see the project I did with Ferran and Marc.</p>
                </div>
            </div>
    </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body {
	 width: 100vw;
	 background-color: #1d1d1d;
	 margin: 0;
	 font-family: 'Nunito Sans', sans-serif;
}

.titleProject {
    display: flex;
    position: absolute;
    top: 10%;
	font-size: 4rem;
    font-weight: bold;
	font-family: 'Montserrat', sans-serif;
}
 .wrapper {
	 width: 100vw;
	 margin: 0 auto;
	 height: 400px;
	 background-color: #161616;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 position: relative;
	 transition: all 0.3s ease;
}

.card-deck {
    justify-content: center;
}

 .content {
	 max-width: 1024px;
	 width: 100%;
     height: 100%;
	 padding: 0 4%;
	 margin: 0 auto;
	 display: flex;
	 justify-content: center;
	 align-items: center;
}
 @media (min-width: 576px) {
	 .card-deck .card {
		 flex: auto !important;
	}
}
 .card {
	 width: 100%;
	 max-width: 300px;
	 height: 250px;
	 background-color: #348F89;
	 margin: 10px;
	 border-radius: 10px;
	 box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
	 border: 2px solid rgba(7, 7, 7, 0.12);
	 font-size: 16px;
	 transition: all 0.3s ease;
	 position: relative;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 flex-direction: column;
	 cursor: pointer;
	 transition: all 0.3s ease;
}
 .icon {
	 margin: 0 auto;
	 width: 100%;
	 height: 80px;
	 max-width: 80px;
	 background: linear-gradient(90deg, #72B0C1 0%, #A4B3BA 40%, rgba(0, 0, 0, 0.28) 60%);
	 border-radius: 100%;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 color: black;
	 transition: all 0.8s ease;
	 background-position: 0px;
	 background-size: 200px;
}
 .material-icons.md-18 {
	 font-size: 18px;
}
 .material-icons.md-24 {
	 font-size: 24px;
}
 .material-icons.md-36 {
	 font-size: 36px;
}
 .material-icons.md-48 {
	 font-size: 48px;
}
 .card .title {
	 width: 100%;
	 margin: 0;
	 text-align: center;
	 margin-top: 30px;
	 color: white;
	 font-weight: 600;
	 text-transform: uppercase;
	 letter-spacing: 4px;
}
 .card .text {
	 width: 80%;
	 margin: 0 auto;
	 font-size: 13px;
	 text-align: center;
	 margin-top: 20px;
	 color: white;
	 font-weight: 200;
	 letter-spacing: 2px;
	 opacity: 0;
	 max-height: 0;
	 transition: all 0.3s ease;
}
 .card:hover {
	 height: 270px;
}
 .card:hover .info {
	 height: 90%;
}
 .card:hover .text {
	 transition: all 0.3s ease;
	 opacity: 1;
	 max-height: 40px;
}
 .card:hover .icon {
	 background-position: -120px;
	 transition: all 0.3s ease;
}
 .card:hover .icon i {
	 background: white;
	 -webkit-background-clip: text;
	 -webkit-text-fill-color: transparent;
	 opacity: 1;
	 transition: all 0.3s ease;
}
 
</style>

<script>
    export default {
		data: {

		}, 
		methods: 
		{
		}
	}
</script>

