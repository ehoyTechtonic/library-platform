function Book (title, author, numPages, pubDate) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;  // date object
}

Book.prototype.editBook = function(oBook) {
  if (oBook.title) {
    this.title = oBook.title;
  }
  if (oBook.author) {
    this.author = oBook.author;
  }
  if (oBook.numPages) {
    this.numPages = oBook.numPages;
  }
  if (oBook.pubDate) {
    this.pubDate = oBook.pubDate;
  }
  return this;
}
