<template>
  <div class="login-container">

    <el-row class="title">
      成都东软学院在线考试系统
    </el-row>
    <el-row class="content">
      <el-col :span="12">
        <img src="../assets/img/沙漏.png" alt="">
      </el-col>
      <el-col :span="12">
        <el-row class="choose">
          修改密码
        </el-row>
        <el-row class="comp">
          <alertPassword></alertPassword>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  import alertPassword from './publisher/element/alertPassword'
  export default {
    components: {
      alertPassword
    },
    data(){
      return{
        islogin:true
      }
    },
    methods:{
 
    }


  }
</script>

<style lang="less" scoped>
  .login-container {
    min-height: 800px !important;
    background: url("../assets/img/loginBG.png") no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    min-height: 500px;
  }

  .title {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-family: STHeiti SC;
    font-weight: 500;
    color: rgba(249, 249, 249, 1);
  }

  .content {
    width: 55%;
    height: 460px;
    margin: 0 auto;

    >.el-col:nth-of-type(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 460px;
    }

    >.el-col:nth-of-type(2) {
      box-sizing: border-box;
      padding: 0 60px 0 0;
    }

    img {
      width: 60%;
    }

    .choose {
      margin: auto;
      width: 60%;
      height: 40px;
      margin-top: 40px;
      margin-bottom: 60px;
      display: flex;
      justify-content: space-around;
      

      .el-col {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }

      .lineStyle {
        border-bottom: 2px solid rgba(235, 199, 73, 1);
      }
    }
    .comp{
      margin-right: 50px;
    }
  }
</style>