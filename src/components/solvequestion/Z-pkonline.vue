<template>
<div class="bbooxx">
  <!-- 定位 -->
    <div class="backs" @click="$router.go(-1)">
      返回
    </div>



  <div class="cover">
    <div class="srool">
      <p>正在加载中.......</p>
      <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
    </div>
  </div>
   <div class="pkcon">
    <p class="c1">在线PK</p>
    <div class="c2"></div>
    <div class="pk-top">PK须知</div>
    <div class="pk-topcon">
        <p>1.先选择PK的组织，再选择PK的学科和科目。</p>
        <p>2.PK方式根据选择内容随机出题，每轮10道题两人同时在8分钟内作答。都完成后公布结果。</p>
        <p>3.结果分为胜利，失败，平局。获得不同数量的积分。</p>
    </div>
    <div class="selectpk">
         <el-select v-model="value" placeholder="请选择" size="50px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <div class="pkinformation">
      <div class="intop">
          <p>一年级</p>
          <img src="../../assets/img/z-moren.jpg" alt="">
          <p>当前pk人数<span>45</span>人</p>
      </div>
      <div class="inbottom">
           <el-button type="primary" @click="pking()">开始匹配</el-button>
      </div>
  </div>
    </div>
 </div>
</div>

</template>



<script>
  export default {
data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    methods:{
      pking:function(){
         this.$router.push("pking")
      }
    }
  }
</script>
<style lang="less" scoped>
.backs{
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
.srool{
      	height: 200px;
				width: 400px;
				border-radius: 5px;
				position: absolute;
				left: 50%;
				top: 50%;
        transform: translate(-50%,-50%);
        opacity: 1;

}
.srool p{
  text-align: center;
  color: white;
  font-weight: 600;
}
.cover{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: yellow;
  z-index: 100;
  background: gray;
  opacity: .7;
  display: none;
}
.bbooxx{
 width: 100%;
 height: 100%;
  position: fixed;
  top: 0;
}
.pkcon{
    width: 1000px;
    min-height: 200px;
    margin: 0 auto;
    margin-top: 96px;
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
.pk-top{
height: 40px;
width: 100%;
background: rgb(108,180,246);
color:white;
font-weight: 600;
padding-left: 20px;
line-height: 40px;
box-sizing: border-box;
}
.pk-topcon{
width: 100%;
min-height: 200px;
background: rgb(245,245,245);
color: rgb(71,94,157);
box-sizing: border-box;
padding:20px
}
.pk-topcon p{
    font-weight: 600;
}
.selectpk{
    width: 700px;
    min-height: 300px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 40px;
}
.pkinformation{
    height: 260px;
    width: 300px;
    float: right;
}
.intop{
    width: 300px;
    height: 200px;
    background: rgb(108,180,246);
    box-sizing: border-box;
    text-align: center;
    padding-top: 25px;
    color: white;
    border-radius: 5px;
}
.intop img{
    height: 30px;
    width: 30px;
    border-radius: 50%;
}
.intop p{
    font-weight: 600;
}
.inbottom{
 width: 300px;
    height: 60px;
    text-align: center;
    box-sizing: border-box;
   padding-top: 10px;
}
</style>