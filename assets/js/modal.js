let signIn = document.querySelector('.header__navbar-link--Login');
signIn.addEventListener('click', displayLogin);

const modal = document.querySelector('.modal');
function displayLogin(event){
    let modalSiginUp  = document.querySelector('.auth-form-signup');
    let  modalSignIn = document.querySelector('.auth-form-login');
    modalSiginUp.setAttribute('style','display:none');
    modalSignIn.setAttribute('style','display:block');
    modal.setAttribute('style','display:flex');
    
}

let signUp = document.querySelector('.header__navbar-link-signup');
signUp.addEventListener('click',displaySignup);

function displaySignup(event){
    let modalSiginUp  = document.querySelector('.auth-form-signup');
    let  modalSignIn = document.querySelector('.auth-form-login');
    modalSignIn.setAttribute('style','display:none');
    modalSiginUp.setAttribute('style','display:block');
    modal.setAttribute('style','display:flex');

}

//trở lại
let back = document.querySelector('.auth-form__controls-btnBack--event');
back.addEventListener('click',displayBack);
function displayBack(event){
    modal.setAttribute('style','display:none');
}
let back2 = document.querySelector('.auth-form__controls-btnBackSignup--event');
   back2.addEventListener('click',displayBack);

let btnTransformSignUp = document.querySelector('.btn--event-signup');
btnTransformSignUp.addEventListener('click',displaySignup);

let btnTransformLogin = document.querySelector('.btn--event-Login');
btnTransformLogin.addEventListener('click', displayLogin);