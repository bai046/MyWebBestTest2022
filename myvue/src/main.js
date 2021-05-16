import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import VueRouter from 'vue-router'
// 引入组件
import User from './components/user.vue'
const routes = [
  {
      path: "/user",
      component: User
  }
]
Vue.use(VueRouter)
// 创建 router 实例，然后传 `routes` 配置
var router = new VueRouter({
  routes
})
export default router;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
