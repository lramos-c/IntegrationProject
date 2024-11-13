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
  
    //Verificación de correo duplicado
    const usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
    const usuarioExistente = usuarios.find(user => user.email === email);
    if (usuarioExistente) {
      errores.push("Este correo electrónico ya está registrado.");
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
  
       // Obtener usuarios existentes, o crear un array vacío si no hay ninguno
    const usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];

    // Agregar el nuevo usuario al array
    usuarios.push(usuario);

     // Guardar los datos en LocalStorage usando JSON del usuario
      localStorage.setItem("Usuarios", JSON.stringify(usuarios));

     // Recuperar los datos de LocalStorage
      // const datosUsuario = localStorage.getItem("Usuario");
      // const usuario = JSON.parse(datosUsuario);
      // console.log(usuario);

     //Mostrar mensaje éxitoso 
     alertaDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
          Registro exitoso. Usuario creado correctamente.
        </div>
      `;
  
      //Limpiar el mensaje después de 5 segundos
      setTimeout(() => {
        alertaDiv.innerHTML = '';
      }, 5000);

      // Reiniciar el formulario
      document.getElementById('registroForm').reset();

    }
  });

      // Evento para el inicio de sesión
  document.getElementById('logIn').addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener los valores de los campos de inicio de sesión
  const emailLogin = document.getElementById('email-login').value;
  const passwordLogin = document.getElementById('password-login').value;
  const alertaLoginDiv = document.getElementById('alertaLogin');  

  // Limpiar alertas previas
  alertaLoginDiv.innerHTML = '';

  // Recuperar los datos almacenados en localStorage (usuarios registrados)
  const usuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];

  // Buscar el usuario que coincida con el email
  const usuarioEncontrado = usuarios.find(user => user.email === emailLogin);

  if (usuarioEncontrado) {
      // Si el correo existe, verificamos la contraseña
      if (usuarioEncontrado.password === passwordLogin) {
          // Si las credenciales coinciden, mostrar un mensaje de éxito
          alertaLoginDiv.innerHTML = `
              <div class="alert alert-success" role="alert">
                  ¡Inicio de sesión exitoso! Bienvenido, ${usuarioEncontrado.nombre}.
              </div>
          `;
      } else {
          // Si el correo está registrado pero la contraseña es incorrecta
          alertaLoginDiv.innerHTML = `
              <div class="alert alert-danger" role="alert">
                  Contraseña incorrecta.
              </div>
          `;
      }
  } else {
      // Si el correo no está registrado
      alertaLoginDiv.innerHTML = `
          <div class="alert alert-danger" role="alert">
              Correo electrónico no registrado.
          </div>
      `;
  }
});
