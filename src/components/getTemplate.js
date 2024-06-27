export default function getTemplate(id, parent) {
  return document
    .querySelector(`${id}`)
    .content.querySelector(`${parent}`)
    .cloneNode(true);
}
