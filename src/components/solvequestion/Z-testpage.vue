<template>
    <div class="testmain">
      <p class="c1">英语评测</p>
    <div class="c2"></div>
    <ul class="subs">
      <li class="sub" @click="pkonline()">
        <img src="../../assets/img/pkonline.png" alt="">
        在线pk</li>
      <li class="sub" @click="myexam()">
         <img src="../../assets/img/myping.png" alt="">
        我的评测</li>
      <li class="sub" @click="evaluation()">
         <img src="../../assets/img/pingceonline.png" alt="">
        在线评测</li>
      <li class="sub" @click="chengjibaogao()">
         <img src="../../assets/img/cjbg.png" alt="">
        成绩报告</li>
    </ul>


    <!-- 下面是fixed定位元素 -->
    <div class="selectsub" @click="$router.push('zhomepage')">
      <-学科选择
    </div>
    <div class="tiku">进入题库-></div>
    <div class="pingce">评测管理-></div>

    <div class="tip">
          <p>tips:</p>
           <p>这里面是我的善意的提醒呢</p>
    </div>
    </div> 
    
</template>



<script>
  export default {
methods:{
  pkonline:function(){
     this.$router.push("pkonline")
  },
  evaluation:function(){
    
     this.$router.push("evaluation")
  },
  myexam:function(){
     this.$router.push("myexam")
  },
  chengjibaogao:function(){
    this.$router.push("chengji")
  }
}
  }
</script>
<style lang="less" scoped>
.testmain{
  width: 1200px;
  min-height: 200px;
  margin: 0 auto;
   margin-top: 40px;
}
.c1{
  font-size: 30px;
  text-align: center;
  font-weight: 600;

}
.c2{
  height: 12px;
  width: 120px;
  background: rgb(217,169,56);
  margin: 0 auto;
  position: relative;
  top: -42px;
 opacity: .7;
}
.subs{
  width: 100%;
  display: flex;
   flex-flow: row wrap;
 justify-content: left;
  list-style: none;
  padding: 0;
}
.sub{
  width: 236px;
  height: 177px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
  border-radius: 5px;
  margin-left: 45px;
  margin-bottom: 5px;
   cursor: pointer;
   text-align: center;
   line-height: 177px;
   font-size: 28px;
   color: rgb(143,141,141);
   font-weight: 600;
}
.sub img{
  width: 60px;
  height: 60px;
  position: relative;
  top:17px;
}


// 固定定位元素
.selectsub{
  height: 40px;
  width: 115px;
  background: #24c9e3  ;
  color: white;
  position: fixed;
  top: 200px;
  left: 0;
  text-align: center;
  line-height: 40px;
  font-weight: 600;
  cursor: pointer;
}
.tiku,.pingce{
  height: 40px;
  width: 115px;
  background: #f4c521;
  color: white;
  position: fixed;
  right: 0;
  text-align: center;
  line-height: 40px;
  font-weight: 600;
  cursor: pointer;
}
.tiku{
  top: 200px;
}
.pingce{
  top:250px
}
.tip{
  width: 200px;
  height: 400px;
  position: fixed;
  top: 300px;
  right: 0;
 border: 2px solid orange;
 border-right: none;
  text-align: center;
  padding: 10px;
  color: rgb(183,183,183);
  font-weight: 600;
}

</style>