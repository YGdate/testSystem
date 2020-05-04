<template>


    <div class="ingcon">
    <div class="conleft">
        <p class="lefttop"><span>在线考试</span> <span>剩余时间:<span>30分0秒</span></span>
        <el-button type="primary" class="quit">放弃考试</el-button>
        </p>
        <p class="classqus">
            <span>一年级</span><span>| 单选题 |</span>
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
        <p class="jiexi">正确答案<span>D</span></p>
        <p class="jiexi">解析:<span>这里是解析┗|｀O′|┛ 嗷~~</span></p>
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
    box-shadow: 0 0 8px 0;
}
.fu{
    margin-left: 240px;
}
.conright{
    width: 380px;
    min-height: 400px;
    padding: 10px;
    background: rgb(67,164,247);
    box-shadow: 0 0 8px 0;
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
.cover{
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  background: white;
}
.conright p{
    color: white;
    font-weight: 600;
}

.jiexi{
    color: rgb(185,191,210);
    font-weight: 600;
}
</style>