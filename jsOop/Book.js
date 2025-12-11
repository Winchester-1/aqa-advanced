class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Title must be a non-empty string');
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Author must be a non-empty string');
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Year must be a positive number');
    }
    this._year = value;
  }

  printInfo() {
    console.log(`Book name: ${this.title}`)
    console.log(`Author: ${this.author}`)
    console.log(`Publishing year: ${this.year}`)
  }

  static getOldestBook(booksArray) {
    if (!booksArray || booksArray.length === 0) return null;

    let oldestBook = booksArray[0];

    for (const book of booksArray) {
      if (book.year < oldestBook.year) {
        oldestBook = book;
      }
    }

    return oldestBook;
  }
}

export { Book };
