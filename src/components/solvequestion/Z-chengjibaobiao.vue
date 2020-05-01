<template>
  <div class="ba0biaoon">
    <!-- 这个是返回 -->
     <div class="back" @click="$router.push('chengji')">
      返 回
    </div>
    <p>
       <el-button type="primary">下载成绩报表</el-button>
    </p>
    <div class="tcon">
      <p class="ac">2019-2020三年级上册科学考试</p>
       <p class="ac">
         <span class="wai">科目:<span class="nei">英语</span></span>
          <span class="wai">ID:<span class="nei">123456</span></span>
       </p>
       <ul class="oul">
      <li>
        <span class="zh zco">考生</span><span class="infor">啊啊啊</span>
      </li>
       <li>
         <span class="zh zco">总分</span><span class="infor">999</span>
       </li>
       <li>
         <span class="zh zco">成绩</span><span class="infor">666</span>
       </li>
       <li>
         <span class="zh zco">绝对位置排行</span><span class="infor">30%</span></li>
         </ul>

         <p class="gainnum">
           <span class="zh">试题得分</span> <span class="zhunum">主观题:999分</span>
           <span class="kenum">客观题:666分</span>
         </p>
         <div class="knowledgenum">
           <div class="kleft">
             <p class="l1">
               <span class="zh">知识点得分</span>
               <span class="lspan">动词:100分</span><span  class="lspan">动词:100分</span>
             </p>
              <p class="l2">
               <span class="lspan">动词:100分</span><span  class="lspan">动词:100分</span>
             </p>
           </div>
           <div class="kright" id="bingone"></div>
         </div>
         <p><span class="zh">知识点得分率</span></p>
         <p>
           <ul class="fli">
             <li><p>介词</p>
             <div id="b1" class="bdiv">
               <div>
                 80%
               </div>
             </div>
             </li>
             <li><p>介词</p>
             <div id="idb2"  class="bdiv">
               <div> 80%</div>
             </div>
             </li>
             <li><p>介词</p>
             <div id="b3"  class="bdiv">
               <div> 80%</div>
             </div>
             </li>
             <li><p>介词</p>
             <div id="b4"  class="bdiv">
               <div> 80%</div>
             </div>
             </li>
           </ul>
         </p>
    </div>
     <div class="tcon">
                <div class="knowledgenum">
           <div class="kleft">
             <p class="l1">
               <span class="zh">知识点得分</span>
               <span class="lspan">动词:100分</span><span  class="lspan">动词:100分</span>
             </p>
              <p class="l2">
               <span class="lspan">动词:100分</span><span  class="lspan">动词:100分</span>
             </p>
           </div>
           <div class="kright" id="bingtwo"></div>
         </div>
         <p><span class="zh">知识点得分率</span></p>
          <p>
           <ul class="fli">
             <li><p>介词</p>
             <div id="b5" class="bdiv">
               <div>
                 80%
               </div>
             </div>
             </li>
             <li><p>介词</p>
             <div id="b6"  class="bdiv">
               <div> 80%</div>
             </div>
             </li>
             <li><p>介词</p>
             <div id="b7"  class="bdiv">
               <div> 80%</div>
             </div>
             </li>
             <li><p>介词</p>
             <div id="b8"  class="bdiv">
               <div> 80%</div>
             </div>
             </li>
           </ul>
         </p>

         <p class="zou">
           <span class="zh">历史成绩走势</span>

         </p>
           
             <div id="zoushi"></div>
     
     </div>
      <div class="tcon">
        <p class="juan">试卷详情</p>
      </div>
  </div>
</template>



<script>
  export default {
mounted(){
this.tuone();
this.tutwo();
this.zoushi();
},
methods:{
  tuone:function(){
    let myChart = this.$echarts.init(document.getElementById("bingone"));
    let option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['介词', '动词', '名词', '形容词']
    },
    series: [
        {
            name: '占比',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '介词'},
                {value: 310, name: '动词'},
                {value: 234, name: '名词'},
                {value: 135, name: '形容词'},
            ]
        }
    ]
};
myChart.setOption(option)
  },
   tutwo:function(){
    let myChart = this.$echarts.init(document.getElementById("bingtwo"));
    let option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['介词', '动词', '名词', '形容词']
    },
    series: [
        {
            name: '占比',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '介词'},
                {value: 310, name: '动词'},
                {value: 234, name: '名词'},
                {value: 135, name: '形容词'},
            ]
        }
    ]
};
myChart.setOption(option)
  },
  zoushi:function(){
     let myChart = this.$echarts.init(document.getElementById("zoushi"));
    let option={
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
    myChart.setOption(option)
  }
}
  }
</script>
<style lang="less" scoped>


*{
  box-sizing: border-box;
}
.ba0biaoon{
  width: 800px;
  min-height: 400px;
  margin: 0 auto;
  margin-top: 40px;
}
.tcon{
  width: 100%;
  min-height: 650px;
  box-shadow: 0 0 7px 0;
  margin-bottom: 20px;
  border-radius: 7px;
  padding: 15px;
}
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
}
.gainnum{
  margin-top: 20xp;
  margin-bottom: 20px;
}
.ac{
  text-align: center;
  color: rgb(121,137,183);
  font-weight: 600;
}
.oul{
  display: flex;
  padding: 0;
  justify-content: start;
  width: 100%;
  list-style: none;
  margin-top: 20px;
  margin-bottom: 20px;
}
.oul li{
  height: 30px;
  width: 200px;
}
.zh{
  padding: 3px 9px;
background: rgb(51,77,148);
color: white;
font-weight: 600;
margin-right: 8px;
border-radius: 5px;
}
.infor{
  color: rgb(163,173,204);
}
.zhunum,.kenum{
   color: rgb(163,173,204);
   margin-right: 20px;
}
.juan{
  text-align: center;
  color: rgb(52,78,149);
  font-weight: 600;
}
.knowledgenum{
  height: 120px;
}
.kleft{
  width: 60%;
  height: 120px;
  float: left;
}
.kright{
  width: 40%;
  height: 120px;
  float: left;
}
.lspan{
  color: rgb(142,153,189);
  margin-right: 20px;
}
.l2{
  padding-left: 106px;
}
.fli{
   display: flex;
  padding: 0;
  justify-content: center;
  width: 100%;
  list-style: none;
}
.fli li{
  height: 100px;
  width: 140px;
  margin-left: 30px;
}
.fli li p{
  text-align: center;
  color: rgb(102,120,172);
  font-weight: 600;
}
.fli li .bdiv{
  width: 100%;
  height: 100px;
}
.bdiv div{
  height: 100px;
  width: 100px;
  margin:  auto;
  border: 2px solid orange;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  color: rgb(85,108,175);
  font-weight: 600;
}
.zou{
  position: relative;
  top: 56px;
}
#zoushi{
  width: 80%;
  height: 200px;
  margin: 0 auto;
  position: relative;
  top: 77px;
}
</style>