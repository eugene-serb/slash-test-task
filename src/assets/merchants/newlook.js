'use strict';

const newlook = {
  merchantId: 'newlook',
  domain: 'https://www.newlook.com/uk/',
  rules: {
    mode: 'json',
    url: 'https://www.newlook.com/uk/json/cart/currentCart.json',
    totalSum: ['data', 'totalPrice', 'value'],
    list: ['data', 'entries'],
    good: {
      sku: ['product', 'sku'],
      name: ['product', 'name'],
      price: ['basePrice', 'value'],
      totalPrice: ['totalPrice', 'value'],
      quantity: ['quantity'],
      photo: ['product', 'imageUrl']
    }
  }
};

export default newlook;
