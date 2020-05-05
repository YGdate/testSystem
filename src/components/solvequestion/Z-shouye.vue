<template>
  <div class="content">
    <p class="c1">学科选择</p>
    <div class="c2"></div>
    <div class="coco">
      <ul class="subs">
        <li class="sub" @click="test()">
          <p>语文</p>
          <p>Chinese</p>
          <div></div>
        </li>

      </ul>
    </div>
    <div class="tip">
      <p>tips:</p>
      <p>选择学科并点击进入，进入对应的学科进行评测</p>
    </div>
  </div>
</template>



<script>
  export default {
    methods:{
      test:function(){
        this.$router.push("testpage")
      }
    }

  }
</script>
<style lang="less" scoped>
.content{
 width:100%;
  float: right;
  margin-top: 40px;
  position: relative;
}
.coco{
  width: 1000px;
  min-height:440px ;
  margin: 0 auto;
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
.tip{
  height: 440px;
  width: 254px;
  border: 2px solid rgb(255,165,0);
  border-right: none;
  position: absolute;
  right: 0;
  top: 127px;
  padding: 10px;
 
}
.tip p{
  text-align: center;
}
.tip p:nth-child(1){
  color: rgb(191,191,191);
  font-weight: 600;
  margin-top: 100px;
}
.tip p:nth-child(2){
color: rgb(115,115,115);
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
  width: 330px;
  height: 220px;
  box-shadow: 0 0 7px 0;
  background-color: rgb(158,201,229);
  margin-left: 3px;
  margin-bottom: 5px;
   cursor: pointer;
   border-radius: 5px;
}
.sub p{
  text-align: center;
  color: white;
}
.sub p:nth-child(1){
  font-size: 30px;
  font-weight: 600;
}
.sub div{
  width: 60px;
  height: 6px;
  background: white;
  margin: 0 auto;
  position: relative;
  top: -26px;
  opacity: 0.6;
}
</style>