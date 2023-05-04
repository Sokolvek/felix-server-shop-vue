<template>
    <main>
       <section class="main-start">
            <img src="../assets/imgs/burger-img.png" alt="">
            <div class="main-title">
                <h2>Только самые</h2>
                <h1>сочные бургеры!</h1>
                <p>Бесплатная доставка от 599₽</p>
            </div>
       </section>
       <NavigationBar />
       <div class="content-wrapper">
           <Cart />
           <router-view />

       </div>
    </main>
</template>

<script >

import NavigationBar from './NavigationBar.vue';
import Cart from './Cart.vue';

export default{
    components:{
        NavigationBar,
        Cart
    }
}
</script>

<style lang="less">
@import url("../assets/styles/main.less");
</style>