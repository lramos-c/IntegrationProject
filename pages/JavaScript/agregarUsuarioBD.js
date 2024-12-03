
export default async function agregarUsuarioBD(nuevoUsuario) {
  const URL = "https://api.tudominio.com/usuarios"; // Cambia esto a tu endpoint real

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario), // Enviar los datos del usuario
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Usuario registrado:", data); // Muestra la respuesta de la API en la consola
      return true; // Retorna true si el registro fue exitoso
    } else {
      console.error("Error en la respuesta de la API:", response.status);
      return false; // Retorna false si hubo un problema
    }
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    return false; // Retorna false si hubo un error de conexión
  }
}