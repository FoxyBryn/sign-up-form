const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');

function checkPassword() {
    let status = document.querySelector('.password-status');
    let submitBtn = document.querySelector('#submit');

    status.textContent = '';
    submitBtn.removeAttribute('disabled');
    password.classList.remove('invalid');
    confirmPassword.classList.remove('invalid');

    if (confirmPassword.value === '')
        return;

    if (password.value === confirmPassword.value)
        return;

    status.textContent = "*Password does not match.";
    submitBtn.setAttribute('disabled', 'disabled');
    password.classList.add('invalid');
    confirmPassword.classList.add('invalid');
}

password.addEventListener('keyup', () => checkPassword());
confirmPassword.addEventListener('keyup', () => checkPassword());