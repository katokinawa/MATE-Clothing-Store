
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  wrapperClass: 'swiper__wrapper',
  spaceBetween: 30,
  slidesPerView: 8,
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
  slidesPerView: 4
})

let swiper_for_text_slider = new Swiper('.swiper-text-slider', {
  spaceBetween: 10,
  slidesPerView: 4
})

swiper_for_photo_slider.controller.control = swiper_for_text_slider;
swiper_for_text_slider.controller.control = swiper_for_photo_slider;

export { swiper, swiper_for_photo_slider, swiper_for_text_slider };
