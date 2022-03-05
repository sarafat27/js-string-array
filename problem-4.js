const books = [
    'Eloquent JavaScript',
    'mind power',
    'hemlet',
    'JavaScript & JQuery',
    'othello',
    'JavaScript: The Good Parts',
    'The illiad'

];
const jsBooks = [];
for (const book of books) {
    if (book.toLowerCase().includes('Javascript'.toLowerCase())) {
        jsBooks.push(book);
    }
}
console.log(jsBooks);