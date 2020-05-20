<template>
    <aside class="sidebar" onload="onload()">
		
		<img class="logo" style="height: 15vh" :src="'images/logo3.png'" alt="">
        <nav class="nav">
        <ul>
            <li id="1" onclick="on1()" class="active"><router-link to="/welcome">Welcome</router-link></li>
            <li id="2" onclick="on2()"><router-link to="/whoiam">Who Am I</router-link></li>
            <li id="3" onclick="on3()"><router-link to="/whatidid">What I Did</router-link></li>
            <li id="4" onclick="on4()"><router-link to="/whatido">What I Do</router-link></li>
			<li id="5" onclick="on5()"><router-link to="/whatilldo">What I'll Do</router-link></li>
            <li id="6" onclick="on6()"><router-link to="/getintouch">Get In Touch</router-link></li>
        </ul>
        </nav>
    </aside>

   
</template>

<style>
 .sidebar {
	 position: fixed;
	 width: 25%;
	 height: 100vh;
	 background: #389992;
	 font-size: 0.80em;
}
.logo {
	margin-top: 10%;
	position: relative;
    left: 25%;
}
 .nav {
	 position: relative;
	 margin: 0 15%;
	 text-align: center;
	 top: 35%;
	 transform: translateY(-50%);
	 font-weight: bold;
}
 .nav ul {
	 padding: unset;
	 list-style: none;
	 margin: auto;
}
 .nav ul li {
	 position: relative;
	 margin: 3.2em 0;
}
 .nav ul li a {
	 line-height: 5em;
	 text-transform: uppercase;
	 text-decoration: none;
	 letter-spacing: 0.4em;
	 color: rgba(255, 255, 255, 0.35);
	 display: block;
	 transition: all ease-out 300ms;
}
 .nav ul li.active a {
	 color: white;
}
 .nav ul li:not(.active)::after {
	 opacity: 0.2;
}
 .nav ul li:not(.active):hover a {
	 color: rgba(255, 255, 255, 0.75);
}
 .nav ul li::after {
	 content: '';
	 position: absolute;
	 width: 100%;
	 height: 0.3em;
	 background: black;
	 left: 0;
	 bottom: 0;
	 background-image: linear-gradient(to right, #82A8D9, #89DAD3);
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

