const terminosLegales = document.querySelectorAll("ul.terminos li");

terminosLegales.forEach(item => {
    item.addEventListener("click", () =>{
        cambiarContenido(item.getAttribute("data-section"));
    });
});

function cambiarContenido(section){
    const contenido = document.getElementById("content");
    
    if (section==='tyc'){
        contenido.innerHTML=`<h2>Términos y condiciones</h2>
        <ol>
            <li><strong>Aceptación de los Términos</strong></li>
            <p>Al utilizar nuestro sitio, aceptas estos Términos y Condiciones en su totalidad. Si no estás de acuerdo, no utilices nuestros servicios.</p>
            <li><strong>Uso del Sitio</strong></li>
            <ul>
                <li>El contenido de este sitio es solo para tu información y uso personal.</li>
                <li>No puedes reproducir, duplicar, copiar, vender, revender ni explotar ninguna parte del sitio sin nuestro consentimiento expreso.</li>
            </ul>
            <li><strong>Registro de Usuario</strong></li>
            <ul>
                <li>Para realizar compras, es posible que necesites registrarte y crear una cuenta.</li>
                <li>Eres responsable de mantener la confidencialidad de tu contraseña y de la información de tu cuenta.</li>
            </ul>
            <li><strong>Precios y Pagos</strong></li>
            <ul>
                <li>Todos los precios están en [moneda] y pueden cambiar sin previo aviso.</li>
                <li>Aceptamos los siguientes métodos de pago: (lista de métodos de pago).</li>
                <li>Todos los pedidos están sujetos a la disponibilidad de los productos.</li>
            </ul>
            <li><strong>Envío y Entrega</strong></li>
            <ul>
                <li>Procesamos los pedidos en un plazo de [número] días hábiles.</li>
                <li>Los tiempos de entrega pueden variar según la ubicación y el método de envío seleccionado.</li>
            </ul>
            <li><strong>Devoluciones y Reembolsos</strong></li>
            <ul>
                <li>Puedes devolver productos dentro de [número] días de recibir tu pedido, siempre que estén en su estado original.</li>
                <li>Para iniciar una devolución, contáctanos a [correo electrónico].</li>
            </ul>
        </ol>`;
    } else if (section==='privacidad'){
        contenido.innerHTML=`<h2>Lorem</h2>
        <p>Lorem ipsum cosas en latin bien chidas y profundas. </p>
        `;
    }
}