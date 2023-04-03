const loginForm = document.getElementById("form");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("err");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "1234") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
        
    }
})