$(function () {
  $('.header__number-btn').on('click', function () {
    $('.header__numbers').slideToggle(200);
    $('.header__number-btn').toggleClass('active');
  });
  $('.menu__btn').on('click', function () {
    $('.menu__list').addClass('active');
    $('body').addClass('lock');
  });
  $('.menu__close').on('click', function () {
    $('.menu__list').removeClass('active');
    $('body').removeClass('lock');
  });
  $('.header__categories-btn').on('click', function () {
    $('.header__categories').slideToggle(200);
    $('.header__categories-btn').toggleClass('active');
  });


  $('.top__slider-two-wrapper').slick({
    slidesToShow: 1,
    asNavFor: '.top__slider',
    dots: true,
    infinite: false,
    nextArrow: '<button type="button" class="slick-prev"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.38298 5.86959C6.38298 6.07998 6.30635 6.29034 6.15342 6.45075L1.33863 11.4983C1.03235 11.8194 0.535774 11.8194 0.229617 11.4983C-0.0765391 11.1774 -0.0765391 10.6569 0.229617 10.3357L4.49001 5.86959L0.229766 1.40341C-0.0763904 1.08232 -0.0763904 0.561876 0.229766 0.240941C0.535922 -0.0803061 1.0325 -0.0803061 1.33878 0.240941L6.15357 5.28844C6.30653 5.44892 6.38298 5.65928 6.38298 5.86959Z"fill="white" /></svg></button >',
    prevArrow: '<button type="button" class="slick-next"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.680837 5.86955C0.680837 5.65916 0.759128 5.44879 0.915382 5.28839L5.83484 0.240819C6.14778 -0.0802729 6.65515 -0.0802729 6.96797 0.240819C7.28078 0.56178 7.28078 1.08227 6.96797 1.40339L2.61496 5.86955L6.96781 10.3357C7.28063 10.6568 7.28063 11.1773 6.96781 11.4982C6.655 11.8194 6.14763 11.8194 5.83469 11.4982L0.915231 6.4507C0.758951 6.29022 0.680837 6.07986 0.680837 5.86955Z"fill="#1E2E36" ></svg></button > ',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          dots: false
        }
      },
    ]
  });

  $('.top__slider').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.top__slider-two-wrapper',
    fade: true,
  });

  $('.benefits__slider').slick({
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.38298 5.86959C6.38298 6.07998 6.30635 6.29034 6.15342 6.45075L1.33863 11.4983C1.03235 11.8194 0.535774 11.8194 0.229617 11.4983C-0.0765391 11.1774 -0.0765391 10.6569 0.229617 10.3357L4.49001 5.86959L0.229766 1.40341C-0.0763904 1.08232 -0.0763904 0.561876 0.229766 0.240941C0.535922 -0.0803061 1.0325 -0.0803061 1.33878 0.240941L6.15357 5.28844C6.30653 5.44892 6.38298 5.65928 6.38298 5.86959Z"fill="white" /></svg></button >',
    nextArrow: '<button type="button" class="slick-next"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.680837 5.86955C0.680837 5.65916 0.759128 5.44879 0.915382 5.28839L5.83484 0.240819C6.14778 -0.0802729 6.65515 -0.0802729 6.96797 0.240819C7.28078 0.56178 7.28078 1.08227 6.96797 1.40339L2.61496 5.86955L6.96781 10.3357C7.28063 10.6568 7.28063 11.1773 6.96781 11.4982C6.655 11.8194 6.14763 11.8194 5.83469 11.4982L0.915231 6.4507C0.758951 6.29022 0.680837 6.07986 0.680837 5.86955Z"fill="#1E2E36" ></svg></button > ',
    infinite: false,
    responsive: [
      {
        breakpoint: 1371,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  
  var mixer = mixitup('.category__items-wrapper');


  $(".menu a ").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  $(".header__botoom-btn").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  $(".header__categories a ").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  $(".footer__list a").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  $(".footer__up").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
})