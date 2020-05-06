<template>


    <div class="ingcon">
        <div class="rile">
               <div class="conleft">
        <p class="lefttop"><span>在线考试</span> <span>剩余时间:<span>30分0秒</span></span>
        <el-button type="primary" class="quit">放弃考试</el-button>
        </p>
        <p class="classqus">
            <span>一年级</span><span>| 单选题 |</span><span>| 4分 |</span>
        </p>
        <div class="quscon">
            <div class="quesleft">
                <p>1.这里是水水水水水水水水水水水水水水水水水水水</p>
        <ul>
            <li>1.毛衣</li>
            <li>2.疲于</li>
            <li>3.牛皮</li>
            <li>4.真的厉害</li>
        </ul>
            </div>
            <div class="quesright">
                <img src="../../assets/img/z-moren.jpg" alt="">
            </div>
        </div>
        <div class="change">
            <el-row class="fu">
  <el-button type="primary">上一题</el-button> <el-button type="primary">下一题</el-button>
   <el-button type="primary" @click="examover()">提交试卷</el-button>
</el-row>
        </div>
    </div>
    <div class="conright">
        <p>题 数</p>
    <ul>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
                <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
    </ul>
    </div>
        </div>
 
    <div class="bianji">
        <div class="bianleft">
            <p>选项编辑</p>
            <ul class="xuan">
                <li>选项<span>1</span></li>
                <li>(1)<span>选啊老妹啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</span></li>
                <li>(1)<span>选啊老妹</span></li>
                <li>(1)<span>选啊老妹</span></li>
                <li>(1)<span>选啊老妹</span></li>
            </ul>
        </div>
        <div class="bianright">
            <p>答案编辑</p>
        </div>
    </div>
 </div>

    
 
</template>



<script>
  export default {
       data() {
      return {
        sureclose:false
      }
    },
methods:{
    close:function(){
        this.sureclose = true;
    },
    examover:function(){
            this.$router.push("ziexamover")
        }
}
  }
</script>
<style lang="less" scoped>

*{
    box-sizing: border-box;
}
.rile{
    min-height: 500px;
}
.ingcon{
    width: 1200px;
    min-height: 400px;
    margin: 0 auto;
    margin-top: 100px;
    z-index: -1;
}
.conleft{
    min-height: 400px;
    width: 800px;
    background: white;
    float: left;
    padding: 10px;
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
}
.fu{
    margin-left: 240px;
}
.conright{
    width: 380px;
    min-height: 449px;
    padding: 10px;
    background: rgb(67,164,247);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
    float: right;
    text-align: center;
}
.lefttop span:nth-child(1){
font-weight: 600;
}
.quit{
    position: absolute;
    top: 10px;
    right: 10px;
}
.lefttop span:nth-child(2){
 position: absolute;
 top: 20px;
 right: 120px;
}
.classqus span{
    color: rgb(153,164,196);
}
.classqus span:nth-child(1){
    font-weight: 600;
    margin-right: 20px;
}
.quesleft{
    width: 70%;
    float: left;
    min-height: 300px;
    padding: 10px;
}
.quesleft ul{
    width: 100%;
    padding: 0;
    display: flex;
    list-style: none;
     justify-content: space-around;
     flex-flow: row wrap;
}
.quesleft ul li{
    width: 200px;
    min-height: 40px;
}
.quesright{
    width: 30%;
    float: left;
    min-height: 300px;
    padding: 10px;
    text-align: center;
    color: rgb(163,163,163);
}
.quesright img{
    height: 140px;
    width: 140px;
}
.conright ul{
    width: 100%;
    list-style: none;
    padding: 0;
     display: flex;
    list-style: none;
     justify-content: start;
     flex-flow: row wrap;
}.conright ul li{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: white;
    text-align: center;
    line-height: 40px;
    margin-right: 5px;
    margin-bottom: 5px;
}

.conright p{
    color: white;
    font-weight: 600;
}




// 编辑部分css
.bianji{
    width: 100%;
    min-height: 400px;
   padding-top: 20px;
   margin-bottom: 66px;
}
.bianleft{
 min-height: 400px;
    width: 800px;
    background: white;
    float: left;
    padding: 10px;
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
    padding: 10px;
    font-weight: 600;
}
.bianright{
 width: 380px;
    min-height: 400px;
    padding: 10px;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
    float: right;
    padding: 10px;
     font-weight: 600;
}

.xuan{
    width: 100%;
     display: flex;
  flex-flow: row wrap;
  justify-content: start;
  
  padding: 0;
  margin: 0;
  list-style: none;
  border-bottom: 1px solid lightblue;
  padding-bottom: 5px;
  box-sizing: content-box;
}
.xuan li{
    min-width: 72px;
    height: 20px;
    text-align: center;
    padding: 2px 3px;
    line-height: 17px;
    margin-left: 5px;
    color: grey;
}
.xuan li:nth-child(1){
    background: rgb(146,174,249);
    color: white;
}
</style>