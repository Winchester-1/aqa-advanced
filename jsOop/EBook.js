import { Book } from "./Book.js";

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('File format must be a non-empty string');
    }
    this._fileFormat = value;
  }

  printInfo() {
    super.printInfo();
    console.log(`File format: ${this.fileFormat}`);
  }

  static fromBook(bookInstance, fileFormat) {
    if (!(bookInstance instanceof Book)) {
      throw new Error("Argument must be an instance of Book");
    }

    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}

export { EBook };
