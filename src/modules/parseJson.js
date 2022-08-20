'use strict';

import Basket from '@/models/Basket.js';
import Entry from '@/models/Entry.js';
import getJsonValue from '@/modules/getJsonValue.js';

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
            getJsonValue(good, merchant.rules.sku),
            getJsonValue(good, merchant.rules.name),
            getJsonValue(good, merchant.rules.price),
            getJsonValue(good, merchant.rules.totalPrice),
            getJsonValue(good, merchant.rules.quantity),
            'https:' + getJsonValue(good, merchant.rules.photo)
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
