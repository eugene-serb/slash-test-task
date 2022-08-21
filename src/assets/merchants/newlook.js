'use strict';

const newlook = {
  merchantId: 'newlook',
  domain: 'https://www.newlook.com/uk/',
  rules: {
    parserMode: 'json',
    url: 'https://www.newlook.com/uk/json/cart/currentCart.json',
    list: {
      value: ['data', 'entries'],
      mods: []
    },
    totalSum: {
      value: ['data', 'totalPrice', 'value'],
      mods: []
    },
    sku: {
      value: ['product', 'sku'],
      mods: []
    },
    name: {
      value: ['product', 'name'],
      mods: []
    },
    price: {
      value: ['basePrice', 'value'],
      mods: []
    },
    totalPrice: {
      value: ['totalPrice', 'value'],
      mods: []
    },
    quantity: {
      value: ['quantity'],
      mods: []
    },
    photo: {
      value: ['product', 'imageUrl'],
      mods: ['addPrefixHttp']
    }
  }
};

export default newlook;
