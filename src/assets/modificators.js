'use strict';

import addPrefixHttp from '@/assets/mods/addPrefixHttp.js';
import deletePrefixChrome from '@/assets/mods/deletePrefixChrome.js';
import addPrefixDomain from '@/assets/mods/addPrefixDomain.js';
import sliceFirstChar from '@/assets/mods/sliceFirstChar.js';
import toInteger from '@/assets/mods/toInteger.js';

const modificators = {
  addPrefixHttp: addPrefixHttp,
  deletePrefixChrome: deletePrefixChrome,
  sliceFirstChar: sliceFirstChar,
  toInteger: toInteger,
  addPrefixDomain: addPrefixDomain
};

export default modificators;
