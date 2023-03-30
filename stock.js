const { template } = require('@babel/core')
//your student id, firstname, and lastname here 
class Stock {
     constructor(){
          this.stockItems = []
     }

     findItemIndex(id){
          return this.stockItems.findIndex(item=>item.itemId == id)
     }

     addItem(id,amount){
          if(id === undefined || id === null || amount === undefined || amount === null){return -1}
          if(this.findItemIndex(id)>=0){
               this.stockItems[this.findItemIndex(id)].quantity += amount
               return amount
          }else{
               let newStock = {itemId:id, quantity:amount}
               this.stockItems.push(newStock) 
               return amount
          }
     }

     addItems(item){
          let c = 0
          item.forEach(x=> {
               if(!x.itemId && !x.quantity || x.itemId == null || x.quantity==null){return}
               this.addItem(x.itemId,x.quantity)
               c++
          });
          return c
     }

     sell(id,amount){
          if(id === undefined || id === null || amount === undefined || amount === null){return -1}
          if(this.findItemIndex(id)>=0){
               let item =  this.stockItems[this.findItemIndex(id)].quantity 
               if(item - amount < 0){
                    this.stockItems[this.findItemIndex(id)].quantity = 0
                    return item
               }else{
                    this.stockItems[this.findItemIndex(id)].quantity -= amount 
                    return amount  
               }
          }else{
               return -1
          }
     }

     getAllStockAmount(){
          let stock = 0
           this.stockItems.forEach((item)=>{stock+=item.quantity})
           return stock
     }
}

module.exports = Stock