'use strict';

import Basket from '@/models/Basket.js';

async function parseJson(merchant) {
  let totalSum = 0;
  const entries = [];

  await fetch(merchant.cart.url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      totalSum = json.data.totalPriceWithTax.value;
      return json.data.entries;
    })
    .then(goods => {
      goods.forEach(good => {
        const entry = {
          sku: good.product.sku,
          name: good.product.name,
          price: good.basePrice.value,
          totalPrice: good.totalPrice.value,
          quantity: good.quantity,
          photo: 'https:' + good.product.imageUrl
        };
        entries.push(entry);
      });
    })
    .catch(error => {
      console.error(error);
    });

  return new Basket(totalSum, entries);
}

export default parseJson;
