const footerBlocks = document.querySelectorAll(".footer__list-block-mobile");

export default function handleFooterClick() {
  function setEvent(elements) {
    elements.forEach((item) => {
      const footerList = item.querySelector(".footer__list");
      const footerButton = item.querySelector("p");
      footerButton.addEventListener("click", () => {
        toggleList(footerList);
      });
    });
  }

  function toggleList(listElement) {
    listElement.classList.toggle("disabled");
  }

  setEvent(footerBlocks);
}
