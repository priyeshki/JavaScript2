const bookTitles = [
  "Harry Potter and the Philosopher's stone",
  "Harry Potter and the Chamber of secrets",
  "Harry Potter and the Prisoner of Azkaban",
  "Harry Potter and the Globlet of fire",
  "Harry Potter and the Order of the Phoenix",
  "Harry Potter and the Half blood prince",
  "Harry Potter and the Deathly hallows"
];


const bookData = {
  book_1: {
    title: "Harry Potter and the Philosopher's stone",
    language: "English",
    author:  "J. K. Rowling"
  },
  book_2: {
    title: "Harry Potter and the Chamber of secrets",
    language: "English",
    author:  "J. K. Rowling"
  },
  book_3: {
    title: "Harry Potter and the Prisoner of Azkaban",
    language: "English",
    author:  "J. K. Rowling"
  },
  book_4: {
    title: "Harry Potter and the Globlet of fire",
    language: "English",
    author:  "J. K. Rowling"
  },
  book_5: {
    title: "Harry Potter and the Order of the Phoenix",
    language: "English",
    author:  "J. K. Rowling"
  },
  book_6: {
    title: " Harry Potter and the Half blood prince",
    language: "English",
    author:  "J. K. Rowling"
  },
  
  book_7 : {
    title:"Harry Potter and the Deathly hallows",
    language: "English",
    author:  "J. K. Rowling"
  }
};

const cover = {
  book_1: "asset/1.jpg",
  book_2: "asset/2.jpg",
  book_3: "asset/3.jpg",
  book_4: "asset/4.jpg",
  book_5: "asset/5.jpg",
  book_6: "asset/6.jpg",
  book_7: "asset/7.jpg"
}


function generateBookList() {
  const bookList = document.createElement('ul');
  for (const bookId of Object.keys(bookData)) {
    const bookInfo = bookData[bookId];
    const bookItem = document.createElement('li');
    bookItem.id = bookId;
    const bookTitle = document.createElement('h2');
    bookTitle.textContent = bookInfo.title;
    bookItem.appendChild(bookTitle);
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = 'Author: ' + bookInfo.author;
    bookItem.appendChild(bookAuthor);
    const bookLanguage = document.createElement('p');
    bookLanguage.textContent = 'Language: ' + bookInfo.language;
    bookItem.appendChild(bookLanguage);
    const bookCover = document.createElement('img');
    bookCover.src = cover[bookId];
    bookCover.alt = bookInfo.title + ' book cover';
    bookItem.appendChild(bookCover);
    bookList.appendChild(bookItem);
  }
  document.body.appendChild(bookList);
  return bookList;
}

generateBookList();