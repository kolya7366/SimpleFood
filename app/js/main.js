$(function () {
  $('.testimonials__slider').slick({
    dots: true
  });

  $(".header, .hero, .popular, .footer").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 750);
      });

  var mixer = mixitup('.popular__gallery');
});