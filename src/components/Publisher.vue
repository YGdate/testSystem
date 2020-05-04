<template>
  <div class="main">
    <el-container>
      <el-header>
        <Header @skipPage="skip($event)"></Header>
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
    components: {
      Header
    },
    methods: {
      index() {
        this.$router.push('/publisher/promulgator')
      },
      skip(index) {
        
        switch (index) {
          case 1:
            this.$router.push('/publisher/promulgator')
            break;
          case 2:
            this.$router.push('/publisher/testScore')
            break;
          case 3:
            this.$router.push('/publisher/testPaper')
            break;
          case 4:
            this.$router.push('/publisher/autoPaper')
            break;
          case 5:
            this.$router.push('/publisher/paperManagement')
            break;
          case 6:
            this.$router.push('/publisher/examManagement')
            break;
          case 7:
            this.$router.push('/publisher/reportStatistics')
            break;
          default:
            break;
        }
      }
    },
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
    box-shadow: 0 0 20px rgb(97, 97, 97);

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