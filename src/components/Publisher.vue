<template>
  <div class="main">
    <el-container>
      <el-header>
        <div class="nav">
        <div class="title">在线考试系统</div>
        <div class="right">
            <img class="autor" src="" alt="">
            <div class="name">lisa</div>
        </div>
    </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </div>
</template>
<script>
  export default {
    components: {},
    methods: {},
  }
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 80px !important;
     background-color: blue;
     z-index: 10;
     box-shadow: 0 0 20px rgb(97, 97, 97);
  }

  .main {
    height: 100%;
    width: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;

  }

  .el-container {
    height: 100%;
    width: 100%;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  // 标题

.nav{
     height: 100%;
     width: 100%;
     display: flex;
     justify-content: space-around;
     align-items: center;
      
     font-weight: 500;
    
     .title{
        font-size: 22px;
        letter-spacing: 5px;
         color: #fff;
     }
     .right{
        font-size: 18px;
         display: flex;
         .autor{
             height: 20px;
             width: 20px;
             border-radius: 50%;
             margin-right: 5px;
         }
         .name{
             color:#fff;
         }
     }
 }
</style>