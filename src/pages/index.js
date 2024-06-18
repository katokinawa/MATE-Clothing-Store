import card_for_slider from "../components/card";
import {
  swiper,
  swiper_for_photo_slider,
  swiper_for_text_slider,
} from "../components/swiper";
import "./index.css";

const page = document.querySelector(".page");
const header = document.querySelector(".header");
const headerBurger = document.querySelector(".header__burger");
const swiperPhotoSlider = document.querySelector(".swiper__photo-slider");
const swiperTextSlider = document.querySelector(".swiper__text-slider");
const regexPriceWithSpaces = /\B(?=(\d{3})+(?!\d))/g;

function setListenerForAllSubsBlock() {
  const footerPromoBlocks = document.querySelectorAll('.footer__promo')
  footerPromoBlocks.forEach(element => setEventForSubscription(element))
}
setListenerForAllSubsBlock();

function getTemplate(id, parent) {
  return document
    .querySelector(`${id}`)
    .content.querySelector(`${parent}`)
    .cloneNode(true);
}

function addCard(arr) {
  arr.forEach((props) => {
    const sliderTemplatePhoto = getTemplate(
      "#slider-photo",
      ".swiper-photo-slider__item-photo"
    );
    const sliderTemplateText = getTemplate(
      "#slider-text",
      ".swiper-photo-slider__item-text"
    );
    const sizesWrapper = sliderTemplateText.querySelector(
      ".swiper-photo-slider__sizes-wrapper"
    );

    // Добавляем для цены пробел, так как на фронт они приходят целыми числами (см. пример). Пример: 4 000, 14 000, 145 000.
    function formatNumberWithSpaces(number) {
      if (typeof number !== "number" || isNaN(number)) {
        return "Неверный формат числа";
      }
      const parts = number.toString().split(".");
      parts[0] = parts[0].replace(regexPriceWithSpaces, " ");
      return parts.join(".");
    }

    function createSizesForSlider(element) {
      const sizes_element = document.createElement("p");
      sizes_element.classList.add("swiper-photo-slider__sizes-text");
      sizes_element.classList.add("text-uppercase");
      sizes_element.textContent = element;
      sizesWrapper.append(sizes_element);
    }

    // Проверка на актуальность карточки товара из этого следует добавлять надпись 'НОВОЕ' или нет
    // Приходят на фронт в виде ключ-значение new: true || new: false,
    if (props.new === true) {
      sliderTemplatePhoto
        .querySelector(".swiper-photo-slider__promo-text")
        .classList.remove("disabled");
    }

    sliderTemplatePhoto.querySelector(".swiper-photo-slider__img").src =
      props.img_src;
    sliderTemplatePhoto.querySelector(".swiper-photo-slider__img").alt =
      props.img_alt;
    sliderTemplateText.querySelector(
      ".swiper-photo-slider__heading"
    ).textContent = props.name;
    sliderTemplateText.querySelector(
      ".swiper-photo-slider__price-text"
    ).textContent = formatNumberWithSpaces(props.price) + " ₽";
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

function findAlertAndShowup(event) {
  event.currentTarget
    .querySelector(".footer__promo-subscription-alert")
    .classList.remove("disabled");
}

function setEventForSubscription(element) {
  element.addEventListener("click", (evt) => {
    findAlertAndShowup(evt);
  });
}

function removeEventForSubscription(element) {
  element.removeEventListener("click", findAlertAndShowup);
}

function switchHeaderModal() {
  const headerModal = document.querySelector(".header-modal");
  const modalTemplate = getTemplate("#header-modal", ".header-modal");
  if (headerModal) {
    headerBurger.classList.remove("fav-close")
    header.classList.remove("background-f6f5f3");
    page.classList.remove("overflow-hidden");
    removeEventForSubscription(headerModal);
    headerModal.remove();
  } else {
    headerBurger.classList.add("fav-close")
    header.classList.add("background-f6f5f3");
    page.classList.add("overflow-hidden");
    setEventForSubscription(modalTemplate);
    page.append(modalTemplate);
  }
}

headerBurger.addEventListener("click", () => {
  switchHeaderModal();
});
