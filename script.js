const myLibrary = []
const library = document.getElementById('library');
const addBookButton = document.getElementById('addBook');
var newTitleInput = document.getElementById('newTitle');
var newAuthorInput = document.getElementById('newAuthor');
var newPagesInput = document.getElementById('newPages');

// var newRead = document.getElementById('newRead').value;

// function Book(title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = Number(pages);
//     this.read = false;
//     this.id = crypto.randomUUID();
    
//     if (!new.target) {
//         throw new Error("You must use the 'new' operator to call the constructor");
//     }
// };

class Book {
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = false;
    this.id = crypto.randomUUID();
    }

    readToggle() {
        this.read = !this.read
    }
    
    getReadStatus() {
        return this.read ? "Yes" : "No";
    }
};

function showLibrary() {
    myLibrary.forEach(book => {
        var bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.setAttribute("id", `${book.id}`)
        bookCard.innerHTML = `<p>Title: <span class="bookTitle">${book.title}</span></p><p>Author: ${book.author}</p><p>Pages: ${book.pages}</p><p class="have-read">Have I read: ${book.getReadStatus()}</p><p><button onclick="readBook('${book.id}')">Read</button><button onclick="deleteBook('${book.id}')">Delete</button></p>`;
        library.appendChild(bookCard);
        
    });
};

function deleteBook(id) {
    const thisBook = myLibrary.find((book) => book.id === String(id));
    let index = myLibrary.indexOf(thisBook)
    myLibrary.splice(index, 1);
    // myLibrary.sort();
    library.innerHTML = "";
    showLibrary();
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
    console.log(newTitle, newAuthor);
    if (title === "" || author === "" || pages === "") {alert("Please enter a Title, Author, and number of Pages before adding"); return;} else
    var newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    library.innerHTML = "";
    myLibrary.sort();
    showLibrary();
    document.forms[0].reset();
};

addBookButton.onclick = function(button) {
    button.preventDefault();
    let title = document.getElementById('newTitle').value;
    let author = document.getElementById('newAuthor').value;
    let pages = document.getElementById('newPages').value;
    addBookFunction(title, author, pages);
};

newTitleInput.addEventListener("input", (event) => {
  newTitleInput.setCustomValidity("");
  if (!newTitleInput.validity.valid) {
    return;
  }

  if (validityState.valueMissing) {
    email.setCustomValidity("Please enter a title");
  }
});

addBookToLibrary("The Diary of a Young Girl", "Ann Frank", 283, "Yes");
addBookToLibrary("Lord of the Rings", "J. R. R. Tolkein", 1216, "Yes");
addBookToLibrary("The Glass Castle", "Jeanette Walls", 288, "No");
addBookToLibrary("Alice's in Wonderland", "Lewis Carrol", 320);

showLibrary();

document.addEventListener("keydown", function(e) {
  if (e.key === "b") {
    const popup = document.getElementById("myForm");
    if (popup.style.display === "none" || popup.style.display === "") {
      e.preventDefault();
      openForm(); 
    }
    else if (popup.style.display === "block") {
      e.preventDefault();
      closeForm(); 
    }
  }
  })

function openForm() {
    document.forms[0].reset();
    document.getElementById("myForm").style.display = "block";
};

function closeForm() {
    document.getElementById("myForm").style.display = "none";
};