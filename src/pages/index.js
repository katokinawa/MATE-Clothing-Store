import card_for_slider from "../components/card";
import { swiper, swiper_for_photo_slider, swiper_for_text_slider } from "../components/swiper";
import "./index.css";

const photo_slider = document.querySelector(".swiper__photo-slider");
const text_slider = document.querySelector(".swiper__text-slider");

function getTemplatePhoto() {
  return document
    .querySelector("#slider-photo")
    .content.querySelector(".swiper-photo-slider__item-photo")
    .cloneNode(true);
}
function getTemplateText() {
  return document
    .querySelector("#slider-text")
    .content.querySelector(".swiper-photo-slider__item-text")
    .cloneNode(true);
}

function addCard(arr) {
  arr.forEach((props) => {
    const sliderTemplatePhoto = getTemplatePhoto();
    const sliderTemplateText = getTemplateText();

    const sizes_wrapper = sliderTemplateText.querySelector(
      ".swiper-photo-slider__sizes-wrapper"
    );

    // Добавляем для цены пробел, так как на фронт они приходят целыми числами (см. пример). Пример: 4 000, 14 000, 145 000.
    function formatNumberWithSpaces(number) {
      if (typeof number !== "number" || isNaN(number)) {
        return "Неверный формат числа";
      }
      const parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    }

    // Проверка на актуальность карточки товара из этого следует добавлять надпись "НОВОЕ" или нет
    // Приходят на фронт в виде ключ-значение new: true || new: false,
    if (props.new === true) {
      sliderTemplatePhoto
        .querySelector(".swiper-photo-slider__promo-text")
        .classList.remove("disable");
    }

    sliderTemplatePhoto.querySelector(".swiper-photo-slider__img").src = props.img_src;
    sliderTemplatePhoto.querySelector(".swiper-photo-slider__img").alt = props.img_alt;
    sliderTemplateText.querySelector(".swiper-photo-slider__heading").textContent =
      props.name;
    sliderTemplateText.querySelector(".swiper-photo-slider__price-text").textContent =
      formatNumberWithSpaces(props.price) + " ₽";
    // Получаем с бэкенда размеры
    props.sizes.forEach((element) => {
      const sizes_element = document.createElement("p");
      sizes_element.classList.add("swiper-photo-slider__sizes-text");
      sizes_element.classList.add("text-uppercase");
      sizes_element.textContent = element;
      sizes_wrapper.append(sizes_element);
    });
    // Добавляем размеры в наш template
    photo_slider.append(sliderTemplatePhoto);
    text_slider.append(sliderTemplateText);
  });
}

addCard(card_for_slider);
