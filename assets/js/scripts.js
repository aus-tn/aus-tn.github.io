$(document).ready(function () {

  //menu
  $("#menu-btn, .toggle-menu").click(function () {
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

  //accordion
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  //remove focus on .btns after click on mobile
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
      button.addEventListener("click", function () {
        this.blur(); // Remove focus state
      });
    });
  });

});