let perfil = document.getElementById("user-container")

let usuarioActivo = JSON.parse(localStorage.getItem("Usuario Activo"));


function mostrarUsuario() {

    perfil.innerHTML = ""

    if (!usuarioActivo) {
        window.location.href = "login.html"
    }

    const card = document.createElement("div")
    card.className = "user-card"
    card.innerHTML = `

    <h2 class="user-title">Usuario</h2>
    <img src="estilos/img/foto-perfil.jpg" alt="Avatar de usuario">
    <h2 class="userName">Nombre de usuario: ${usuarioActivo.usuario}</h2>
    <h2 class="user-email">Email del usuario: ${usuarioActivo.email}</h2>
    <h2 class="fechaRegistro">Fecha de registro: ${usuarioActivo.fechaRegistro}</h2>
    <button class="logout" id="logout-profile">Cerrar sesión</button>


    `

    perfil.appendChild(card)

}


mostrarUsuario()

document.getElementById("logout-profile").addEventListener("click", function(e) {
    localStorage.removeItem("Usuario Activo")
    location.reload()
})



if (usuarioActivo !== null) {

    let btnLogin = document.getElementById("btn-login")
    let userArea = document.getElementById("user-area")

    btnLogin.style.display = "none"
    userArea.style.display = "flex"

    userArea.innerHTML = `
        <img class="img-profile" src="estilos/img/foto-perfil.jpg" alt="foto-perfil">

        <button class="logout" id="logout">Cerrar sesión</button>
    `
}



document.getElementById("logout").addEventListener("click", function(e) {
    localStorage.removeItem("Usuario Activo")
    location.reload()
})