<template>
  <div class="main">
    <el-row class="content">
      <el-col :span="4">
        <sidebar  @skipBtn="skipBtn($event)"
      :name='leftSkip'
      ></sidebar>
      </el-col>
      <el-col class="content-center" :span="16">
        <testPaper v-if="isshow" @paperInfo="paperInfo"></testPaper>
        <testSubmit v-else-if="!isshow" :paperID='paperID'></testSubmit>
        <!-- <gradeInfo></gradeInfo> -->
   
        
      </el-col>
    </el-row>
  </div>
</template>



<script>
import testPaper from './element/testPaper'
import sidebar from './element/sidebar'
import testSubmit from './element/testSubmit'
// import gradeInfo from './element/gradeInfo'

  export default {
    components:{
      testPaper,
      sidebar,
      // gradeInfo,

      testSubmit
    },
    data(){
      return{
        isshow:true,
        paperID:0,
        leftSkip:'测评管理'
      }
      },
      methods:{
        paperInfo(id){
          this.isshow = false
          this.paperID = id,
          this.leftSkip = '返回'
        },
        skipBtn(text){
          if(text=='返回'){
             this.isshow = true
             this.leftSkip = '测评管理'
          }
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