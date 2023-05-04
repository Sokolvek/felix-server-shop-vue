
<template>
    <div>
      <Header />
      <Main />

    </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

import "./assets/styles/reset.less"
import "./assets/styles/header.less"
import "./assets/styles/navigationbar.less"
import "./assets/styles/variables.less"
import "./assets/styles/productlist.less"
import "./assets/styles/cart.less"

export default{
    components:{
      Header,
      Main
    }
}
</script>

<style scoped>

</style>
