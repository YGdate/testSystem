<template>
  <div class="main">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </div>
</template>
<script>
  import Header from './publisher/element/header'

  export default {
    
    methods: {
    },
    components: {
      Header
    },
    created(){
    }
  }
</script>

<style lang="less" scoped>
  // 蓝:# 24c9e3  黄：#f4c521  border-bottom: 3px solid #f4c521;
  .el-header {
    color: #fff;
    text-align: center;
    height: 60px;
    background-color: #24c9e3;
    z-index: 10;
    box-shadow: 0 0 15px rgb(97, 97, 97);

    .header {
      height: 100%;
      width: 100%;
    }
  }

  .main {
    height: 100%;
    width: 100%;
  }

  .el-main {
    min-height: 500px;

    color: #333;
  }

  .el-container {
    height: 100%;
    width: 100%;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  // 标题
</style>