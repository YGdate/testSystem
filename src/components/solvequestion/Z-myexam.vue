<template>
 <div class="chengjicon">
     <p class="c1">我的考试</p>
    <div class="c2"></div>
    <el-dropdown>
  <span class="el-dropdown-link">
    提交状态 <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    <div class="cheng">
        <div class="chengtop">语文</div>
        <p class="endor">考试进行中

            <span class="examspan">20人已经提交</span>
            <span  class="examspan">20人未提交</span>
        </p>
        <p>这是什么鬼</p>
        <p>这又是什么鬼</p>
        <div class="bbox">
           <span class="chakan">已提交</span>
           <span class="download">去考试</span>
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

// 下拉框css
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    position: relative;
    top:-15px;
    font-weight: 600;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }




  .examspan{
      float: right;
      margin-right: 15px;
  }
</style>