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
});
