import Vue from 'vue'
import VueRouter from 'vue-router'
import personcenter from '../views/personcenter.vue'
import Two from '../views/Two.vue'
import Help from '../views/help.vue'
import View from '../components/NavBar/view.vue'
import MyWallet from '../views/myWallet.vue'
import StudioInfo from '../views/StudioInfo.vue'
import ManageProject from '../views/ManageProject.vue'
import StudioManageProgress from '../views/projectManagement/studioManageProgress.vue'
import StudioManageFinished from '../views/projectManagement/studioManageFinished.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: personcenter
  }
  ,
  {
    path: "/view",
    name: 'View',
    component: View
  },
  {
    path: "/personcenter",
    name: 'personcenter',
    component: personcenter
  },
  {
    path: "/Two",
    name: 'Two',
    component: Two
  },
  ,
  {
    path: "/help",
    name: 'Help',
    component: Help
  },
  {
    path: "/myWallet",
    name: 'MyWallet',
    component: MyWallet
  },
  {
    path: "/ManageProject",
    name: 'ManageProject',
    component: ManageProject
  },
  ,
  {
    path: "/studioManageProgress",
    name: 'StudioManageProgress',
    component: StudioManageProgress
  },
  ,
  {
    path: "/studioManageFinished",
    name: 'StudioManageFinished',
    component: StudioManageFinished
  },
  ,
  {
    path: "/StudioInfo",
    name: 'StudioInfo',
    component: StudioInfo
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
