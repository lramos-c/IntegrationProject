// verificarLogin.js
export default async function verificarLogin(email, password) {
  // Recupera los usuarios almacenados en localStorage (si los hay)
  const userList = JSON.parse(localStorage.getItem("Usuarios Registrados")) || [];

  // Busca el usuario con el correo proporcionado
  const user = userList.find((u) => u.Correo === email);

  if (user && user.Contraseña === password) {
    // Si el usuario existe y la contraseña coincide, retorna true
    return true;
  } else {
    // Si no existe o las contraseñas no coinciden, retorna false
    return false;
  }
}
