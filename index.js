let myLibrary = [
    //book objects
];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(book) {
    const cards = document.getElementById('cards');
    const newBook = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('h3');
    const pages = document.createElement('p');
    const buttons = document.createElement('div');
    const readBtn = document.createElement('button');
    const remove = document.createElement('button');

    title.classList.add('title');
    author.classList.add('author');
    pages.classList.add('pages');
    buttons.classList.add('buttons')
    remove.classList.add('btn');
    remove.classList.add('remove');

    const read = document.getElementById('read');

    title.innerText = book.title;
    author.innerText = "by " + book.author;
    pages.innerText = book.pages + " pages";
    remove.innerText = "Remove";

    if (read.checked === true) {
        readBtn.className = "btn isRead"
        readBtn.innerText = "read"
        readBtn.style.backgroundColor = "#5D9C59"
        readBtn.style.color = "#fffbfb"
    } else {
        readBtn.className = "btn isNotRead"
        readBtn.innerText = "not read yet"
        readBtn.style.backgroundColor = "#DF2E38"
        readBtn.style.color = "#fffbfb"
    }
        
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
    buttons.appendChild(readBtn);
    buttons.appendChild(remove)
    newBook.appendChild(buttons)
    cards.appendChild(newBook)


    remove.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove()
    })

    readBtn.addEventListener('click', () => {
        if (readBtn.className === "btn isRead") {
            readBtn.className = "btn isNotRead"
            readBtn.innerText = "not read yet"
            readBtn.style.backgroundColor = "#DF2E38"
            readBtn.style.color = "#fffbfb"
        } else if (readBtn.className === "btn isNotRead") {
            readBtn.className = "btn isRead"
            readBtn.innerText = "read"
            readBtn.style.backgroundColor = "#5D9C59"
            readBtn.style.color = "#fffbfb"
        }
    })
    
    
}

function newBook() {
    document.getElementById("myForm").style.display = "block";
  }
  
const form = document.querySelector('#form');
form.onsubmit = function (event) {
        event.preventDefault();
        const newBook = new Book(event.target.title.value, event.target.author.value,event.target.pages.value, event.target.read.value)
        myLibrary.push(newBook);
        addBookToLibrary(newBook);
        form.reset();
        document.getElementById("myForm").style.display = "none";
  }

  function windowClose() {
    form.reset();
    document.getElementById("myForm").style.display = "none";
}

  //         console.log(event.target.title.value, event.target.author.value,event.target.pages.value);
