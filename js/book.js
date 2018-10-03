function Book (title, author, numPages, pubDate) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;  // date object
}

Book.prototype.editBook = function(oBook) {
  for (i=0; i<this.bookShelf.length; i++) {
    if (this.bookShelf[i] === oBook.title) {
      this.bookShelf[i].title = oBook.title;
      this.bookShelf[i].author = oBook.author;
      this.bookShelf[i].numPages = oBook.numPages;
      this.bookShelf[i].pubDate = oBook.pubDate;
    }
  }
}
// 
// document.addEventListener("DOMContentLoaded", function(e) {
//   window.gBook = new Book();
// });
