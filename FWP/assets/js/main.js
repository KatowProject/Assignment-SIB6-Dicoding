document.addEventListener('DOMContentLoaded', function () {
    const books = getBooks();

    const bookList = document.getElementById('bookList');

    for (const [i, v] of Object.entries(books)) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${parseInt(i) + 1}</td>
            <td>${v.title}</td>
            <td>${v.author}</td>
            <td>${v.year}</td>
            <td>${v.isComplete}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editBook(${v.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteBook(${v.id})">Delete</button>
            </td>
        `;
        bookList.appendChild(tr);
    }
});

const btnAddBook = document.getElementById('addBook');
btnAddBook.addEventListener('click', function () {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const isComplete = document.getElementById('isComplete').value;

    if (title === '' || author === '' || year === '' || isComplete === '') {
        alert('Please fill all fields');
        return;
    }

    const book = {
        title,
        author,
        year,
        isComplete,
    };

    insertBook(book);

    alert('Book added successfully');

    // Clear form
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
    document.getElementById('isComplete').value = '';

    // trigger custom event
    document.dispatchEvent(new Event('book:updated', { type: 'add', data: book }));
});

document.addEventListener('book:updated', updateTableBook);
function updateTableBook(e) {
    console.log(e);

    const books = getBooks();

    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    for (const [i, v] of Object.entries(books)) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${parseInt(i) + 1}</td>
            <td>${v.title}</td>
            <td>${v.author}</td>
            <td>${v.year}</td>
            <td>${v.isComplete}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editBook(${v.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteBook(${v.id})">Delete</button>
            </td>
        `;
        bookList.appendChild(tr);
    }
}