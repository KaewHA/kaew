const { template } = require('@babel/core')
//your student id, firstname, and lastname here 64130500015 Chatpimuk Klinkhwan

class BookStore {
  constructor(){
    this.stores=[]
  }
  addNewBook(isbn, stocks){
    let x=this.stores.find(x=>x.isbn==isbn)
    if(x==undefined){
      this.stores.push({isbn:isbn,stocks:stocks})
      return stocks
    }else{
      return -1
    }
  }
  findBookIndex(_isbn_){
    let index=-1
    for(let i=0;i<this.stores.length;i++){
      if(this.stores[i].isbn==_isbn_){
        index=i
        break;
      }
    }
    if(index==-1){
      return -1
    }else{
      return index
    }
  }
  sellBook(isbns, quantity){
    let x=this.stores.find(x=>x.isbn==isbns)
    if(x==undefined){
      return -1
    }else if(quantity<=x.stocks){
     let index=this.findBookIndex(isbns)
     this.stores[index].stocks=this.stores[index].stocks-quantity
      return  quantity
    }else{
      return 0
    }
  }
}
module.exports = BookStore
