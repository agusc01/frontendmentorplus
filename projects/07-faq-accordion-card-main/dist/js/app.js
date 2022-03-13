// ========================= NOW =============================
const accordions = document.querySelectorAll('.accordion');
const headers = document.querySelectorAll('.accordion__header');

const closeAllItems = () => {
  accordions.forEach((accordion) => {
    accordion.classList.remove('accordion--active');
  });
};

headers.forEach((header) => {
  header.addEventListener('click', (e) => {
    console.log(e.target);
    let accordion = header.parentElement;
    let wasItOpen = accordion.classList.contains('accordion--active');
    closeAllItems();
    if (wasItOpen === false) {
      accordion.classList.add('accordion--active');
    }
  });
});

// ======================= BEFORE ========================
// const titles = document.querySelectorAll('.accordion__title');

// const selectCard = (target) => {
//   // the goal is to take accordion
//   let accordion = target.parentElement;
//   if (target.classList.contains('accordion__arrow')) {
//     accordion = accordion.parentElement;
//   }
//   return accordion;
// };

// const toggleArrow = (accordion) => {
//   let arrow = accordion.querySelector('.accordion__arrow');
//   arrow.classList.toggle('accordion__arrow--open');
// };

// const toggleText = (accordion) => {
//   let text = accordion.querySelector('.accordion__body');
//   text.classList.toggle('accordion__body--visible');
// };

// const toggleTitle = (accordion) => {
//   let title = accordion.querySelector('.accordion__title');
//   title.classList.toggle('accordion__title--bolder');
// };

// const closeAllAccordions = () => {
//   accordions.forEach((accordion) => {
//     let title = accordion.querySelector('.accordion__title');
//     title.classList.remove('accordion__title--bolder');
//     let arrow = accordion.querySelector('.accordion__arrow');
//     arrow.classList.remove('accordion__arrow--open');
//     let text = accordion.querySelector('.accordion__body');
//     text.classList.remove('accordion__body--visible');
//   });
// };

// const toggleSection = (accordion) => {
//   closeAllAccordions();
//   toggleArrow(accordion);
//   toggleText(accordion);
//   toggleTitle(accordion);
// };

// titles.forEach((title) => {
//   title.addEventListener(
//     'click',
//     (event) => {
//       let accordion = selectCard(event.target);
//       toggleSection(accordion);
//     },
//     false
//   );
// });

// accordions.forEach((accordion) => {
//   if (accordion.dataset.closed === 'false') {
//     toggleSection(accordion);
//   }
// });
