import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Publisher from '../components/Publisher.vue'
import LoginReg from '../components/LoginReg.vue'
import AlertPwd from '../components/AlertPwd.vue'


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


// // lzy
import List from '../components/lzy/List'
import Write from '../components/lzy/Write'
import Single from '../components/lzy/Single'
import More from '../components/lzy/More'
import Log from '../components/lzy/Log'
// lzy function
import Dxuan from '../components/lzy/fun-page/Dxuan'
import Dwgc from '../components/lzy/fun-page/Dwgc'
import Duoxuan from '../components/lzy/fun-page/Duoxuan'
import Bdx from '../components/lzy/fun-page/Bdx'
import Zuowen from '../components/lzy/fun-page/Zuowen'
import Panduan from '../components/lzy/fun-page/Panduan'
import Fanyi from '../components/lzy/fun-page/Fanyi'
import Tiankong from '../components/lzy/fun-page/Tiankong'
import Xuanci from '../components/lzy/fun-page/Xuanci'
import Ydlj from '../components/lzy/fun-page/Ydlj'
import Wxtk from '../components/lzy/fun-page/Wxtk'
import Qxw from '../components/lzy/fun-page/Qxw'

//发布者子页面
import Promulgator from '../components/publisher/Promulgator.vue'
import ReportStatistics from '../components/publisher/ReportStatistics.vue'
import TestPaper from '../components/publisher/TestPaper.vue'
import AutoPaper from '../components/publisher/AutoPaper.vue'
import ExamManagement from '../components/publisher/ExamManagement.vue'
import TestScore from '../components/publisher/TestScore.vue'
import PaperManagement from '../components/publisher/PaperManagement.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        component: LoginReg
    },
    //修改密码
    {
        path: '/alertPwd',
        component: AlertPwd
    },
    //发布者
    {
        path: '/publisher',
        component: Publisher,
        redirect: '/publisher/promulgator',
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
                //手动组卷
                path: 'testPaper',
                component: TestPaper
            },
            {
                //自动组卷
                path: 'autoPaper',
                component: AutoPaper
            },
            {
                //自动组卷
                path: 'examManagement',
                component: ExamManagement
            },
            {
                //试卷评分
                path: 'testScore',
                component: TestScore
            },
            {
                //试卷管理
                path: 'paperManagement',
                component: PaperManagement
            },
        ]
    },

    //考试页面
    {
        path: '/solve',
        redirect: '/solve/zhomepage',
        component: Solve,
        children: [{
                path: 'zhomepage',
                component: Shouye
            },
            {
                path: 'testpage',
                component: Testpage
            },
            {
                path: 'pkonline',
                component: Pkonline
            }, {
                path: 'evaluation',
                component: Evaluation
            }, {
                path: 'pking',
                component: Pking
            },
            {
                path: 'chengji',
                component: Chengji
            },
            {
                path: 'chengjibaobiao',
                component: Chengjibaobiao
            },
            // 我的考试
            {
                path: 'myexam',
                component: Myexam
            }
            // 评测1
            ,
            {
                path: 'testone',
                component: P1
            }
            // 评测2
            ,
            {
                path: 'testtwo',
                component: P2
            },
            {
                path: 'testthree',
                component: P3
            },
            {
                path: 'testfour',
                component: P4
            }
            // 自定义考试结束
            ,
            {
                path: 'ziexamover',
                component: Ziexamover
            },
            // 考试结束
            {
                path: 'examover',
                component: Examover
            }
            // 考试详情
            ,
            {
                path: 'examdetails',
                component: Examdetails
            }
        ]
    },

    //题库录入
    {
        path: '/',
        component: Home,
        children: [{
                path: 'list',
                component: List
            },
            {
                path: 'write',
                component: Write,
                children: [{
                        path: 'single',
                        component: Single
                    },
                    {
                        path: 'more',
                        component: More
                    }
                ]
            },

            {
                path: 'dxuan',
                component: Dxuan
            },
            {
                path: 'panduan',
                component: Panduan
            },
            {
                path: 'duoxuan',
                component: Duoxuan
            },
            {
                path: 'fanyi',
                component: Fanyi
            },
            {
                path: 'bdx',
                component: Bdx
            },
            {
                path: 'xuanci',
                component: Xuanci
            },
            {
                path: 'wxtk',
                component: Wxtk
            },
            {
                path: 'ydlj',
                component: Ydlj
            },
            {
                path: 'qxw',
                component: Qxw
            },
            {
                path: 'tiankong',
                component: Tiankong
            },
            {
                path: 'zuowen',
                component: Zuowen
            },
            {
                path: 'dwgc',
                component: Dwgc
            },
            {
                path: 'log',
                component: Log
            }
        ]
    }

]


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    if (to.path === '/alertPwd') return next()
        // if (to.path === '/alertPassword') return next()
        //获取token
    const tokenStr = window.sessionStorage.getItem('token')

    if (!tokenStr) {
        return next('/login')
    }
    next()
})


export default router