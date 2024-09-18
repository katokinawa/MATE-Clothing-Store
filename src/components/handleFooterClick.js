const footerBlocks = document.querySelectorAll(".footer__list-block-mobile");
import arrowTop from '../img/svg/arrow-top.svg'
import arrowBottom from '../img/svg/arrow-bottom.svg'

export default function handleFooterClick() {
  function setEvent(elements) {
    elements.forEach((item) => {
      const footerList = item.querySelector(".footer__list");
      const footerButton = item.querySelector("p");
      const footerIcon = item.querySelector(".footer__list-icon");
      footerButton.addEventListener("click", () => {
        toggleList(footerList);
        footerIcon.classList.remove = 'footer__list-icon_arrow-top';
      });
      footerIcon.addEventListener("click", () => {
        toggleList(footerList);
        footerIcon.classList.remove = 'footer__list-icon_arrow-top';
      });
    });
  }

  function toggleList(listElement) {
    listElement.classList.toggle("disabled");
  }

  setEvent(footerBlocks);
}
