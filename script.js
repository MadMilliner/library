const myLibrary = []
const library = document.getElementById('library');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = read;
    this.id = crypto.randomUUID();
    
    if (!new.target) {
        throw new Error("You must use the 'new' operator to call the constructor");
    }
};

function addBookToLibrary(title, author, pages, read) {
  var title = new Book(title, author, pages, read);
  myLibrary.push(title);
};

function showLibrary() {
    myLibrary.forEach(book => {
        var bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.innerHTML = `<p>Title: ${book.title}</p><p>Author: ${book.author}</p><p>Pages: ${book.pages}</p><p>Have I read: ${book.read}</p>`;
        library.appendChild(bookCard);
        
    });
}

addBookToLibrary("The Diary of a Young Girl", "Ann Frank", 283, "Yes");
addBookToLibrary("Lord of the Rings", "J. R. R. Tolkein", 1216, "Yes");
addBookToLibrary("The Glass Castle", "Jeanette Walls", 288, "No");

showLibrary();

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
} 