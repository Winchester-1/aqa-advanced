import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book('Harry Potter and the Chambers of Secret', 'J.K. Rowling', 1998);
const book2 = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 1997);
const book3 = new Book('Harry Potter and the Half-blood Prince', 'J.K. Rowling', 2005);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const eBook = new EBook('Harry Potter and the Prisoner of Azkaban', 'J.K. Rowling', 1999, 'fb2');

eBook.printInfo();

const books = [book1, book2, book3, eBook];

const oldest = Book.getOldestBook(books);
console.log(`Oldest book: ${oldest.title}, year: ${oldest.year}`);

const book4 = new Book('Crossroads of Ravens', 'Sapkowski', 2024);

const eBook2 = EBook.fromBook(book4, "pdf");
eBook2.printInfo();
