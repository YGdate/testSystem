import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Publisher from '../components/Publisher.vue'


// 以下部分是张傲引入的
import Solve from '../components/solve.vue'
import Shouye from '../components/solvequestion/Z-shouye.vue'
import Testpage from '../components/solvequestion/Z-testpage.vue'
import Pkonline from '../components/solvequestion/Z-pkonline.vue'
import Evaluation from '../components/solvequestion/Z-evaluation.vue'
import Pking from '../components/solvequestion/Z-pking.vue'
import Chengji from '../components/solvequestion/Z-chengji.vue'
import Chengjibaobiao from '../components/solvequestion/Z-chengjibaobiao.vue'
import Myexam from '../components/solvequestion/Z-myexam.vue'
import P1 from '../components/solvequestion/Z-pingce1.vue'
import P2 from '../components/solvequestion/Z-pingce2.vue'
import P3 from '../components/solvequestion/Z-pingce3.vue'
import P4 from '../components/solvequestion/Z-pingce4.vue'
import Ziexamover from '../components/solvequestion/Z-ziexamover.vue'
import Examover from '../components/solvequestion/Z-examover.vue'
import Examdetails from '../components/solvequestion/Z-examxiangqing.vue'


// lzy
import List from '../components/lzy/List'

//发布者子页面
import Promulgator from '../components/publisher/Promulgator.vue'
import ReportStatistics from '../components/publisher/ReportStatistics.vue'
import ReportDetails from '../components/publisher/ReportDetails.vue'

Vue.use(VueRouter)

const routes = [{
  //题库录入
  path: '/',
  component: Home,
  children: [{
      path: 'list',
      component: List
    },

  ]
}, {
  //发布者
  path: '/publisher',
  component: Publisher,
  children: [{
    //发布者首页
    path: 'promulgator',
    component: Promulgator
  },
  {
    //报告统计
    path: 'reportStatistics',
    component: ReportStatistics
  },
   {
     //报告详情
     path: 'reportDetails',
     component: ReportDetails
   },
]
},
{
  //
  path: '/solve',
  redirect: '/solve/zhomepage',
  component: Solve,
  children: [
    {
      path:'zhomepage',
      component:Shouye
  },
  {
    path:'testpage',
    component:Testpage
},
{
  path:'pkonline',
  component:Pkonline
},{
  path:'evaluation',
  component:Evaluation
},{
  path:'pking',
  component:Pking
},
{
  path:'chengji',
  component:Chengji
},
{
  path:'chengjibaobiao',
  component:Chengjibaobiao
},
// 我的考试
{
  path:'myexam',
  component:Myexam
}
// 评测1
,
{
  path:'testone',
  component:P1
}
// 评测2
,
{
  path:'testtwo',
  component:P2
},
{
  path:'testthree',
  component:P3
},
{
  path:'testfour',
  component:P3
}
// 自定义考试结束
,
{
  path:'ziexamover',
  component:Ziexamover
},
// 考试结束
{
  path:'examover',
  component:Examover
}
// 考试详情
,
{
  path:'examdetails',
  component:Examdetails
}
  ]
}]


// 路由拦截
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router