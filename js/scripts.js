$(document).ready(function () {

  //menu
  $("#menu-btn, .toggle-menu").click(function(){
    //top accomodation for menu
    $("nav").toggleClass("nav-open");
    //show menu and overlay
    $("#menu").toggle();
    $("#overlay").toggle();
    //icon bars to x
    $("#menu-btn #menu-bars").toggle();
    $("#menu-btn #menu-x").toggle();
    //btn default/active
    $("#menu-btn").toggleClass("btn-active");
  });

  //animate on scroll
  AOS.init({
    // values from 0 to 3000, with step 50ms
    duration: 2000,
  });
  
  //smooth scroll anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

});