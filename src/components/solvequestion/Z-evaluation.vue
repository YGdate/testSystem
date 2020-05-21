<template>
<div class="evaluation">
  <div class="backs" @click="gotp">
      返回
    </div>
     <p class="c1">英语评测</p>
    <div class="c2"></div>
    <div class="e-top">
        <div class="e-tt">
            自定义快速测评
        </div>
        <el-select    v-model="value" placeholder="请选择年级" class="elone" @change="seg">
    <el-option
   
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="value2" placeholder="请选择上下册" @change="sesx">
    <el-option
      v-for="item in option2s"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <p class="ep">
      <el-button type="primary" @click="gozdy">开始测评</el-button>
  </p>
    </div>
        <div class="e-bottom">
            <div class="e-tt">
            搜索测评
        </div>
        <!-- 搜素的输入框 -->
  <el-input
     placeholder="搜索评测名称"
      v-model="sea"
     style="width: 440px;margin-left:270px;cursor:pointer"
     @change="seac(1)"
    >
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
  <span class="nowsea">当前搜索内容为:{{nowsea}}</span>

  <!-- 这里是搜素出来的内容 -->
  <div class="bcon" v-for="(item,i) in seadataarry" :key="i">
      <p>{{item.test_name}} | 用户{{item.user_id}}</p>
      <p>开始时间:{{item.test_start}} | 科目:英语 | 题目数量:{{item.test_num}}</p>
      <p>截至时间:{{item.test_end}} | 总分:{{item.all_score}} | 考试时长:{{item.test_use_time}} | 剩余考试次数:{{item.test_time}}</p>
       <el-button type="success" class="shenqing" @click="shenqing(item.id)">申请测评</el-button>
  </div>


  <!-- 这里是搜索的分页 -->
  <el-pagination
  background
  layout="prev, pager, next"
  :total="seapage"
  class="seapage"
   @current-change="huanye"
  >
</el-pagination>
        </div>

<!-- 选择申请方式的弹出框 -->
<el-dialog
  title="选择申请方式！"
  :visible.sync="csq"
  width="30%"
  >
  <span slot="footer" class="dialog-footer">
   <el-row>
  <el-button type="primary" @click="psq">报名申请</el-button>
   <el-button type="primary" @click="csq=false;dialogVisible=true">验证码申请</el-button>
</el-row>
  </span>
</el-dialog>

        <!-- 验证码申请弹出框 -->
    <el-dialog
  :visible.sync="dialogVisible"
  width="30%">
 <el-input v-model="zhengma" placeholder="请输入验证码"></el-input>

  <span slot="footer" class="dialog-footer">
  <el-button type="primary" @click="yzsq">申请</el-button>
  </span>
</el-dialog>
</div>
</template>



<script>
  export default {
       data() {
      return {
        // 年级的选择
        options: [{
          value: '0',
          label: '一年级'
        }, {
          value: '1',
          label: '二年级'
        }, {
          value: '2',
          label: '三年级'
        }, {
          value: '3',
          label: '四年级'
        }, {
          value: '4',
          label: '五年级'
        }, {
          value: '5',
          label: '六年级'
        }, {
          value: '6',
          label: '初一'
        }, {
          value: '7',
          label: '初二'
        }, {
          value: '8',
          label: '初三'
        }, {
          value: '9',
          label: '高一'
        }, {
          value: '10',
          label: '高二'
        }, {
          value: '11',
          label: '高三'
        }, {
          value: '12',
          label: '大一'
        }, {
          value: '13',
          label: '大二'
        }, {
          value: '14',
          label: '大三'
        }, {
          value: '15',
          label: '大四'
        }],
        // 选择上下册
        option2s:[
          {
          value: '0',
          label: '上册'
        },
        {
          value: '1',
          label: '下册'
        },
        ],
        // 第一个选择的绑定
        value: '',
        // 第二个选择的绑定
         value2: '',
        zhengma:'',
        // 年级和上下册
        zdy:{
            g:'',
            sx:''
        },
        // 年级string
        zgstring:'',
        // 上下string
        zsxstring:''
        ,
         dialogVisible: false,
        //  搜索的内容
        sea:'',
        // 搜索的页数
        seapage:1,
        // 搜素出来的内容
        seadataarry:[],
        // 当前搜素内容
        nowsea:'空',
        // 选择申请的弹出框
        csq:false,
        // 申请的id
        sid:''
      }
    },
    methods:{
      // 验证码申请
      async yzsq(){
        if(this.zhengma==''){
          this.$message.error("验证码不能为空")
        }else{
          this.dialogVisible=false;
           let msg = await this.$http.post('exam_operation/online_assessment/captcha',{
               test_id:parseInt(this.sid),
               captcha:this.zhengma             
             });
             this.$message.success(msg.data.msg);
        }
      },
      // 普通申请的函数
      async psq(){
        this.csq=false;
          let msg = await this.$http.post('exam_operation/online_assessment/enroll',{
               test_id:parseInt(this.sid)             
             });
             this.$message.success(msg.data.msg);
      },
      // 点击申请的函数
      shenqing:function(id){
        this.csq = true;
        this.sid = id;
        console.log(this.sid)
      },
      // 搜素换页函数
      huanye:function(e){
        this.seac(e);
      },
      //  返回testpage
  gotp:function(){
     this.$router.push("testpage")
  },
      // 搜素的点击
     async seac(num){
       if(this.sea==''){
         this.$message.error("请输入内容!")
       }else{
         this.nowsea = this.sea;
          let msg = await this.$http.get('exam_operation/online_assessment/search?page='+num,{
               params:{
                keyword:this.sea
               }
             });
          if(msg.data.code==0){
                   let ms = this.$decryptData(msg.data.data);
                   this.seapage = ms.last_page*10;
                   if(ms.data.length==0){
                      this.seadataarry=[];
                      this.$message.error("无搜索内容")
                   }else{
                this.seadataarry = ms.data;
                  console.log(ms)
                   }
                
             }else{
                this.$message.error("获取内容失败！")
             }
       }
      },
      // 选择年级
      seg:function(e){
       this.zdy.g=e;
        let obj = this.options.find((item)=>{//这里的userList就是上面遍历的数据源
          return item.value == e;//筛选出匹配数据
      });
      this.zgstring = obj.label;
      
      },
      // 选择上下册
       sesx:function(e){
       this.zdy.sx=e;
       if(e==0){
         this.zsxstring = '上册'
       }else{
          this.zsxstring = '下册'
       }
      },
      // 自定义评测的点击
      async gozdy(){
        if(this.zdy.g==''||this.zdy.sx==''){
           this.$message.error("请选择完整！")
           
        }else{
          let msg = await this.$http.get('exam_operation/online_assessment/customize',{
               params:{
                 grade:parseInt(this.zdy.g),
                  semester:parseInt(this.zdy.sx)
               }
             });
               let ms = this.$decryptData(msg.data.data);
               console.log(ms)
               let num=0;
            for(let k in ms){
              let h = k
              num=num+ms[h].length;
            }
            if(num==0){
this.$message.error("抱歉改年级未存在试卷！")
            }else{
let gsx = this.zgstring+this.zsxstring;
           var storage5 = window.sessionStorage;  
                 storage5.setItem('zdystring', gsx);
           this.$router.push("testone")
            var storage2 = window.sessionStorage;  
                storage2.setItem('zdyg', this.zdy.g);
                 var storage3 = window.sessionStorage;  
                storage3.setItem('zdysx', this.zdy.sx);
            }
          
        }
      }
    }
  }
</script>
<style lang="less" scoped>
// 搜索分页的css
.seapage{
text-align: center;
margin-top: 20px;
margin-bottom: 20px;
}
.nowsea{
  margin-left: 5px;
  font-weight: 600;
}

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
.ep{
    text-align: center;
}
.elone{
    margin-left: 270px;
    margin-right: 10px;
}
.evaluation{
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
.e-top{
    width: 1000px;
    height: 150px;
    background: white;
    border-radius: 7px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
}
.e-tt{
    height: 30px;
    width: 100%;
    background: rgb(104,181,246);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    box-sizing: border-box;
    padding-left: 20px;
    font-weight: 600;
    line-height: 30px;
    color: white;
    margin-bottom: 15px;
}
.e-bottom{
     width: 1000px;
    min-height: 180px;
    background: white;
    border-radius: 7px;
    margin-top: 20px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
}
.bcon{
     width: 600px;
     min-height: 150px;
     border-radius: 7px;
     background: rgb(105,181,246);
     margin: 0 auto;
     margin-top: 15px;
     padding: 15px;
     position: relative;
}.bcon p{
    color: white;
    font-weight: 600;
}
.bcon p:nth-child(1){
    color: rgb(54,81,151);
    font-weight: 600;
}
.shenqing{
    position: absolute;
    bottom: 5px;
    right: 15px;    
}
.d1{
  width: 200px;
  height: 100px;
  background: yellow;
}
</style>