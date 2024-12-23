const myLibrary = []

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

function addBook(book){
    myLibrary.push(book);
}

const newBook = new Book("harry potter","Terf queen",260,"no")
addBook(newBook);
console.log(myLibrary);