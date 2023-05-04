
import { createRouter, createWebHashHistory } from 'vue-router';

import Main from "./components/Main.vue";
import Burgers from "./components/categories/Burgers.vue"
import Snacks from "./components/categories/Snacks.vue"



export default createRouter({
    history: createWebHashHistory(),
    routes:[
      
        {
            path:"/",
            name:"Burgers",
            component:Burgers,
        
        },
        {
            path:"/snacks",
            name:"Snacks",
            component:Snacks,
        }
        
    ]
})