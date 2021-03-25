$(document).ready(function () {
  //mobile nav
  $("#mobile-nav").click(function () {
    $("#main-nav").fadeToggle();
  });

  //animate on scroll
  AOS.init({
    // values from 0 to 3000, with step 50ms
    duration: 2000,
  });
  
  //hero
  $("#hero-title").animate(
    {
      opacity: 1,
    },
    2500
  );
  
  //smooth scroll anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

  //back to top
  var winTop = $(document).scrollTop();
  $(window).on( 'scroll', function(){
    winTop = $(document).scrollTop();
    if (winTop > 500) {
      $('#back-to-top').fadeIn();
    }
    else {
      $('#back-to-top').fadeOut();
    }
  });

});