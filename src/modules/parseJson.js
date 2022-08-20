'use strict';

import Basket from '@/models/Basket.js';
import Entry from '@/models/Entry.js';

async function parseJson(merchant) {
  let totalSum = 0;
  const entries = [];

  await fetch(merchant.rules.url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      totalSum = json.data.totalPriceWithTax.value;
      return json.data.entries;
    })
    .then(goods => {
      goods.forEach(good => {
        entries.push(
          new Entry(
            good.product.sku,
            good.product.name,
            good.basePrice.value,
            good.totalPrice.value,
            good.quantity,
            'https:' + good.product.imageUrl
          )
        );
      });
    })
    .catch(error => {
      console.error(error);
    });

  return new Basket(entries, totalSum);
}

export default parseJson;
