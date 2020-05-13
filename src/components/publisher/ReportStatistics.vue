<template>
  <div class="main">
    <el-row class="content">
      <el-col :span="4">
        <sidebar @skipBtn="skipBtn" :name='leftName'></sidebar>
      </el-col>
      <el-col class="content-center" :span="16">
        <testPaper v-if="isshow" @paperInfo="paperInfo"></testPaper>
        <reportDetails :paperId="paperId" v-if="!isshow"></reportDetails>
      </el-col>

    </el-row>
  </div>
</template>



<script>
  import testPaper from './element/testPaper'
  import sidebar from './element/sidebar'
  import reportDetails from './element/reportDetails'
  export default {
    components: {
      testPaper,
      sidebar,
      reportDetails
    },
    data() {
      return {
        isshow:true,
        paperId:0,
        leftName:'报考管理'
      }
    },
    methods: {
      skipBtn(){
        this.isshow = true
      },
      paperInfo(id){
        this.leftName="返回"
        this.isshow = false
        this.paperId = id
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