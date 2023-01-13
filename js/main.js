$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
  });

  $(".en").click(function () {
    $(".hamburger").toggleClass("active");
    $(".nav").toggleClass("active");
  });

  $(".jp").click(function () {
    $(".hamburger").toggleClass("active");
    $(".nav").toggleClass("active");
  });

  $(".inview1").on("inview", function () {
    $(".right1").toggleClass("show");
  });

  $(".inview2").on("inview", function () {
    $(".right2").toggleClass("show");
  });

  $(".inview3").on("inview", function () {
    $(".right3").toggleClass("show");
  });

  $(".inview4").on("inview", function () {
    $(".right3").toggleClass("show");
    $(".right1").toggleClass("show");
  });

  $(".inview5").on("inview", function () {
    $(".right5").toggleClass("show");
  });

  $(".inview6").on("inview", function () {
    $(".right6").toggleClass("show");
  });

  $(".inview7").on("inview", function () {
    $(".right6").toggleClass("show");
  });
});
