'use strict';

import modificators from '@/assets/modificators.js';

function applyMods(value, mods, merchant) {
  let result = value;

  mods.forEach(mod => {
    Object.keys(modificators).forEach(modificator => {
      if (modificator == mod) {
        result = modificators[modificator](result, merchant);
      }
    });
  });

  return result;
}

export default applyMods;
