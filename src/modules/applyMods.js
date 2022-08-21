'use strict';

import modificators from '@/assets/modificators.js';

function applyMods(value, mods) {
  let result = value;

  mods.forEach(mod => {
    Object.keys(modificators).forEach(modificator => {
      if (modificator == mod) {
        result = modificators[modificator](result);
      }
    });
  });

  return result;
}

export default applyMods;
