document.getElementById("btn-login").addEventListener("click", function (){
    window.location.href = "login.html"
})

//esto quita el boton de login de la pagina y lo reemplaza por el perfil del usuario y el boton de logout


const usuarioActivo = localStorage.getItem("Usuario Activo")

if (usuarioActivo !== null) {

    const usuario = JSON.parse(usuarioActivo)

    let btnLogin = document.getElementById("btn-login")
    let userArea = document.getElementById("user-area")

    btnLogin.style.display = "none"

    userArea.innerHTML = `
        <div class="user-profile" id="go-profile">
        <span class="username">${usuario.usuario}</span>
        <div class="avatar">${usuario.usuario.charAt(0).toUpperCase()}</div>
        </div>
        <button class="logout" id="logout">Cerrrar sesión</button>
    `
}

//al hacer click en el perfil te manda hacia la pagina del perfil

document.getElementById("go-profile").addEventListener("click", function(e) {
    if (e.target.id === "logout") return
    window.location.href = "prefil.html"
})

//esto cerrara la sesion de la pagina


document.getElementById("logout").addEventListener("click", function(e) {
    localStorage.removeItem("Usuario Activo")
    location.reload()
})