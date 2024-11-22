// Obtener libros del localStorage
function getBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
}

// Renderizar los libros en la página principal
function renderBooks() {
    const container = document.getElementById('products-container');
    const books = getBooks();
    container.innerHTML = '';

    books.forEach((book) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${book.img}" alt="${book.title}" class="product-img">
            <h3 class="product-title">${book.title}</h3>
            <p class="product-author">Autor: ${book.author}</p>
            <p class="product-price">Precio: $${book.price.toFixed(2)}</p>
            <p class="product-description">Descripción: ${book.description}</p>
            <button class="add-to-cart-btn" data-isbn="${book.isbn}">Añadir al Carrito</button>
        `;

        container.appendChild(productCard);
    });

    // Agregar funcionalidad al botón "Añadir al Carrito"
    document.querySelectorAll('.add-to-cart-btn').forEach((button) =>
        button.addEventListener('click', (event) => addToCart(event.target.dataset.isbn))
    );
}

// Función para añadir un libro al carrito
function addToCart(isbn) {
    const books = getBooks();
    const book = books.find((b) => b.isbn === isbn);
    if (book) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(book);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// Render inicial
renderBooks();
