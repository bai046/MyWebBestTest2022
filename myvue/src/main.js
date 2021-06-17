import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
// vue.prototype.$message = Message
axios.defaults.baseURL = 'http://localhost:3000/api/'

//在main.js引入qs
import  qs from 'qs'
//配全局属性配置，在任意组件内可以使用this.$qs获取qs对象
 Vue.prototype.$qs = qs

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
