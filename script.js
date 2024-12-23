const addBtn = document.querySelector("#new-book-btn");

const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

function update(){
    const library = document.querySelector("#library");
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookE = document.createElement("div");
        bookE.innerHTML = `<div class="card">
                            <h3 class="card-title">${book.title}</h3>
                            <h5 class="author">${book.author}</h5>
                           </div>
                           <div class="card-body">
                           <p>${book.pages} pages</p>
                           <p class="status">${book.read ? "Read" : "Not read"}</p>
                           </div>`;
        library.appendChild(bookE);
    }
}

function addBook(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    update();
}

addBtn.addEventListener("click", () => {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
});

const newBookbtn = document.querySelector("#new-book-form");
newBookbtn.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
});
