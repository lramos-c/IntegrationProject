// Cargar libros desde localStorage o establecer el array inicial
let books = JSON.parse(localStorage.getItem('books')) || [
    { img: 'https://m.media-amazon.com/images/I/713nEf55PkL._AC_UF1000,1000_QL80_.jpg', isbn: '123456', title: 'Book 1', author: 'Autor 1', publisher: 'Publisher 1', description: 'Sample book 1', price: 599.99 },
    { img: 'https://www.planetadelibros.com/usuaris/libros/fotos/377/original/portada_el-codigo-da-vinci_dan-brown_202310231128.jpg', isbn: '234567', title: 'Book 2', author: 'Autor 2', publisher: 'Publisher 2', description: 'Sample book 2', price: 289.00 },
    { img: 'https://m.media-amazon.com/images/I/81ZqSrqKT4L._AC_UF1000,1000_QL80_.jpg', isbn: '234567', title: 'Book 3', author: 'Autor 3', publisher: 'Publisher 3', description: 'Sample book 3', price: 250.00 },
    { img: 'https://m.media-amazon.com/images/I/91Op0BdHd0L._SL1500_.jpg', isbn: '234567', title: 'Book 3', author: 'Autor 3', publisher: 'Publisher 3', description: 'Sample book 3', price: 250.00 },
    { img: 'https://i.pinimg.com/564x/dc/0e/c0/dc0ec0d08743f30a44a384689058f2ad.jpg', isbn: '234567', title: 'Book 3', author: 'Autor 3', publisher: 'Publisher 3', description: 'Sample book 3', price: 250.00 },
    { img: 'https://i.pinimg.com/736x/24/6a/a1/246aa11067186cdf68e93db476cf3d93.jpg', isbn: '234567', title: 'Book 3', author: 'Autor 3', publisher: 'Publisher 3', description: 'Sample book 3', price: 250.00 },
    { img: 'https://i.pinimg.com/564x/04/67/7b/04677b90c0f9f26193224099beccade2.jpg', isbn: '234567', title: 'Book 3', author: 'Autor 3', publisher: 'Publisher 3', description: 'Sample book 3', price: 250.00 },
    { img: 'https://i.pinimg.com/564x/98/59/f0/9859f0cb410e11204c166e7da797bd0a.jpg', isbn: '234567', title: 'Book 3', author: 'Autor 3', publisher: 'Publisher 3', description: 'Sample book 3', price: 250.00 },
    { img: 'https://m.media-amazon.com/images/I/81ZqSrqKT4L._AC_UF1000,1000_QL80_.jpg', isbn: '234567', title: 'Book 3', author: 'Autor 3', publisher: 'Publisher 3', description: 'Sample book 3', price: 250.00 },
    { img: 'https://m.media-amazon.com/images/I/81ZqSrqKT4L._AC_UF1000,1000_QL80_.jpg', isbn: '234567', title: 'Book 3', author: 'Autor 3', publisher: 'Publisher 3', description: 'Sample book 3', price: 250.00 },
    
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


document.getElementById('book-form').addEventListener('submit', addBook);
document.getElementById('clear-list').addEventListener('click', clearList);

function toggleActiveBook(index) {
    const listItems = document.querySelectorAll('#book-list li');
    listItems.forEach((item, i) => {
        if (i === index) {
            item.classList.toggle('active');
        } else {
            item.classList.remove('active'); 
        }
    });
}

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
        li.addEventListener('click', () => toggleActiveBook(index));
        list.appendChild(li);
    });
}

// Render inicial
renderBooks();


