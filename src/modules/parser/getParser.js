'use strict';

// здесь подключаем парсеры

import parseHtml from '@/modules/parser/parseHtml.js';
import parseJson from '@/modules/parser/parseJson.js';
import parseCustom from '@/modules/parser/parseCustom.js';
// parseDefault

// здесь передаём объект с парсерами
// можно ещё вынести и этот объект в конфиги,
// чтобы не лезть в код каждый при добавлении

const parsers = {
  html: parseHtml,
  json: parseJson,
  custom: parseCustom
};

function getParser(mode) {
  let result = null; // нужна функция по умолчанию

  // здесь ищем нужный и отдаём в функцию парс

  Object.keys(parsers).forEach(key => {
    if (mode == key) {
      result = parsers[key];
    }
  });

  return result;
}

export default getParser;
