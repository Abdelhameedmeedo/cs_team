import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'
import Catagories from '../components/Catagories.vue'
import Logup from '../components/Log-up.vue'
import Login from '../components/Log-in.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:'/home',
  },
  {
    path: '/logup',
    name: 'Logup',
    component: Logup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/catagory',
    name: 'Catagories',
    component: Catagories
  },
  {
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')////
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
