//Esto hace que al hacer click en registrarse cambie de de iniciar sesion-
//a registrarse y al revéz

const goRegister = document.getElementById("go-register") //esto toma el link de registrarse y login y lo guarda en esta variable
const goLogin = document.getElementById("go-login")

const loginContainer = document.getElementById("login-box")//esto busca el contenedordel login y register en el archivo html
const registerContainer = document.getElementById("register-box")

goRegister.addEventListener("click", function (e) { //esta funcion hace que al hacer click en registrarse cambie al form de registro
    e.preventDefault()
    loginContainer.classList.add("hidden")
    registerContainer.classList.remove("hidden")
})

goLogin.addEventListener("click", function(e) { //esta funcion hace que al hacer click en iniciar sesion cambie al form de login
    e.preventDefault()
    registerContainer.classList.add("hidden")
    loginContainer.classList.remove("hidden")
})



// esta funcion creara un nuevo usuario en la pagina

const registerForm = document.getElementById("register-form")

registerForm.addEventListener("submit", function(e){
    e.preventDefault()
    let usuarioReg = document.getElementById("usuario-register").value
    let emailReg = document.getElementById("email-register").value
    let passwordReg = document.getElementById("password-register").value
    
    let usuario = localStorage.getItem("usuario")

    if (usuario === null) {
        usuario = []
    } else {
        usuario = JSON.parse(usuario)
    }

    let usuarioExiste = usuario.find(u => u.email === emailReg)

    if (usuarioExiste){
        alert("Usuario ya existente")
        return
    }

    const nuevoUsuario = {
        usuario: usuarioReg,
        email: emailReg,
        password: passwordReg
    }

    usuario.push(nuevoUsuario)

    localStorage.setItem("usuario", JSON.stringify(usuario))

    alert("Usuario registrado con exito")
})


//inicio de sesion

const loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", function(e) {
    e.preventDefault()

    let emailLog = document.getElementById("email-login").value
    let passwordLog = document.getElementById("password-login").value

    let usuario = localStorage.getItem("usuario")

    if (usuario === null) {
        alert("No existe este usuario")
        return
    }

    usuario = JSON.parse(usuario)

    const buscarUsuario = usuario.find(
        u => u.email === emailLog
    )

    if (!buscarUsuario) {
        alert("El email no existe")
        return
    }

    if (buscarUsuario.password !== passwordLog) {
        alert("Contraseña incorrecta")
        return
    }

    localStorage.setItem(
        "Usuario Activo",
        JSON.stringify(buscarUsuario)
    )
    alert("Inicio de sesion correcto")
    window.location.href = "index.html"

})

