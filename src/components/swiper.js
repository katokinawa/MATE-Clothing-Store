
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  wrapperClass: 'swiper__wrapper',
  spaceBetween: 30,
  slidesPerView: 10,
  speed: 5000,
  allowTouchMove: false,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirection: true,
  },
});

export default swiper;
