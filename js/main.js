
//TRUE AND FALSE FUNCTIONS
//const returnTrue = () => true;
//const returnFalse = () => false;
//TRUE AND FALSE FUNCTIONS

function colReverse() {
  $("#about-me .col-rev").addClass("flex-column-reverse");
  console.log('added flex-column-reverse');
};  

// START Coverage & review projects.
let checkboxProjectsValuePk = "NO"; 
function toggleCheckboxProjectsFunction(){
  let checkBoxTog = $(this); //checkbox itself
  let selectInputOption = checkBoxTog.closest(".custom-package").find(".hidden-options");
  if (checkBoxTog.is(":checked")) {
    selectInputOption.stop(true, false).slideDown(500);
    checkboxProjectsValuePk = "YES";
  } else {
    selectInputOption.stop(true, false).slideUp(500);
    checkboxProjectsValuePk = "NO";
  }
};
function numberOfProjectsPkFunction() {
  let numberOfProjects = document.getElementById("numberOfProjects").value;
  if (checkboxProjectsValuePk == "NO") {
    return "-----";
  } else {
    return numberOfProjects;
  }
}
$("#projectsPk").on( "click", toggleCheckboxProjectsFunction);
// END Coverage & review projects.



// START Interviews.
let checkboxInterviewsValuePk = "NO"; 
function toggleCheckInterviewsPkFunction(){
  let checkBoxTog = $(this); //checkbox itself
  let selectInputOption = checkBoxTog.closest(".custom-package").find(".hidden-options");
  if (checkBoxTog.is(":checked")) {
    selectInputOption.stop(true, false).slideDown(500);
    checkboxInterviewsValuePk = "YES";
  } else {
    selectInputOption.stop(true, false).slideUp(500);
    checkboxInterviewsValuePk = "NO";
  }
};
function numberOfInterviewsPkFunction() {
  let numberOfInterviews = document.getElementById("numberOfInterviews").value;
  if (checkboxInterviewsValuePk == "NO") {
    return "-----";
  } else {
    return numberOfInterviews;
  }
}
$("#interviewsPk").on( "click", toggleCheckInterviewsPkFunction);
// END Interviews.



// START Events.
let checkboxEventsValuePk = "NO"; 
function toggleCheckEventsPkFunction(){
  let checkBoxTog = $(this); //checkbox itself
  let selectInputOption = checkBoxTog.closest(".custom-package").find(".hidden-options");
  if (checkBoxTog.is(":checked")) {
    selectInputOption.stop(true, false).slideDown(500);
    checkboxEventsValuePk = "YES";
  } else {
    selectInputOption.stop(true, false).slideUp(500);
    checkboxEventsValuePk = "NO";
  }
};
function numberOfEventsPkFunction() {
  let numberOfEvents = document.getElementById("numberOfEvents").value;
  if (checkboxEventsValuePk == "NO") {
    return "-----";
  } else {
    return numberOfEvents;
  }
}
$("#eventsPk").on( "click", toggleCheckEventsPkFunction);
// END Events.



// START Segement reportages.
let checkboxReportageValuePk = "NO"; 
function toggleCheckReportagePkFunction(){
  let checkBoxTog = $(this); //checkbox itself
  let selectInputOption = checkBoxTog.closest(".custom-package").find(".hidden-options");
  if (checkBoxTog.is(":checked")) {
    selectInputOption.stop(true, false).slideDown(500);
    checkboxReportageValuePk = "YES";
  } else {
    selectInputOption.stop(true, false).slideUp(500);
    checkboxReportageValuePk = "NO";
  }
};
function numberOfReportagePkFunction() {
  let numberOfReportage = document.getElementById("numberOfReportage").value;
  if (checkboxReportageValuePk == "NO") {
    return "-----";
  } else {
    return numberOfReportage;
  }
}
$("#reportagePk").on( "click", toggleCheckReportagePkFunction);
// END  Segement reportages.



// START News.
let checkboxNewsValuePk = "NO"; 
function toggleCheckNewsPkFunction(){
  let checkBoxTog = $(this); //checkbox itself
  let selectInputOption = checkBoxTog.closest(".custom-package").find(".hidden-options");
  if (checkBoxTog.is(":checked")) {
    selectInputOption.stop(true, false).slideDown(500);
    checkboxNewsValuePk = "YES";
  } else {
    selectInputOption.stop(true, false).slideUp(500);
    checkboxNewsValuePk = "NO";
  }
};
function numberOfNewsPkFunction() {
  let numberOfNews = document.getElementById("numberOfNews").value;
  if (checkboxNewsValuePk == "NO") {
    return "-----";
  } else {
    return numberOfNews;
  }
}
$("#newsPk").on( "click", toggleCheckNewsPkFunction);
// END  News.



// START Company or project logo inside the studio.
let checkboxLogoInsideStudioValuePk = "NO"; 
function toggleCheckInsideStudioPkFunction(){
  let checkBoxTog = $(this); //checkbox itself
  let selectInputOption = checkBoxTog.closest(".custom-package").find(".hidden-options");
  if (checkBoxTog.is(":checked")) {
    selectInputOption.stop(true, false).slideDown(500);
    checkboxLogoInsideStudioValuePk = "YES";
  } else {
    selectInputOption.stop(true, false).slideUp(500);
    checkboxLogoInsideStudioValuePk = "NO";
  }
};
$("#insideStudioPk").on( "click", toggleCheckInsideStudioPkFunction);
// END Company or project logo inside the studio.



// START Company or project logo outdoor campaign the studio.
let checkboxLogoOutdoorStudioValuePk = "NO"; 
function toggleCheckOutdoorStudioPkFunction(){
  let checkBoxTog = $(this); //checkbox itself
  let selectInputOption = checkBoxTog.closest(".custom-package").find(".hidden-options");
  if (checkBoxTog.is(":checked")) {
    selectInputOption.stop(true, false).slideDown(500);
    checkboxLogoOutdoorStudioValuePk = "YES";
  } else {
    selectInputOption.stop(true, false).slideUp(500);
    checkboxLogoOutdoorStudioValuePk = "NO";
  }
};
$("#outdoorStudioPk").on( "click", toggleCheckOutdoorStudioPkFunction);
// END Company or project logo outdoor campaign the studio.



// START Sponsorship masaa masr events.
let checkboxSponsorshipEventsValuePk = "NO"; 
function toggleCheckSponsorshipEventsPkFunction(){
  let checkBoxTog = $(this); //checkbox itself
  let selectInputOption = checkBoxTog.closest(".custom-package").find(".hidden-options");
  if (checkBoxTog.is(":checked")) {
    selectInputOption.stop(true, false).slideDown(500);
    checkboxSponsorshipEventsValuePk = "YES";
  } else {
    selectInputOption.stop(true, false).slideUp(500);
    checkboxSponsorshipEventsValuePk = "NO";
  }
};
$("#sponsorshipEventsPk").on( "click", toggleCheckSponsorshipEventsPkFunction);
// END Sponsorship masaa masr events.



// START Sponsorship Masaa Masr social media.
let checkboxSponsorshipSocialMediasValuePk = "NO"; 
function toggleCheckSponsorshipSocialMediaPkFunction(){
  let checkBoxTog = $(this); //checkbox itself
  let selectInputOption = checkBoxTog.closest(".custom-package").find(".hidden-options");
  if (checkBoxTog.is(":checked")) {
    selectInputOption.stop(true, false).slideDown(500);
    checkboxSponsorshipSocialMediasValuePk = "YES";
  } else {
    selectInputOption.stop(true, false).slideUp(500);
    checkboxSponsorshipSocialMediasValuePk = "NO";
  }
};
$("#sponsorshipSocialMediaPk").on( "click", toggleCheckSponsorshipSocialMediaPkFunction);
// END Sponsorship Masaa Masr social media.




function goToWhatsapp() {

  let timePk = document.getElementById("timePk").value;
  let logosPk = document.getElementById("logosPk").value;
  let spotsPk = document.getElementById("spotsPk").value;
  let logoScreenPk = document.getElementById("logoScreenPk").value;

  let projectsPk = checkboxProjectsValuePk;
    let numberOfProjects = numberOfProjectsPkFunction();

  let interviewsPk = checkboxInterviewsValuePk;
    let numberOfInterviews = numberOfInterviewsPkFunction();

  let eventsPk = checkboxEventsValuePk;
    let numberOfEvents = numberOfEventsPkFunction();

  let reportagePk = checkboxReportageValuePk;
    let numberOfReportage = numberOfReportagePkFunction();


  let newsPk = checkboxReportageValuePk;
    let numberOfNews = numberOfNewsPkFunction();

  let logoInsideStudioPk = checkboxLogoInsideStudioValuePk;
  let logoOutdoorStudioPk = checkboxLogoOutdoorStudioValuePk;
  let SponsorshipEventsPk = checkboxSponsorshipEventsValuePk;
  let sponsorshipSocialMedia = checkboxSponsorshipSocialMediasValuePk;




  let url = `https://wa.me/+201153380655?text=
  Time In Minutes:%20  ${timePk}%0a
  Logos :%20  ${logosPk}%0a
  Spots :%20   ${spotsPk}%0a
  Logo screen Masaa Masr studio :%20  ${logoScreenPk}%0a%0a
  Coverage and review projects :%20 ${projectsPk}%0a
  %20 %20 %20 Number of projects :%20 ${numberOfProjects}%0a%0a
  interviews :%20  ${interviewsPk}%0a
  %20 %20 %20 Number of interviews :%20 ${numberOfInterviews}%0a%0a
  Coverage events :%20  ${eventsPk} %0a
  %20 %20 %20 Number of coverage events :%20 ${numberOfEvents}%0a%0a
  Segment Reportage :%20  ${reportagePk} %0a
  %20 %20 %20 Number of segment reportage :%20 ${numberOfReportage}%0a%0a
  News :%20  ${newsPk}%0a
  %20 %20 %20 Number of News :%20 ${numberOfNews}%0a%0a
  company or project logo inside the studio :%20  ${logoInsideStudioPk}%0a
  company or project logo outdoor campaign the studio :%20  ${logoOutdoorStudioPk}%0a
  Sponsorship Masaa Masr events :%20  ${SponsorshipEventsPk}%0a
  Sponsorship Masaa Masr social media :%20  ${sponsorshipSocialMedia}%0a
  `;

  window.open(url, '_blank').focus();
}

 




$(document).ready(function () {

  /*** pre loader  ***/
  preloaderFadeOutTime = 700;
  function hidePreloader() {
    var preloader = $('.sk-chase');
    $('.whole-page').fadeIn();
    preloader.fadeOut(preloaderFadeOutTime);
  } hidePreloader();
  $('.load-layer').fadeOut();
  /*** pre loader  ***/


  /**** Pc nav ****/
  $(' nav li a').click(function () {
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 2000);
  });
  /**** Pc nav ****/


  /***  Mobile nav ***/
  $(' navbar li a').click(function () {
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 2000);
  });
  $(".navbar li a").on("click", function () {
    $(".nav-toggle").click();
  });
  /***  Mobile nav ***/



  /* into Button */
  $('#home .big-btn').click(function () {
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 2000);
  });
  /* into Button */



  $("#go-top").on("click", function () {
    $('html, body').animate({ scrollTop: 0 }, 2000);
  });



  /*scrolling events */
  /*scrolling events */

  $(window).scroll(function () {

    //nav color scroll change
    if ($(this).scrollTop() > 30) {
      $('nav').addClass('bg-light');
    } else {
      $('nav').removeClass('bg-light');
    }

    //go to top buttom
    if ($(this).scrollTop() > 650) {
      $('#go-top').fadeIn();
    } else {
      $('#go-top').fadeOut();
    }

  });




  //go to top buttom

  let win = $(window);

  if (win.width() <= 991) {
    colReverse();
  };


  if (win.width() >= 1249) {
    $('#my-img').enllax();
    $('#min-projects').enllax();
    $('#sponsorship').enllax();
    let currentProjectHeight = $("#min-projects").height();
    let doubledProjectHeight = currentProjectHeight * 1.3;
    $("#min-projects").height(doubledProjectHeight);
  };



  
  //toggle password SHOW/HIDE 
  $("#togglePassword").on("click", function () {
    let passInput = document.getElementById("passwordInput");
    if (passInput.type === "password") {
      passInput.type = "text";
    } else {
      passInput.type = "password";
    }
  });
  // password SHOW/HIDE ----------------------------------------
  


  //SHOW Prices if the password is correct
  const pricingButton = $("#getPrices");
  const passwordAuth = $(".pass-auth");
  pricingButton.on("click", function () {
    // if user enter the correct password, then render the  <<< pricingData >>>
    let passwordInput = document.getElementById("passwordInput");
    if (passwordInput.value == "janaPRC") {
      const pricingData = `<section id="sponsorship" class="sponsorship pv-md"> <div class="container-adjust container-fluid"> <h2 class="font-Montserrat glow py-5 text-center">Sponsorship Offers</h2> <div class="row wrapper"> <div class="col-12 col-lg-4 margin-b"> <div class=frame> <div class="table basic"> <div class=price-section> <h2 class=price>2,400,000</h2><span class=currency>LE.</span> </div><div class=features> <li><span class=list-name><b><span class=plan-color>100</span> </b>Minutes. </span><span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div class="list-name mt-4"><strong>Sponsorship masaa masr</strong> <ul class=sub-list-name> <li>Logos.<span class="check icon"><i class="fa-check-circle fas"></i></span> <li>Spots.<span class="check icon"><i class="fa-check-circle fas"></i></span> </ul> </div><li><span class=list-name><span class=plan-color>208</span> Logo screen Masaa Masr studio. </span><span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div class="list-name mt-4"><strong>100 minutes including :</strong> <ul class=sub-list-name> <li> <div><span class=list-name></span>coverage & review <span class=plan-color>1</span> project</div><span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>interviews.</span><span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div><span class=list-name>coverage</span> <span class=plan-color>1</span> event</div><span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>Reportage.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>News.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> </ul> </div><li><span class=list-name>Logo screen masaa masr events.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>Sponsorship Masaa Masr social media. </span><span class="check icon"><i class="fa-check-circle fas"></i></span> </div></div></div></div><div class="col-12 col-lg-4 margin-b"> <div class=frame> <div class="table standard"> <div class=price-section> <h2 class=price>3,200,000</h2><span class=currency>LE.</span> </div><div class=features> <li><span class=list-name><b><span class=plan-color>180</span> </b>Minutes.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div class="list-name mt-4"><strong>Sponsorship masaa masr :</strong> <ul class=sub-list-name> <li> <div><span class=list-name>Logos</span> <span class=plan-color>1920</span> </div><span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div><span class=list-name>Spots</span> <span class=plan-color>553</span> </div><span class="check icon"><i class="fa-check-circle fas"></i></span> </ul> </div><li> <div><span class=plan-color>416 </span><span class=list-name>Logo screen Masaa Masr studio.</span></div><span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div class=list-name><strong>180 minutes including :</strong> <ul class=sub-list-name> <li> <div><span class=list-name>Coverage & review</span> <span class=plan-color>2 </span>projects.</div><span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>Interviews.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div><span class=list-name>Covering </span><span class=plan-color>2 </span>events.</div><span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div><span class=plan-color>2 </span><span class=list-name>segment reportage.</span></div><span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>News.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> </ul> </div><li><span class=list-name>Sponsorship Masaa Masr events. </span><span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>Sponsorship Masaa Masr social media. </span><span class="check icon"><i class="fa-check-circle fas"></i></span> </div></div></div></div><div class="col-12 col-lg-4 margin-b"> <div class=frame> <div class="table Premium"> <div class=price-section> <h2 class=price>4,800,000</h2><span class=currency>LE.</span> </div><div class=features> <li> <div><span class=list-name><b><span class=plan-color>240 </span></b>Minutes.</span> </div><span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div class="list-name mt-4"><strong>Sponsorship masaa masr :</strong> <ul class=sub-list-name> <li> <div><span class=list-name>Logos</span> <span class=plan-color>2880</span> </div><span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div><span class=list-name>Spots</span> <span class=plan-color>830</span> </div><span class="check icon"><i class="fa-check-circle fas"></i></span> </ul> </div><li> <div><span class=list-name><span class=plan-color>830</span> Logo screen Masaa Masr studio.</span> </div><span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div class=list-name><strong>240 minutes including :</strong> <ul class=sub-list-name> <li><span class=list-name>Coverage & review projects.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>Interviews.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>Coverage events.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> <li> <div><span class=plan-color>4 </span>segment reportage.</div><span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>News.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> </ul> </div><li><span class=list-name>The company or project logo inside the studio.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>The company or project logo outdoor campaign the studio.</span> <span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>Sponsorship masaa masr events. </span><span class="check icon"><i class="fa-check-circle fas"></i></span> <li><span class=list-name>Sponsorship Masaa Masr social media. </span><span class="check icon"><i class="fa-check-circle fas"></i></span> </div></div></div></div><a href="./custom-package.html" class="big-btn">Customizable package</a> </div></section>`;
      const sponsorshipPricing = document.getElementById("pricingHandler");
      sponsorshipPricing.innerHTML = pricingData;
      passwordAuth.hide();
    } else {
      passwordInput.classList.add("wrong-pass");
      console.log('wrong Password');
    }
  });
  // show Prices ----------------------------------------




});//end ready




  



// Start the Hamburger Menu  
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
// Hamburger----------------------------------------









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
































