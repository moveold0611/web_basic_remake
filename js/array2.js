window.onload = () => {
    loadBookList();
};


const bookList = new Array();

bookList.push({ 
    bookName: "자바 웹 개발",
    author: "구멍가게 코딩단",
    publisher: "프리렉"
});
bookList.push({
    bookName: "Phython으로 시작하는 빅데이터분석 및 인공지능 개정2판",
    author: "조준모",
    publisher: "인피니티북스"
});
bookList.push({
    bookName: "Do it! HTML+CSS+자바스크립트 웹 표준의 정석",
    author: "고경희",
    publisher: "이지스퍼블리싱"
});


const loadBookList = () => {
    const bookListOl = document.querySelector(".book-list");

    bookListOl.innerHTML = bookList.map(book => {
   return `
            <li>
                <span>${book.bookName}</span>
                <span>${book.author}</span>
                <span>${book.publisher}</span>
            </li>
        `;
}).join("");

};


const addNewBook = () => {
    const book = {
        bookName: document.querySelector(".book-name").value,
        author: document.querySelector(".author").value,
        publisher: document.querySelector(".publisher").value
    }
    bookList.push(book);
    loadBookList();
}




// const inputBookName = document.querySelector(".book-name");
// const inputAuthor = document.querySelector(".author");
// const inputPublisher = document.querySelector(".publisher")

// const newBookName = inputBookName.value;
// const newAuthor = inputAuthor.value;
// const newPublisher = inputPublisher.value;

// bookList.push({
//     bookName: newBookName,
//     author: newAuthor,
//     publisher: newPublisher,
// });
// loadBookList();