$(document).ready(function () {

  //menu toggle
  $("#menu-btn").click(function () {
    //show menu and overlay
    $("#menu").toggle();
    $("#overlay").toggle();
    //icon bars to x
    $("#menu-btn .fa-bars").toggle();
    $("#menu-btn .fa-xmark").toggle();
    //btn default/active
    $("#menu-btn").toggleClass("btn-active");
  });

  // Hide menu and overlay when a link inside #menu is clicked
  $("#menu a").click(function () {
    $("#menu").hide();
    $("#overlay").hide();
    // Reset icon bars to default state
    $("#menu-btn .fa-bars").show();
    $("#menu-btn .fa-xmark").hide();
    // Remove active class from button
    $("#menu-btn").removeClass("btn-active");
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
        this.blur(); //remove focus state
      });
    });
  });

  //Contract
  $(document).ready(function () {

    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();

    // Run this script only if the user is on contract.html
    if (currentPage === "contract.html") {

      // Function to get a query parameter from the URL
      function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
      }

      //Show buttons and populate links when terms agreed to
      $("#agree").change(function () {
        if ($(this).is(":checked")) {
          const stripeLink = getQueryParam("stripe");
          if (stripeLink) {
            console.log("stripe link" + stripeLink);
            //populate payment link and unhide
            $("#payment-link").attr("href", stripeLink);
          }
          $("#download-link, #payment-link").removeClass("hide");
        } else {
          // If unchecked, hide both the download and payment buttons
          $("#download-link, #payment-link").addClass("hide");
        }
      });

    }
  });

});