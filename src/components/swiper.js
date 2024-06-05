
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

const swiper_for_photo_slider = new Swiper('.swiper-photo-slider', {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
})

// const swiper_for_text_slider = new Swiper('.swiper-photo-slider', {
//   slideClass: 'swiper__slide-text',
//   spaceBetween: 30,
//   slidesPerView: 4,
//   loop: true,
// })

export { swiper, swiper_for_photo_slider };
