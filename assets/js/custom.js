$(document).ready(function(){
  $(".toggle").click(function(){
    $("body").addClass("menuToggle");
  });
  $(".close").click(function(){
    $("body").removeClass("menuToggle");
  });
});
$(window).scroll(function(){
  if ($(window).scrollTop() >= 10) {
      $('header').addClass('fixed-header');
  }
  else {
      $('header').removeClass('fixed-header');
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const cookiePopup = document.getElementById('cookiePopup');
  const acceptCookies = document.getElementById('acceptCookies');

  // Check if the user has already accepted cookies
  if (!localStorage.getItem('cookiesAccepted')) {
      cookiePopup.style.display = 'block';
  }

  acceptCookies.addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'true');
      cookiePopup.style.display = 'none';
  });
});
