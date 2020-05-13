<template>
  <div class="main">
    <el-row class="content">
      <el-col :span="4">
        <sidebar name='试卷选择'></sidebar>
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
        paperId:0
      }
    },
    methods: {
      paperInfo(id){
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