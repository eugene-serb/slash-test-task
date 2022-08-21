'use strict';

import getParser from '@/modules/getParser.js';

async function parse(merchant) {
  let basket = {};

  const parser = getParser(merchant.rules.parserMode);
  basket = await parser(merchant);

  return basket;
}

export default parse;
