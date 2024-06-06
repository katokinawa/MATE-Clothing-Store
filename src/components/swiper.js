
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  wrapperClass: 'swiper__wrapper',
  spaceBetween: 0,
  slidesPerView: 5,
  speed: 5000,
  allowTouchMove: false,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirection: true,
  },
});

let swiper_for_photo_slider = new Swiper('.swiper-photo-slider', {
  spaceBetween: 10,
  slidesPerView: 4,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

let swiper_for_text_slider = new Swiper('.swiper-text-slider', {
  spaceBetween: 10,
  slidesPerView: 4,
  grabCursor: true,
})

swiper_for_photo_slider.controller.control = swiper_for_text_slider;
swiper_for_text_slider.controller.control = swiper_for_photo_slider;

export { swiper, swiper_for_photo_slider, swiper_for_text_slider };
