AOS.init();
window.addEventListener('load', AOS.refresh)




$(document).ready(function () {
  $(".banner").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    vertical: false,
    speed: 1000,
    autoplaySpeed: 4000,
  });

  $(".slider").slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      '<span class="priv-arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow:
      '<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>',
    arrow: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1000,
        slidesToShow: 3,
        prevArrow: false,
        nextArrow: false,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
		dots: false,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 400,
		dots: false,
        settings: {
          slidesToShow: 1,
         
        },
      },
    ],
  });
});


