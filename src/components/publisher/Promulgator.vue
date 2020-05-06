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
              <div>
                <img src="../../assets/img/icon/自动组卷.png" alt="">
              <div>
                自动组卷
              </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
               <div>
                <img src="../../assets/img/icon/手动组卷.png" alt="">
              <div>
                手动组卷
              </div>
              </div></el-card>
          </el-col>
          <el-col :span="8">
            
            <el-card class="box-card">
               <div>
                <img src="../../assets/img/icon/试卷管理.png" alt="">
              <div>
                试卷管理
              </div>
              </div></el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
               <div>
                <img src="../../assets/img/icon/试卷评阅.png" alt="">
              <div>
                试卷阅评
              </div>
              </div></el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
               <div>
                <img src="../../assets/img/icon/报考管理.png" alt="">
              <div>
                报考管理
              </div>
              </div></el-card>
          </el-col>
          <el-col :span="8">
             <el-card class="box-card">
               <div>
                <img src="../../assets/img/icon/报考统计.png" alt="">
              <div>
                报考统计
              </div>
              </div></el-card>
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
        background-color: #24c9e3;

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
          margin: 0 auto;
          width: 65%;
        }
        div{
          width: 100%;
          text-align: center;
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