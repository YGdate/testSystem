<template>
  <div class="main">
    
    <el-row class="content">
      <el-col :span="4">
        <sidebar 
      name='试卷选择'
      ></sidebar>
      </el-col>
      <el-col class="content-center" :span="16">
        <!-- 报考管理 展示 -->
        <examManageshow></examManageshow>
        <!-- 报考管理 详情展示 -->
        <!-- <examManageInfo></examManageInfo> -->
      </el-col>
    </el-row>
  </div>
</template>


<script>
import sidebar from './element/sidebar'
import examManageshow from './element/examManageshow'
// import examManageInfo from './element/examManageInfo'

  export default {
    components:{
      sidebar,
      examManageshow,
      // examManageInfo
    },
    data() {
      return {
        
      }
    },
    mounted() {
     

    },
    methods: {
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