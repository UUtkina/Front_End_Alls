let library = [];
let inputDate = prompt('Enter book data separate by ";"');
console.log(inputDate);

while (inputDate) {
    const bookData = inputDate.split(";");
    const [isbn, title, author, year] = bookData;
    if (bookData.length === 4 && isbn && title && author && year) {
        addBookLibrary(new Book(isbn, title, author, year));
    }
    inputDate = prompt('Enter book data separate by ";"');
}

function addBookLibrary(book) {
    if (!findBook(library, book.isbn)) {
        library.push(book);
    } else {
        console.log("Книга с таким ISBN уже существует");
    }
}

function findBook(library, isbn) {
    return library.find((book) => book.isbn === isbn);
}

//Метод find()экземпляров Array возвращает первый элемент предоставленного массива,
//который удовлетворяет предоставленной функции тестирования.
//Если ни одно значение не удовлетворяет функции тестирования, undefined возвращается.

function printLibrary(library) {
    for (const book of library) {
        console.log(book.toString());
    }
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    };
}
const book1 = new Book(1, "Rrrr", "nnnnn", "1998");
const book2 = new Book(2, "Rrrr1", "nnnnn1", "2008");
const book3 = new Book(3, "Rrrr3", "nnnnn3", "2005");
const book5 = new Book(5, "Rrrr", "nnnnn4", "2001");

library.push(book1, book2, book3, book5);

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book5);

printLibrary(library);
console.log(library.length);
