const accordions = document.querySelectorAll('.accordion');
const accordionTitles = document.querySelectorAll(
  '.accordion__title'
);

const selectCard = (target) => {
  // the goal is to take accordion
  let accordion = target.parentElement;
  if (target.classList.contains('accordion__arrow')) {
    accordion = accordion.parentElement;
  }
  return accordion;
};

const toggleArrow = (accordion) => {
  let cardArrow = accordion.querySelector('.accordion__arrow');
  cardArrow.classList.toggle('accordion__arrow--open');
};

const toggleText = (accordion) => {
  let accordionContainerText = accordion.querySelector(
    '.accordion__container'
  );
  accordionContainerText.classList.toggle(
    'accordion__container--visible'
  );
};

const toggleTitle = (accordion) => {
  let accordionTitle = accordion.querySelector('.accordion__title');
  accordionTitle.classList.toggle('accordion__title--bolder');
};

const closeAllAccordions = () => {
  accordions.forEach((accordion) => {
    let accordionTitle = accordion.querySelector('.accordion__title');
    accordionTitle.classList.remove('accordion__title--bolder');
    let cardArrow = accordion.querySelector('.accordion__arrow');
    cardArrow.classList.remove('accordion__arrow--open');
    let accordionContainerText = accordion.querySelector(
      '.accordion__container'
    );
    accordionContainerText.classList.remove(
      'accordion__container--visible'
    );
  });
};

const toggleSection = (accordion) => {
  closeAllAccordions();
  toggleArrow(accordion);
  toggleText(accordion);
  toggleTitle(accordion);
};

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener(
    'click',
    (event) => {
      let accordion = selectCard(event.target);
      toggleSection(accordion);
    },
    false
  );
});

accordions.forEach((accordion) => {
  if (accordion.dataset.closed === 'false') {
    toggleSection(accordion);
  }
});
