<template>


<div class="ingcon">
    <div class="con-left">
        <p class="headp">
            题目类型
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
        <!-- 结束查看-->
            <el-button type="primary" class="end" @click="end">结束查看</el-button>


            <!-- 单选题demo -->
            <div class="dxs" :class="tab!=tabs[0]?'tt':''">
                <p class="headp">单选题</p>
             <div class="danxuan zong"  v-for="(item,i) in allmsg.single_select" :key="i">
                <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                <template>
            <el-radio v-model="dan.d[i]" label="A" class="xuanze">{{item.topic_and_stem.options.A}}</el-radio>
            <el-radio v-model="dan.d[1]" label="B"  class="xuanze">{{item.topic_and_stem.options.B}}</el-radio>
            <el-radio v-model="dan.d[1]" label="C"  class="xuanze">{{item.topic_and_stem.options.C}}</el-radio>
            <el-radio v-model="dan.d[1]" label="D"  class="xuanze">{{item.topic_and_stem.options.D}}</el-radio>
                </template>
                <p>答案:{{item.right_ans.answer}}</p>
                <p>解析:{{item.knowledge_point}}</p>
            </div>
            
            </div>

            <!-- 多选题demo -->
            <div class="dxs" :class="tab!=tabs[1]?'tt':''">
                <p class="headp" >多选题</p>
                <div class="duoxuan zong"  v-for="(item,i) in allmsg.non_directional_select" :key="i">
                     <p>{{i+1}}.这是一道多选题，这里选择请</p>
   <template>
  <el-checkbox v-model="duo.d1" label="A" class="xuanze">备选项</el-checkbox>
  <el-checkbox v-model="duo.d1" label="B" class="xuanze">备选项</el-checkbox>
  <el-checkbox v-model="duo.d1" label="C" class="xuanze">备选项</el-checkbox>
  <el-checkbox v-model="duo.d1" label="D" class="xuanze">备选项</el-checkbox>
</template>
<p>答案:{{item.right_ans.answer}}</p>
 <p>解析:{{item.knowledge_point}}</p>
                </div>


            </div>
             <!-- 七选五demo --> 
             <div class="qiwus" :class="tab!=tabs[2]?'tt':''">
                  <p class="headp">7选五</p>
                  <div class="qiwu zong" v-for="(item,i) in allmsg.seven_selected_five" :key="i">
                   <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                                       <template>
                <el-checkbox-group 
                 v-model="qi.d1"
                :max="6">
                    <el-checkbox  label="A" v-model="qi.d1" class="xuanze">{{item.topic_and_stem.options.A}}</el-checkbox>
                     <el-checkbox  label="B" v-model="qi.d1" class="xuanze">{{item.topic_and_stem.options.B}}</el-checkbox>
                     <el-checkbox  label="C" v-model="qi.d1" class="xuanze">{{item.topic_and_stem.options.C}}</el-checkbox>
                     <el-checkbox  label="D" v-model="qi.d1" class="xuanze">{{item.topic_and_stem.options.D}}</el-checkbox>
                     <el-checkbox  label="E" v-model="qi.d1" class="xuanze">{{item.topic_and_stem.options.E}}</el-checkbox>
                    <el-checkbox  label="F" v-model="qi.d1" class="xuanze">{{item.topic_and_stem.options.F}}</el-checkbox>
                     <el-checkbox  label="G" v-model="qi.d1" class="xuanze">{{item.topic_and_stem.options.G}}</el-checkbox>
                     </el-checkbox-group>
                        </template> 
                        <p>答案:{{item.right_ans.answer}}</p>
                         <p>解析:{{item.knowledge_point}}</p>
                  </div>
       
             </div>
                <!-- 判断题demo -->
            <div class="dxs" :class="tab!=tabs[3]?'tt':''" >
                <p class="headp">判断题</p>
                            <div class="danxuan zong" v-for="(item,i) in allmsg.true_or_false" :key="i">
                <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                <template>
            <el-radio v-model="pan.d1" label="true" class="xuanze">对</el-radio>
            <el-radio v-model="pan.d1" label="false"  class="xuanze">错</el-radio>
                </template>
                <p>答案:{{item.right_ans.answer}}</p>
                 <p>解析:{{item.knowledge_point}}</p>
            </div>
            
            </div>
                <!-- 填空题demo -->
                <div class="tks" :class="tab!=tabs[4]?'tt':''">
                    <p class="headp">填空题</p>
                        <div class="tk zong" v-for="(item,i) in allmsg.fill" :key="i">
                        <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                         <p>答案:{{item.right_ans.answer}}</p>
                              <p>解析:{{item.knowledge_point}}</p> 
                </div>
                </div>
    </div>
    <!-- <div class="con-right">
         <p class="headp">
            答题卡
        </p>
    </div> -->
       <div style="height:60px:float:left">
       </div>
 </div>

    
 
</template>



<script>
  export default {
          // 开局调用
    created(){
        this.zdytest();
    },
       data() {
      return {
        //  所有的数据
        allmsg:{},
        sureclose:false,
        zdy:{
            g:'',
            sx:''
        },
        // 是否隐藏
        ishidden:false,
        // 单选题答案存储
        dan:{
            d:['A','B']
        },
        // 多选题答案储存
        duo:{
            d1:['C','A']
        },
        // 判断题
        pan:{
            d1:[]
        },
        // 七选五
        qi:{
            d1:[]
        },
        // tab选项卡
        tab:1,
        // tab选项卡的四个
        tabs:[1,2,3,4,5],
      }
    },
methods:{
// 结束查看
end:function(){
    this.$router.push("testpage")
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
                       this.dan.d[i]=''
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
                       this.qi.d1[i]=[];
                       this.allmsg.seven_selected_five[i].right_ans = JSON.parse(this.allmsg.seven_selected_five[i].right_ans)
                    this.allmsg.seven_selected_five[i].topic_and_stem = JSON.parse(this.allmsg.seven_selected_five[i].topic_and_stem)
                   }
                // 判断的处理                
                 for(let i=0;i<this.allmsg.true_or_false.length;i++){
                       this.pan.d1[i]='';
                        this.allmsg.true_or_false[i].right_ans = JSON.parse(this.allmsg.true_or_false[i].right_ans)
                    this.allmsg.true_or_false[i].topic_and_stem = JSON.parse(this.allmsg.true_or_false[i].topic_and_stem)
                   }
                // 填空的处理
                 for(let i=0;i<this.allmsg.fill.length;i++){
                       this.qi.d1[i]=[];
                       this.allmsg.fill[i].right_ans = JSON.parse(this.allmsg.fill[i].right_ans)
                    this.allmsg.fill[i].topic_and_stem = JSON.parse(this.allmsg.fill[i].topic_and_stem)
                   }
             }else{
                this.$message.error("获取内容失败！")
             }
        },
        // 开始考试
        starexam:function(){
            this.ishidden=true;
         
          
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
    z-index: -1;
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