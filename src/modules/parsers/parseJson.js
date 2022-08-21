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
      totalSum = getJsonValue(json, merchant.rules.totalSum);
      return getJsonValue(json, merchant.rules.list);
    })
    .then(goods => {
      goods.forEach(good => {
        entries.push(
          new Entry(
            getJsonValue(good, merchant.rules.good.sku),
            getJsonValue(good, merchant.rules.good.name),
            getJsonValue(good, merchant.rules.good.price),
            getJsonValue(good, merchant.rules.good.totalPrice),
            getJsonValue(good, merchant.rules.good.quantity),
            'https:' + getJsonValue(good, merchant.rules.good.photo) // костыль мод
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
