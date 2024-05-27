import card_for_slider from "../components/card";
import "./index.css";

const photo_slider = document.querySelector(".photo-slider");

function getTemplate() {
  return document
    .querySelector("#slider")
    .content.querySelector(".photo-slider__item")
    .cloneNode(true);
}

function addCard(arr) {
  arr.forEach((props) => {
    const sliderTemplate = getTemplate();
    const sizes_wrapper = sliderTemplate.querySelector(
      ".photo-slider__sizes-wrapper"
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
      sliderTemplate
        .querySelector(".photo-slider__promo-text")
        .classList.remove("disable");
    }

    sliderTemplate.querySelector(".photo-slider__img").src = props.img_src;
    sliderTemplate.querySelector(".photo-slider__img").alt = props.img_alt;
    sliderTemplate.querySelector(".photo-slider__heading").textContent =
      props.name;
    sliderTemplate.querySelector(".photo-slider__price-text").textContent =
      formatNumberWithSpaces(props.price) + " ₽";
    // Получаем с бэкенда размеры
    props.sizes.forEach((element) => {
      const sizes_element = document.createElement("p");
      sizes_element.classList.add("photo-slider__sizes-text");
      sizes_element.classList.add("text-uppercase");
      sizes_element.textContent = element;
      sizes_wrapper.append(sizes_element);
    });
    // Добавляем размеры в наш template
    photo_slider.append(sliderTemplate);
  });
}

addCard(card_for_slider);
