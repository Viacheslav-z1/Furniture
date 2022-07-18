$(function () {
  $('.header__number-btn').on('click', function () {
    $('.header__numbers').slideToggle(200);
    $('.header__number-btn').toggleClass('active');
  });
  $('.menu__btn').on('click', function () {
    $('.menu__list').addClass('active');
  });
  $('.menu__close').on('click', function () {
    $('.menu__list').removeClass('active');
  });
  $('.header__categories-btn').on('click', function () {
    $('.header__categories').slideToggle(200);
    $('.header__categories-btn').toggleClass('active');
  });
})