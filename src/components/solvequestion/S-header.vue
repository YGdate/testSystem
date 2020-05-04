<template>
  <div class="header">
    <div class="content">
      <div class="left">
        在线考试系统
      </div>
      <div class="right">
        <img src="../../assets/img/z-moren.jpg" alt="">
        <span>默认用户名</span>
      </div>
    </div>
  </div>
</template>



<script>
  export default {

  }
</script>
<style lang="less" scoped>
.header{
  height: 60px;
  min-width: 1000px;
  width: 100%;
  background: rgb(51,77,148);
}
.content{
  width: 60%;
  height: 60px;
  margin: 0 auto;
}
.left,.right{
  float: left;
  height: 100%;
  line-height: 60px;
}
.left{
  width: 70%;
  font-size: 24px;
  font-weight: 600;
  color: white;
  font-family:"华文行楷" ;
}
.right{
  width: 30%;
  line-height: 60px;
}
.right img{
  height: 40px;
  width: 40px;
  border-radius: 50px;
  margin-top: 10px;
  margin-right: 14px;
}
.right span{
  position: relative;
  bottom: 13px;
  margin-bottom: 10px;
  color: white;
}
</style>