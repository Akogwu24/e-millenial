//modal form validation
//getting the input elements
const userName = document.getElementById('user-name');
const userNameError = document.getElementById('user-name-error');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const phoneNumber = document.getElementById('phone-number');
const phoneNumberError = document.getElementById('phone-number-error');

function checkFormInputs() {
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  //username validation
  userName.addEventListener('blur', () => {
    if (userNameValue == '') {
      userNameError.textContent = 'Name cannot be blank please input your name';
      userName.style.border = 'thin solid';
      userName.style.borderColor = 'red';
    } else {
      userName.style.border = 'thin solid';
      userName.style.borderColor = 'green';
    }
  });
  //email validation
  email.addEventListener('blur', () => {
    if (
      emailValue == '' ||
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailValue
      ) === false
    ) {
      emailError.textContent =
        'email cannot be blank please input a valid email';
      email.style.border = 'thin solid';
      email.style.borderColor = 'red';
    } else {
      email.style.border = 'thin solid';
      email.style.borderColor = 'green';
    }
  });
  //phone number validation
  phoneNumber.addEventListener('blur', () => {
    if (phoneNumber == '' || phoneNumberValue.length < 11) {
      phoneNumberError.textContent = 'Enter a valid 11 digits phone number';
      phoneNumber.style.border = 'thin solid';
      phoneNumber.style.borderColor = 'red';
    } else {
      phoneNumber.style.border = 'thin solid';
      phoneNumber.style.borderColor = 'green';
    }
  });
}
checkFormInputs();
