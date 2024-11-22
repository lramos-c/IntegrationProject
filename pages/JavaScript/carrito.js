// Obtener el carrito del localStorage o inicializarlo vacío
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Guardar el carrito en localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Renderizar el contenido del carrito
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cart = getCart();

    cartItemsContainer.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <img src="${item.img}" alt="${item.title}">
                <strong>${item.title}</strong> - $${item.price.toFixed(2)}
            </div>
            <button class="remove-item-btn" data-index="${index}">&times;</button>
        `;
        cartItemsContainer.appendChild(listItem);
    });

    cartCount.textContent = cart.length;

    // Botones para eliminar elementos del carrito
    document.querySelectorAll('.remove-item-btn').forEach((button) =>
        button.addEventListener('click', (event) => removeFromCart(event.target.dataset.index))
    );
}

// Añadir producto al carrito
function addToCart(isbn) {
    const books = getBooks();
    const book = books.find((b) => b.isbn === isbn);
    if (book) {
        const cart = getCart();
        cart.push(book);
        saveCart(cart);
        renderCart();
        alert(`${book.title} ha sido añadido al carrito.`);
    }
}

// Eliminar producto del carrito
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

// Mostrar/Ocultar la lista desplegable del carrito
document.querySelector('.cart-btn').addEventListener('click', () => {
    const dropdown = document.getElementById('cart-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Render inicial del carrito
renderCart();
