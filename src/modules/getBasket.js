'use strict';

import merchants from '@/assets/merchants.js';
import getCurrentUrl from '@/modules/getCurrentUrl.js';
import parse from '@/modules/parse.js';

const getBasket = async () => {
  const currentUrl = await getCurrentUrl();

  const currentMerchant = merchants.find(merchant =>
    currentUrl.includes(merchant.domain)
  );

  if (!currentMerchant) {
    return {
      message: 'Этот сайт не является партнером приложения'
    };
  }

  // ToDo: необходимо спарсить все товары добавленные в корзину на сайте
  // если корзина пуста выводить соответствующее сообщение

  const basket = await parse(currentMerchant);
  const result = {};

  basket.entries.length
    ? (result.basket = basket)
    : (result.message = 'Корзина пуста');

  return result;
};

export default getBasket;
