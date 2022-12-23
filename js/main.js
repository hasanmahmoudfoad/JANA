
function colReverse() {
  $("#about-me .col-rev").addClass("flex-column-reverse");
  console.log('added flex-column-reverse');
}

$(document).ready(function () {

  /* pre loader*/
  preloaderFadeOutTime = 700;
  function hidePreloader() {
    var preloader = $('.sk-chase');
    $('.whole-page').fadeIn();
    preloader.fadeOut(preloaderFadeOutTime);
  } hidePreloader();
  $('.load-layer').fadeOut();
  /* pre loader*/


  /*scrolling events */
  /*scrolling events */

  /* Pc nav */
  $(' nav li a').click(function () {
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 2000);
  });

  /* Mobile nav */
  $(' navbar li a').click(function () {
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 2000);
  });

  /* into Button */
  $('#home .big-btn').click(function () {
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 2000);
  });




  /*scrolling events */
  /*scrolling events */




  //nav color scroll change
  $(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
      $('nav').addClass('bg-light');
    } else {
      $('nav').removeClass('bg-light');
    }
  });
  //nav color scroll change


  //go to top buttom
  $(window).scroll(function () {
    if ($(this).scrollTop() > 650) {
      $('#go-top').fadeIn();
    } else {
      $('#go-top').fadeOut();
    }
  });

  $("#go-top").on("click", function () {
    $('html, body').animate({ scrollTop: 0 }, 2000);
  });
  //go to top buttom

  let win = $(window);

  if (win.width() <= 991) {
    colReverse();
  };


  if (win.width() >= 1249) {
    $('#my-img').enllax();
    $('#min-projects').enllax();
    $('#sponsership').enllax();
    let currentProjectHeight = $("#min-projects").height();
    let doubledProjectHeight = currentProjectHeight * 1.3;
    $("#min-projects").height(doubledProjectHeight);
  };


  $(".navbar li a").on("click", function () {
    $(".nav-toggle").click();
  });



  // THEME CHANGE
  // THEME CHANGE
  // THEME CHANGE
  // THEME CHANGE

  let theme = document.getElementById("toggleTheme");

  $(".toggleTheme").on("click", function () {

    if (theme.innerHTML === "Light") {
      theme.innerHTML = "Dark";

      $(":root").css({ "--dark-purple": "#1ccf50", "--light-blue": "#09b3b4", "--dark-navey": "#fff" });
      $("p, a, li, h1").addClass("color-dark");
      $(".icon-info .icon").css({ "color": "#101630" });

    } else {
      theme.innerHTML = "Light";

      $(":root").css({ "--dark-purple": "#463fc2", "--light-blue": "#4fb7dc", "--dark-navey": "#101630" });
      $(" p, a, li, h1").removeClass("color-dark");
      $(".icon-info .icon").css({ "color": "#eee" });


    };


  });



// ----------------------------------------
 /* (() => {
    const theme = window.localStorage.getItem("theme");
    if (theme == "Light") {
      document.querySelector("html").style = "--dark-purple:#1ccf50; --light-blue:#09b3b4; --dark-navey:#fff;"
    }
  })();
  

  document.querySelector("#toggleTheme").addEventListener("click", themeToggle);

  function themeToggle() {

    const current = window.localStorage.getItem("theme");

    if (current == "Light") {
      window.localStorage.setItem("theme", "Dark");
    } else {
      window.localStorage.setItem("theme", "Light");
    }
    //console.log(current);
    }
*/
// ----------------------------------------












});

/*  Hamburger   */
/*  Hamburger   */
/*  Hamburger   */
(function () {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('navbar'),

    doToggle: function (e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });

}());


// function goBack() {
//   window.history.back();
// }



