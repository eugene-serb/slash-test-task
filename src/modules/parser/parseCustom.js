'use strict';

import Basket from '@/models/Basket.js';
import Entry from '@/models/Entry.js';

// пример возможности добавить свой режим

async function parseCustom(merchant) {
  let totalSum = 1337;
  const entries = [];
  entries.push(
    new Entry(
      1,
      `Custom Good at ${merchant.merchantId}`,
      1337,
      1337,
      1,
      'https://eugene-serb.github.io/img/apple-touch-icon.png'
    )
  );
  return new Basket(entries, totalSum);
}

export default parseCustom;
