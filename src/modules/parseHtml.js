'use strict';

import Basket from '@/models/Basket.js';

async function parseHtml(merchant) {
  let totalSum = 0;
  const entries = [];

  await fetch(merchant.cart.url)
    .then(response => {
      return response.text();
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      return doc;
    })
    .then(doc => {
      const list = doc.querySelector(merchant.cart.list);
      totalSum = doc.querySelector(merchant.cart.totalPrice).innerText;
      return list;
    })
    .then(list => {
      const goods = list.querySelectorAll(merchant.cart.good.self);
      return goods;
    })
    .then(goods => {
      goods.forEach(good => {
        const entry = {
          sku: good.querySelector(merchant.cart.good.sku).innerText,
          name: good.querySelector(merchant.cart.good.name).innerText,
          price: good.querySelector(merchant.cart.good.price).innerText,
          totalPrice: good.querySelector(merchant.cart.good.totalPrice)
            .innerText,
          quantity: good.querySelector(merchant.cart.good.quantity).innerText,
          photo: good.querySelector(merchant.cart.good.photo).src
        };
        entries.push(entry);
      });
    })
    .catch(error => {
      console.error(error);
    });

  return new Basket(totalSum, entries);
}

export default parseHtml;
