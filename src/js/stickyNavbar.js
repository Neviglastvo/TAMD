$(function() {
  $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top > 145)
      $('.nav').removeClass('nav').addClass('nav-fixed'),
      $('.nav__container').removeClass('nav__container').addClass('nav-fixed__container'),
      $('.nav__list').removeClass('nav__list').addClass('nav-fixed__list'),
      $('.nav__item').removeClass('nav__item').addClass('nav-fixed__item'),
      $('.nav__link').removeClass('nav__link').addClass('nav-fixed__link'),
      $('.nav__current').removeClass('nav__current').addClass('nav-fixed__current');
    else
      $('.nav-fixed').removeClass('nav-fixed').addClass('nav'),
      $('.nav-fixed__container').removeClass('nav-fixed__container').addClass('nav__container'),
      $('.nav-fixed__list').removeClass('nav-fixed__list').addClass('nav__list'),
      $('.nav-fixed__item').removeClass('nav-fixed__item').addClass('nav__item'),
      $('.nav-fixed__link').removeClass('nav-fixed__link').addClass('nav__link'),
      $('.nav-fixed__current').removeClass('nav-fixed__current').addClass('nav__current');
  });
});


