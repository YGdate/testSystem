<template>
 <div class="chengjicon">
     <p class="c1">考试报告</p>
    <div class="c2"></div>
    <div class="cheng">
        <div class="chengtop">语文</div>
        <p class="endor">考试结束</p>
        <p>这是什么鬼</p>
        <p>这又是什么鬼</p>
        <div class="bbox">
           <span class="chakan" @click="gobao()">查看成绩报告</span>
           <span class="download">下载成绩报告</span>
        </div>
    </div>


    <!-- 定位 -->
    <div class="back" @click="$router.go(-1)">
      返回
    </div>
 </div>
</template>



<script>
  export default {
methods:{
    gobao:function(){
        this.$router.push("chengjibaobiao")
    }
}
  }
</script>
<style lang="less" scoped>
*{
    box-sizing: border-box;
}
.chengjicon{
    width: 1000px;
    min-height: 500px;
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
.cheng{
    width: 100%;
    height: 200px;
    border-radius: 7px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
}
.cheng p{
    padding-left: 20px;
    color: rgb(163,163,163);
}
.endor{
    color: rgb(67,90,141) !important;
    font-weight: 600;
}
.chengtop{
    height: 30px;
    background: rgb(123,178,247);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    line-height: 30px;
    padding-left: 20px;
    color: white;
    font-weight: 600;
}
.bbox span{
    float: right;
    color: rgb(54,79,148);
    font-weight: 600;
    margin-left: 15px;
    margin-right: 20px;
    cursor: pointer;
}



// 定位
.back{
    height: 40px;
  width: 115px;
  background: rgb(51,77,148);
  color: white;
  position: fixed;
  top: 200px;
  left: 0;
  text-align: center;
  line-height: 40px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
}
</style>