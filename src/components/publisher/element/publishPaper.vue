<template>
  <div>
    <el-row class="main">
    <el-row class="public">
      <el-card >
        <img src="../../../assets/img/公开发布.png" alt="">
        <div class="title">公开发布</div>
      </el-card>
      <div style="margin-top:10px">在报考管理中进行审核</div>
    </el-row>
    <el-row class="public">
      <el-card >
        <img src="../../../assets/img/验证码发布.png" alt="">
        <div class="title">验证码发布</div>
        <div>JASDJLL</div>
        <div>复制验证码</div>
        <div>刷新验证码</div>
      </el-card>
      <div style="margin-top:10px">获取验证码可直接考试</div>
    </el-row>

   
  </el-row>
   <el-row style="margin-top:80px;text-align:center;">
       <el-button size="small" type="primary" plain>发 布</el-button>
    </el-row>
  </div>
</template>



<script>
  export default {


  }
</script>
<style lang="less" scoped>
  .main {
    display: flex;
    justify-content: space-around;
    margin-top: 100px;

    .public {
      background: #e7e7e7;
      height: 300px;
      border-radius: 5px;

      .el-card {
        height: 86%;
        width: 100%;
        img {
          margin-top: 10px;
          width: 60%;
        }
        .title {
          margin-top: 10px;
          background: linear-gradient(to right, #24c9e3, blue);
          -webkit-background-clip: text;
          color: transparent;
          font-size: 22px;
        }
        div:nth-of-type(2){
          color: #999;
          font-size: 14px;
        }
        div:nth-of-type(3){
          
          color: #333;
          margin:  0 auto;
          font-size: 14px;
          border-radius: 50px;
          width: 100px;
          height: 30px;
          margin-top: 5px;
          background: #24c9e3;
           cursor: pointer;
          box-sizing: border-box;
          padding: 5px;
          color: #fff;
        }
        div:nth-of-type(4){
           color: #333;
          margin:  0 auto;
          font-size: 14px;
          border-radius: 50px;
          width: 100px;
          margin-top: 5px;
          cursor: pointer;
          height: 30px;
          background: #f4c521;
          box-sizing: border-box;
          padding: 5px;
          color: #fff;
        }
      }

      >div {
        text-align: center;
        font-size: 16px;
        color: #333;
      }

    }
  }
</style>