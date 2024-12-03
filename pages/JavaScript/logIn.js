
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


~document.getElementById('registroForm').addEventListener('submit', async function (event) {
  event.preventDefault(); // Evita que el formulario recargue la página.

  // Capturar los datos del formulario
  const userName = document.getElementById('nombre').value;
  const userPhone = document.getElementById('telefono').value;
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const alertaDiv = document.getElementById('alerta');

  // Validaciones en el frontend
  const errores = [];

  // Validación: todos los campos son obligatorios
  if (!userName || !userPhone || !userEmail || !userPassword || !confirmPassword) {
      errores.push("Todos los campos son obligatorios.");
  }

  // Validación: teléfono (10 dígitos)
  const telefonoRegex = /^[0-9]{10}$/;
  if (!telefonoRegex.test(userPhone)) {
      errores.push("El número de teléfono debe tener 10 dígitos.");
  }

  // Validación: correo electrónico
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(userEmail)) {
      errores.push("El formato del correo electrónico no es válido.");
  }

  // Validación: contraseñas coincidan
  if (userPassword !== confirmPassword) {
      errores.push("Las contraseñas no coinciden.");
  }

  // Mostrar errores si los hay
  if (errores.length > 0) {
      alertaDiv.innerHTML = `
          <div class="alert alert-danger" role="alert">
              ${errores.join('<br>')}
          </div>
      `;
      return; // Detiene la ejecución si hay errores
  }

  // Crear el objeto de usuario
  const userProfile = {
      nombre: userName,
      telefono: userPhone,
      email: userEmail,
      password: userPassword,
  };

  try {
      // Enviar datos al backend con una petición POST
      const response = await fetch('http://localhost:8080/api/v1/signup', { // Cambia la URL según tu endpoint
          method: 'POST',
          headers: {
              'Content-Type': 'application/json' // Enviar como JSON
          },
          body: JSON.stringify(userProfile) // Convierte el objeto a JSON
      });

      if (response.ok) {
          alertaDiv.innerHTML = `
              <div class="alert alert-success" role="alert">
                  Registro exitoso. Usuario creado correctamente.
              </div>
          `;
          // Redirige al usuario al login
          window.location.href = "logIn.html"; // Cambia la ruta según tu aplicación
      } else {
          const errorData = await response.json();
          alertaDiv.innerHTML = `
              <div class="alert alert-danger" role="alert">
                  ${errorData.message || "Hubo un problema al registrar el usuario."}
              </div>
          `;
      }
  } catch (error) {
      console.error("Error en la solicitud:", error);
      alertaDiv.innerHTML = `
          <div class="alert alert-danger" role="alert">
              Hubo un problema al conectar con el servidor.
          </div>
      `;
  }
});