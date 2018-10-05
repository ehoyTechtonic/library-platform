function Book (title, author, numPages, pubDate) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = new Date(pubDate);  // date object
}

Book.prototype.editBook = function(oBook) {
  var newArr = JSON.parse(window.localStorage.getItem('arr'));
  //console.log(newArr);
  // var newArr = new Array();
  if (oBook.title) {
    console.log(this.title);
    this.title = oBook.title;
  }
  if (oBook.author) {
    this.author = oBook.author;
  }
  if (oBook.numPages) {
    console.log(this.numPages);
    this.numPages = oBook.numPages;
  }
  if (oBook.pubDate) {
    this.pubDate = oBook.pubDate;
  }
  // console.log(this);
  newArr.push(this);
  // console.log(arr);
  // newArr2 = JSON.stringify(newArr);
  // window.localStorage.setItem('newArr', newArr2);
  gLibrary.setLocalStorage(newArr);
  return this;
}
