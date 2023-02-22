const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click',function(event) {
    if (password.value === confirm_password.value){
        message.textContent = "Correcto!"
    }
    else {
        message.textContent = "Error, compruebe de nuevo"
    }
});