import Vue from 'vue'
import Router from 'vue-router'
import PostComponent from '@/components/PostComponent'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'PostComponent',
            component: PostComponent
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
    ]
})