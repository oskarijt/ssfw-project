import Vue from 'vue'
import Router from 'vue-router'
import PostComponent from '@/components/PostComponent'
import Register from '@/components/Register'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/posts',
            name: 'posts',
            component: PostComponent
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
})