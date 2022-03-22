import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 添加引用入口js（饿了么组件导入）
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
// 全局引用axios
Vue.prototype.$axios=axios

//引用mock
//名字默认写index.js，在引入的时候就可以不用写文件名
//require(".mock/index.js")
//mock里面默认请求index.js
require("./mock")

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
