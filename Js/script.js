$(document).ready(function(){
    $('.homeSlider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
      });

      $('.variable-width').slick({
        centerPadding: '60px',
        slidesToShow: 5,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        });
             
});