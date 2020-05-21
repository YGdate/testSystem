<template>


<div class="ingcon">
<!-- 确认放弃考试 -->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible1"
  width="30%">
  <span>你确定要退出吗？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="fangqi">确 定</el-button>
  </span>
</el-dialog>
<!-- 提交试卷 -->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible2"
  width="30%">
  <span>你确定要提交考试吗？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="tijiao">确 定</el-button>
  </span>
</el-dialog>

    <div class="con-left">
        <p class="headp">
            题目类型({{gsxs}})
        </p>
        <ul class="qc">
            <li :class="tab==tabs[0]?'lactive':''" data-aid="1" @click="qian($event.srcElement.dataset.aid)">单选题</li>
            <li :class="tab==tabs[1]?'lactive':''" data-aid="2" @click="qian($event.srcElement.dataset.aid)">多选题</li>
            <li :class="tab==tabs[2]?'lactive':''" data-aid="3" @click="qian($event.srcElement.dataset.aid)">七选五</li>
            <li :class="tab==tabs[3]?'lactive':''" data-aid="4" @click="qian($event.srcElement.dataset.aid)">判断题</li>
            <li :class="tab==tabs[4]?'lactive':''" data-aid="5" @click="qian($event.srcElement.dataset.aid)">填空题</li>
        </ul>
    </div>
    <div class="con-center">
          <!-- 放弃考试 -->
            <el-button type="primary" class="end" @click="dialogVisible1=true">退出查看</el-button>
            <!-- 单选题demo -->
            <div class="dxs" :class="tab!=tabs[0]?'tt':''">
                <p class="headp">单选题</p>
             <div class="danxuan zong"  v-for="(item,i) in allmsg.single_select" :key="i">
                <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                <template>
            <el-radio v-model="sy.A[i]" label="A" class="xuanze">{{item.topic_and_stem.options.A}}</el-radio>
            <el-radio v-model="sy.A[i]" label="B"  class="xuanze">{{item.topic_and_stem.options.B}}</el-radio>
            <el-radio v-model="sy.A[i]" label="C"  class="xuanze">{{item.topic_and_stem.options.C}}</el-radio>
            <el-radio v-model="sy.A[i]" label="D"  class="xuanze">{{item.topic_and_stem.options.D}}</el-radio>
                </template>
                <p>答案:{{item.right_ans.answer}}</p>
                <p>解析:{{item.test_analyze}}</p>
            </div>
            
            </div>

            <!-- 非定向选择题demo -->
            <div class="fdxs" :class="tab!=tabs[8]?'tt':''">
                    <p class="headp">非定向选择</p>
                    <div class="fdx zong" v-for="(item,i) in allmsg.non_directional_select" :key="i">
                        <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                         <template>
            <el-radio v-model="sy.B[i]" label="A" class="xuanze">{{item.topic_and_stem.options.A}}</el-radio>
            <el-radio v-model="sy.B[i]" label="B"  class="xuanze">{{item.topic_and_stem.options.B}}</el-radio>
            <el-radio v-model="sy.B[i]" label="C"  class="xuanze">{{item.topic_and_stem.options.C}}</el-radio>
            <el-radio v-model="sy.B[i]" label="D"  class="xuanze">{{item.topic_and_stem.options.D}}</el-radio>
                </template>
                <p>答案:{{item.right_ans.answer}}</p>
                <p>解析:{{item.test_analyze}}</p>
                    </div>
        


            </div>
             <!-- 七选五demo --> 
            <div class="qiwus" :class="tab!=tabs[2]?'tt':''">
                  <p class="headp">7选五</p>
                    <div class="qiwu zong" v-for="(item,i) in allmsg.seven_selected_five" :key="i">
                   <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                   <p v-for="(itx,s,x) in allmsg.seven_selected_five[i].topic_and_stem.options" :key="x">
                   {{s}}.{{itx}}
                   </p>
                     <el-input v-model="sy.C[i][0]" maxlength=1 style="width:50px;"  :placeholder="1"></el-input>
                     <el-input v-model="sy.C[i][1]" maxlength=1 style="width:50px;"  :placeholder="2"></el-input>
                      <el-input v-model="sy.C[i][2]" maxlength=1 style="width:50px;"  :placeholder="3"></el-input>
                       <el-input v-model="sy.C[i][3]" maxlength=1 style="width:50px;"  :placeholder="4"></el-input>
                        <el-input v-model="sy.C[i][4]" maxlength=1 style="width:50px;"  :placeholder="5"></el-input>
                        <p>答案:{{item.right_ans.answer}}</p>
                <p>解析:{{item.test_analyze}}</p>
                  </div>
       
             </div>
                <!-- 判断题demo -->
            <div class="dxs" :class="tab!=tabs[3]?'tt':''" >
                <p class="headp">判断题</p>
                            <div class="danxuan zong" v-for="(item,i) in allmsg.true_or_false" :key="i">
                <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                <template>
            <el-radio v-model="sy.D[i]" label="true" class="xuanze">对</el-radio>
            <el-radio v-model="sy.D[i]" label="false"  class="xuanze">错</el-radio>
                </template>
                <p>答案:{{item.right_ans.answer}}</p>
                <p>解析:{{item.test_analyze}}</p>
            </div>
            
            </div>
                 <!-- 填空题demo -->
                <div class="tks" :class="tab!=tabs[4]?'tt':''">
                    <p class="headp">填空题</p>
                        <div class="tk zong" v-for="(item,i) in allmsg.fill" :key="i">
                        <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                             <!-- <p>解析:{{item.knowledge_point}}</p> -->
                             <p>答案:{{item.right_ans.answer}}</p>
                <p>解析:{{item.test_analyze}}</p>
                </div>
                </div>
    </div>
    <div class="con-right">
         <p class="headp">
            答题卡
        </p>
        <div class="tkt" v-for="(item,i) in allmsg.fill" :key="i">
            <p>填空第{{i+1}}题</p>
 <el-input placeholder="请输入内容" @input="updateView($event)" v-model="sy.E[i][j]" v-for="(item,j) in allmsg.fill[i].daan" :key="j"></el-input>
            
        </div>
    </div>
       <div style="height:60px:float:left">
       </div>
 </div>

    
 
</template>



<script>
  export default {
          // 开局调用
    created(){
        this.starexam();
        // 获取答案
        this.gsy();
    },
       data() {
      return {
        //   年级信息
        gsxs:'',
        //  所有的数据
        allmsg:{},
        // 放弃考试
        dialogVisible1:false,
        dialogVisible2:false,
        sureclose:false,
        zdy:{
            g:'',
            sx:''
        },
        // 是否隐藏
        ishidden:false,
        // 单选题答案存储
        dan:[],
        // 多选题答案储存
        duo:[],
        // 判断题
        pan:[],
        // 七选五
        qi:[],
        // 填空题答案
        tian:[],
        // tab选项卡
        tab:1,
        // tab选项卡的四个
        tabs:[1,2,3,4,5],
        // 分
        min:30,
        // 秒
        miao:0,
        // 总秒数
        alltime:1800,
        // 获取的答案凹
        sy:''
      }
    },
methods:{
    // 获取答案
    gsy:function(){
         let storage = window.sessionStorage; 
      let g=storage.getItem("seeyou");
      g = JSON.parse(g);
      this.sy = g;

    },
    updateView(e) {
    this.$forceUpdate()
},
    // 确认放弃考试
    fangqi:function(){
          this.$router.push("testpage")
    },
    // 确认提交考试
    tijiao:function(){
        let that = this;
        let zdyfs=0;
            // 单选题分数处理
            for(let i=0;i<that.dan.length;i++){
                if(that.dan[i]==that.allmsg.single_select[i].right_ans.answer){
                    zdyfs = zdyfs+2;
                }
            }


            // 七选五分数处理
            for(let i=0;i<that.qi.length;i++){
                let s = that.allmsg.seven_selected_five[i].right_ans.answer;
                let daan = [];
                 for (let i in s) {
    daan.push(s[i]);
    //arr.push(obj[i]); //值
}             
            if(daan==that.qi){
                zdyfs = zdyfs+2;
            }
            
            var storage = window.sessionStorage;  
                 storage.setItem('zdyfs', zdyfs);
                  storage.setItem('ztime', 1800-that.alltime)
            }


            // 判断题的处理
            for(let i=0;i<that.pan.length;i++){
                       if(that.pan[i]==that.allmsg.true_or_false[i].right_ans.answer){
                     zdyfs = zdyfs+2;
            }
            }


            // 填空题的判断
            for(let i=0;i<that.tian.length;i++){
                for(let j=0;j<that.allmsg.fill[i].daan.length;j++){
                        if(that.tian[i][j]==that.allmsg.fill[i].daan[j]){
                             zdyfs = zdyfs+2;
                        }
                }
            }
            console.log(zdyfs)
            console.log(this.qi)

            

          this.$router.push("ziexamover")
    },
    close:function(){
        this.sureclose = true;
    },
    examover:function(){
            this.$router.push("ziexamover")
        },
        // 获取传过来的值
        async zdytest(){
     var storage = window.sessionStorage; 
      this.zdy.g=storage.getItem("zdyg");
      this.gsxs = storage.getItem("zdystring");
       var storage2 = window.sessionStorage; 
      this.zdy.sx=storage2.getItem("zdysx");
          let msg = await this.$http.get('exam_operation/online_assessment/customize',{
               params:{
                 grade:parseInt(this.zdy.g),
                  semester:parseInt(this.zdy.sx)
               }
             });
             if(msg.data.code==0){
                   let ms = this.$decryptData(msg.data.data);                
                   this.allmsg = ms;
                                      console.log(this.allmsg)
                //单选题的处理
                   for(let i=0;i<this.allmsg.single_select.length;i++){
                       this.dan[i]=''
                       this.allmsg.single_select[i].right_ans = JSON.parse(this.allmsg.single_select[i].right_ans)
                    this.allmsg.single_select[i].topic_and_stem = JSON.parse(this.allmsg.single_select[i].topic_and_stem)
                   }
                 // 非定向选择的处理
                for(let i=0;i<this.allmsg.non_directional_select.length;i++){
                       this.fei[i]=''
                    this.allmsg.non_directional_select[i].topic_and_stem = JSON.parse(this.allmsg.non_directional_select[i].topic_and_stem)
                   }

                // 七选五的处理               
                let l = [];     
                 for(let i=0;i<this.allmsg.seven_selected_five.length;i++){
                     l[i]=[];
                        for(let g=0;g<5;g++){
                            l[i][g]=""
                        }
                        this.qi=l;
                         this.allmsg.seven_selected_five[i].right_ans = JSON.parse(this.allmsg.seven_selected_five[i].right_ans)
                    this.allmsg.seven_selected_five[i].topic_and_stem = JSON.parse(this.allmsg.seven_selected_five[i].topic_and_stem)
                   }
                // 判断的处理                
                 for(let i=0;i<this.allmsg.true_or_false.length;i++){
                       this.pan[i]='';
                         this.allmsg.true_or_false[i].right_ans = JSON.parse(this.allmsg.true_or_false[i].right_ans)
                    this.allmsg.true_or_false[i].topic_and_stem = JSON.parse(this.allmsg.true_or_false[i].topic_and_stem)
                   }
                       // 填空的处理
                 for(let i=0;i<this.allmsg.fill.length;i++){
                       this.tian[i]=[];
                       this.allmsg.fill[i].right_ans = JSON.parse(this.allmsg.fill[i].right_ans)
                    this.allmsg.fill[i].topic_and_stem = JSON.parse(this.allmsg.fill[i].topic_and_stem)
                      // let arr = Object.keys(this.allmsg.fill[i].right_ans.answer); 
                       //let len = arr.length;
                       
                       let daan = [];
                       let s = this.allmsg.fill[i].right_ans.answer
                       for (let i in s) {
    daan.push(s[i]);
    //arr.push(obj[i]); //值
}
        for(let j=0;j<daan.length;j++){
            this.tian[i][j]='';
        }
   
                    this.allmsg.fill[i].daan = daan;
                   }
             }else{
                this.$message.error("获取内容失败！")
             }
        },
        // 开始考试
        starexam:function(){
            let that = this;
            this.ishidden=true;
            this.zdytest();
          
        },
    qian:function(es){
      
        this.tab = parseInt(es);
        
    }
}
  }
</script>
<style lang="less" scoped>

*{
    box-sizing: border-box;
}
.hidden{
    display: none;
}
.ingcon{
    width: 1400px;
    min-height: 400px;
    margin: 0 auto;
    margin-top: 100px;
}
.con-left{
    width: 300px;
    float: left;
    //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
      min-height: 400px;
      margin-right: 50px;
}
.tt{
    display: none;
}
.con-center{
    width: 700px;
      min-height: 400px;
      float: left;
      //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
      margin-right: 50px;
      position: relative;

}
.con-right{
     width: 300px;
    float: left;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
      min-height: 400px;
      
}
.tkt{
    padding: 5px;
    border-bottom: 1px solid lightgray;
}
.headp{
    text-align: center;
    font-weight: 600;
}
// 剩余时间
.time{
    font-weight: 600;
    position: absolute;
    right: 0;
    top: -22px;
}
// 开始考试
.star{
     position: absolute;
   left: 160px;
    top: -42px;
}
// 结束考试
.end{
   position: absolute;
   left: 0px;
    top: -42px;
}
.tijiao1{
    position: absolute;
   left: 160px;
    top: -42px;
}
// 题目类型
.qc{
    padding: 0;
    list-style: none;
    width: 100%;
}
.qc li{
    height: 60px;
    width: 100%;
   font-weight: 600;
   text-align: center;
   line-height: 60px;
   border: 1px solid lightblue;
   cursor: pointer;
}
// 左部分被选中
.lactive{
    color: white;
    background: black;
}
// 题的css
.zong{
    padding: 10px;
    font-weight: 600;
    border-bottom: 1px solid lightgray;
}
.xuanze{
    width: 100%;
    margin-bottom: 10px;
}
</style>