const storage = window.localStorage;

const getBooks = () => {
    const books = storage.getItem('books');

    return books ? JSON.parse(books) : [];
};

const getBook = (id) => {
    const books = getBooks();

    return books.find((book) => book.id == id);
};

const findBook = (query) => {
    const books = getBooks();

    return books.filter((book) => {
        const title = book.title.toLowerCase();
        const search = query.toLowerCase();

        return title.includes(search) || book.author.toLowerCase().includes(search);
    });
};

const insertBook = (book) => {
    const books = getBooks();

    book.id = new Date().getTime().toString();

    books.push(book);
    storage.setItem('books', JSON.stringify(books));
};

const updateBook = (book) => {
    const books = getBooks();

    const index = books.findIndex((b) => b.id === book.id);
    books[index] = book;

    storage.setItem('books', JSON.stringify(books));
};

const deleteBook = (id) => {
    const books = getBooks();

    const newBooks = books.filter((book) => book.id != id);
    storage.setItem('books', JSON.stringify(newBooks));
};