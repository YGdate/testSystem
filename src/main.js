import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element.js'

//引入nprogress
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入

// 简单配置
// NProgress.inc(0.2)
// NProgress.configure({
//     easing: 'ease',
//     speed: 500,
//     showSpinner: false
// })


// 引入全局样式、js
import './assets/css/global.css'
import JS from './assets/js/global'

import axios from 'axios'
import Message from 'element-ui'
import MessageBox from 'element-ui'

import qs from 'qs'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import {
    JSEncrypt
} from 'jsencrypt'

//解密方法
Vue.prototype.$decryptData = function(data) {
    let decrypt = new JSEncrypt()
    decrypt.setPrivateKey(JS.private_key)
    var uncrypted = '';
    data.split('__&_&__').forEach(function(a) {
        if (decrypt.decrypt(a) != null) {
            uncrypted += decrypt.decrypt(a);
        }
    });
    return JSON.parse(uncrypted)
}

//设置根路径
axios.defaults.baseURL = `http://47.113.121.50/api/`

// 挂载到vue的原型上
Vue.prototype.$http = axios
    // 挂载qs到全局
Vue.prototype.$qs = qs

// 给请求头设置拦截器,将token放入Authorization中，传入服务器
axios.interceptors.request.use(

    config => {
        NProgress.start()

        config.headers.Authorization = window.sessionStorage.getItem('token')

        if (!window.sessionStorage.getItem('token')) {
            config.baseURL = 'http://login.myxy99.cn/api/'
        }
        // 根据vuex store内容动态设置baseurl
        return config
    }, err => {
        // 设置请求出错的信息。
        return Promise.reject(err.response.data)
    })

// 给响应头设置拦截器。
axios.interceptors.response.use(
    response => {
        NProgress.done()
        return response
    },
    error => {
        Message({
            message: '身份失效',
            type: 'error',
            duration: 5 * 1000
        })
        if (error.response.status == 403) {
            MessageBox.alert('身份已失效，请重新登录！', '身份验证', {
                confirmButtonText: '确定',
                callback: () => {
                    this.$router.push('/login')
                }
            });
        }
        return Promise.reject('error')

    });

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')