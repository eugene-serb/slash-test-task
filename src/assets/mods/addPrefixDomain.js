'use strict';

function addPrefixHttp(value, merchant) {
  return merchant.domain + value;
}

export default addPrefixHttp;
