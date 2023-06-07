class Book {
    constructor(isbn, title = 'untitle', ebook = false) {
      this.isbn = isbn;
      this.title = title;
      this.authors = [];
      this.ebook = ebook;
    }
  
    addAuthor(fn, ln) {
      const author = { firstname: fn, lastname: ln };
      this.authors.push(author);
      return this.authors.length;
    }
  
    getFirstAuthor() {
      return this.authors[0];
    }
  
    getCoAuthors() {
      return this.authors.slice(1);
    }
  
    findAuthor(firstname, lastname) {
      return this.authors.find(
        author =>
          author.firstname.toLowerCase() === firstname.toLowerCase() &&
          author.lastname.toLowerCase() === lastname.toLowerCase()
      );
    }
  
    hasEbook() {
      return this.ebook;
    }
  }