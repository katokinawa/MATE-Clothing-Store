import {
  swiper,
  swiper_for_photo_slider,
  swiper_for_text_slider,
} from '../components/swiper';
import addCard from '../components/addCard'
import switchHeaderModal from '../components/switchHeaderModal'
import setEventForSubscription from '../components/setEventForSubscription';
import card_for_slider from '../components/card';
import handleFooterClick from "../components/handleFooterClick";
import { header, headerBurger, attentionWrapper, attention } from '../utils/constants'
import './index.css';

// Добавляем карточки в слайдер
addCard(card_for_slider);

// Добавляем слушатели событий клика для всех форм на странице
setEventForSubscription();

// Переключение модального окна для бургера в мобильной версии
headerBurger.addEventListener('click', () => {
  switchHeaderModal();
});

// Закрытие предупреждения по крестику над хедером
attention.addEventListener('click', (() => {
  attentionWrapper.remove();
  header.classList.add('no-margin');
}))

// Позволям открывать и закрывать категории в футере в мобильной версии
handleFooterClick();
