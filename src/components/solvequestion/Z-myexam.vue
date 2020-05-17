<template>
 <div class="chengjicon">
     <p class="c1">我的考试</p>
    <div class="c2"></div>
    <el-dropdown>

 <el-select v-model="value"  class="chance" @change="seg">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</el-dropdown>
    <div class="cheng" v-for="(item,i) in alltest" :key="i">
        <div class="chengtop">语文 id:{{item.candidate_id}}</div>
        <p class="endor">
考试信息
            <span class="examspan">{{item.hasUp}}人已经提交</span>
            <span  class="examspan">{{item.notUp}}人未提交</span>
        </p>
        <p>开始时间:{{item.get_test_paper_info.test_start}} | 科目:英语 | 题数:{{item.get_test_paper_info.test_num}}</p>
        <p>结束时间:{{item.get_test_paper_info.test_end}} | 总分:{{item.get_test_paper_info.all_score}} | 得分:{{item.get_test_paper_info.pass_score}} |考试时长:{{item.get_test_paper_info.test_use_time}}</p>
        <div class="bbox">
           <span class="chakan">{{zt}}</span>
           <span class="download" @click="goexam(item.candidate_id)">去考试</span>
        </div>
    </div>

    <!-- 筛选的部分 -->
     <div class="cheng" v-for="(item,i) in alltest2" :key="i">
        <div class="chengtop">语文 id:{{item.candidate_id}}</div>
        <p class="endor">
考试信息
            <span class="examspan">{{item.hasUp}}人已经提交</span>
            <span  class="examspan">{{item.notUp}}人未提交</span>
        </p>
        <p>开始时间:{{item.test_start}} | 科目:英语 | 题数:{{item.test_num}}</p>
        <p>结束时间:{{item.test_end}} | 总分:{{item.all_score}} | 得分:{{item.pass_score}} |考试时长:{{item.test_use_time}}</p>
        <div class="bbox">
           <span class="chakan">{{zt}}</span>
           <span class="download" @click="goexam(item.candidate_id)">去考试</span>
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
     data() {
      return {
        // 我的考试总页数
        pagecount:1,
        // 所有考试的数据
        alltest:[],
        // 第二个考试数据
        alltest2:[],
        options: [
          {
          value: '全部',
          label: '全部'
        },
          {
          value: '已提交',
          label: '已提交'
        }, {
          value: '未提交',
          label: '未提交'
        },],
        value: '全部',
        // 区分三种的数字
        qf:1,
        // 状态的显示
        zt:""
      }
    },
methods:{
  // 获取所有信息的函数
   async allexam(page){
     let msg = await this.$http.get('exams?page='+page);
     if(msg.data.code==0){
let ms = this.$decryptData(msg.data.data);
     this.pagecount = ms.last_page*10;
 let x = ms.data;
     let len = ms.data.length;
     for(let i=0;i<len;i++){
       let tid = ms.data[i].test_id
       let ids = await this.$http.get('people/'+tid);
       let gaintest = this.$decryptData(ids.data.data);
       x[i].notUp = gaintest.notUp;
       x[i].hasUp = gaintest.hasUp;
     }
     this.alltest2=[];
     this.alltest = x;
     console.log(this.alltest)
     //console.log(ms)
     }else{
     this.$message.error("获取数据失败！")
     }
    //  获取考试完成情况
    // let wcqk = await this.$http.get('reports',{
    //   pagrams:{
    //     page:page
    //   }
    // });
    // let wcdata = this.$decryptData(wcqk.data.data);
    // console.log(wcdata)
   },
  //  返回testpage
  gotp:function(){
     this.$router.push("testpage")
  },
  //  获取当前页数的函数
  huanye:function(e){
    if(this.qf==1){
        this.allexam(e)
    }else if (this.qf==2) {
      this.up(e)
    }else{
      this.noup(e);
    }
    
  },
  // 去考试
  goexam:function(e){
   var storage = window.sessionStorage;  
     storage.setItem('examid', e);
   this.$router.push("testtwo")
  },
// 选择器选择
seg:function(e){
if(e=='全部'){
  this.qf = 1;
 this.allexam(1)
}else if (e=='已提交') {
  this.qf = 2;
  this.up(1);
  
}else{
this.qf = 3; this.noup(1);
}
},
  // 获取已提交
   async up(page){
     let msg = await this.$http.get('exams/up?page='+page);
     if(msg.data.code==0){
let ms = this.$decryptData(msg.data.data);
     this.pagecount = ms.last_page*10;
 let x = ms.data;
     let len = ms.data.length;
     for(let i=0;i<len;i++){
       let tid = ms.data[i].test_id
       let ids = await this.$http.get('people/'+tid);
       let gaintest = this.$decryptData(ids.data.data);
       x[i].notUp = gaintest.notUp;
       x[i].hasUp = gaintest.hasUp;
     }
     this.alltest = [];
     this.alltest2 = x;
     console.log(this.alltest2)
     //console.log(ms)
     }else{
     this.$message.error("获取数据失败！")
     }
    //  获取考试完成情况
    // let wcqk = await this.$http.get('reports',{
    //   pagrams:{
    //     page:page
    //   }
    // });
    // let wcdata = this.$decryptData(wcqk.data.data);
    // console.log(wcdata)
   },
   // 获取未提交
   async noup(page){
     let msg = await this.$http.get('exams/noup?page='+page);
     if(msg.data.code==0){
let ms = this.$decryptData(msg.data.data);
     this.pagecount = ms.last_page*10;
 let x = ms.data;
     let len = ms.data.length;
     for(let i=0;i<len;i++){
       let tid = ms.data[i].test_id
       let ids = await this.$http.get('people/'+tid);
       let gaintest = this.$decryptData(ids.data.data);
       x[i].notUp = gaintest.notUp;
       x[i].hasUp = gaintest.hasUp;
     }
     this.alltest = [];
     this.alltest2 = x;
     console.log(this.alltest2)
     //console.log(ms)
     }else{
     this.$message.error("获取数据失败！")
     }
    //  获取考试完成情况
    // let wcqk = await this.$http.get('reports',{
    //   pagrams:{
    //     page:page
    //   }
    // });
    // let wcdata = this.$decryptData(wcqk.data.data);
    // console.log(wcdata)
   }
},
created(){
  this.allexam(1);
  setInterval(function(){

  },500)
}
  }
</script>
<style lang="less" scoped>
*{
    box-sizing: border-box;
}
// 分页的css
.fenye{
  margin-top: 20px;
}



.chengjicon{
    width: 1000px;
    min-height: 500px;
    margin: 0 auto;
    margin-top: 40px;
}
.chance{
  position: relative;
  top: -10px;
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
   margin-bottom: 15px;
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