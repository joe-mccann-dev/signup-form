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
  const passwordLength = event.target.value.length
  let validPassword = passwordLength >= 6

  if (event.target === passwordConfirmation) {
    if (passwordConfirmation.value !== password.value ) {
      validPassword = false
    }
  }

  if (validPassword) {
    event.target.classList.add('success')
  } else {
    event.target.classList.remove('success')
  }
};

form.addEventListener('submit', checkPasswordsMatch)
password.addEventListener('keyup',checkPasswordValidity )
passwordConfirmation.addEventListener('keyup', checkPasswordValidity)