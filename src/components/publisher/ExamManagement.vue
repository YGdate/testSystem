<template>
  <div class="main">
    
    <el-row class="content">
      <el-col class="content-left" :span="4">
        <el-button style=" background-color: #24c9e3; color:#fff"  @click="subjectChoose" icon="el-icon-back">{{title}}</el-button>
      </el-col>
      <el-col class="content-center" :span="16">
        <!-- 报考管理 展示 -->
        <examManageshow v-show="isshow" @handleInfo="handleInfo"></examManageshow>
        <!-- 报考管理 详情展示 -->
        <examManageInfo ref="examManageInfo" v-show="!isshow"></examManageInfo>
      </el-col>
    </el-row>
  </div>
</template>


<script>

import examManageshow from './element/examManageshow'
import examManageInfo from './element/examManageInfo'

  export default {
    components:{
      
      examManageshow,
      examManageInfo
    },
    data() {
      return {
        isshow:true,
        title:'学课选择'
      }
    },
    mounted() {
     

    },
    methods: {
      subjectChoose(){
        if( this.title == '返回'){
           this.isshow = true
        }else{
          this.$router.push('/solve/zhomepage')
        }
        
      },
      handleInfo(id){
        this.isshow = false
        this.title = '返回'
        this.$refs.examManageInfo.getdata(id)
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

  }
</style>