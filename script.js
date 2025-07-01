const myLibrary = []
const library = document.getElementById('library');
var addBookButton = document.getElementById('addBook');
var newTitle = document.getElementById('newTitle').value;
var newAuthor = document.getElementById('newAuthor').value;
var newPages = document.getElementById('newPages').value;
// var newRead = document.getElementById('newRead').value;

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = "No";
    this.id = crypto.randomUUID();
    
    if (!new.target) {
        throw new Error("You must use the 'new' operator to call the constructor");
    }
};

function addBookToLibrary(title, author, pages) {
  var title = new Book(title, author, pages);
  myLibrary.push(title);
};

function showLibrary() {
    myLibrary.forEach(book => {
        var bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.setAttribute("id", `${book.id}`)
        bookCard.innerHTML = `<p>Title: <span class="bookTitle">${book.title}</span></p><p>Author: ${book.author}</p><p>Pages: ${book.pages}</p><p>Have I read: ${book.read}</p><p><button id="${book.title}" onclick="deleteBook()">Delete</button><button onclick="readBook()">Toggle Read</button></p>`;
        library.appendChild(bookCard);
        
    });
}

function deleteBook() {
    myLibrary.splice(`this.id`,1);
    // myLibrary.sort();
    library.innerHTML = "";
    showLibrary();
}

function readBook() {
    if (this.id === "Yes") {this.id = "No"}
    else {this.id = "Yes"}
}

function addBookFunction(title, author, pages) {
    addBookToLibrary(title, author, pages);
    library.innerHTML = "";
    myLibrary.sort();
    showLibrary();
};

addBookButton.onclick = function(button) {
  button.preventDefault();
  title = newTitle;
  author = newAuthor;
  pages = newPages;
//   read = newRead;

  addBookFunction(title, author, pages)
};

addBookToLibrary("The Diary of a Young Girl", "Ann Frank", 283);
addBookToLibrary("Lord of the Rings", "J. R. R. Tolkein", 1216);
addBookToLibrary("The Glass Castle", "Jeanette Walls", 288);

showLibrary();

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
} 