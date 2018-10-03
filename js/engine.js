function Library() {
  this.bookShelf = new Array();
};

Library.prototype.addBook = function(book) {
  if(this.bookShelf.length === 0) {
    gLibrary.saveBook(book);
  } else {
    for (i=0; i<this.bookShelf.length; i++) {
      if (this.bookShelf[i].title !== book.title) {
        gLibrary.saveBook(book);
      }
    }
  }
};

Library.prototype.saveBook = function(book) {
  this.bookShelf.push({
    title:book.title,
    author:book.author,
    numPages:book.numPages,
    pubDate:book.pubDate
  });
}

Library.prototype.removeBookByTitle = function(title) {
  if(this.bookShelf.length > 0) {
    for (i=0; i<this.bookShelf.length; i++) {
      if (this.bookShelf[i].title === title) {
        this.bookShelf[i].splice(i,1);
      } else {
        alert('dont delete');
      }
    }
  }
};

Library.prototype.removeBookByAuthor = function(author) {

};

Library.prototype.getRandomBook = function() {

};

Library.prototype.getBookByTitle = function(title) {

};

Library.prototype.getBookByAuthor = function(author) {

};

Library.prototype.addBooks = function(books) {

};

Library.prototype.getAuthors = function() {

};

Library.prototype.getRandomAuthorName = function() {

};

document.addEventListener("DOMContentLoaded", function(e) {
  window.gLibrary = new Library();
});
