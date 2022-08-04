## Signup Form

This project is an exercise in building a basic signup form. I created an imaginary service called "Acoustic Academy". See guidelines here: [Signup Form Guidelines](https://www.theodinproject.com/lessons/intermediate-html-and-css-sign-up-form)

### Technologies used

- HTML/CSS
  - Flexbox
  - Positioning (relative and absolute)
  - Pseudo classes
  - Forms
  - HTML5 form validation
- JavaScript
  - Event listener listens for form submission. Checks if `password.value === passwordConfirmation.value`
  - If they don't match, add an error class to each and unhide password mismatch error message.
  - Attach event listener to password and password confirmation inputs. If password is long enough, add success class. 
  - When typing in password confirmation check to see if it matches the password. Add/remove success accordingly.