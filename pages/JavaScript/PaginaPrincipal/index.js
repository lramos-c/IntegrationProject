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
            <button class="view-details-btn btn btn-dark" data-isbn="${book.isbn}">Ver Detalles</button>
            <button class="add-to-cart-btn" data-isbn="${book.isbn}">Añadir al Carrito</button>
        `;

        container.appendChild(productCard);
    });

    // Agregar funcionalidad al botón "Ver Detalles"
    document.querySelectorAll('.view-details-btn').forEach((button) =>
        button.addEventListener('click', (event) => openProductModal(event.target.dataset.isbn))
    );

    // Agregar funcionalidad al botón "Añadir al Carrito"
    document.querySelectorAll('.add-to-cart-btn').forEach((button) =>
        button.addEventListener('click', (event) => addToCart(event.target.dataset.isbn))
    );
}

function addToCart(isbn) {
    const books = getBooks();  // Get the books data
    const book = books.find((b) => b.isbn === isbn);  // Find the book by ISBN

    if (book) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the book is already in the cart by ISBN
        const existingItem = cart.find((item) => item.isbn === isbn);
        
        if (existingItem) {
            // If the book is already in the cart, increase the quantity
            existingItem.quantity += 1;
        } else {
            // If the book is not in the cart, add it with quantity 1
            book.quantity = 1;
            cart.push(book);
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the cart UI automatically
        renderCart();  // Call renderCart to update the cart UI
    }
}

 // Add event listeners to "View Details" buttons
 document.querySelectorAll(".view-details-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
        const isbn = event.target.dataset.isbn;
        openProductModal(isbn);
    });
});

function openProductModal(isbn) {
    const books = getBooks();
    const book = books.find(b => b.isbn === isbn);

    if (book) {
        // Populate modal with product data
        document.getElementById("modal-product-img").src = book.img;
        document.getElementById("modal-product-title").textContent = book.title;
        document.getElementById("modal-product-author").textContent = `Autor: ${book.author}`;
        document.getElementById("modal-product-price").textContent = `Precio: $${book.price.toFixed(2)}`;
        document.getElementById("modal-product-description").textContent = book.description;

        // Call renderRatingStars with the book's rating (assuming it's a number between 1 and 5)
        const rating = book.rating || 0; // Default to 0 if no rating
        renderRatingStars(rating); // This will update the stars in the modal

        // Add event listener to "Add to Cart" button inside the modal
        document.getElementById("add-to-cart-btn").onclick = () => addToCart(isbn);

        // Show the modal
        document.getElementById("product-modal").style.display = "block";
    }
}

// Function to render the star rating
function renderRatingStars(rating) {
    const starsContainer = document.getElementById("modal-product-rating");
    starsContainer.innerHTML = ''; // Clear any existing stars

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        if (i <= rating) {
            star.className = 'star filled';
        } else {
            star.className = 'star';
        }
        star.textContent = '★';
        starsContainer.appendChild(star);
    }
}

// Function to close the modal
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("product-modal").style.display = "none";
});

// Function to close the modal
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("product-modal").style.display = "none";
});

// Render inicial
renderBooks();

// Sample modal structure
// Assuming you already have the modal structure like this:
const modalHTML = `
<div id="product-modal" class="modal" style="display: none;">
    <div class="modal-content">
        <span id="close-modal" class="close">&times;</span>
        <div class="product-details">
            <img id="modal-product-img" alt="Product Image">
            <h2 id="modal-product-title"></h2>
            <p id="modal-product-author"></p>
            <p id="modal-product-price"></p>
            <p id="modal-product-description"></p>
            <div id="modal-product-rating"></div> <!-- Star rating container -->
            <button id="add-to-cart-btn">Añadir al Carrito</button>
        </div>
    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);  // Dynamically add modal to the body