import verificarLogin from "./verificarLogin.js";

// Agrega un listener al formulario de login para manejar el evento "submit".
document.getElementById("loginForm").addEventListener("submit", async function (event) {
  // Evita que el formulario recargue la página al enviarse.
  event.preventDefault();

  // Obtiene los valores ingresados por el usuario en los campos de correo y contraseña.
  const userEmail = document.getElementById("email").value; // Correo ingresado.
  const userPassword = document.getElementById("password").value; // Contraseña ingresada.

  // Llama a la función `verificarLogin` para validar las credenciales.
  // Retorna `true` si las credenciales son correctas, o `false` si son incorrectas.
  const loginSuccess = await verificarLogin(userEmail, userPassword);

  if (loginSuccess) {
    // Si el login es exitoso, muestra un mensaje y redirige al usuario al dashboard.
    alert("Acceso correcto");
    window.location.href = "/"; 
  } else {
    // Si las credenciales no coinciden, muestra un mensaje de error.
    alert("Correo y/o contraseña incorrectos");
  }
});

