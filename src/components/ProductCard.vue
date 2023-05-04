<template>
  <section class="product-card">
    <div class="popup">
      <div class="popup-title">
        <h2>{{ product.name }}</h2>
        <div class="close-popup" @click="this.$emit('closeEvent')">close</div>
      </div>
      <div class="popup-main">
        <div class="popup-desc">
          <img :src="`./static/images/${product.img}`" alt="" />
          <button class="btn" @click="addToCart(product)">Добавить</button>
        </div>
        <div class="info">
          <div class="desc">
            <p>{{ product.desc }}</p>
            <p>Состав:</p>
            <div class="structure">
              <p v-for="structure in product.structure">{{ structure }}</p>
            </div>
          </div>
          <div class="options">
            <!-- <div class="counter">
                <button @click="amount--">-</button>
                <span>{{ amount }}</span>
                <button @click="amount++">+</button>
            </div> -->
            <h3 class="price">{{ product.price * amount }}₽</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { useProductsInfo } from '../store/index';

const productInfo = useProductsInfo()

export default {
  data() {
    return {
        amount:1,


    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closePopup() {},
    addToCart(){
      const productInfo = useProductsInfo();
      productInfo.addToCart(this.product)
      this.$emit("amount-send", this.amount)
      this.$emit('closeEvent')
    }

  },
};
</script>

<style lang="less">
@import url("../assets/styles/productcard.less");
</style>
