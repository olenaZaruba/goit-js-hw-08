import '../css/03-feedback.css';
import '../css/common.css';
import throttle from 'lodash.throttle';
import { refs } from './refs';

const storageForm = 'feedback-form-state';

refs.form.addEventListener('input', throttle(handlerInput, 500));
refs.form.addEventListener('submit', handlerSubmit);

function handlerInput(evt) {
  evt.preventDefault();
  formData = {
    email: refs.email.value.trim(),
    message: refs.message.value.trim(),
  };

  localStorage.setItem(storageForm, JSON.stringify(formData));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget.elements;
  console.log({ email: email.value.trim(), message: message.value.trim() });

  if (localStorage.getItem(storageForm)) {
    let data = JSON.parse(localStorage.getItem(storageForm));
    console.log(data);
    localStorage.removeItem(storageForm);
  }
  evt.currentTarget.reset();
}

function checkStorageData() {
  let savedData = localStorage.getItem(storageForm);
  if (!savedData) {
    return;
  }
  reverseData = JSON.parse(savedData);
  refs.email.value = reverseData.email ?? '';
  refs.message.value = reverseData.message ?? '';
}
