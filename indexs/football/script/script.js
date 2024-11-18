$(document).ready(function () {

  window.addEventListener('load', function () {
    var loadingElement = document.getElementById('loader-main');
    loadingElement.classList.add('fade-out');
    loadingElement.style.zIndex = -99999;
  });

  window.addEventListener('DOMContentLoaded', function () {
    var loadingElement = document.getElementById('loader-main');
    loadingElement.style.visibility = 'hidden';
    loadingElement.style.display = 'none';
  });

  // Navigation Bar


  let observer = new IntersectionObserver(function (entries) {

    if (entries[0].intersectionRatio === 0) {

      document.querySelector(".navgetion").classList.add("bg-navgetion-after");

    } else if (entries[0].intersectionRatio === 1) {

      document.querySelector(".navgetion").classList.remove("bg-navgetion-after");

    }
  }, { threshold: [0, 1] });

  observer.observe(document.querySelector(".nav-container-top"));


  // Scrolling navigation bar

  var prevScrollPos = window.pageYOffset;

  window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;
    var navMenu = document.querySelector('.navbar-collapse');
    var navHide = document.querySelector('.nav-hide');

    if (prevScrollPos > currentScrollPos || navMenu.classList.contains('show')) {
      navHide.style.top = '0';
    } else {
      navHide.style.top = '-100px';
    }

    if (currentScrollPos === 0) {
      navHide.style.top = '0';
    }

    prevScrollPos = currentScrollPos;
  });


  // Navigation Page

  $('nav a').click(function (e) {
    e.preventDefault();

    var target = $(this).attr('href');
    var $target = $(target);

    var offset = $target.offset().top - 90;

    $('html, body').animate({
      scrollTop: offset
    }, 1000);

    return false;
  });

  //  Our team slider

  $('.slider-our-teams').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    rtl: true,
    arrows: false,

  });

  // Our members slider

  let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });




  // Weekly Schedule


  var clickedOne = false;
  var clickedTwo = false;

  $("#show-Weekly-Schedule").click(function () {
    if (clickedOne) {
      $("#weekly-schedule-hide").removeClass("weekly-schedule-show");
      $("#bg-blur-hide").removeClass("bg-blur-show");
      $("#close-weekly-schedule").removeClass("fa-xmark");
      $("#close-weekly-schedule").addClass("fa-calendar-week");
    } else {
      $("#weekly-schedule-hide").addClass("weekly-schedule-show");
      $("#bg-blur-hide").addClass("bg-blur-show");
      $("#close-weekly-schedule").removeClass("fa-calendar-week");
      $("#close-weekly-schedule").addClass("fa-xmark");
    }
    clickedOne = !clickedOne;
  });

  $(".navbar-toggler").click(function () {
    if (clickedTwo) {
      $(".navbar-toggle-svg").removeClass("fa-xmark");
      $(".navbar-toggle-svg").addClass("fa-bars");
    } else {
      $(".navbar-toggle-svg").removeClass("fa-bars");
      $(".navbar-toggle-svg").addClass("fa-xmark");
    }
    clickedTwo = !clickedTwo;
  });


});