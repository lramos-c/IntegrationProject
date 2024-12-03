// ----------------------------------------
// SHOPPING CART
// ----------------------------------------
// Obtener carrito del localStorage o inicializar vacío
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Renderizar los productos en el carrito
function renderShoppingCart() {
    const cartItemsContainer = document.querySelector('.card-products-list-container');
    const emptyCartIcon = document.querySelector('.empty-cart-icon');
    const cart = getCart();

    // Limpiar el contenedor
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        // Mostrar el mensaje de carrito vacío
        emptyCartIcon.style.display = 'block';
        cartItemsContainer.innerHTML = '<p>Tu carrito de compras está vacío.</p>';
    } else {
        // Ocultar el mensaje de carrito vacío
        emptyCartIcon.style.display = 'none';

        // Renderizar cada producto
        cart.forEach((item) => {
            const productCard = document.createElement('div');
            productCard.className = 'cart-product';

            productCard.innerHTML = `
                <img src="${item.img}" alt="${item.title}" class="cart-product-img">
                <div class="cart-product-info">
                    <h3>${item.title}</h3>
                    <p>Autor: ${item.author}</p>
                    <p>Precio: $${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-item-btn" data-isbn="${item.isbn}">&times;</button>
            `;

            cartItemsContainer.appendChild(productCard);
        });

        // Agregar funcionalidad para eliminar productos
        document.querySelectorAll('.remove-item-btn').forEach((button) =>
            button.addEventListener('click', (event) => removeFromCart(event.target.dataset.isbn))
        );
    }
}

// Eliminar producto del carrito
function removeFromCart(isbn) {
    const cart = getCart();
    const updatedCart = cart.filter((item) => item.isbn !== isbn);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    renderShoppingCart();
}

// Render inicial del carrito
renderShoppingCart();

