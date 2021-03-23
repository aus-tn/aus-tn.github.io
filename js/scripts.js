$(document).ready(function () {
  //mobile nav
  $("#mobile-nav, #main-nav a").click(function () {
    $("#main-nav").fadeToggle();
  });

  //animations
  AOS.init({
    // values from 0 to 3000, with step 50ms
    duration: 2000
  });
  //hero
  $("#hero h1").animate(
    {
      opacity: 1,
    },
    2500
  );
  //smooth scroll anchor links
  var hashTagActive = "";
  $("nav a").on("click touchstart", function (event) {
    console.log("clicked");
    if (hashTagActive != this.hash) {
      //prevent several clicks
      event.preventDefault();
      //calculate destination place
      var dest = 0;
      if (
        $(this.hash).offset().top >
        $(document).height() - $(window).height()
      ) {
        dest = $(document).height() - $(window).height();
      } else {
        dest = $(this.hash).offset().top;
      }
      //go to destination
      $("html,body").animate(
        {
          scrollTop: dest,
        },
        2000,
        "swing"
      );
      hashTagActive = this.hash;
    }
  });
});
