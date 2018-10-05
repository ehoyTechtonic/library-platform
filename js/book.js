function Book (title, author, numPages, pubDate) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = new Date(pubDate);  // date object
}
// function Book (obj) {
//   this.title = obj.title;
//   this.author = obj.author;
//   this.numPages = obj.numPages;
//   this.pubDate = new Date(obj.pubDate);  // date object
// }

Book.prototype.editBook = function(oBook) {
  // var newArr = this.getLocalStorage();
  //console.log(newArr);
  // var newArr = new Array();
  // make sure not matching existing title
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
  // newArr.push(this);
  // console.log(arr);
  // newArr2 = JSON.stringify(newArr);
  // window.localStorage.setItem('newArr', newArr2);
  // gLibrary.setLocalStorage(newArr);
  return this;
}
