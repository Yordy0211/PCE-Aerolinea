const goRegister = document.getElementById("go-register")
const goLogin = document.getElementById("go-login")

const loginForm = document.getElementById("login-box")
const registerForm = document.getElementById("register-box")

goRegister.addEventListener("click", function (e) {
    e.preventDefault()
    loginForm.classList.add("hidden")
    registerForm.classList.remove("hidden")
})

goLogin.addEventListener("click", function(e) {
    e.preventDefault()
    registerForm.classList.add("hidden")
    loginForm.classList.remove("hidden")
})

