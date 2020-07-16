var x = document.getElementById("signin");
var y = document.getElementById("signup");
var z = document.getElementById("btn");


function signin() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";

}

function signup() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

var username = document.getElementById('username');
var email1 = document.getElementById('email1');
var password1 = document.getElementById('password1');

// storing input from register-form
function store() {
    localStorage.setItem('email1', email1.value);
    localStorage.setItem('password1', password1.value);
    localStorage.setItem('username', username.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedEmail = localStorage.getItem('email1');
    var storedPassword = localStorage.getItem('password1');

    // entered data from the login-form
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    // check if stored data from register-form is equal to data from login form
    if (email.value == storedEmail && password.value == storedPassword) {
        alert('You are loged in.');
        window.open("result.html");
    } else {
        alert('Invalid Email or Password!');
    }
}