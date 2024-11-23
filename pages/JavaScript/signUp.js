document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // ------------------------
    // Obtener valores de los campos y guardar en local storage
    // ------------------------
    const userName = document.getElementById('nombre').value;
    const userPhone = document.getElementById('telefono').value;
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const alertaDiv = document.getElementById('alerta');

    localStorage.setItem("Nombre", userName);
    localStorage.setItem("Teléfono", userPhone);
    localStorage.setItem("Correo",userEmail);
    localStorage.setItem("Contraseña",userPassword);
  
    // ------------------------
    // Guardar más de un usuario en local storage
    // ------------------------
    let user_list = new Array();
    user_list = JSON.parse(localStorage.getItem("Usuarios Registrados"))?JSON.parse(localStorage.getItem("Usuarios Registrados")):[]
    // Validación para checar que solo sea un correo por usuario
    if(user_list.some((v)=>{
      return v.userEmail===email
    })){
      alert("El correo ya está registrado");
    }else {
      user_list.push({
        "Nombre": userName,
        "Teléfono": userPhone,
        "Correo": userEmail,
        "Contraseña": userPassword
      })
      localStorage.setItem("Usuarios Registrados",JSON.stringify(user_list));
    }


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
  


    // // ------------------------
    // // Mostrar errores o crear el objeto JSON
    // if (errores.length > 0) {
    //   alertaDiv.innerHTML = `
    //     <div class="alert alert-danger" role="alert">
    //       ${errores.join('<br>')}
    //     </div>
    //   `;
    // } else {
    //   // Crear objeto JSON del usuario
    //   const userProfile = {
    //     nombre: userName,
    //     telefono: userPhone,
    //     email: userEmail,
    //     password: userPassword
    //   };
  
    //   // ------------------------
    //   // Mostrar el objeto JSON en consola (o hacer algo con él)
    //   console.log("Usuario registrado:", JSON.stringify(userProfile));
  
    //   // Guardar los datos en LocalStorage usando JSON del usuario
    //   localStorage.setItem("Usuario", JSON.stringify(userProfile));

    //   // // Recuperar los datos de LocalStorage
    //   // const datosUsuario = localStorage.getItem("Usuario");
    //   // const usuario = JSON.parse(datosUsuario);
    //   // console.log(usuario);

      alertaDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
          Registro exitoso. Usuario creado correctamente.
        </div>
      `;
  
      // Reiniciar el formulario
      document.getElementById('registroForm').reset();
    }
  );
  