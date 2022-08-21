'use strict';

import Basket from '@/models/Basket.js';
import Entry from '@/models/Entry.js';
import applyMods from '@/modules/applyMods.js';

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
      const list = doc.querySelector(merchant.rules.list.value);
      totalSum = applyMods(
        doc.querySelector(merchant.rules.totalSum.value).innerText,
        merchant.rules.totalSum.mods
      );
      return list;
    })
    .then(list => {
      const goods = list.querySelectorAll(merchant.rules.self.value);
      return goods;
    })
    .then(goods => {
      goods.forEach(good => {
        const sku = applyMods(
          good.querySelector(merchant.rules.sku.value).innerText,
          merchant.rules.sku.mods
        );
        const name = applyMods(
          good.querySelector(merchant.rules.name.value).innerText,
          merchant.rules.name.mods
        );
        const price = applyMods(
          good.querySelector(merchant.rules.price.value).innerText,
          merchant.rules.price.mods
        );
        const totalPrice = applyMods(
          good.querySelector(merchant.rules.totalPrice.value).innerText,
          merchant.rules.totalPrice.mods
        );
        const quantity = applyMods(
          good.querySelector(merchant.rules.quantity.value).innerText,
          merchant.rules.quantity.mods
        );
        const photo = applyMods(
          good.querySelector(merchant.rules.photo.value).src,
          merchant.rules.photo.mods
        );
        entries.push(new Entry(sku, name, price, totalPrice, quantity, photo));
      });
    })
    .catch(error => {
      // eslint-disable-next-line
      console.error(error);
    });

  return new Basket(entries, totalSum);
}

export default parseHtml;
