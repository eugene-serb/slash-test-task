'use strict';

import getBasket from '@/modules/getBasket.js';

chrome.extension.onMessage.addListener(async (request, sender, callback) => {
  if (request === 'getBasket') {
    const result = await getBasket();
    callback(result);
  }
  return true;
});
