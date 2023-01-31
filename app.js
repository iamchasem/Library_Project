console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const books = [
  {
    id: 1,
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: true,
  },
];

class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor(books) {
      this.bookCount - books.length;
      this.books = books;
  }

addBook() {
  console.log("AddBook")
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const read = document.getElementById("read");
  this.nextId++;
 const newBook = new Book(this.nextId, title.value, author.value, read.value);
  this.books.push(newBook);
  const tbody = document.getElementById("tabelBody");
  const newTr = document.createElement("tr");
  newTr.classList.add(newBook.id);
  newTr.addEventListener("dblclick", (event) => {
    this.removeBook(parseInt(event.target.classList[0]));
  });
  const newTitle = document.createElement("td");
  const newAuthor = document.createElement("td");
  const newRead = document.createElement("td");
  newTitle.textContent = title.value;
  newAuthor.textContent = author.value;
  const newCheckbox = document.createElement("input");
  newCheckbox.classList.add(newBook.id);
  newCheckbox.type = "checkbox";
  newCheckbox.checked = read.checked;
  newCheckbox.disabled = read.checked; 
  newCheckbox.addEventListener("click", (event) => {
    console.log(event.target.classList[0]);
    this.markRead(event.target, parseInt(event.target.classList[0]));
  });
  newRead.appendChild(newCheckbox);
  newTr.appendChild(newTitle);
  newTr.appendChild(newAuthor);
  newTr.appendChild(newRead);
  tbody.appendChild(newTr);
  }



  markRead(checkbox, id) {
    console.log(checkbox);
    console.log(id);
      this.books.forEach((book) => {
        if(id === book.id){
          book.read = true;
          checkbox.disabled = true;
        }
      });
  }

  removeBook(bookId) {
    this.books = this.books.filter(({id }) => bookId !== id);
    const tbody = document.getElementById("tabelBody");
    tbody.removeChild(document.getElementsByClassName(bookId)[0]);
  }
}

const library = new Library(books);
if(books.length > 0) {
library.books.forEach(book => {
  library.addBook(book);
});
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  library.addBook();
});