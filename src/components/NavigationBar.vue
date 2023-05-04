<template>
    <nav>
        <ul class="nav-list">
            <router-link :to="category.path"  v-for="(category, index) in categories" :key="index">
                <li class="nav-item" @click="setActive(index)" :class="{'active' : activeIndex == index}">
                    <img :src="`./static/images/${category.img}`" alt="">
                    <p>{{ category.name }}</p>
                </li>      
            </router-link>
        </ul>
    </nav>
</template>

<script >

export default{
    data(){
        return{
            activeIndex:0,
            categories:[
                {
                    name:"Бургеры",
                    path:"/",
                    img:"burger-icon.svg"
                },
                {
                    name:"Закуски",
                    path:"/snacks",
                    img:"snacks-icon.svg"
                }
            ],
            categoriesImgs:[],
        }
    },
    methods:{
        setActive(index){
            this.activeIndex = index;
            localStorage.setItem("index", this.activeIndex)
        }
    },
    created(){
        let activeIndex = localStorage.getItem("index")
        if(activeIndex){
            this.activeIndex = activeIndex
        }
    }
}
</script>

<style lang="scss" scoped>

</style>