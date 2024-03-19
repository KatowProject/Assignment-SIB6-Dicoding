document.addEventListener('DOMContentLoaded', function () {
    document.dispatchEvent(new Event('book:loaded'));
});

const search = document.getElementById('searchBook');
search.addEventListener('keyup', searchBook);

function searchBook(e) {
    const query = search.value;

    if (query === '') {
        document.dispatchEvent(new Event('book:loaded'));
        return;
    }

    const books = findBook(query);

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
                <button class="btn btn-warning btn-sm" onclick="editBook(this, ${v.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="removeBook(this, ${v.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        bookList.appendChild(tr);
    }
}


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
    document.dispatchEvent(new Event('book:loaded'));
});


document.addEventListener('book:loaded', loadBook);
function loadBook(e) {
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
                <button class="btn btn-warning btn-sm" onclick="editBook(this, ${v.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="removeBook(this, ${v.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        bookList.appendChild(tr);
    }

    const bookCompleted = document.getElementById('complete');
    const bookUncompleted = document.getElementById('notComplete');

    bookCompleted.innerHTML = '';
    bookUncompleted.innerHTML = '';

    let completedCounter = 1;
    let uncompletedCounter = 1;

    for (const [i, v] of Object.entries(books)) {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${v.isComplete === 'true' ? completedCounter++ : uncompletedCounter++}</td>
            <td>${v.title}</td>
            <td>${v.author}</td>
            <td>${v.year}</td>
            <td>
                <button class="btn ${v.isComplete === 'true' ? 'btn-warning' : 'btn-success'} btn-sm" onclick="changeStatus(${v.id})">
                    <i class="bi ${v.isComplete === 'true' ? 'bi-arrow-left' : 'bi-arrow-right'}"></i>
                </button>
            </td>
        `;

        if (v.isComplete === 'true') {
            bookCompleted.appendChild(tr);
        } else {
            bookUncompleted.appendChild(tr);
        }
    }
}

function editBook(e, id) {
    const book = getBook(id);

    console.log(book);

    // get parent
    const tr = e.parentElement.parentElement;

    // find td, and change to input
    tr.children[1].innerHTML = `<input type="text" class="form-control" value="${book.title}" id="editTitle">`;
    tr.children[2].innerHTML = `<input type="text" class="form-control" value="${book.author}" id="editAuthor">`;
    tr.children[3].innerHTML = `<input type="text" class="form-control" value="${book.year}" id="editYear">`;
    tr.children[4].innerHTML = `
        <select id="editIsComplete" class="form-select">
            <option value="true" ${book.isComplete === 'true' ? 'selected' : ''}>Complete</option>
            <option value="false" ${book.isComplete === 'false' ? 'selected' : ''}>Not Complete</option>
        </select>
    `;
    tr.children[5].innerHTML = `
        <button class="btn btn-success btn-sm" onclick="updateBookData(${id})">
            <i class="bi bi-check"></i>
        </button>
    `;
}

function updateBookData(id) {
    const book = getBook(id);

    book.title = document.getElementById('editTitle').value;
    book.author = document.getElementById('editAuthor').value;
    book.year = document.getElementById('editYear').value;
    book.isComplete = document.getElementById('editIsComplete').value;

    updateBook(book);

    alert('Book updated successfully');

    document.dispatchEvent(new Event('book:loaded'));
}

function removeBook(e, id) {
    const book = getBook(id);

    const confirmation = confirm(`Are you sure want to delete ${book.title}?`);
    if (!confirmation) return;

    deleteBook(id);

    alert('Book deleted successfully');

    document.dispatchEvent(new Event('book:loaded'));
}

function changeStatus(id) {
    const book = getBook(id);

    const confirmation = confirm(`Are you sure want to change status of ${book.title}?`);
    if (!confirmation) return;

    book.isComplete = book.isComplete === 'true' ? 'false' : 'true';

    updateBook(book);

    alert('Book status updated successfully');

    document.dispatchEvent(new Event('book:loaded'));
}