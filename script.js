const myLibrary = []
const library = document.getElementById('library');
const addBookButton = document.getElementById('addBook');
const newTitle = document.getElementById('newTitle').value;
const newAuthor = document.getElementById('newAuthor').value;
const newPages = document.getElementById('newPages').value;

// var newRead = document.getElementById('newRead').value;

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = false;
    this.id = crypto.randomUUID();
    
    if (!new.target) {
        throw new Error("You must use the 'new' operator to call the constructor");
    }
};


function showLibrary() {
    myLibrary.forEach(book => {
        var bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.setAttribute("id", `${book.id}`)
        bookCard.innerHTML = `<p>Title: <span class="bookTitle">${book.title}</span></p><p>Author: ${book.author}</p><p>Pages: ${book.pages}</p><p class="have-read">Have I read: ${book.getReadStatus()}</p><p><button id="${book.id}" onclick="readBook('${book.id}')">Read</button><button id="${book.title}" onclick="deleteBook()">Delete</button></p>`;
        library.appendChild(bookCard);
        
    });
  }

function deleteBook() {
    myLibrary.splice(`this.id`,1);
    // myLibrary.sort();
    library.innerHTML = "";
    showLibrary();
};

Book.prototype.readToggle = function() {
    this.read = !this.read
};

Book.prototype.getReadStatus = function() {
    return this.read ? "Yes" : "No";
};

function readBook(id) {
    const thisBook = myLibrary.find((book) => book.id === String(id));
    if (thisBook) { // FIXED: Added null check
        thisBook.readToggle();
        library.innerHTML = "";
        showLibrary();
    }
};

function addBookToLibrary(title, author, pages) {
  var newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
};

function addBookFunction(title, author, pages) {
    addBookToLibrary(title, author, pages);
    library.innerHTML = "";
    myLibrary.sort();
    showLibrary();
};

addBookButton.onclick = function(button) {
  button.preventDefault();
  let title = newTitle;
  let author = newAuthor;
  let pages = newPages;

  addBookFunction(title, author, pages);
};

addBookToLibrary("The Diary of a Young Girl", "Ann Frank", 283, "Yes");
addBookToLibrary("Lord of the Rings", "J. R. R. Tolkein", 1216, "Yes");
addBookToLibrary("The Glass Castle", "Jeanette Walls", 288, "No");
addBookToLibrary("Alice's in Wonderland", "Lewis Carrol", 320);

showLibrary();

function openForm() {
  document.getElementById("myForm").style.display = "block";
};

function closeForm() {
  document.getElementById("myForm").style.display = "none";
};