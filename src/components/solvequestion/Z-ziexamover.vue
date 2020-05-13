<template>
  <div class="overcon">
       <p class="c1">考试结束</p>
    <div class="c2"></div>
    <div class="occ">
        <p><span class="zhong">考试信息</span><span class="nz">{{grade}}</span></p>
        <p><span class="zhong">客观题得分（50分）</span><span class="nz">{{num}}分</span></p>
        <p><span class="zhong">用时</span><span class="nz">{{fen}}分{{miao}}秒</span></p>
        <div class="bt"><el-button type="primary" @click="chakan">查看考试详情</el-button></div>
    </div>
  </div>
</template>



<script>
  export default {
    created(){
        this.getmsg()
    },
    methods:{
      // 获取考试信息
      getmsg:function(){
          var storage = window.sessionStorage; 
      this.grade=storage.getItem("zdystring");
       this.num=storage.getItem("zdyfs");
       this.fen = parseInt(storage.getItem("ztime")/60);
       this.miao = storage.getItem("ztime")%60;
      },
      chakan:function(){
        this.$router.push("examdetails")
      }
    },
    data(){
      return{
        grade:'',
        fen:'',
        miao:'',
        num:''
      }
    }
  }
</script>
<style lang="less" scoped>
*{
    box-sizing: border-box;
}
.overcon{
    width: 600px;
    height: 600px;
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

.occ{
    width: 90%;
    height: 400px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
        padding-top: 80px;
        margin:  0 auto;
}
.occ p{
text-align: center;

}
.zhong{
    padding: 5px 14px;
    background: rgb(51,77,148);
    color: white;
    font-weight: 600;
    margin-right: 15px;
}
.nz{
    color: rgb(86,106,165);
}
.bt{
    text-align: center;
    margin-top: 80px;
}
</style>