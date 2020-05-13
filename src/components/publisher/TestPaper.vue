<template>
  <div class="main">
    
    <el-row class="content">
      <el-col class="content-left" :span="4">
        <el-button icon="el-icon-back">测评管理</el-button>
      </el-col>
      <el-col class="content-center" :span="16">
        <el-row class="center-title" type="flex" justify="center" :gutter="10">
          <el-col :span="6">
            <div>第一步</div>
            <div :class="ischeck?'clickStyle':''" @click="ischecked(0)" class="paper-choose">试题选择</div>
          </el-col>
          <el-col :span="2">
            <img src="../../assets/img/长箭头.png" alt="">
          </el-col>
          <el-col :span="6">
            <div>第二步</div>
            <div :class="ischeck?'':'clickStyle'" @click="ischecked(1)" class="paper-choose">考生信息设置</div>
          </el-col>
        </el-row>
        <!-- 手动选题 -->
        <ChooseTest @nextStep="nextStep($event)" v-if="ischeck"></ChooseTest>
        <InfoSet @forceUpdate="forceUpdate"  v-if="!ischeck"></InfoSet>
       
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChooseTest from './element/chooseTest'
import InfoSet from './element/InfoSet'
  export default {
    components:{
      ChooseTest,
      InfoSet
    },
    data() {
      return {
        // tabledata
        tableData: [

        ],
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        //图标资源
        imgData: [{
            name: '单选题',
            path: require('../../assets/img/icon/单选题.png')
          },
          {
            name: '不定项选择',
            path: require('../../assets/img/icon/不定项选择.png')
          },
          {
            name: '判断题',
            path: require('../../assets/img/icon/判断题.png')
          },
          {
            name: '听力',
            path: require('../../assets/img/icon/听力.png')
          },
          {
            name: '填空题',
            path: require('../../assets/img/icon/填空题.png')
          },
          {
            name: '多选题',
            path: require('../../assets/img/icon/多选题.png')
          },
          {
            name: '完形填空',
            path: require('../../assets/img/icon/完形填空.png')
          },
          {
            name: '短文改错',
            path: require('../../assets/img/icon/短文改错.png')
          },
          {
            name: '翻译',
            path: require('../../assets/img/icon/翻译.png')
          },
          {
            name: '选词填空',
            path: require('../../assets/img/icon/选词填空.png')
          },
          {
            name: '阅读理解',
            path: require('../../assets/img/icon/阅读理解.png')
          },
          {
            name: '作文',
            path: require('../../assets/img/icon/作文.png')
          },
          {
            name: '七选五',
            path: require('../../assets/img/icon/七选五.png')
          },

        ],
        ischeck: true
      }
    },
    mounted() {
     

    },
    methods: {
      forceUpdate(){
         setTimeout(()=>{
           this.ischeck = true
         },1000)
      },
      ischecked(num) {
        if (num == 0) this.ischeck = true
        else this.ischeck = false
      },
      nextStep(){
        this.ischeck = false
      }
     
    }

  }
</script>
<style lang="less" scoped>
  .main {

    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  

  .content {
    margin-top: 20px;
    width: 100%;
    height: 350px;

    .content-left {
      .el-button {
        color: #fff;
        background-color: #24c9e3;
      }
    }

    .clickStyle {
      background: #65dcee !important;
    }

    .content-center {
      .center-title {
        height: 90px;
        text-align: center;

        .el-col {
          display: flex;
          flex-wrap: wrap;

          div {
            width: 100%;
          }

          .paper-choose {
            cursor: pointer;
            display: flex;
            margin-top: 20px;
            align-items: center;
            justify-content: center;
            width: 100%;
            box-shadow: 0 0 4px 1px #ccc;
            border-radius: 5px;
            height: 40px;
            background: #24c9e3;
            color: #fff;
          }

          img {
            height: 77px;
            width: 100%;
            line-height: 60px;
          }
        }
      }
    }

    //题型选择
    .chooseTest{
      width: 100%;
      
    }

   
  }
</style>