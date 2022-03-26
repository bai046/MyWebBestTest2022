// 如果需要访问this,需要引入Vue实例，如果需要路由则需要引入路由，(需要使用到什么就引入什么)
//import Vue from 'vue'
// 字符串
var apiurl = 'https://www.lcduoduo.cn/api/'
// 需要把定义的变量或函数暴露出去
const list = {
	apiurl,
}

// 暴露出去
export default list
