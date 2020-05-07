import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

// 引入全局样式、js
import './assets/css/global.css'
import './assets/js/global'


import axios from 'axios'
// import Message from 'element-ui'

import qs from 'qs'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//设置根路径
axios.defaults.baseURL = `http://47.113.121.50/`

// 挂载到vue的原型上
Vue.prototype.$http = axios
// 挂载qs到全局
Vue.prototype.$qs = qs


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
