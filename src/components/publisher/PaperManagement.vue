<template>
  <div class="main">
    <el-row class="content">
     <el-col class="content-left" :span="4">
        <el-button style=" background-color: #24c9e3; color:#fff"  @click="subjectChoose" icon="el-icon-back">学课选择</el-button>
      </el-col>
      <el-col class="content-center" :span="16">
        <paperContent></paperContent>
      </el-col>

    </el-row>


  </div>
</template>



<script>
  import paperContent from './element/paperContent'
  
  export default {
    components: {
      paperContent,
    },
    data() {
      return {
       
      }
    },
    methods:{
            subjectChoose(){
        this.$router.push('/solve/zhomepage')
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
    width: 100%;
    height: 350px;
    margin-top: 20px;
  }
</style>