<template>
 <div class="chengjicon">
     <p class="c1">考试报告</p>
    <div class="c2"></div>
    <div class="cheng" v-for="(item,i) in allarry" :key="i">
        <div class="chengtop">英语(考试名称:{{item.get_test_paper_info.test_name}})</div>
        <p class="endor">考试结束</p>
        <p>开始时间:{{item.get_test_paper_info.test_start}} | 科目:英语 | 我创建的 | 题目数量:{{item.get_test_paper_info.test_num}}</p>
        <p>截至时间:{{item.get_test_paper_info.test_end}} | 总分:{{item.get_test_paper_info.all_score}} | 及格分:{{item.get_test_paper_info.pass_score}} | 考试时长:{{item.get_test_paper_info.test_use_time}}</p>
        <div class="bbox">
           <span class="chakan" @click="gobao(item.candidate_id)">查看成绩报告</span>
           <span class="download">下载成绩报告</span>
        </div>
    </div>

   <!-- 分页按钮 -->
    <el-pagination
  background
  layout="prev, pager, next"
  :total="pagecount"
  class="fenye"
  @current-change="huanye"
  >
</el-pagination>
    <!-- 定位 -->
    <div class="back" @click="gotp">
      返回
    </div>
 </div>
</template>



<script>
  export default {
    created(){
  this.mytest(1);
},
methods:{
  //  获取当前页数的函数
  huanye:function(e){
   this.mytest(e)
  },
   //  返回testpage
  gotp:function(){
     this.$router.push("testpage")
  },
    gobao:function(e){
      console.log(e)
         this.$router.push("chengjibaobiao")
         var storage = window.sessionStorage;  
                storage.setItem('bgid', e);  
    }
    ,
    // 我的考试请求
    async mytest(page){
         let msg = await this.$http.get('reports?page='+page);
         if(msg.data.code==0){
let ms = this.$decryptData(msg.data.data);
     this.pagecount = ms.last_page*10;
     console.log(ms)
     this.allarry = ms.data;
     }
     else{
     this.$message.error("获取数据失败！")
     }
    }
},
   data() {
      return {
        // 总页数
       pagecount:1,
      //  所有考试的数据
      allarry:[]
      }
    },
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
.fenye{
  margin-top: 15px;
  text-align: center;
  margin-bottom: 20px;
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
        margin-bottom: 20px;
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