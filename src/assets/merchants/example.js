'use strict';

// к подобному виду привести все правила

const example = {
  merchantId: 'name',
  domain: 'https://www.site.com/',
  rules: {
    mode: 'json',
    url: 'https://www.site.com/currentCart.json',
    currency: 'RUB', // валюта магазина
    totalSum: ['цена', 'всего', 'заказа'], // общая сумма в корзине
    totalSumMod: ['цена', 'всего', 'заказа'], // что сделать с извл. значением
    list: ['список', 'товаров'], // нода каталога товаров
    good: {
      // правила для каждого товара
      sku: ['номер', 'товара'], // само значение
      skuMod: ['номер', 'товара'], // что с ним сделать
      name: ['название', 'товара'],
      nameMod: ['название', 'товара'],
      price: ['цена', 'одной', 'штуки'],
      priceMod: ['цена', 'одной', 'штуки'],
      totalPrice: ['общая', 'цена'],
      totalPriceMod: ['общая', 'цена'],
      quantity: ['количество'],
      quantityMod: ['количество'],
      photo: ['урл', 'фото'],
      photoMod: ['урл', 'фото']
    }
  }
};

export default example;
