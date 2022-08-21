'use strict';

import getParser from '@/modules/parser/getParser.js';

async function parse(merchant) {
  let basket = {};

  const parser = getParser(merchant.rules.mode);
  basket = await parser(merchant);

  return basket;
}

export default parse;
