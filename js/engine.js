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
  var arr = this.bookShelf;
  var newArr = JSON.stringify(arr);
  window.localStorage.setItem('arr', newArr);
  return true;
};

Library.prototype.removeBookByTitle = function(title) {
  var newArr = JSON.parse(window.localStorage.getItem('arr'));
  if(newArr.length > 0) {
    for (var i in newArr) {
      if (newArr[i].title === title) {
        newArr.splice(i,1);
        var newArr2 = JSON.stringify(newArr);
        window.localStorage.setItem('newArr', newArr2);
        return true;
      }
    }
    return false;
  }
};

Library.prototype.removeBookByAuthor = function(author) {
  var newArr = JSON.parse(window.localStorage.getItem('arr'));
  if(newArr.length > 0) {
    var removed = ""
    for (j=0; j<newArr.length; j++) {
      for (i=0; i<newArr.length; i++) {
        if (newArr[i].author === author) {
          removed += newArr.splice(i,1);
          var newArr2 = JSON.stringify(newArr);
          window.localStorage.setItem('arr', newArr2);
        }
      }
    }
    if (removed.length > 0) {
      // return ;
      return JSON.parse(window.localStorage.getItem('arr'));
    } else {
      return false;
    }
  }
};

Library.prototype.getRandomBook = function() {
  var newArr = JSON.parse(window.localStorage.getItem('arr'));
  randomNumber = Math.floor(Math.random() * newArr.length);
  if (newArr.length > 0) {
    return newArr[randomNumber];
  } else {
    return null;
  }
};

Library.prototype.getBookByTitle = function(title) {
  function getBookArray(book) {
    return book.title.includes(title);
  }
  var newArr = JSON.parse(window.localStorage.getItem('arr'));
  var bookArray = newArr.filter(getBookArray);
  return bookArray;
};

Library.prototype.getBookByAuthor = function(author) {
  function getAuthorArray(book) {
    return book.author.includes(author);
  }
  var newArr = JSON.parse(window.localStorage.getItem('arr'));
  var authorArray = newArr.filter(getAuthorArray);
  return authorArray;
};

Library.prototype.addBooks = function() {
  var addCount = 0;
  for (j=0; j<arguments.length; j++) {
    addCount += this.addBook(arguments[j]);
  }
  return addCount;
};

Library.prototype.getAuthors = function() {
  var authorArray = [];
  var newArr = JSON.parse(window.localStorage.getItem('arr'));
  for (var i in newArr) {
    if (this.bookShelf.length > 0) {
      authorArray.push(newArr[i].author);
    }
  }
  return authorArray;
};

Library.prototype.getRandomAuthorName = function() {
  var newArr = JSON.parse(window.localStorage.getItem('arr'));
  randomNumber = Math.floor(Math.random() * newArr.length);
  if (newArr.length > 0) {
    return newArr[randomNumber].author;
  } else {
    return null;
  }
};

Library.prototype.search = function() {
  var newArr = JSON.parse(window.localStorage.getItem('arr'));
  var bookArray = new Array();
  var newBook = "";
  function getBookArray(book) {
    if (book.title.includes(searchTerm)) {
      if (bookArray.length === 0) {
        bookArray.push(book);
      } else {
        for (var i=0; i<bookArray.length; i++) {
          if (book.title !== bookArray[i].title) {
            bookArray.push(book);
          }
        }
      }
    }
    if (book.author.includes(searchTerm)) {
      if (bookArray.length === 0) {
        bookArray.push(book);
      } else {
        for (var i=0; i<bookArray.length; i++) {
          if (book.title !== bookArray[i].title) {
            bookArray.push(book);
          }
        }
      }
    }
    // if (book.numPages.includes(searchTerm)) {
    //   if (bookArray.length === 0) {
    //     bookArray.push(book);
    //   } else {
    //     for (var i=0; i<bookArray.length; i++) {
    //       if (book.title !== bookArray[i].title) {
    //         bookArray.push(book);
    //       }
    //     }
    //   }
    // }
    if (book.pubDate.includes(searchTerm)) {
      if (bookArray.length === 0) {
        bookArray.push(book);
      } else {
        for (var i=0; i<bookArray.length; i++) {
          if (book.title !== bookArray[i].title) {
            bookArray.push(book);
          }
        }
      }
    }
  }
  for (j=0; j<arguments.length; j++) {
    searchTerm = arguments[j];
    var authorArray = newArr.filter(getBookArray);
  }
  // console.log(bookArray);
  return bookArray;
}

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
