const formData = {
  email: '',
  message: '',
};

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', formInput);
function formInput(event) {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
document.addEventListener('DOMContentLoaded', foo);
function foo(event) {
  const keyGet = localStorage.getItem('feedback-form-state');
  if (!keyGet) return;
  const dataParse = JSON.parse(keyGet);

  if (dataParse.email) {
    form.elements.email.value = dataParse.email;
    formData.email = dataParse.email;
  }
  if (dataParse.message) {
    form.elements.message.value = dataParse.message;
    formData.message = dataParse.message;
  }
}
form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
});

const inputs = document.querySelectorAll(
  '.feedback-form input, .feedback-form textarea'
);

inputs.forEach(input => {
  const placeholderText = input.getAttribute('placeholder');

  input.removeAttribute('placeholder');

  input.addEventListener('focus', () => {
    input.setAttribute('placeholder', placeholderText);
  });

  input.addEventListener('blur', () => {
    input.removeAttribute('placeholder');
  });
});
