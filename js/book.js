function Book (title, author, numPages, pubDate) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;  // date object
}

Book.prototype.editBook = function(oBook) {
  if (this.title === oBook.title) {
    this.title = oBook.title;
    this.author = oBook.author;
    this.numPages = oBook.numPages;
    this.pubDate = oBook.pubDate;
    return this;
  }
}
