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
  - If they don't match, prevent form submission and add an error class to each. Remove 'hidden' class from password error message element.
  - Attach event listener to password and password confirmation inputs. On 'keyup', if password is valid, add success class, else remove.
  - I only wanted a "valid" indicator on the password fields, so I chose to manually add the classes with JS vs using the `:valid` CSS pseudo-selector.
