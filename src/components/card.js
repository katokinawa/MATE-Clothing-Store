

// вебпак изменяет имена файлов при сборке поэтому импортируем их в js, а после добавляем в card_for_slider
import model01 from '../img/models/model01.jpg'
import model02 from '../img/models/model02.jpg'
import model03 from '../img/models/model03.jpg'
import model04 from '../img/models/model04.jpg'
import model05 from '../img/models/model05.jpg'
import model06 from '../img/models/model06.jpg'
import model07 from '../img/models/model07.jpg'

const card_for_slider = [
  {
    key: 1,
    img_src: model01,
    img_alt: "Кот в красной рубашке",
    name: "Кот в красной рубашке",
    price: 12500,
    sizes: ["xs", "s", "m", "l", "xl"],
    visible: true,
    new: false,
  },
  {
    key: 2,
    img_src: model02,
    img_alt: "Серьёзный тип в костюме",
    name: "Серьёзный тип в костюме",
    price: 5400,
    sizes: ["s", "m", "l"],
    visible: true,
    new: true,
  },
  {
    key: 3,
    img_src: model03,
    img_alt: "Худи на мальчика",
    name: "Худи на мальчика",
    price: 1000,
    sizes: ["xs", "s", "m", "l", "xl"],
    visible: true,
    new: false,
  },
  {
    key: 4,
    img_src: model04,
    img_alt: "Анатолий Александрович Вассерман",
    name: "Анатолий Александрович Вассерман",
    price: 48000,
    sizes: ["s", "m", "l"],
    visible: true,
    new: true,
  },
  // {
  //   key: 5,
  //   img_src: model05,
  //   img_alt: 'Девушка в сером пальто',
  //   name: 'Серое пальто',
  //   price: 17500,
  //   sizes: ["s", "m", "l", "xl"],
  //   visible: true,
  //   new: true
  // },
  // {
  //   key: 6,
  //   img_src: model06,
  //   img_alt: 'Девушка в свитере с узором',
  //   name: 'Свитер с узором',
  //   price: 8900,
  //   sizes: ["xs", "s", "m", "l"],
  //   visible: true,
  //   new: true
  // },
  // {
  //   key: 7,
  //   img_src: model07,
  //   img_alt: 'Девушка в черных брюках',
  //   name: 'Черные брюки',
  //   price: 6500,
  //   sizes: ["xs", "s", "m", "l", "xl"],
  //   visible: true,
  //   new: true
  // },
  // {
  //   key: 8,
  //   img_src: model08,
  //   img_alt: 'Девушка в кожаной куртке',
  //   name: 'Кожаная куртка',
  //   price: 14500,
  //   sizes: ["s", "m", "l"],
  //   visible: true,
  //   new: true
  // }
];

export default card_for_slider;
