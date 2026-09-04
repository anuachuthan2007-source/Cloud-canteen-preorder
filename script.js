// Cloud Canteen - Temporary Frontend Script

// Register Form
const registerForm = document.getElementById("registerForm");

if (registerForm) {
registerForm.addEventListener("submit", function (event) {
event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration successful! Please login.");

    window.location.href = "index.html";
});

}

// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
loginForm.addEventListener("submit", function (event) {
event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter email and password.");
        return;
    }

    alert("Login successful!");

    window.location.href = "dashboard.html";
});

}