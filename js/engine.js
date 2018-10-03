function Library() {
  this.bookShelf = new Array();
};

Library.prototype.addBook = function(book) {
  for (i=0; i<this.bookShelf.length; i++) {
    if (this.bookShelf[i].title === book.title) {
      // gLibrary.saveBook(book);
      return false;
    }
  }
  this.bookShelf.push(book)
  return true;
};

Library.prototype.removeBookByTitle = function(title) {
  if(this.bookShelf.length > 0) {
    for (var i in this.bookShelf) {
      if (this.bookShelf[i].title === title) {
        this.bookShelf.splice(i,1);
        return true;
      }
    }
    return false;
  }
};

//Only removes one instance of author.
//Array.length is dynamic?
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
  if (this.bookShelf[randomNumber].length > 0) {
    return this.bookShelf[randomNumber];
  } else {
    return null;
  }
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

Library.prototype.addBooks = function() {
  console.log(arguments.length);
  for (j=0; j<arguments.length; j++) {
    console.log(arguments[j]);
    this.addBook(arguments[j]);
  }
  return true;
};

Library.prototype.getAuthors = function() {
  var authorArray = [];
  for (var i in this.bookShelf) {
    if (authorArray.indexOf(this.bookShelf[i].author) == -1) {
      authorArray.push(this.bookShelf[i].author);
    }
  }
  console.log(authorArray);
  return true;
};

Library.prototype.getRandomAuthorName = function() {
  randomNumber = Math.floor(Math.random() * this.bookShelf.length);
  console.log(this.bookShelf[randomNumber].author);
};

document.addEventListener("DOMContentLoaded", function(e) {
  window.gLibrary = new Library();

  window.book1 = new Book("1984", "orwell", 200, "jan 1");
  window.book2 = new Book("animal farm", "orwell", 200, "dec 1");
  window.book3 = new Book("siddhartha", "hesse", 200, "jan 1");
  window.book4 = new Book("death of ivan ilyich", "tolstoy", 200, "dec 1");
  window.book5 = new Book("jitterbug perfume", "robbins", 200, "jan 1");
  window.book6 = new Book("half asleep in frog pajamas", "robbins", 200, "dec 1");
  window.book7 = new Book("brave new world", "huxley", 200, "jan 1");
  window.book8 = new Book("the island", "huxley", 200, "dec 1");
});
