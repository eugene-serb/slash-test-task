'use strict';

const converse = {
  merchantId: 'converse',
  domain: 'https://www.converse.com/uk',
  rules: {
    parserMode: 'deepHtml',
    url: 'https://www.converse.com/uk/en/cart',
    list: {
      value: '.cart__items',
      mods: []
    },
    totalSum: {
      value: '.order-totals__highlight > .value--highlight',
      mods: ['sliceFirstChar']
    },
    self: {
      value: '.cart__item',
      mods: []
    },
    sku: {
      value: '.product-mini__sku > span.value',
      mods: []
    },
    name: {
      value: '.product-mini__name > a',
      mods: []
    },
    price: {
      value: '.product-price--sales',
      mods: ['sliceFirstChar', 'sliceFirstChar'],
      deep: {
        value: '.product-price > .product-price--sales',
        container: 'innerText'
      }
    },
    totalPrice: {
      value: '.product-price--sales',
      mods: ['sliceFirstChar']
    },
    quantity: {
      value: '.cart__item-qty > select > option[selected]',
      mods: ['toInteger']
    },
    photo: {
      value: '.product-mini__image-url > img',
      mods: []
    },
    deepUrl: {
      value: '.product-mini__name > a',
      mods: ['deletePrefixChrome', 'addPrefixDomain']
    }
  }
};

export default converse;
