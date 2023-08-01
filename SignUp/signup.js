// signup.js
var email = document.forms['form']['email'];
var phone = document.forms['form']['phone'];
var password = document.forms['form']['password'];
var repeat_password = document.forms['form']['repeat_password'];

var email_error = document.getElementById('email_error');
var phone_error = document.getElementById('phone_error');
var pass_error = document.getElementById('pass_error');
var repeat_pass_error = document.getElementById('repeat_pass_error');

email.addEventListener('input', email_Verify);
phone.addEventListener('input', phone_Verify);
password.addEventListener('input', pass_Verify);

function validated(){
    if (email.value.trim() === '' || !validateEmail(email.value.trim())) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (phone.value.trim() === '') {
        phone.style.border = "1px solid red";
        phone_error.style.display = "block";
        phone.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
    if (password.value !== repeat_password.value) {
        repeat_password.style.border = "1px solid red";
        repeat_pass_error.style.display = "block";
        repeat_password.focus();
        return false;
    }
    return true; // Return true if all fields are valid
}

function email_Verify(){
    if (email.value.length >= 9 && validateEmail(email.value.trim())) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function phone_Verify() {
    // Remove non-numeric characters from the phone number input
    phone.value = phone.value.replace(/[^\d]/g, '');
    // Update the error message visibility based on input value
    if (phone.value.trim() === '') {
        phone.style.border = "1px solid red";
        phone_error.style.display = "block";
    } else {
        phone.style.border = "1px solid silver";
        phone_error.style.display = "none";
    }
}

function pass_Verify(){
    if (password.value.length >= 6) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}

function validateEmail(email) {
    // Regular expression to check the email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
