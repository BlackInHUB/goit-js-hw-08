const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE = 'feedback-form-state';

form.addEventListener('input', throttle(onUsersInput, 500));
form.addEventListener('submit', onFormSubmit);

onStarterInputs();

function onUsersInput(evt) {
  evt.preventDefault();

  const newUsersData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(newUsersData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(formData);

  localStorage.removeItem(LOCAL_STORAGE);
  evt.currentTarget.reset();
}

function onStarterInputs() {
  const savedData = localStorage.getItem(LOCAL_STORAGE);

  if (savedData !== null) {
    form.elements.email.value = JSON.parse(savedData).email;
    form.elements.message.value = JSON.parse(savedData).message;
  }
}
