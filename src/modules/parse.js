'use strict';

import parseHtml from '@/modules/parsers/parseHtml.js';
import parseJson from '@/modules/parsers/parseJson.js';
import parseCustom from '@/modules/parsers/parseCustom.js';

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
