

const bookForm = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const library = document.querySelector('#lib-container');
const newBookBtn = document.querySelector('#newBook');
const closeForm = document.querySelector('#close');
const addBook = document.querySelector('#addBtn');
const popUp = document.querySelector('.popUp');

//Open new book form
newBookBtn.addEventListener('click', () => {
    popUp.classList.add('active');
});

//Close new book form
closeForm.addEventListener('click', (e) => {
    popUp.classList.remove('active');
});

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author; 
        this.pages = pages;
        this.read = read;
    }
}