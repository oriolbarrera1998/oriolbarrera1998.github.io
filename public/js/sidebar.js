$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
  $(".hamburger").click(function() {
    $("#sidebar").toggleClass("expanded");
  });
  $(".loaded").click(function() {
    $("#sidebar").toggleClass("expanded");
  });
  $(".hamburger").click(function() {
    $(".sidebartitle").toggleClass("sidebartitle_expanded");
  });
  $(".hamburger").click(function() {
    $("#menu").toggleClass("expanded");
  });
  $("h1.one").click(function() {
    $("#sidebar").toggleClass("expanded"),$("#menu").toggleClass("expanded"), $(".sidebartitle").toggleClass("sidebartitle_expanded"),$("#contact").toggleClass("expanded"),$(".hamburger").toggleClass("is-active");
  });
  $("h1.two").click(function() {
    $("#sidebar").toggleClass("expanded"),$("#menu").toggleClass("expanded"), $(".sidebartitle").toggleClass("sidebartitle_expanded"),$("#contact").toggleClass("expanded"),$(".hamburger").toggleClass("is-active");
  });
  $("h1.three").click(function() {
    $("#sidebar").toggleClass("expanded"),$("#menu").toggleClass("expanded"), $(".sidebartitle").toggleClass("sidebartitle_expanded"),$("#contact").toggleClass("expanded"),$(".hamburger").toggleClass("is-active");
  });
  $(".hamburger").click(function() {
    $("#contact").toggleClass("expanded");
  });

});

// init controller
var timer;
var debounce_time = 1000;
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#header"
  })
  .setClassToggle(".fotoAvatar", "data-aos=") // add class toggle
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#informacion"
  })
  .setClassToggle(".introtitle", "hidden") // add class toggle
  .addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#informacion"
  })
  .setClassToggle(".portfoliotitle", "show") // add class toggle
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#more"
  })
  .setClassToggle(".portfoliotitle", "hidden") // add class toggle
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#more"
  })
  .setClassToggle(".footertitle", "show") // add class toggle
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#projects"
  })
  .setClassToggle(".footertitle", "hidden") // add class toggle
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#projects"
  })
  .setClassToggle(".projectstitle", "show") // add class toggle
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#contacto"
  })
  .setClassToggle(".projectstitle", "hidden") // add class toggle
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#contacto"
  })
  .setClassToggle(".contacttitle", "show") // add class toggle
  .addTo(controller);



