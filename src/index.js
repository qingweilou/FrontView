import Vue from 'vue/dist/vue.common.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Help from './components/Help.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

export var router = new VueRouter({
    routes: [
        {path: '/About', component: About},
        {path: '/Help', component: Help},
        {path: '/Login', component: Login},
        {path: '/Home', component: Home},
        //{path: '*', redirect: '/Home'}
    ]
})

/*router.beforeEach((to, from, next) => {
    if (to.path == '/Login' && localStorage.getItem("id_token")) 
    {
        router.push("/Home")
    }
    else {
        next()
    }
    
})*/

export default new Vue({
    el: '#app',
    data: {
        tab: 0
    },
    router: router,
    components:{
        Login,Help,About
    }
}).$mount('#app')

