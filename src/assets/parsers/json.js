'use strict';

import Basket from '@/models/Basket.js';
import Entry from '@/models/Entry.js';
import getJsonValue from '@/modules/getJsonValue.js';
import applyMods from '@/modules/applyMods.js';

async function parseJson(merchant) {
  let totalSum = 0;
  const entries = [];

  await fetch(merchant.rules.url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      totalSum = applyMods(
        getJsonValue(json, merchant.rules.totalSum.value),
        merchant.rules.totalSum.value
      );
      return getJsonValue(json, merchant.rules.list.value);
    })
    .then(goods => {
      goods.forEach(good => {
        const sku = applyMods(
          getJsonValue(good, merchant.rules.sku.value),
          merchant.rules.sku.mods
        );
        const name = applyMods(
          getJsonValue(good, merchant.rules.name.value),
          merchant.rules.name.mods
        );
        const price = applyMods(
          getJsonValue(good, merchant.rules.price.value),
          merchant.rules.price.mods
        );
        const totalPrice = applyMods(
          getJsonValue(good, merchant.rules.totalPrice.value),
          merchant.rules.totalPrice.mods
        );
        const quantity = applyMods(
          getJsonValue(good, merchant.rules.quantity.value),
          merchant.rules.quantity.mods
        );
        const photo = applyMods(
          getJsonValue(good, merchant.rules.photo.value),
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

export default parseJson;
