
const form = document.getElementById('signup-form')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')
const passwordErrorMessage = document.querySelector('.password-error')

const checkPasswordsMatch = (event) => {      
  if (password.value !== passwordConfirmation.value) {
    password.classList.add('error')
    passwordConfirmation.classList.add('error')
    passwordErrorMessage.classList.remove('hidden')
    event.preventDefault();
  }
};

const checkPasswordValidity = (event) => {
  const target = event.target
  let validPassword = target.validity.valid

  if (target === passwordConfirmation) {
    if (passwordConfirmation.value !== password.value ) {
      validPassword = false
    }
  }

  if (validPassword) {
    target.classList.add('success')
  } else {
    target.classList.remove('success')
  }
};

form.addEventListener('submit', checkPasswordsMatch)
password.addEventListener('keyup',checkPasswordValidity )
passwordConfirmation.addEventListener('keyup', checkPasswordValidity)
