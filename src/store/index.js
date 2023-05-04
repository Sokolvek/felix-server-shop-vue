import { createPinia, defineStore } from "pinia";

export const productsInfo = defineStore("store",{
    
    state: () =>({
        cart:[],
        amount:0,
        products:[
            {
                name:"Мясная бомба",
                price:689,
                weight:520,
                img:"burger-product-1.png",
                category:"burgers",
                desc:"Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
                structure:["Пшеничная булочка","Котлета из говядины","Красный лук","Листья салата","Соус горчичный"]
            },
            {
                name:"Начос",
                price:689,
                weight:520,
                img:"snacks-product-1.png",
                category:"snacks",
                desc:"Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
                structure:["Пшеничная булочка","Котлета из говядины","Красный лук","Листья салата","Соус горчичный"]
            }
        ]
    }),
    actions:{
        addToCart(object){
            this.cart.push(object)
            this.amount++;
        },
        removeFromCart(object){
            this.cart.slice(this.cart.indexOf(object), 1)
        }
    }
   
})

const pinia = createPinia();

export function useProductsInfo(){
    const store = productsInfo(pinia);

    return{
        cart:store.cart,
        products:store.products,
        addToCart:store.addToCart,
        removeFromCart:store.removeFromCart,
    }
}