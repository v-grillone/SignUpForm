// Login screen popup functionality

const existingLogin = document.getElementById('existing-login');
const loginScreen = document.querySelector('.login-screen');
const loginBackout = document.getElementById('login-backout');

existingLogin.addEventListener('click', () => {
    loginScreen.style.display = 'flex';


});

loginBackout.addEventListener('click', () => {
    loginScreen.style.display = 'none';
});

// Home page pop-up

const createAccBtn = document.getElementById('create-acc-btn');
const homeScreen = document.querySelector('.home-screen');
const loginBtn = document.getElementById('login-btn');
let homeText = document.querySelector('.home-text');
const originalHomeText = homeText.innerHTML;

// Create account to home page logic

let firstNameInput = document.getElementById('first-name');
let firstName = false;
firstNameInput.addEventListener('change', () => {
    if(firstNameInput.value.length > 0){
        firstName = true;
    }else{
        firstName = false;
    }
});
let newHomeText = '';
createAccBtn.addEventListener('click', () => {
    if(firstName){
        homeScreen.style.display = 'inline-block';
        newHomeText = homeText.innerText.concat(' ',firstNameInput.value);
        homeText.innerText = newHomeText;
    }else{
        alert('Enter a first name to continue..');
    }
});

// Login to home page logic

let emailInput = document.getElementById('login-email');
let email = false;
emailInput.addEventListener('change', () => {
    if(emailInput.value.length > 0){
        email = true;
    }else{
        email = false;
    }
});
loginBtn.addEventListener('click', () => {
    if(email){
        homeScreen.style.display = 'inline-block';
        newHomeText = homeText.innerText.concat(' ',emailInput.value);
        homeText.innerText = newHomeText;
    }else{
        alert('Enter a email to continue..')
    }
});

// Return to form functionality

const homeBackout = document.getElementById('home-backout');

homeBackout.addEventListener('click', () => {
    homeScreen.style.display = 'none';
    firstNameInput.value = '';
    firstName = false;
    emailInput.value = '';
    email = false;
    newHomeText = '';
    homeText.innerText = originalHomeText;
    loginScreen.style.display = 'none';

});

