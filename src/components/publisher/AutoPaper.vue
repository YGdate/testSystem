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
        <!-- 已选试题 -->
        <autoChooseTest @nextStep="step($event)" ref="autoChooseTest" v-show="ischeck"></autoChooseTest>
         <InfoSet @forceUpdate="forceUpdate" v-show="!ischeck"></InfoSet>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import autoChooseTest from './element/autoChooseTest'
import InfoSet from './element/InfoSet'
  export default {
    components:{
      autoChooseTest,
       InfoSet
    },
    data() {
      return {
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
      step(){
        this.ischeck = false
      },
      ischecked(num) {
       
          if (num == 0) this.ischeck = true
          else {
            if(this.$refs.autoChooseTest.nextStep())
              this.ischeck = false
            
          }
        
        
      },
     
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
        background-color: #118aff;
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
    .autoChooseTest{
      width: 100%;
      
    }

   
  }
</style>