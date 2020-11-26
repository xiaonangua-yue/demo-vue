import vue from 'vue'
import Router from 'vue-router'
vue.use(Router)

import Home from './components/Home.vue'

export default new Router({
    mode:'history',
    routes:[
        {
                 path:'/',
                component:Home

        }
    ]
})