'use strict';

function deletePrefixChrome(value) {
  let result = value.slice(19);

  while (result[0].match(/[a-zA-Z]/)) {
    result = result.slice(1);
  }

  return result;
}

export default deletePrefixChrome;
