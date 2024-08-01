$(document).ready(function(){
  $(".toggle").click(function(){
    $("body").addClass("menuToggle");
  });
  $(".close").click(function(){
    $("body").removeClass("menuToggle");
  });
});
// $(window).scroll(function(){
//   if ($(window).scrollTop() >= 10) {
//       $('header').addClass('fixed-header');
//   }
//   else {
//       $('header').removeClass('fixed-header');
//   }
// });


document.addEventListener("DOMContentLoaded", function() {
  var acceptCookiesBtn = document.getElementById("accept-cookies");
  var cookiesPopup = document.getElementById("cookies-popup");

  acceptCookiesBtn.addEventListener("click", function() {
      cookiesPopup.style.display = "none";
  });
});
$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(10);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(10);
      $(this)
        .siblings(".content")
        .slideDown(10);
    }
  });
});


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
