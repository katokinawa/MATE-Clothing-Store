import getTemplate from './getTemplate'
import  { header, page, headerBurger, attentionWrapper } from '../utils/constants'

export default function switchHeaderModal() {
  const headerModal = document.querySelector('.header-modal');
  const modalTemplate = getTemplate('#header-modal', '.header-modal');
  if (headerModal === null) {
    attentionWrapper.remove();
    header.classList.add('no-margin');
    headerBurger.classList.add('fav-close')
    header.classList.add('background-f6f5f3', 'overflow-hidden');
    page.classList.add('overflow-hidden');
    page.append(modalTemplate);
  } else {
    headerBurger.classList.remove('fav-close')
    header.classList.remove('background-f6f5f3', 'overflow-hidden');
    page.classList.remove('overflow-hidden');
    headerModal.remove();
  }
}
