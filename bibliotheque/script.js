
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    add(book) {
        this.books.push(book);
    }

    delete(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    find(title) {
        return this.books.find(book => book.title === title) || null;
    }
}

const library = new Library();

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title && author && isbn) {
        const book = new Book(title, author, isbn);
        library.add(book);
        displayBooks();
        clearFields();
    } else {
        alert('Please fill all fields.');
    }
}

function searchBook() {
    const title = document.getElementById('title').value;
    const book = library.find(title);
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    if (book) {
        bookList.innerHTML = `<div class="book-item">
            <strong>Title:</strong> ${book.title}<br>
            <strong>Author:</strong> ${book.author}<br>
            <strong>ISBN:</strong> ${book.isbn}
        </div>`;
    } else {
        bookList.innerHTML = '<p>Book not found.</p>';
    }
}

function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    library.books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <strong>Title:</strong> ${book.title}<br>
            <strong>Author:</strong> ${book.author}<br>
            <strong>ISBN:</strong> ${book.isbn}<br>
            <button onclick="deleteBook('${book.title}')">Delete</button>
        `;
        bookList.appendChild(bookItem);
    });
}

function deleteBook(title) {
    library.delete(title);
    displayBooks();
}

function clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}