const shareButton = document.querySelector('.card__icon--share');
const facebook = document.querySelector('.card__icon--facebook');
const shareSection = document.querySelector('#card-share-section');
const links = document.querySelector('.card__share-section--links');
const icons = document.querySelectorAll('.card__icon');
const title = document.querySelector('#title');

shareButton.addEventListener('click', () => {
  // This it's because .card__share-section has opacity instead display
  // =============== start ===============
  let classNameToRemove;
  let classNameToAdd;

  if (links.classList.contains('opacity-1')) {
    classNameToRemove = 'd-block';
    classNameToAdd = 'd-none';
    shareButton.src = 'images/icon-share.svg';
  } else {
    classNameToRemove = 'd-none';
    classNameToAdd = 'd-block';
    shareButton.src = 'images/icon-share-white.svg';
  }

  shareButton.classList.toggle('special-colour');

  icons.forEach((icon) => {
    if (!icon.classList.contains('card__icon--share')) {
      icon.classList.add(`${classNameToAdd}`);
      icon.classList.remove(`${classNameToRemove}`);
    }
  });
  // =============== end ===============

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

// Typewriter animation
const typeWriter = (element) => {
  const textArray = element.innerText.split('');
  element.innerText = '';

  textArray.forEach((letter, i) =>
    setTimeout(() => (element.innerHTML += letter), 75 * i)
  );
};

typeWriter(title);
