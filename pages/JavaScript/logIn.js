// Script para iniciar sesión
document.getElementById("loginForm").addEventListener("submit", function(event){
event.preventDefault();
// Recupera los siguientes datos de localStorage
const userEmail = document.getElementById("email").value;
const userPassword = document.getElementById("password").value;

let user_list = new Array();
user_list = JSON.parse(localStorage.getItem("Usuarios Registrados"))?JSON.parse(localStorage.getItem("Usuarios Registrados")):[]
// Validación para checar que solo sea un correo por usuario
if(user_list.some((v)=>{
  return v.userEmail==email && v.userPassword==password
})){
  alert("Acceso correcto");
}else {
  alert("Correo y/o contraseña incorrectos")
  }})

