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
        return true;
      }
    }
    return false;
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
      console.log(this.bookShelf[i]);
      if (this.bookShelf[i].title === title) {
        // alert('delete' + title);
        this.bookShelf.splice(i,1);
      } else {
        // alert('dont delete' + title);
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
