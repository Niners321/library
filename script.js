

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

let myLibrary = [
    {
        title: 'The Hobbit, or There and Back Again',
        author: 'J.R.R. Tolkien',
        pages: 310,
        read: true,
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        pages: 374,
        read: false,
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
        pages: 870,
        read: true,
    },
]

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author; 
        this.pages = pages;
        this.read = read;
    }
};

// Adds book to library
addBook.addEventListener('submit', (e) => {
    popUp.classList.remove('active');
    e.preventDefault();
    const book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);
    clearInputs();
    printBooks();
});

//removes book
function removeBook() {
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            myLibrary.splice(btn.getAttribute('data'), 1);
            printBooks();
        });
        
    });
}

function printBooks() {
    library.textContent = '';
    myLibrary.forEach((book, index) => {
        addBookToLibrary(book, index);
    });
    removeBook();
}

// Clears the form inputs
function clearInputs() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}

function addBookToLibrary(book, index){
    //create book card
    const newBookCard = document.createElement('div');
    newBookCard.classList.add('card');

    // Adds title to div
    const cardTitle = document.createElement('p');
    cardTitle.classList.add('book-title');
    cardTitle.innerText = book.title;
    newBookCard.append(cardTitle);

    //adds author to div
    const cardAuthor = document.createElement('p');
    cardAuthor.classList.add('book-author');
    cardAuthor.innerText = book.author;
    newBookCard.append(cardAuthor);

    //adds pages to div
    const cardPages = document.createElement('p');
    cardPages.classList.add('book-pages');
    cardPages.innerText = book.pages + ' pages';
    newBookCard.append(cardPages);

    //adds read checkbox to div
    const cardCheckBox = document.createElement('input');
    cardCheckBox.setAttribute('data', index);
    cardCheckBox.setAttribute('type', 'checkbox');
    cardCheckBox.setAttribute('id', `checkbox${index}`);
    cardCheckBox.setAttribute('name', `checkbox${index}`);
    cardCheckBox.classList.add('card-checkbox');
    cardCheckBox.checked = book.read;
    newBookCard.append(cardCheckBox);
  


    //adds remove button to div
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('data', index);
    removeBtn.classList.add('remove-btn');
    removeBtn.innerText = 'Remove'
    newBookCard.append(removeBtn);

    library.append(newBookCard);


}

printBooks();