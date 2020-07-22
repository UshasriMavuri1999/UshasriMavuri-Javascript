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
// validating email address
function validateEmail(inputEmail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputEmail.match(mailformat)) {
        return true;
    } else {

        return false;
    }
}
// validating password
function validatePassword(inputPassword) {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputPassword.match(decimal)) {
        return true;
    } else {
        return false;
    }
}


// storing input from register-form
function store() {
    console.log(email1.value);
    if (validateEmail(email1.value) && validatePassword(password1.value)) {
        alert("Successfully registered!");
        // window.NavigationPreloadManager()
        localStorage.setItem('email1', email1.value);
        localStorage.setItem('password1', password1.value);
        localStorage.setItem('username', username.value);

    } else {
        alert("You have entered an invalid email address / Password!");
    }

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
        window.location = "result.html";
    } else {
        alert('Invalid Email or Password!');
        document.querySelector('form').reset();
    }
}