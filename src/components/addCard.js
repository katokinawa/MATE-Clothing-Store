import getTemplate from './getTemplate'
import { regexPriceWithSpaces, swiperPhotoSlider, swiperTextSlider } from '../utils/constants'
export default function addCard(arr) {
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


