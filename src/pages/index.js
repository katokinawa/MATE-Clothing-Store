import card_for_slider from '../components/card'
import './index.css';

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

    const price = (() => {
      // Получаем поле price из объекта и преобразовываем в массив
      if (typeof props.price === "number") {
        let price = [...props.price.toString()];

        function inner() {
          if (price.length === 4) {
            price.splice(1, 0, " ");
          } else if (price.length === 5) {
            price.splice(2, 0, " ");
          } else if (price.length === 6) {
            price.splice(3, 0, " ");
          }
          return price.join("") + " ₽";
        }
        return inner;
      } else {
        // С бэкенда пришло не число
        return () => "Цена временно недоступна";
      }
      // TODO: Сделать с помощью replace и RegExp
      // return console.log((props.price).toString().replace)
    })();

    sliderTemplate.querySelector(".photo-slider__img").src = props.img_src;
    sliderTemplate.querySelector(".photo-slider__img").alt = props.img_alt;
    sliderTemplate.querySelector(".photo-slider__heading").textContent = props.name;
    sliderTemplate.querySelector(".photo-slider__price-text").textContent = price();
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
