const shareButton = document.querySelector('.card__icon--share');
const shareSection = document.querySelector('#card__share-section');
const links = document.querySelector('.card__share-section--links');
shareButton.addEventListener('click', () => {
  links.classList.toggle('opacity-1');
  shareSection.classList.toggle('opacity-0');
});
