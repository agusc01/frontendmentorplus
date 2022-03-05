const shareButton = document.querySelector('.card__icon--share');
const shareSection = document.querySelector('#card__share-section');
const links = document.querySelector('.card__share-section--links');
shareButton.addEventListener('click', () => {
  if (window.innerWidth < 921) {
    shareSection.classList.toggle('opacity-0');
  }
  links.classList.toggle('opacity-1');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 920) {
    shareSection.classList.remove('opacity-0');
  } else if (links.classList.contains('opacity-1')) {
    shareSection.classList.add('opacity-0');
  }
});
