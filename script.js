const myLibrary = [
    new Book('Lord of the rings', 'j.r.r.r. tolkien', 256, 'not read'),
];

const addBook = document.querySelector('#addBookBtn');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}


function addBookToLibrary(array, title, author, pages, read) {
    array.push(new Book(title, author, pages, read));

}

function postToPage(arr) {
    
    const ul = document.querySelector('#ulDisp');

    for(let i = 0; i < arr.length; i += 1) {
        const li = document.createElement('li');
        li.textContent = arr[i].info();
        ul.appendChild(li);
    }
}
const smtBtn = document.querySelector('#submitBtn');

smtBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    addBookToLibrary(myLibrary, e.target.elements['title'].value, e.target.elements['author'].value, e.target.elements['pages'].value, e.target.elements['read'].value);
    postToPage(myLibrary);
});




