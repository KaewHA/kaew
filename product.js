class product {

    constructor(name, description, price, quantity){
        this.name=name
        this.description=description
        this.price=price
        this.quantity=quantity
    }

    getTotalPrice() {
        if (this.quantity <= 0 || this.price <= 0) {
          return undefined;
        }
    
        return this.price * this.quantity
      }

    sell(quantity) {
    if (quantity <= 0 || quantity > this.quantity) {
      return undefined;
    }
    this.quantity -= quantity;
    return { name: this.name, quantity: quantity };
  }

}
