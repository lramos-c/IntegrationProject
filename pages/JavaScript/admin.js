// Cargar libros desde localStorage o establecer el array inicial
let books = JSON.parse(localStorage.getItem('books')) || [
    { img: 'https://m.media-amazon.com/images/I/713nEf55PkL._AC_UF1000,1000_QL80_.jpg', isbn: '123456', title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', description: 'Sample book 1', price: 19.99 },
    { img: 'https://www.planetadelibros.com/usuaris/libros/fotos/377/original/portada_el-codigo-da-vinci_dan-brown_202310231128.jpg', isbn: '234567', title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', description: 'Sample book 2', price: 25.00 },
    { img: 'https://m.media-amazon.com/images/I/81ZqSrqKT4L._AC_UF1000,1000_QL80_.jpg', isbn: '234567', title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', description: 'Sample book 2', price: 25.00 },
    
];

// Función para guardar libros en localStorage
function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
}

// Función para renderizar libros en la lista
function renderBooks() {
    const list = document.getElementById('book-list');
    list.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${book.img}" alt="${book.title}" width="100">
            <strong>${book.title}</strong><br>
            ISBN: ${book.isbn}<br>
            Autor: ${book.author}<br>
            Editorial: ${book.publisher}<br>
            Descripción: ${book.description}<br>
            Precio: $${book.price.toFixed(2)}
            <button onclick="deleteBook(${index})">Eliminar</button>
            <button onclick="editBook(${index})">Editar</button>
        `;
        list.appendChild(li);
    });
}

// Función para agregar un libro
function addBook(event) {
    event.preventDefault();
    const newBook = {
        img: document.getElementById('img').value,
        isbn: document.getElementById('isbn').value,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        publisher: document.getElementById('publisher').value,
        description: document.getElementById('description').value,
        price: parseFloat(document.getElementById('price').value),
    };
    books.push(newBook);
    saveBooks(); // Guardar en localStorage
    renderBooks();
    document.getElementById('book-form').reset();
}

// Función para eliminar un libro específico
function deleteBook(index) {
    books.splice(index, 1);
    saveBooks(); // Guardar en localStorage
    renderBooks();
}

// Función para editar un libro
function editBook(index) {
    const book = books[index];
    document.getElementById('img').value = book.img;
    document.getElementById('isbn').value = book.isbn;
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('publisher').value = book.publisher;
    document.getElementById('description').value = book.description;
    document.getElementById('price').value = book.price;
    books.splice(index, 1);
}

// Función para borrar toda la lista de libros
function clearList() {
    books = [];
    saveBooks(); // Limpiar localStorage
    renderBooks();
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', addBook);
document.getElementById('clear-list').addEventListener('click', clearList);

// Render inicial
renderBooks();


