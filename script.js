const error = document.querySelector('.error'); 
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');

password.addEventListener('keyup', validate);
confirmPassword.addEventListener('keyup', validate);

function validate() {
    if(password.value == '' || confirmPassword.value == '') {
        password.style.borderColor = '#001b3640';
        confirmPassword.style.borderColor = '#001b3640'; 
        error.style.display = 'none'; 
    } else {
        if(password.value != confirmPassword.value) {
            password.style.borderColor = '#fe635f';
            confirmPassword.style.borderColor = '#fe635f'; 
            error.style.display = 'block'; 
        } else {
            password.style.borderColor = '#001b3640';
            confirmPassword.style.borderColor = '#001b3640'; 
            error.style.display = 'none'; 
        }
    }
}