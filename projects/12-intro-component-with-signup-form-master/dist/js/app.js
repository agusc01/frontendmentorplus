const $ = (selector) => {
  return document.querySelector(selector);
};

const form = $('.form');

const inputEmail = $('.form__input--email');
const inputFirstName = $('.form__input--first-name');
const inputLastName = $('.form__input--last-name');
const inputPassword = $('.form__input--password');

//https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validateEmptyString = (string) => {
  return !(string.length == 0);
};

const validateForm = () => {
  let counterError = 0;
  const containerFirstName = $('.form__container--first-name');
  const containerLastName = $('.form__container--last-name');
  const containerEmail = $('.form__container--email');
  const containerPassword = $('.form__container--password');

  if (validateEmptyString(inputFirstName.value)) {
    containerFirstName.classList.remove('error');
  } else {
    containerFirstName.classList.add('error');
    counterError++;
  }

  if (validateEmptyString(inputLastName.value)) {
    containerLastName.classList.remove('error');
  } else {
    containerLastName.classList.add('error');
    counterError++;
  }

  if (validateEmail(inputEmail.value)) {
    containerEmail.classList.remove('error');
  } else {
    containerEmail.classList.add('error');
    counterError++;
  }

  if (validateEmptyString(inputPassword.value)) {
    containerPassword.classList.remove('error');
  } else {
    containerPassword.classList.add('error');
    counterError++;
  }
  if (counterError === 0) {
    window.alert(
      `Fake news: Hi ${inputFirstName.value} ${inputLastName.value}, check you email ! ${inputEmail.value}`
    );
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});
