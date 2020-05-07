<template>
  <div class="main">
    <el-row class="content">
      <el-col :span="4">
        <sidebar name='返回'></sidebar>
      </el-col>
      <el-col class="content-center" :span="16">
        <paperContent></paperContent>
        <!-- <publishPaper></publishPaper> -->
      </el-col>

    </el-row>


  </div>
</template>



<script>
  import paperContent from './element/paperContent'
  import publishPaper from './element/publishPaper'
  import sidebar from './element/sidebar'
  
  export default {
    components: {
      sidebar,
      paperContent,
      publishPaper

    },
    data() {
      return {
       
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