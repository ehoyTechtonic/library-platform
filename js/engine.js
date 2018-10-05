(function() {
  var instance;
  Library = function() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.bookShelf = [];
  }
})();

/**
 * @param   {Object} book
 * @return  true if it is not already added, false if it is already added
 */
Library.prototype.addBook = function(book) {
  for (i=0; i<this.bookShelf.length; i++) {
    if (this.bookShelf[i].title === book.title) {
      return false;
    }
  }
  this.bookShelf.push(book);
  this.setLocalStorage(this.bookShelf);
  return true;
};

/**
 * @param   {string} title
 * @return  true if the book was removed, false if no books matched
 */
Library.prototype.removeBookByTitle = function(title) {
  if(this.bookShelf.length > 0) {
    for (var i in this.bookShelf) {
      if (this.bookShelf[i].title === title) {
        this.bookShelf.splice(i,1);
        this.setLocalStorage(this.bookShelf);
        return true;
      }
    }
    return false;
  }
};

/**
 * @param   {string} author
 * @return  true if book(s) were removed, false if no books match
 */
Library.prototype.removeBookByAuthor = function(author) {
  if(this.bookShelf.length > 0) {
    var removed = ""
    for (j=0; j<this.bookShelf.length; j++) {
      for (i=0; i<this.bookShelf.length; i++) {
        if (this.bookShelf[i].author === author) {
          removed += this.bookShelf.splice(i,1);
          this.setLocalStorage(newArr);
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

/**
 * @return  true if the book was removed, false if no books matched
 */
// change order of logic
Library.prototype.getRandomBook = function() {
  randomNumber = Math.floor(Math.random() * this.bookShelf.length);
  if (this.bookShelf.length > 0) {
    return this.bookShelf[randomNumber];
  } else {
    return null;
  }
};

// add @param and @return
Library.prototype.getBookByTitle = function(title) {
  function getBookArray(book) {
    return book.title.includes(title);
  }
  var bookArray = this.bookShelf.filter(getBookArray);
  return bookArray;
};

// add @param and @return
Library.prototype.getBookByAuthor = function(author) {
  function getAuthorArray(book) {
    return book.author.includes(author);
  }
  var authorArray = this.bookShelf.filter(getAuthorArray);
  return authorArray;
};

// add @param and @return
// read in array, don't use arguments
Library.prototype.addBooks = function() {
  var addCount = 0;
  for (j=0; j<arguments.length; j++) {
    addCount += this.addBook(arguments[j]);
  }
  return addCount;
};

// add @param and @return
Library.prototype.getAuthors = function() {
  var authorArray = [];
  var count = 0;
  if (this.bookShelf.length > 0) {
    for (var i in newArr) {
      if (authorArray.length === 0) {
        authorArray.push(newArr[i].author);
      } else {
        for (var j in authorArray) {
          if (this.bookShelf[i].author === authorArray[j]) {
            count++;
          }
        }
        if (count === 0) {
          authorArray.push(this.bookShelf[i].author);
        }
      }
    }
  }
  return authorArray;
};

// add @param and @return
// change order of logic
Library.prototype.getRandomAuthorName = function() {
  randomNumber = Math.floor(Math.random() * newArr.length);
  if (this.bookShelf.length > 0) {
    return this.bookShelf[randomNumber].author;
  } else {
    return null;
  }
};

// add @param and @return
Library.prototype.search = function() {
  var bookArray = [];
  function getBookArray(book) {
    if (book.title.includes(searchTerm)) {
      pushToArray(book);
    }
    if (book.author.includes(searchTerm)) {
      pushToArray(book);
    }
    if (book.numPages.includes(searchTerm)) {
      pushToArray(book);
    }
    if (book.pubDate.includes(searchTerm)) {
      pushToArray(book);
    }
  }
  function pushToArray(book) {
    if (bookArray.length === 0) {
      bookArray.push(book);
    } else {
      for (var i=0; i<bookArray.length; i++) {
        if (book.title === bookArray[i].title) {
          break;
        }
      }
      bookArray.push(book);
    }
  }
  for (var j=0; j<arguments.length; j++) {
    searchTerm = arguments[j];
    var authorArray = this.bookShelf.filter(getBookArray);
  }
  return bookArray;
}

// add @param and @return
Library.prototype.setLocalStorage = function(arr) {
  var newArr = JSON.stringify(arr);
  window.localStorage.setItem('arr', newArr);
}

// add @param and @return
Library.prototype.getLocalStorage = function() {
  var myArr = JSON.parse(window.localStorage.getItem('arr'));
  for (var i = 0; i < myArr.length; i++) {
    new Book(myArr[i].title,myArr[i].author,myArr[i].numPages,myArr[i].pubDate);
  }
  this.bookShelf = myArr;
  return this.bookShelf;
}

// add @param and @return
document.addEventListener("DOMContentLoaded", function(e) {
  window.gLibrary = new Library();
  gLibrary.bookShelf = gLibrary.getLocalStorage();
  window.book1 = new Book("1984", "orwell", "200", "July 20, 39 00:20:18");
  window.book2 = new Book("down and out in paris and london", "orwell", "200", "July 20, 39 00:20:18");
  window.book3 = new Book("animal farm", "orwell", "200", "July 20, 39 00:20:18");
  window.book4 = new Book("siddhartha", "hesse", "200", "July 20, 39 00:20:18");
  window.book5 = new Book("death of ivan ilyich", "tolstoy", "200", "July 20, 39 00:20:18");
  window.book6 = new Book("jitterbug perfume", "robbins", "200", "July 20, 39 00:20:18");
  window.book7 = new Book("half asleep in frog pajamas", "robbins", "200", "July 20, 39 00:20:18");
  window.book8 = new Book("brave new world", "huxley", "200", "July 20, 39 00:20:18");
  window.book9 = new Book("the island", "huxley", "200", "July 20, 39 00:20:18");
  window.book10 = new Book("the devils", "huxley", "200", "July 20, 39 00:20:18");
});
