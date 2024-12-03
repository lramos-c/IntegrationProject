// Obtener carrito del localStorage o inicializarlo vacío
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Guardar carrito en localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function renderShoppingCart() {
    const cartItemsContainer = document.querySelector('.card-products-list-container');
    const emptyCartMessage = '<p>Tu carrito de compras está vacío.</p>';
    const cart = getCart();

    // Clear the shopping cart container
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        // If the cart is empty, show the empty cart message
        cartItemsContainer.innerHTML = emptyCartMessage;
    } else {
        // Render each item in the cart
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
                <div class="quantity-selector">
                        <button type="button" class="decrease btn btn-dark" data-isbn="${item.isbn}">-</button>
                        <input type="number" class="quantity-input" min="1" value="${item.quantity || 1}" data-isbn="${item.isbn}">
                        <button type="button" class="increase btn btn-dark" data-isbn="${item.isbn}">+</button>
                    </div>
                <button class="remove-item-btn" data-isbn="${item.isbn}">&times;</button>
            `;

            cartItemsContainer.appendChild(productCard);
        });

        // Add event listeners for quantity changes and item removal
        document.querySelectorAll('.remove-item-btn').forEach((button) =>
            button.addEventListener('click', (event) => removeFromCart(event.target.dataset.isbn))
        );
    }

    // Update cart total price
    updateCartTotal();
}


// Function to calculate and display the cart total price
function updateCartTotal() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    document.querySelector('.cart-total').innerHTML = 
    `Subtotal: $${total.toFixed(2)}<br>
     Costo de envio: <br>
     Total del carrito: $${total.toFixed(2)}<br>
    `;
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('decrease') || e.target.classList.contains('increase')) {
        const input = e.target.closest('.quantity-selector').querySelector('.quantity-input');
        const isbn = input.dataset.isbn;
        const cart = getCart();
        const item = cart.find((i) => i.isbn === isbn);

        // Adjust quantity
        if (e.target.classList.contains('decrease')) {
            input.value = Math.max(1, parseInt(input.value) - 1);
        } else if (e.target.classList.contains('increase')) {
            input.value = parseInt(input.value) + 1;
        }

        // Update cart item quantity
        item.quantity = parseInt(input.value);

        // Save updated cart to localStorage
        saveCart(cart);

        // Update overall cart total
        updateCartTotal();
        renderDropdownCart();  // Re-render the dropdown cart
    }
});

// Handle manual input change
document.addEventListener('input', (e) => {
    if (e.target.classList.contains('quantity-input')) {
        const input = e.target;
        const isbn = input.dataset.isbn;
        const cart = getCart();
        const item = cart.find((i) => i.isbn === isbn);

        // Ensure valid input
        input.value = Math.max(1, parseInt(input.value) || 1);

        // Update cart item quantity
        item.quantity = parseInt(input.value);

        // Save updated cart to localStorage
        saveCart(cart);

        // Update overall cart total
        updateCartTotal();
        renderDropdownCart();  // Re-render the dropdown cart
    }
});

// Render inicial del carrito
renderShoppingCart();

console.log(local)