"use strict";
const card_for_slider = [
  {
    key: 1,
    img_src: "/img/models/model01.png",
    img_alt: "Девушка в черном платье",
    name: "Черное платье",
    price: 12500,
    sizes: ["xs", "s", "m", "l", "xl"],
    visible: true,
    new: true,
  },
  {
    key: 2,
    img_src: "/img/models/model02.png",
    img_alt: "Девушка в красной юбке",
    name: "Красная юбка",
    price: 5400,
    sizes: ["s", "m", "l"],
    visible: true,
    new: true,
  },
  {
    key: 3,
    img_src: "/img/models/model03.png",
    img_alt: "Девушка в синих джинсах",
    name: "Синие джинсы",
    price: 1000,
    sizes: ["xs", "s", "m", "l", "xl"],
    visible: true,
    new: true,
  },
  {
    key: 4,
    img_src: "/img/models/model04.png",
    img_alt: "Девушка в белой рубашке",
    name: "Белая рубашка",
    price: 48000,
    sizes: ["s", "m", "l"],
    visible: true,
    new: true,
  },
  // {
  //   key: 5,
  //   img_src: '/img/models/model05.png',
  //   img_alt: 'Девушка в сером пальто',
  //   name: 'Серое пальто',
  //   price: 17500,
  //   sizes: ["s", "m", "l", "xl"],
  //   visible: true,
  //   new: true
  // },
  // {
  //   key: 6,
  //   img_src: '/img/models/model06.png',
  //   img_alt: 'Девушка в свитере с узором',
  //   name: 'Свитер с узором',
  //   price: 8900,
  //   sizes: ["xs", "s", "m", "l"],
  //   visible: true,
  //   new: true
  // },
  // {
  //   key: 7,
  //   img_src: '/img/models/model07.png',
  //   img_alt: 'Девушка в черных брюках',
  //   name: 'Черные брюки',
  //   price: 6500,
  //   sizes: ["xs", "s", "m", "l", "xl"],
  //   visible: true,
  //   new: true
  // },
  // {
  //   key: 8,
  //   img_src: '/img/models/model08.png',
  //   img_alt: 'Девушка в кожаной куртке',
  //   name: 'Кожаная куртка',
  //   price: 14500,
  //   sizes: ["s", "m", "l"],
  //   visible: true,
  //   new: true
  // }
];
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
