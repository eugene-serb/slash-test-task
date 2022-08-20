'use strict';

const merchants = [
  {
    merchantId: 'newlook',
    domain: 'www.newlook.com/uk',
    cart: {
      mode: 'json',
      url: 'https://www.newlook.com/uk/json/cart/currentCart.json'
    }
  },
  {
    merchantId: 'converse',
    domain: 'www.converse.com/uk',
    cart: {
      mode: 'html',
      url: 'https://www.converse.com/uk/en/cart',
      list: '.cart__items',
      totalPrice: '.order-totals__highlight > .value--highlight',
      good: {
        self: '.cart__item',
        photo: '.product-mini__image-url > img',
        name: '.product-mini__name > a',
        sku: '.product-mini__sku > span.value',
        quantity: '.cart__item-qty > select > option[selected]',
        price: '.product-price--sales',
        totalPrice: '.product-price--sales'
      }
    }
  }
];

export default merchants;
