<template>
  <div class="header">
    <div class="content">
      <div class="left">
        在线考试系统
      </div>
      <div class="right">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <div class="name" style="margin-left:10px;">lisa</div>
      </div>
    </div>
  </div>
</template>



<script>
  export default {

  }
</script>
<style lang="less" scoped>
  .header {
    height: 60px;
    min-width: 1000px;
    width: 100%;
    background: #24c9e3;
    box-shadow: 0 0 15px rgb(97, 97, 97);
  }

  .content {
    width: 100%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      margin-left: 20px;
      font-size: 24px;
      letter-spacing: 3px;
      color: #fff;
      font-weight: 600;
      display: flex;
      justify-content: flex-start;
      align-items: center;

    }

    .right {
      margin-right: 20px;
      display: flex;

      justify-content: flex-end;
      align-items: center;
      font-size: 18px;
      font-weight: 400;
    }
  }
</style>