<template>
  <div class="main">

    <el-row class="content">
      <el-col class="content-left" :span="4">
        <el-button icon="el-icon-back">学课选择</el-button>
      </el-col>
      <el-col class="content-center" :span="16">
        <el-row :gutter="80">
          <el-col :span="8">
            <el-card class="box-card">
              <img src="../../assets/img/icon/自动组卷.png" alt="">
              <div>
                自动组卷
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">手动组卷</el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">试卷管理</el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">试卷阅评</el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">报考管理</el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">报告统计</el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="content-right" :span="4">
        <el-button>
          进入题库 <i class="el-icon-arrow-right el-icon-right"></i></el-button>
      </el-col>
    </el-row>
  </div>
</template>



<script>
  export default {

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
    margin-top: 40px;
    width: 100%;
    height: 350px;

    .content-left {

      .el-button {
        color: #fff;
        background-color: #118aff;

      }
    }

    .content-center {
      .el-card {
        width: 100%;
        height: 150px;
        color: #333;
        font-size: 25px;
        font-weight: 600px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: center;
        margin-bottom: 20px;
        height: 200px;
        cursor: pointer;
        img{
          width: 50%;
        }
        span{

        }
      }
    }

    .content-right {
      text-align: right;

      .el-button {
        color: #fff;
        background-color: #f4c521;

      }
    }
  }
</style>