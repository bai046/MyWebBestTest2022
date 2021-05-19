import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import One from '../views/One.vue'
import Two from '../views/Two.vue'
import MyWallet from '../views/myWallet.vue'
// export default new router({
//   routes: [
//     {
//       path: "/One",
//       name: 'One',
//       component: One
//     },
//     {
//       path: "/Two",
//       name: 'Two',
//       component: Two
//     }
//   ]
// })
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/One",
    name: 'One',
    component: One
  },
  {
    path: "/Two",
    name: 'Two',
    component: Two
  },
  {
    path: "/myWallet",
    name: 'MyWallet',
    component: MyWallet
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
