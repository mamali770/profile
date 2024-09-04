//variables
const btn = document.querySelector("#mSub");
const Uname = document.querySelector("#mName");
const email = document.querySelector("#mEmail");
const pass = document.querySelector("#mPass");
// event listeners
document.addEventListener('DOMContentLoaded',desableBtn);
Uname.addEventListener('blur' , validateName);
email.addEventListener('blur' , validateEmail);
pass.addEventListener('blur' , validatePass);
// functions
function desableBtn() {
    btn.disabled = true;
}
function validation() {
    const isNameValid = Uname.classList.contains('border-success');
    const isEmailValid = email.classList.contains('border-success');
    const isPassValid = pass.classList.contains('border-success');
    if (isNameValid && isEmailValid && isPassValid) {
        btn.disabled = false;
    }
}
function validateName() {
    if (Uname.value.length >= 3) {
        // if values true
        Uname.classList = 'form-control border-success';
        validation();
    } else {
        // if values false
        Uname.classList = 'form-control border-danger';
        displayErr('نام کاربر باید حداقل شامل 3 کاراکتر باشد.');
    }
}
function validateEmail() {
    if (email.value.length >= 3 && email.value.search('@')) {
        // if values true
        email.classList = 'form-control border-success';
        validation();
    } else {
        // if values false
        email.classList = 'form-control border-danger';
        displayErr('ایمیل باید شامل حداقل شامل @ و 3 کاراکتر باشد.');
    }
}
function validatePass() {
    if (pass.value.length >= 3) {
        // if values true
        pass.classList = 'form-control border-success';
        validation();
    } else {
        // if values false
        pass.classList = 'form-control border-danger';
        displayErr('رمز عبور باید حداقل شامل 3 کاراکتر باشد.');
    }
}
function displayErr(err) {
    const resultTag = document.querySelector("#mError");
    resultTag.classList = "alert alert-danger text-center";
    resultTag.textContent = err;
    setTimeout(() => {
        resultTag.textContent = "";
        resultTag.classList = "";
    }, 4000);
}