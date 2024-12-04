<<<<<<< HEAD
export default async function agregarUsuarioBD(newUserData) {
  const URL = "http://localhost:8080/api/bda"; 
=======

export default async function agregarUsuarioBD(nuevoUsuario) {
  const URL = "http://localhost:8080/api/bda"; // Cambia esto a tu endpoint real

>>>>>>> 498af51600aab2e8414d328dc46ccb8ae2685ef2
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserData)
    });

    // Check response status
    // if (response.status === 409) {
    //   throw new Error('User already exists with this email');
    // }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Usuario registrado:", data);
    return data;

  } catch(error) {
    console.error("Error:", error.message);
    throw error; // Re-throw the error to handle it in the calling function
  }
}
