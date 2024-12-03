import agregarUsuarioBD from "./agregarUsuarioBD.js";

document.getElementById('registroForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // ------------------------
  // Obtener valores de los campos
  // ------------------------
  const userName = document.getElementById('nombre').value;
  const userPhone = document.getElementById('telefono').value;
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const alertaDiv = document.getElementById('alerta');

  // ------------------------
  // Recuperar los usuarios ya registrados del localStorage
  // ------------------------
  let user_list = JSON.parse(localStorage.getItem("Usuarios Registrados")) || []; // Si no hay usuarios, se crea un array vacío

  // ------------------------
  // Validación para checar que solo sea un correo por usuario
  // ------------------------
  if (user_list.some((v) => v.Correo === userEmail)) {
    alert("El correo ya está registrado");
  } else {
    // ------------------------
    // Guardar el nuevo usuario en el array
    // ------------------------
    user_list.push({
      "Nombre": userName,
      "Teléfono": userPhone,
      "Correo": userEmail,
      "Contraseña": userPassword
    });

    // ------------------------
    // Guardar la lista actualizada de usuarios en localStorage
    // ------------------------
    localStorage.setItem("Usuarios Registrados", JSON.stringify(user_list));

    // ------------------------
    // Limpiar alertas previas
    // ------------------------
    alertaDiv.innerHTML = '';

    // ------------------------
    // Validaciones
    // ------------------------
    let errores = [];

    // Validación de campos obligatorios
    if (!userName || !userPhone || !userEmail || !userPassword || !confirmPassword) {
      errores.push("Todos los campos son obligatorios.");
    }

    // Validación de formato de teléfono (números de 10 dígitos)
    const telefonoRegex = /^[0-9]{10}$/;
    if (!telefonoRegex.test(userPhone)) {
      errores.push("El número de teléfono debe tener 10 dígitos.");
    }

    // Validación de formato de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(userEmail)) {
      errores.push("El formato del correo electrónico no es válido.");
    }

    // Validación de contraseña
    if (userPassword !== confirmPassword) {
      errores.push("Las contraseñas no coinciden.");
    }

    // Si hay errores, se muestran
    if (errores.length > 0) {
      alertaDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
          ${errores.join('<br>')}
        </div>
      `;
    } else {
      alertaDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
          Registro exitoso. Usuario creado correctamente.
        </div>
      `;
      
      // Reiniciar el formulario
      document.getElementById('registroForm').reset();
    }
  }

  // Llamada a la función para agregar el usuario a la base de datos
  agregarUsuarioBD();
});

// Mostrar todos los usuarios registrados en la consola (opcional)
const user_list = JSON.parse(localStorage.getItem("Usuarios Registrados")) || [];
console.log("Usuarios registrados:", user_list);
