<template>
<div class="bbooxx">
    <div class="cover" :class="{'guan':sureclose}">
      <div class="winor">
          <span class="qiutwin" @click="close()">X</span>
          <div class="win">
              <p class="ti">胜利</p>
                            <div class="im"><img src="../../assets/img/z-moren.jpg" alt=""></div>
              <p class="who">张三</p>
              <p>正确:<span>8</span>题</p>
              <p>错误:<span>2</span>题</p>
              <p>正确率:<span>30</span>%</p>
              <p>用时5分99秒</p>
          </div>
          <div class="lose">
              <p class="ti">失败</p>
                <p></p>
              <p class="who">张三</p>
              <p>正确:<span>8</span>题</p>
              <p>错误:<span>2</span>题</p>
              <p>正确率:<span>30</span>%</p>
              <p>用时5分99秒</p>
          </div>
      </div>

        </div>
    <div class="ingcon">
    <div class="conleft">
        <p class="lefttop"><span>在线考试</span> <span>剩余时间:<span>30分0秒</span></span>
        <el-button type="primary" class="quit">放弃pk</el-button>
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
    </div>
    <div class="conright">
        <p>题目数量</p>
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
    }
}
  }
</script>
<style lang="less" scoped>
.guan{
    display: none;
}
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
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
}
.conright{
    width: 380px;
    min-height: 400px;
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
.cover{
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  background: white;
}
.bbooxx{
 width: 100%;
 height: 100%;
  position: fixed;
  top: 0;
}
.winor{
    width: 800px;
    min-height: 700px;
    margin: 0 auto;
    margin-top: 20px;
    
}
.qiutwin{
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: 600;
    cursor: pointer;
}
.win,.lose{
    width: 800px;
    height: 300px;
    background: white;
    border-radius: 7px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
    text-align: center;
    padding-top: 2px;
}
.win{
    height: 370px;
}
.win,.lose p{
color: rgb(60,85,153);
}
.win{
    margin-bottom: 20px;
}
.ti{
    color: rgb(51,77,148);
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    font-family: "华文行楷"

    
}
.who{
    font-weight: 600;
}
.im{
    text-align: center;
}
.im img{
    height: 40px;
    width: 40px;
}
</style>