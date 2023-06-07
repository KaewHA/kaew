class BookMark {
    constructor(isbn, totalPages = 0) {
      this.isbn = isbn;
      this.bookMarks = [];
      this.totalPages = totalPages;
    }
  
    addBookMark(pageNumber) {
      if (pageNumber < 1 || pageNumber > this.totalPages) {
        return this.bookMarks.length;
      }
  
      this.bookMarks.push(pageNumber);
      return this.bookMarks.length;
    }
  
    removeBookMark(pageNumber) {
      const index = this.bookMarks.indexOf(pageNumber);
      if (index === -1) {
        return undefined;
      }
  
      this.bookMarks.splice(index, 1);
      return this.bookMarks;
    }
  
    goToFirstBookMark() {
      if (this.bookMarks.length === 0) {
        return undefined;
      }
  
      return this.bookMarks[0];
    }
  
    goToLastBookMark() {
      if (this.bookMarks.length === 0) {
        return undefined;
      }
  
      return this.bookMarks[this.bookMarks.length - 1];
    }
  
    getBookMarks() {
      return this.bookMarks;
    }
  }