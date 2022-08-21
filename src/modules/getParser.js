'use strict';

import parsers from '@/assets/parsers.js';

function getParser(mode) {
  let result = null;

  Object.keys(parsers).forEach(key => {
    if (mode == key) {
      result = parsers[key];
    }
  });

  if (result === null) {
    result = parsers['stub'];
  }

  return result;
}

export default getParser;
