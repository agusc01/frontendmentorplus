const form = document.querySelector('.form');
const card = document.querySelector('.card');
const feedBack = document.querySelector('.card__feedback');
const radioInputs = document.querySelectorAll('.rated__input');

const getValueRadioInput = () => {
  // You can't put a "return" inside of a "forEach"
  // Doesn't work... So I write it with a simple "for"
  // You can do it , as I do. The problem is if you do it
  // without return, if there're 10000 inputs and the
  // first one is checked you gonna make it 10000 times
  // It just wasting time and PC resources

  // let value = -1;
  // radioInputs.forEach((input) => {
  //   // console.log(input.checked, input.value);
  //   if (input.checked) {
  //     value = input.value;
  //   }
  // });
  // return value;

  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked) {
      return radioInputs[i].value;
    }
  }
  return -1;
};

form.addEventListener('click', (e) => {
  if (e.target.id == 'submit') {
    e.preventDefault();
    let valueInput = getValueRadioInput();
    if (valueInput != -1) {
      card.classList.add('sent');
      feedBack.textContent = `You selected ${valueInput} out of ${radioInputs.length}`;
    } else {
      window.alert('Please take a rating to submit');
    }
  }
});
