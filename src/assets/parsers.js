'use strict';

import html from '@/assets/parsers/html.js';
import json from '@/assets/parsers/json.js';
import custom from '@/assets/parsers/custom.js';
import stub from '@/assets/parsers/default.js';

const parsers = {
  html: html,
  json: json,
  custom: custom,
  stub: stub
};

export default parsers;
