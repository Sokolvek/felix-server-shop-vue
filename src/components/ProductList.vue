<template>
    <section>
        <ul class="card-list">
            <li class="card-item" v-for="(item, index) in products" :key="index" v-show="category === item.category">
            <img :src="`./static/images/${item.img}`" :alt="item.name" class="product-img">
            <h2 class="product-price">{{ item.price }}₽</h2>
            <p class="product-name">{{ item.name }}</p>
            <span class="product-weight">{{ item.weight }}г</span>
            <button class="btn" @click="openPopup(item)">Добавить</button>
        </li>
        </ul>
     
        <ProductCard :product="currentProduct" v-if="popUp" @closeEvent="popUp = false"/>
    </section>
</template>

<script>

import {useProductsInfo} from "../store/index"
import ProductCard from "./ProductCard.vue";
import Cart from "./Cart.vue"

export default{
    data(){
        const {products} = useProductsInfo();
        return{
            products,
            popUp:false,
            currentProduct:null,
        }
    },
    props:{
        category:{
            type:String,
            default:false,
        }
    },

    mounted(){
        console.log(this.products)
    },
    components:{
        ProductCard,
        Cart
    },
    methods:{
        openPopup(product){
            this.popUp = true;
            this.currentProduct = product;
        }
    }
}

</script>

<style lang="less" scoped>

</style>