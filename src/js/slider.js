require('slick-carousel');

$('.js-slider').slick({
  infinite: true,
  arrows: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  prevArrow:"<button type='button' class='arrow arrow__prev'><i class='fa fa-angle-left' aria-hidden='true'></i><</button>",
  nextArrow:"<button type='button' class='arrow arrow__next'><i class='fa fa-angle-right' aria-hidden='true'></i>></button>",
  rows: 0,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        dots: false
      }
    }
  ]
});

