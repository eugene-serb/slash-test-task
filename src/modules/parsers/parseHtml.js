'use strict';

import Basket from '@/models/Basket.js';
import Entry from '@/models/Entry.js';

async function parseHtml(merchant) {
  let totalSum = 0;
  const entries = [];

  await fetch(merchant.rules.url)
    .then(response => {
      return response.text();
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      return doc;
    })
    .then(doc => {
      const list = doc.querySelector(merchant.rules.list);
      totalSum = doc
        .querySelector(merchant.rules.totalPrice)
        .innerText.toString()
        .slice(1); // костыль мод;
      return list;
    })
    .then(list => {
      const goods = list.querySelectorAll(merchant.rules.good.self);
      return goods;
    })
    .then(goods => {
      goods.forEach(good => {
        entries.push(
          new Entry(
            good.querySelector(merchant.rules.good.sku).innerText,
            good.querySelector(merchant.rules.good.name).innerText,
            good
              .querySelector(merchant.rules.good.price)
              .innerText.toString()
              .slice(1), // костыль мод
            good
              .querySelector(merchant.rules.good.totalPrice)
              .innerText.toString()
              .slice(1), // костыль мод
            +good.querySelector(merchant.rules.good.quantity).innerText,
            // костыль мод
            good.querySelector(merchant.rules.good.photo).src
          )
        );
      });
    })
    .catch(error => {
      console.error(error);
    });

  return new Basket(entries, totalSum);
}

export default parseHtml;
