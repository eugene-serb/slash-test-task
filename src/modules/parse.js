'use strict';

import parseHtml from '@/modules/parseHtml.js';
import parseJson from '@/modules/parseJson.js';

async function parse(merchant) {
  let basket = {};

  switch (merchant.cart.mode) {
    case 'html':
      basket = await parseHtml(merchant);
      break;
    case 'json':
      basket = await parseJson(merchant);
      break;
    default:
      alert('default');
  }

  return basket;
}

export default parse;
