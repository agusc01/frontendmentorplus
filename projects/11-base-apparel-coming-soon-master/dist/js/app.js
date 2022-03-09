const form = document.querySelector('.form');
const inputEmail = document.querySelector('.form__email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateEmail(inputEmail.value)) {
    form.classList.remove('error');
    window.alert(`Fake news: Check you email ! ${inputEmail.value}`);
  } else {
    form.classList.add('error');
  }
});

//https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
