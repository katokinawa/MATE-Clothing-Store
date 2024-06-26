import card_for_slider from '../components/card';
import {
  swiper,
  swiper_for_photo_slider,
  swiper_for_text_slider,
} from '../components/swiper';
import './index.css';

const page = document.querySelector('.page');
const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const swiperPhotoSlider = document.querySelector('.swiper-photo-slider__photo-slider');
const swiperTextSlider = document.querySelector('.swiper-text-slider__text-slider');
const attentionWrapper = document.querySelector('.page__attention-wrapper')
const regexPriceWithSpaces = /\B(?=(\d{3})+(?!\d))/g;

function getTemplate(id, parent) {
  return document
    .querySelector(`${id}`)
    .content.querySelector(`${parent}`)
    .cloneNode(true);
}

function addCard(arr) {
  arr.forEach((props) => {
    const sliderTemplatePhoto = getTemplate(
      '#slider-photo',
      '.swiper-photo-slider__item-photo'
    );
    const sliderTemplateText = getTemplate(
      '#slider-text',
      '.swiper-photo-slider__item-text'
    );
    const sizesWrapper = sliderTemplateText.querySelector(
      '.swiper-photo-slider__sizes-wrapper'
    );

    // Добавляем для цены пробел, так как на фронт они приходят целыми числами (см. пример). Пример: 4 000, 14 000, 145 000.
    function formatNumberWithSpaces(number) {
      if (typeof number !== 'number' || isNaN(number)) {
        return 'Неверный формат числа';
      }
      const parts = number.toString().split('.');
      parts[0] = parts[0].replace(regexPriceWithSpaces, ' ');
      return parts.join('.');
    }

    function createSizesForSlider(element) {
      const sizes_element = document.createElement('p');
      sizes_element.classList.add('swiper-photo-slider__sizes-text');
      sizes_element.classList.add('text-uppercase');
      sizes_element.textContent = element;
      sizesWrapper.append(sizes_element);
    }

    // Проверка на актуальность карточки товара из этого следует добавлять надпись 'НОВОЕ' или нет
    // Приходят на фронт в виде ключ-значение new: true || new: false,
    if (props.new === true) {
      sliderTemplatePhoto
        .querySelector('.swiper-photo-slider__promo-text')
        .classList.remove('disabled');
    }

    sliderTemplatePhoto.querySelector('.swiper-photo-slider__img').src =
      props.img_src;
    sliderTemplatePhoto.querySelector('.swiper-photo-slider__img').alt =
      props.img_alt;
    sliderTemplateText.querySelector(
      '.swiper-photo-slider__heading'
    ).textContent = props.name;
    sliderTemplateText.querySelector(
      '.swiper-photo-slider__price-text'
    ).textContent = formatNumberWithSpaces(props.price) + ' ₽';
    // Получаем с бэкенда размеры
    props.sizes.forEach((element) => {
      createSizesForSlider(element);
    });
    // Добавляем размеры в наш template
    swiperPhotoSlider.append(sliderTemplatePhoto);
    swiperTextSlider.append(sliderTemplateText);
  });
}

addCard(card_for_slider);

function setEventForSubscription(mail_input, alert_element) {
  mail_input.addEventListener('click', () => alert_element.classList.remove('disabled'));
}

function setListenerForAllSubsBlock() {
  const footerPromoBlocks = document.querySelectorAll('.footer__promo')
  footerPromoBlocks.forEach(element => {
    const alert_element = element.querySelector('.footer__promo-subscription-alert');
    const mail_input = element.querySelector('.mail-input')
    setEventForSubscription(mail_input, alert_element)
})
}
setListenerForAllSubsBlock();


function switchHeaderModal() {
  const headerModal = document.querySelector('.header-modal');
  const modalTemplate = getTemplate('#header-modal', '.header-modal');
  if (headerModal) {
    headerBurger.classList.remove('fav-close')
    header.classList.remove('background-f6f5f3');
    page.classList.remove('overflow-hidden');
    headerModal.remove();
  } else {
    headerBurger.classList.add('fav-close')
    header.classList.add('background-f6f5f3');
    page.classList.add('overflow-hidden');
    page.append(modalTemplate);
  }
}

headerBurger.addEventListener('click', () => {
  switchHeaderModal();
});



const i = document.querySelector('.page__attention-close')

i.addEventListener('click', (() => {
  attentionWrapper.remove();
  console.log(header);
  header.classList.add('no-margin');
}))
