<template>
  <div>
    <div v-if="message">
      <Message :message="message" />
    </div>
    <div v-if="basket" class="container">
      <Product
        class="container__product"
        v-for="item in basket.entries"
        :product="item"
        :key="item.sku"
      />
    </div>
    <div v-if="basket" class="total-sum">Total sum: {{ basket.totalSum }}</div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
import Message from '@/components/Message.vue';

export default {
  name: 'App',
  components: { Product, Message },
  data: () => {
    return {
      message: null,
      basket: null
    };
  },
  methods: {
    getBasket(data) {
      this.message = data.message;
      this.basket = data.basket;
    }
  },
  created() {
    chrome.extension.sendMessage('getBasket', this.getBasket);
  }
};
</script>

<style>
html {
  box-sizing: border-box;
  padding: 10px;
  width: 550px;
}

.container {
  box-sizing: border-box;
  max-height: 320px;
  overflow-y: scroll;
  padding-right: 10px;
  width: 100%;
}

.container__product {
  margin-bottom: 5px;
}

.total-sum {
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px;
}
</style>
