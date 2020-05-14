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
// import Message from 'element-ui'

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
        // var config1 = error.config
        // var backoff
        // // 设置token失效
        // if (error.response.status == 401) {

        //     backoff = new Promise(function (resolve) {
        //         setTimeout(function () {
        //             resolve()
        //         }, 1500)
        //     })
        //     /*在此处判断token过期，以及其他状态码设置跳转页面*/
        //     axios
        //         .post('oAuth/refresh')
        //         .then(res => {
        //             if (res.data.code !== 200) Message.error('获取token失败')
        //             //1.将登陆之后的token，保存到客户端的sessionStorage中
        //             window.sessionStorage.setItem(
        //                 'token',
        //                 'Bearer ' + res.data.data.token
        //             )
        //         })
        //         .catch(err => {
        //             Message({
        //                 dangerouslyUseHTMLString: true,
        //                 showClose: true,
        //                 message: eval('(' + err.response.data + ')').data.join(
        //                     '<br><br>跳转登录页面'
        //                 ),
        //                 type: 'error'
        //             })
        //             // this.$router.push('/login')
        //         })
        //     return backoff.then(function () {
        //         return axios(config1)
        //     })
        // }
        /*在这里设置token过期的跳转*/
        return Promise.reject(error)
    });

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')