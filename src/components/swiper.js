
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  wrapperClass: 'swiper__wrapper',
  spaceBetween: 0,
  speed: 5000,
  allowTouchMove: false,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirection: true,
  },
  //1920px, 1440px, 1024px, 768px, 390px
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    390: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 4,
    },
    624: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 6,
    },
    874: {
      slidesPerView: 7,
    },
    1024: {
      slidesPerView: 8,
    },
    1380: {
      slidesPerView: 11,
    },
    1441: {
      slidesPerView: 8,
    },
    1920: {
      slidesPerView: 10,
    },
  }
});

let swiper_for_photo_slider = new Swiper('.swiper-photo-slider', {
  spaceBetween: 10,
  slidesPerView: 4,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  }
})

let swiper_for_text_slider = new Swiper('.swiper-text-slider', {
  spaceBetween: 10,
  slidesPerView: 4,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  }
})

swiper_for_photo_slider.controller.control = swiper_for_text_slider;
swiper_for_text_slider.controller.control = swiper_for_photo_slider;

export { swiper, swiper_for_photo_slider, swiper_for_text_slider };
