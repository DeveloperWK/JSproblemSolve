// Problem 8 

class BookListData {
  bookTitles: string[];
  authorNames: string[];
  copiesAvailable: number[];
  constructor(bookTitles, authorNames, copiesAvailable) {
    this.bookTitles = bookTitles;
    this.authorNames = authorNames;
    this.copiesAvailable = copiesAvailable;
  }
  createBookList = () => {
    const bookList: object[] = [];
    let i = 0;
    for (i; i < this.bookTitles.length; i++) {
      bookList.push({
        title: this.bookTitles[i],
        author: this.authorNames[i],
        copies: this.copiesAvailable[i],
      });
    }

    return bookList;
  };
  addCopies = (bookList, bookTitle, copiesToAdd) => {
    let i = 0;
    for (i; i < bookList.length; i++) {
      if (bookList[i].title === bookTitle) {
        bookList[i].copies += copiesToAdd;

        return;
      }
    }
  };
  sellBook = (bookList, bookTitle, copiesToSell) => {
    let i = 0;
    for (i; i < bookTitle.length; i++) {
      if (bookList[i].title === bookTitle) {
        if (bookList[i].copies >= copiesToSell) {
          bookList[i].copies -= copiesToSell;
        } else {
          console.log(`${bookTitle} Insufficient copies available.`);
        }

        return;
      }
    }
  };
  getDetails = (bookList) => {
    const details: object[] = [];
    for (const detail of bookList) {
      details.push({
        title: detail.title,
        author: detail.author,
        copiesAvailable: detail.copies,
      });
    }

    return details;
  };
}

const bookTitles = [
  "The Lord of the Rings",
  "Harry Potter and the Sorcerer's Stone",
  "Pride and Prejudice",
];
const authorNames = ["J.R.R. Tolkien", "J.K. Rowling", "Jane Austen"];
const numberOfCopiesAvailable = [10, 15, 8];
const booklists1 = new BookListData(
  bookTitles,
  authorNames,
  numberOfCopiesAvailable
);
let bookList = booklists1.createBookList();
booklists1.sellBook(bookList, "Pride and Prejudice", 1);
booklists1.addCopies(bookList, "Harry Potter and the Sorcerer's Stone", 10);
console.table(booklists1.getDetails(bookList));

const bookTitles1 = ["pother Pachali", "atomic", "habit"];
const authorNames1 = ["J.R.R.", "J.K.", "Jane"];
const numberOfCopiesAvailable1 = [50, 20, 4];
const booklists2 = new BookListData(
  bookTitles1,
  authorNames1,
  numberOfCopiesAvailable1
);
let bookList1 = booklists2.createBookList();
booklists2.sellBook(bookList1, "pother Pachali", 10);
booklists2.addCopies(bookList1, "atomic", 10);
console.table(booklists2.getDetails(bookList1));
