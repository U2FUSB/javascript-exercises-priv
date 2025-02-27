/**@param {Object[]} books */
const getTheTitles = function (books) {
    return books.map(book => book.title)
};

const books = [
    {
        title: "Book",
        author: "Name",
    },
    {
        title: "Book2",
        author: "Name2",
    },
    {
        title: "Book3",
        author: "Name3",
    },
];

console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
