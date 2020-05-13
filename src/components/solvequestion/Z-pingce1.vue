<template>


<div class="ingcon">
<!-- 确认放弃考试 -->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible1"
  width="30%">
  <span>你确定要放弃考试吗？</span>
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
        <!-- 剩余时间 -->
        <span class="time">剩余时间{{min}}分{{miao}}秒</span>
        <!-- 开始考试 -->
          <el-button type="primary" class="star" :class="{ hidden: ishidden }" @click="starexam">开始考试</el-button>
          <!-- 放弃考试 -->
            <el-button type="primary" class="end" @click="dialogVisible1=true">放弃考试</el-button>
        <!-- 提交考试 -->
 <el-button type="primary" class="tijiao1" @click="dialogVisible2=true" :class="{ hidden: !ishidden }">提交考试</el-button>
            <!-- 单选题demo -->
            <div class="dxs" :class="tab!=tabs[0]?'tt':''">
                <p class="headp">单选题</p>
             <div class="danxuan zong"  v-for="(item,i) in allmsg.single_select" :key="i">
                <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                <template>
            <el-radio v-model="dan[i]" label="A" class="xuanze">{{item.topic_and_stem.options.A}}</el-radio>
            <el-radio v-model="dan[i]" label="B"  class="xuanze">{{item.topic_and_stem.options.B}}</el-radio>
            <el-radio v-model="dan[i]" label="C"  class="xuanze">{{item.topic_and_stem.options.C}}</el-radio>
            <el-radio v-model="dan[i]" label="D"  class="xuanze">{{item.topic_and_stem.options.D}}</el-radio>
                </template>
            </div>
            
            </div>

            <!-- 多选题demo -->
            <div class="dxs" :class="tab!=tabs[1]?'tt':''">
                <p class="headp" >多选题</p>
                <div class="duoxuan zong"  v-for="(item,i) in allmsg.non_directional_select" :key="i">
                     <p>{{i+1}}.这是一道多选题，这里选择请</p>
   <template>
  <el-checkbox v-model="duo" label="A" class="xuanze">备选项</el-checkbox>
  <el-checkbox v-model="duo" label="B" class="xuanze">备选项</el-checkbox>
  <el-checkbox v-model="duo" label="C" class="xuanze">备选项</el-checkbox>
  <el-checkbox v-model="duo" label="D" class="xuanze">备选项</el-checkbox>
</template>
                </div>


            </div>
             <!-- 七选五demo --> 
             <div class="qiwus" :class="tab!=tabs[2]?'tt':''">
                  <p class="headp">7选五</p>
                  <div class="qiwu zong" v-for="(item,i) in allmsg.seven_selected_five" :key="i">
                   <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                                       <template>
                <el-checkbox-group 
                 v-model="qi[i]"
                :max="6">
                    <el-checkbox  label="A" v-model="qi[i]" class="xuanze">{{item.topic_and_stem.options.A}}</el-checkbox>
                     <el-checkbox  label="B" v-model="qi[i]" class="xuanze">{{item.topic_and_stem.options.B}}</el-checkbox>
                     <el-checkbox  label="C" v-model="qi[i]" class="xuanze">{{item.topic_and_stem.options.C}}</el-checkbox>
                     <el-checkbox  label="D" v-model="qi[i]" class="xuanze">{{item.topic_and_stem.options.D}}</el-checkbox>
                     <el-checkbox  label="E" v-model="qi[i]" class="xuanze">{{item.topic_and_stem.options.E}}</el-checkbox>
                    <el-checkbox  label="F" v-model="qi[i]" class="xuanze">{{item.topic_and_stem.options.F}}</el-checkbox>
                     <el-checkbox  label="G" v-model="qi[i]" class="xuanze">{{item.topic_and_stem.options.G}}</el-checkbox>
                     </el-checkbox-group>
                        </template> 
                  </div>
       
             </div>
                <!-- 判断题demo -->
            <div class="dxs" :class="tab!=tabs[3]?'tt':''" >
                <p class="headp">判断题</p>
                            <div class="danxuan zong" v-for="(item,i) in allmsg.true_or_false" :key="i">
                <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                <template>
            <el-radio v-model="pan[i]" label="true" class="xuanze">对</el-radio>
            <el-radio v-model="pan[i]" label="false"  class="xuanze">错</el-radio>
                </template>
            </div>
            
            </div>
                 <!-- 填空题demo -->
                <div class="tks" :class="tab!=tabs[4]?'tt':''">
                    <p class="headp">填空题</p>
                        <div class="tk zong" v-for="(item,i) in allmsg.fill" :key="i">
                        <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                             <!-- <p>解析:{{item.knowledge_point}}</p> -->
                </div>
                </div>
    </div>
    <div class="con-right">
         <p class="headp">
            答题卡
        </p>
        <div class="tkt" v-for="(item,i) in allmsg.fill" :key="i">
            <p>填空第{{i+1}}题</p>
 <el-input placeholder="请输入内容" @input="updateView($event)" v-model="tian[i][j]" v-for="(item,j) in allmsg.fill[i].daan" :key="j"></el-input>
            
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
        alltime:1800
      }
    },
methods:{
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
                // 多选题的处理
                // for(let i=0;i<this.allmsg.non_directional_select.length;i++){
                //        this.dan.d[i]=''
                //        this.allmsg.single_select[i].right_ans = JSON.parse(this.allmsg.single_select[i].right_ans)
                //     this.allmsg.single_select[i].topic_and_stem = JSON.parse(this.allmsg.single_select[i].topic_and_stem)
                //    }

                // 七选五的处理               
                 for(let i=0;i<this.allmsg.seven_selected_five.length;i++){
                       this.qi[i]=[];
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
            setInterval(function(){
                that.alltime = that.alltime-1;
               that.min=parseInt(that.alltime/60);
               that.miao = that.alltime%60;
               if(that.alltime==0){
                   this.tijiao()
               }
            },1000)
          
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