'use strict';

function getJsonValue(json, path) {
  let result = json;

  path.forEach(key => {
    result = JSON.parse(JSON.stringify(result[key]));
  });

  return result;
}

export default getJsonValue;
