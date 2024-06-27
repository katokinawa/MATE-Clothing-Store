export default function setEventForSubscription() {
  const footerPromoBlocks = document.querySelectorAll('.footer__promo')
  footerPromoBlocks.forEach(element => {
    const alert_element = element.querySelector('.footer__promo-subscription-alert');
    const mail_input = element.querySelector('.mail-input')
    setEvent(mail_input, alert_element)
  })

  function setEvent(mail_input, alert_element) {
    mail_input.addEventListener('click', () => alert_element.classList.remove('disabled'));
  }
}

