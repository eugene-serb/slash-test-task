'use strict';

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

export default getCurrentUrl;
