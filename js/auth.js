// auth.js

function registerUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username && email && password) {
        const user = { username, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Pendaftaran berhasil! Silakan login.");
        window.location.href = "login.html";
    } else {
        alert("Lengkapi semua kolom pendaftaran.");
    }
}

function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Email atau password salah.");
    }
}
