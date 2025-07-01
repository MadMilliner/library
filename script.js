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
//   sort(myLibrary);
};

Book.prototype.info = function() {
    console.log('${this.title} by ${this.author}, ${this.pages} pages ${this.read}')
};

function showLibrary() {
    myLibrary.forEach(book => {
        var book = document.createElement("div");
        book.classList.add("book");
        // book.setAttribute('id', this.title);
        book.innerHTML = '<p>Title: ${this.title}</p><p>Author: ${this.author}</p><p>Pages: ${this.pages}</p><p>Have I read: ${this.read}</p>';
        library.appendChild(book);
        
    });
}

addBookToLibrary("Bible", "various", 1000, "Have Read");
addBookToLibrary("LordoftheRings", "J. R. R. Tolkein", 750, "Have Read");

showLibrary();