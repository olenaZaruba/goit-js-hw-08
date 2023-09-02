import '../css/03-feedback.css';
import '../css/common.css';
import throttle from 'lodash.throttle';
import { refs } from './refs';

const storageForm = 'feedback-form-state';

refs.form.addEventListener('input', throttle(handlerInput, 500));
refs.form.addEventListener('submit', handlerSubmit);

checkStorageData();
function handlerInput(evt) {
  const formData = {
    email: refs.email.value.trim(),
    message: refs.message.value.trim(),
  };

  localStorage.setItem(storageForm, JSON.stringify(formData));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget.elements;
  if (email.value !== '' && message.value !== '') {
    console.log({ email: email.value.trim(), message: message.value.trim() });
  } else {
    return alert('Заповнить всi поля !');
  }

  localStorage.removeItem(storageForm);
  evt.currentTarget.reset();
}

function checkStorageData() {
  const savedData = localStorage.getItem(storageForm);
  if (!savedData) {
    return;
  }
  const reverseData = JSON.parse(savedData);
  refs.email.value = reverseData.email ?? '';
  refs.message.value = reverseData.message ?? '';
}
