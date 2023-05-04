<template>
  <section class="cart" :class="{ empty: cart.length == 0 }">
    <div v-if="cart.length == 0">
      <p>Корзина</p>
      <p>Тут пока ничего нет :(</p>
    </div>
    <div class="cart-title" v-else>
      <p>Корзина</p>
      <p>{{ cart.length }}</p>
    </div>
    <div class="cart-item" v-for="cartItem in cart">
      <img class="cart-img" :src="`src/assets/imgs/${cartItem.img}`" alt="" />
      <div class="cart-desc">
        <p>{{ cartItem.name }}</p>
        <span>{{ cartItem.weight }}г</span>
        <p>{{ cartItem.price }}₽</p>
      </div>
      <button class="cart-remove" @click="removeFromCart(cartItem)"></button>
      <!-- <div class="counter">
                <button @click="decrement">-</button>
                <span>{{ quantity }}</span>
                <button @click="quantity++">+</button>
            </div> -->
    </div>
  </section>
</template>

<script>
import { useProductsInfo } from "../store/index";

export default {
  data() {
    const { cart, amount } = useProductsInfo();
    return {
      amount,
      cart,
    };
  },
  methods: {
    decrement() {
      this.quantity--;
      if (this.quantity < 1) {
        this.quantity = 1;
      }
    },
    removeFromCart(item) {
      const productInfo = useProductsInfo();
      productInfo.cart.splice(productInfo.cart.indexOf(item), 1);
    },
  },
  mounted() {
    console.log(this.cart[0]);
  },
};
</script>

<style lang="less" scoped></style>
