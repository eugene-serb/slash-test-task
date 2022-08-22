'use strict';

import parsers from '@/assets/parsers.js';

function getParser(parserMode) {
  let result = null;

  Object.keys(parsers).forEach(key => {
    if (parserMode == key) {
      result = parsers[key];
    }
  });

  if (result === null) {
    result = parsers['stub'];
  }

  return result;
}

export default getParser;
