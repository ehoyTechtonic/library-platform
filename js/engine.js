function Library() {
  this.bookShelf = new Array();
};

Library.prototype.addBook = function(book) {
  for (i=0; i<this.bookShelf.length; i++) {
    if (this.bookShelf[i].title === book.title) {
      return false;
    }
  }
  this.bookShelf.push(book);
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

Library.prototype.removeBookByAuthor = function(author) {
  if(this.bookShelf.length > 0) {
    var removed = ""
    for (j=0; j<this.bookShelf.length; j++) {
      for (i=0; i<this.bookShelf.length; i++) {
        if (this.bookShelf[i].author === author) {
          removed += this.bookShelf.splice(i,1);
        }
      }
    }
    if (removed.length > 0) {
      return true;
    } else {
      return false;
    }
  }
};

Library.prototype.getRandomBook = function() {
  randomNumber = Math.floor(Math.random() * this.bookShelf.length);
  if (this.bookShelf[randomNumber].length > 0) {
    return this.bookShelf[randomNumber];
  } else {
    return null;
  }
};

Library.prototype.getBookByTitle = function(title) {
  function getBookArray(book) {
    return book.title.includes(title);
  }
  var bookArray = this.bookShelf.filter(getBookArray);
  return bookArray;
};

Library.prototype.getBookByAuthor = function(author) {
  function getAuthorArray(book) {
    return book.author.includes(author);
  }
  var authorArray = this.bookShelf.filter(getAuthorArray);
  return authorArray;
};

Library.prototype.addBooks = function() {
  for (j=0; j<arguments.length; j++) {
    this.addBook(arguments[j]);
  }
  if (arguments.length > 0) {
    return arguments.length;
  } else {
    return 0;
  }
};

Library.prototype.getAuthors = function() {
  var authorArray = [];
  for (var i in this.bookShelf) {
    if (authorArray.indexOf(this.bookShelf[i].author) == -1) {
      authorArray.push(this.bookShelf[i].author);
    }
  }
  return authorArray;
};

Library.prototype.getRandomAuthorName = function() {
  randomNumber = Math.floor(Math.random() * this.bookShelf.length);
  if (this.bookShelf.length > 0) {
    return this.bookShelf[randomNumber].author;
  } else {
    return null;
  }
};

document.addEventListener("DOMContentLoaded", function(e) {
  window.gLibrary = new Library();

  window.book1 = new Book("1984", "orwell", 200, "jan 1");
  window.book2 = new Book("down and out in paris and london", "orwell", 200, "jan 1");
  window.book3 = new Book("animal farm", "orwell", 200, "dec 1");
  window.book4 = new Book("siddhartha", "hesse", 200, "jan 1");
  window.book5 = new Book("death of ivan ilyich", "tolstoy", 200, "dec 1");
  window.book6 = new Book("jitterbug perfume", "robbins", 200, "jan 1");
  window.book7 = new Book("half asleep in frog pajamas", "robbins", 200, "dec 1");
  window.book8 = new Book("brave new world", "huxley", 200, "jan 1");
  window.book9 = new Book("the island", "huxley", 200, "dec 1");
});
