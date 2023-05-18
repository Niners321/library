
//Book constructor
class Book{
    constructor(title, author, pages, status) {
        this.title = title
        this.author = author
        this.pages = pages
        this.status = status
    }
}

//creates book from Book Constructor and adds to library
let myLibary = [];

function addBookToLibrary() {
    event.preventDefault();

    newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    render();

}

function render() {
    
}