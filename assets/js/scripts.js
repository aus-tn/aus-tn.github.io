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