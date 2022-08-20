'use strict';

import parseHtml from '@/modules/parseHtml.js';
import parseJson from '@/modules/parseJson.js';
import parseCustom from '@/modules/parseCustom.js';

async function parse(merchant) {
  let basket = {};

  switch (merchant.rules.mode) {
    case 'html':
      basket = await parseHtml(merchant);
      break;
    case 'json':
      basket = await parseJson(merchant);
      break;
    case 'custom':
      basket = parseCustom(merchant);
      break;
    default:
      console.log('default');
  }

  return basket;
}

export default parse;
