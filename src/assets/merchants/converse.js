'use strict';

const converse = {
  merchantId: 'converse',
  domain: 'https://www.converse.com/uk',
  rules: {
    mode: 'html',
    url: 'https://www.converse.com/uk/en/cart',
    list: '.cart__items',
    totalPrice: '.order-totals__highlight > .value--highlight',
    good: {
      self: '.cart__item',
      sku: '.product-mini__sku > span.value',
      name: '.product-mini__name > a',
      price: '.product-price--sales',
      totalPrice: '.product-price--sales',
      quantity: '.cart__item-qty > select > option[selected]',
      photo: '.product-mini__image-url > img'
    }
  }
};

export default converse;
