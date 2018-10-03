function Library() {
  this.bookShelf = new Array();
};

Library.prototype.addBook = function(book) {
  if(this.bookShelf.length === 0) {
    gLibrary.saveBook(book);
    return true;
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
    for (var i in this.bookShelf) {
      if (this.bookShelf[i].title === title) {
        this.bookShelf.splice(i,1);
      }
    }
  }
};

//Only removes one instance of author.
//Array length is dynamic?
Library.prototype.removeBookByAuthor = function(author) {
  if(this.bookShelf.length > 0) {
    var x = this.bookShelf.length;
    // for (i=0; i<x; i++) {
    for (var i in this.bookShelf) {
      // console.log(this.bookShelf[i]);
      if (this.bookShelf[i].author === author) {
        this.bookShelf.splice(i,1);
      }
    }
  }
};

Library.prototype.getRandomBook = function() {
  randomNumber = Math.floor(Math.random() * this.bookShelf.length);
  console.log(this.bookShelf[randomNumber]);
};

Library.prototype.getBookByTitle = function(title) {
  for (var i in this.bookShelf) {
    if (this.bookShelf[i].title === title) {
      console.log(this.bookShelf[i]);
    }
  }
};

Library.prototype.getBookByAuthor = function(author) {
  var authorArray = [];
  for (var i in this.bookShelf) {
    if (this.bookShelf[i].author === author) {
      authorArray.push(this.bookShelf[i])
    }
  }
  console.log(authorArray);
};

Library.prototype.addBooks = function(books) {

};

Library.prototype.getAuthors = function() {
  var authorArray = [];
  for (var i in this.bookShelf) {
    if (authorArray.indexOf(this.bookShelf[i].author) == -1) {
      authorArray.push(this.bookShelf[i].author);
    }
  }
  console.log(authorArray);
};

Library.prototype.getRandomAuthorName = function() {
  randomNumber = Math.floor(Math.random() * this.bookShelf.length);
  console.log(this.bookShelf[randomNumber].author);
};

document.addEventListener("DOMContentLoaded", function(e) {
  window.gLibrary = new Library();
});
