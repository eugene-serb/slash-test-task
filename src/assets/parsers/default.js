'use strict';

import Basket from '@/models/Basket.js';

// ������ ��������

async function parseDefault(/* merchant */) {
  let totalSum = 0;
  const entries = [];
  return new Basket(entries, totalSum);
}

export default parseDefault;
