// Problem 08 Start
const createBookList = (bookTitles, authorNames, copiesAvailable) => {
  const bookList: object[] = [];
  let i = 0;
  for (i; i < bookTitles.length; i++) {
    bookList.push({
      title: bookTitles[i],
      author: authorNames[i],
      copies: copiesAvailable[i],
    });
  }

  return bookList;
};

const addCopies = (bookList, bookTitle, copiesToAdd) => {
  let i = 0;
  for (i; i < bookList.length; i++) {
    if (bookList[i].title === bookTitle) {
      bookList[i].copies += copiesToAdd;

      return;
    }
  }
};

const sellBook = (bookList, bookTitle, copiesToSell) => {
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

const getDetails = (bookList) => {
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
// Problem 08 End
const bookTitles = [
  "The Lord of the Rings",
  "Harry Potter and the Sorcerer's Stone",
  "Pride and Prejudice",
];
const authorNames = ["J.R.R. Tolkien", "J.K. Rowling", "Jane Austen"];
const numberOfCopiesAvailable = [10, 15, 8];

const myBookList = createBookList(
  bookTitles,
  authorNames,
  numberOfCopiesAvailable
);

addCopies(myBookList, "Harry Potter and the Sorcerer's Stone", 10);
sellBook(myBookList, "Pride and Prejudice", 9);

console.log(getDetails(myBookList));
