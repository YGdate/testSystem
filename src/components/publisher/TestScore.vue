<template>
  <div class="main">
    <el-row class="content">
      <el-col :span="4">
        <sidebar 
      name='测评管理'
      ></sidebar>
      </el-col>
      <el-col class="content-center" :span="16">
        <!-- <testPaper></testPaper> -->
        <!-- <testSubmit></testSubmit> -->
        <!-- <gradeInfo></gradeInfo> -->
        <markPaper></markPaper>
        
      </el-col>
      
    </el-row>
  </div>
</template>



<script>
// import testPaper from './element/testPaper'
import sidebar from './element/sidebar'
// import testSubmit from './element/testSubmit'
// import gradeInfo from './element/gradeInfo'
import markPaper from './element/markPaper'
  export default {
    components:{
      // testPaper,
      sidebar,
      // gradeInfo,
      markPaper
      // testSubmit
    },
    data(){
      return{
        search:'',
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
        value: ''
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
    width: 100%;
    height: 350px;
    margin-top: 20px; 
  }
</style>