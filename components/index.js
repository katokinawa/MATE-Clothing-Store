const card_for_slider = [
  {
    key: 1,
    img_src: '/img/models/model01.png',
    img_alt: 'Девушка в черном платье',
    name: 'Черное платье',
    price: 12500,
    sizes: ["xs", "s", "m", "l", "xl"],
    visible: true,
    new: true
  },
  {
    key: 2,
    img_src: '/img/models/model02.png',
    img_alt: 'Девушка в красной юбке',
    name: 'Красная юбка',
    price: 5400,
    sizes: ["s", "m", "l"],
    visible: true,
    new: true
  },
  {
    key: 3,
    img_src: '/img/models/model03.png',
    img_alt: 'Девушка в синих джинсах',
    name: 'Синие джинсы',
    price: 7200,
    sizes: ["xs", "s", "m", "l", "xl"],
    visible: true,
    new: true
  },
  {
    key: 4,
    img_src: '/img/models/model04.png',
    img_alt: 'Девушка в белой рубашке',
    name: 'Белая рубашка',
    price: 4800,
    sizes: ["s", "m", "l"],
    visible: true,
    new: true
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
const photo_slider = document.querySelector('.photo-slider');
function getTemplate() {
  return template = document.querySelector('#slider').content.querySelector('.photo-slider__item').cloneNode(true);
}

function addCard(arr) {
  arr.forEach((props) => {
    const sliderTemplate = getTemplate();
    sliderTemplate.querySelector('.photo-slider__img').src = props.img_src;
    sliderTemplate.querySelector('.photo-slider__img').alt = props.img_alt;
    sliderTemplate.querySelector('.photo-slider__heading').textContent = props.name;
    sliderTemplate.querySelector('.photo-slider__price-text').textContent = props.price;
    photo_slider.append(sliderTemplate);
  })
}

addCard(card_for_slider);
