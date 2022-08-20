const merchants = [
  {
    merchantId: 'newlook',
    domain: 'www.newlook.com/uk'
  },
  {
    merchantId: 'converse',
    domain: 'www.converse.com/uk'
  }
];

const getCurrentUrl = async () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, async tab => {
      const [currentTab] = tab;

      if (!currentTab) {
        reject(null);
      }

      resolve(currentTab.url);
    });
  });
};

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

  return {
    basket: {
      totalSum: '£19.99',
      entries: [
        {
          sku: '6467657',
          name: 'Petite Black Ribbed Flared Leggings',
          price: '£19.99',
          totalPrice: '£19.99',
          quantity: 1,
          photo:
            'https://media3.newlookassets.com/i/newlook/646758801/womens/clothing/leggings/petite-black-ribbed-flared-leggings.jpg'
        }
      ]
    }
  };
};

chrome.extension.onMessage.addListener(async (request, sender, callback) => {
  if (request === 'getBasket') {
    const result = await getBasket();

    callback(result);
  }
  return true;
});
