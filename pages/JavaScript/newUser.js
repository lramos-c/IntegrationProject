document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const alertaDiv = document.getElementById('alerta');
  
    // Limpiar alertas previas
    alertaDiv.innerHTML = '';
  
    // Validaciones
    let errores = [];
  
    // Validación de campos obligatorios
    if (!nombre || !telefono || !email || !password || !confirmPassword) {
      errores.push("Todos los campos son obligatorios.");
    }
  
    // Validación de formato de teléfono (números de 10 dígitos)
    const telefonoRegex = /^[0-9]{10}$/;
    if (!telefonoRegex.test(telefono)) {
      errores.push("El número de teléfono debe tener 10 dígitos.");
    }
  
    // Validación de formato de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      errores.push("El formato del correo electrónico no es válido.");
    }
  
    // Validación de contraseña
    if (password !== confirmPassword) {
      errores.push("Las contraseñas no coinciden.");
    }
  
    // Mostrar errores o crear el objeto JSON
    if (errores.length > 0) {
      alertaDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
          ${errores.join('<br>')}
        </div>
      `;
    } else {
      // Crear objeto JSON del usuario
      const usuario = {
        nombre: nombre,
        telefono: telefono,
        email: email,
        password: password
      };
  
      // Mostrar el objeto JSON en consola (o hacer algo con él)
      console.log("Usuario registrado:", JSON.stringify(usuario));
  
      alertaDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
          Registro exitoso. Usuario creado correctamente.
        </div>
      `;
  
      // Reiniciar el formulario
      document.getElementById('registroForm').reset();
    }
  });
  