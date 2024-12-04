// JavaScript para redirigir a la página correcta con la categoría seleccionada
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Evita la acción por defecto
        const categoria = item.getAttribute('data-category'); // Obtiene la categoría
        window.location.href = `/pages/HTML/categories.html?categoria=${categoria}`; // Redirige a la página con la categoría
        console.log(categoria);
        

    });
});

// Método GET para recuperar por categoría
async function fetchBooks(categoria) {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/books/category/${categoria}`);
        const book = await response.json();
        console.log(book);
       
    } catch (error) {
        console.error('Error al obtener los libros:', error);
    }
}

// Función para mostrar los libros en la página
function mostrarLibros(books) {
const contenedor = document.getElementById('products-container');
contenedor.innerHTML = ''; // Limpia el contenido previo

books.forEach(book => {
    // Crea un card para cada libro
    const div = document.createElement('div'); 
    div.innerHTML = bookCard; // Agrega el card al contenedor
        `<div class="card">
            <img src="${book.imagen}" class="card-img-top" alt="${book.title}"/>
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Autor: ${book.autor}</p>
                <p class="card-text">Precio: $${libro.precio}</p>
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>`
    ;
   
});
}

const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('categoria'); // Obtiene el parámetro 'categoria' de la URL

if (categoria) {
    fetchBooks(categoria); // Llama a la función con la categoría obtenida de la URL
}