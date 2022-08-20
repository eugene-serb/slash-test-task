'use strict';

class Entry {
  constructor(sku, name, price, totalPrice, quantity, photo) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.totalPrice = totalPrice;
    this.quantity = quantity;
    this.photo = photo;
  }
}

export default Entry;
