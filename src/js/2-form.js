const formData = {
  email: '',
  message: '',
};

const formElem = document.querySelector('.feedback-form');
const submit = document.querySelector('.btn-submit');
const textareaEl = document.querySelector('.textarea-form');
const emailEl = document.querySelector('.input-email');

formElem.addEventListener('input', e => {
  formData.email = formElem.elements.email.value.trim();
  formData.message = formElem.elements.message.value.trim();
  const userInfo = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', userInfo);
});

const parsing = JSON.parse(localStorage.getItem('feedback-form-state'));

formElem.elements.email.value = parsing?.email || '';
formElem.elements.message.value = parsing?.message || '';
formData.email = formElem.elements.email.value;
formData.message = formElem.elements.message.value;

formElem.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
  }

  formElem.reset();
  formData.email = '';
  formData.message = '';
  localStorage.removeItem('feedback-form-state');
});
