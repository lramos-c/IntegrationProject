// Script para iniciar sesión
document.getElementById("loginForm").addEventListener("submit", function(event){
event.preventDefault();
// Recupera los siguientes datos de localStorage
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

var usuario = localStorage.getItem("email");

// Validación para poder iniciar sesión
if (usuario) {
    var parsedUser = JSON.parse(user);
    if (parsedUser.password === password) {
        localStorage.setItem("usuario", JSON.stringify(parsedUser));
        window.location.href = "/pages/index.html";
    } else {
        alert("Contraseña equivocada");
    } 
    } else {
        alert("Usuario no encontrado");
    }
});