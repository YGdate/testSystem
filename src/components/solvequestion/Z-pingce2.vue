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
        <p class="headp bigp">
            题目类型
        </p>
        <ul class="qc">
            <li :class="tab==tabs[0]?'lactive':''" data-aid="1" @click="qian($event.srcElement.dataset.aid)" >单选题</li>
            <li :class="tab==tabs[1]?'lactive':''" data-aid="2" @click="qian($event.srcElement.dataset.aid)">多选题</li>
            <li :class="tab==tabs[2]?'lactive':''" data-aid="3" @click="qian($event.srcElement.dataset.aid)">七选五</li>
            <li :class="tab==tabs[3]?'lactive':''" data-aid="4" @click="qian($event.srcElement.dataset.aid)">判断题</li>
            <li :class="tab==tabs[4]?'lactive':''" data-aid="5" @click="qian($event.srcElement.dataset.aid)">填空题</li>
            <li :class="tab==tabs[5]?'lactive':''" data-aid="6" @click="qian($event.srcElement.dataset.aid)">选词填空</li>
            <li :class="tab==tabs[6]?'lactive':''" data-aid="7" @click="qian($event.srcElement.dataset.aid)">完型填空</li>
            <li :class="tab==tabs[7]?'lactive':''" data-aid="8" @click="qian($event.srcElement.dataset.aid)">听力</li>
            <li :class="tab==tabs[8]?'lactive':''" data-aid="9" @click="qian($event.srcElement.dataset.aid)">非定向选择</li>
            <li :class="tab==tabs[9]?'lactive':''" data-aid="10" @click="qian($event.srcElement.dataset.aid)">阅读理解</li>
            <li :class="tab==tabs[10]?'lactive':''" data-aid="11" @click="qian($event.srcElement.dataset.aid)">短文改错</li>
             <li :class="tab==tabs[11]?'lactive':''" data-aid="12" @click="qian($event.srcElement.dataset.aid)">翻译</li>
              <li :class="tab==tabs[12]?'lactive':''" data-aid="13" @click="qian($event.srcElement.dataset.aid)">作文</li>
        </ul>
    </div>
    <div class="con-center">
        <!-- 剩余时间 -->
        <span class="time">剩余时间{{fen}}分{{miao}}秒</span>
        <!-- 开始考试 -->
          <el-button type="primary" class="star" :class="{ hidden: ishidden }" @click="starexam">开始考试</el-button>
          <!-- 放弃考试 -->
            <el-button type="primary" class="end" @click="dialogVisible1=true">放弃考试</el-button>
        <!-- 提交考试 -->
 <el-button type="primary" class="star" @click="dialogVisible2=true" :class="{ hidden: !ishidden }">提交考试</el-button>

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
                <div class="duoxuan zong" v-for="(item,i) in allmsg.multi_select" :key="i">
                     <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
   <template>
  <el-checkbox v-model="duo[i]" label="A" class="xuanze">{{item.topic_and_stem.options.A}}</el-checkbox>
  <el-checkbox v-model="duo[i]" label="B" class="xuanze">{{item.topic_and_stem.options.B}}</el-checkbox>
  <el-checkbox v-model="duo[i]" label="C" class="xuanze">{{item.topic_and_stem.options.C}}</el-checkbox>
  <el-checkbox v-model="duo[i]" label="D" class="xuanze">{{item.topic_and_stem.options.D}}</el-checkbox>
</template>
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
                     <el-input v-model="qi[i][0]" maxlength=1 style="width:50px;"  :placeholder="1"></el-input>
                     <el-input v-model="qi[i][1]" maxlength=1 style="width:50px;"  :placeholder="2"></el-input>
                      <el-input v-model="qi[i][2]" maxlength=1 style="width:50px;"  :placeholder="3"></el-input>
                       <el-input v-model="qi[i][3]" maxlength=1 style="width:50px;"  :placeholder="4"></el-input>
                        <el-input v-model="qi[i][4]" maxlength=1 style="width:50px;"  :placeholder="5"></el-input>
                  </div>
       
             </div>
                <!-- 判断题 -->
            <div class="dxs" :class="tab!=tabs[3]?'tt':''">
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

                <!-- 选词填空demo -->
                <div class="xctks" :class="tab!=tabs[5]?'tt':''">
                     <p class="headp">选词填空</p>
                    <div clas="xctk zong" v-for="(item,i) in allmsg.choose_fill_blank" :key="i">
                        <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                          <div v-for="(item, key, x) in allmsg.choose_fill_blank[i].topic_and_stem.options" :key="x">{{key}}:{{item}}</div>           
           <el-input v-model="xuan[i][y]" maxlength=1 style="width:50px;" v-for="(itm,y) in xuan[i]" :key="y" :placeholder="y+1"  @input="updateView($event)"></el-input>
                    </div>
                </div>


                <!-- 完形填空demo -->
                <div class="wxtks" :class="tab!=tabs[6]?'tt':''">
                     <p class="headp">完型填空</p>
                     <div class="wxtk zong" v-for="(item,i) in allmsg.fill_blank" :key="i">
                         <p>{{allmsg.fill_blank[0].topic_and_stem[0]}}
                         <div v-for="(nei,key,i) in allmsg.fill_blank[0].topic_and_stem[1]" :key="i">
                             <p>第{{i+1}}题</p>
                             <el-radio v-model="wan[i]" label="A" class="xuanze">{{nei.A}}</el-radio>
                             <el-radio v-model="wan[i]" label="B" class="xuanze">{{nei.B}}</el-radio>
                            <el-radio v-model="wan[i]" label="C" class="xuanze">{{nei.C}}</el-radio>
                        <el-radio v-model="wan[i]" label="D" class="xuanze">{{nei.D}}</el-radio>
                         </div>
                     </div>
                </div>
                <!-- 听力demo -->
                <div class="tinglis" :class="tab!=tabs[7]?'tt':''">
                    <p class="headp">听力(双击选择)</p>
                    <div v-for="(item2,i2) in allmsg.listening" :key="i2">
                        <p>听力第{{i2+1}}题</p>
                                  <audio :src="item2.topic_and_stem.accessory" controls="controls">
                    Your browser does not support the audio element.
                            </audio>
                    <div class="tingli zong" v-for="(item,i) in allmsg.listening[0].topic_and_stem.title" :key="i" @input="updateView($event)">
                        <p>{{i+1}}.{{item.title}}</p>
                         <template >
            <el-radio v-model="ting[i2][i]" label="A" class="xuanze" >{{item.options.A}}</el-radio>
            <el-radio v-model="ting[i2][i]" label="B"  class="xuanze">{{item.options.B}}</el-radio>
            <el-radio v-model="ting[i2][i]" label="C"  class="xuanze">{{item.options.C}}</el-radio>
            <!-- <el-radio v-model="ting" label="D"  class="xuanze">{{item.options.D}}</el-radio> -->
                </template>
                    </div>
                    </div>
              
                </div>
        <!-- 非定向demo -->
        <div class="fdxs" :class="tab!=tabs[8]?'tt':''">
                    <p class="headp">非定向选择</p>
                    <div class="fdx zong" v-for="(item,i) in allmsg.non_directional_select" :key="i">
                        <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                         <template>
            <el-radio v-model="fei[i]" label="A" class="xuanze">{{item.topic_and_stem.options.A}}</el-radio>
            <el-radio v-model="fei[i]" label="B"  class="xuanze">{{item.topic_and_stem.options.B}}</el-radio>
            <el-radio v-model="fei[i]" label="C"  class="xuanze">{{item.topic_and_stem.options.C}}</el-radio>
            <el-radio v-model="fei[i]" label="D"  class="xuanze">{{item.topic_and_stem.options.D}}</el-radio>
                </template>
                    </div>
        </div>
<!-- 阅读理解的demo -->
<div class="rdljs" :class="tab!=tabs[9]?'tt':''">
    <p class="headp">阅读理解(双击选择)</p>
    <div class="rdlj" v-for="(item,i) in allmsg.read_understand" :key="i">
        <p>{{i+1}}.{{item.topic_and_stem[0]}}</p>
        <div v-for="(ite,key,y) in item.topic_and_stem[1]" :key="y" @input="updateView($event)">
            <p>{{ite.title}}</p>
            <el-radio v-model="yuedu[i][y]" label="A" class="xuanze">{{ite.options.A}}</el-radio>
            <el-radio v-model="yuedu[i][y]" label="B"  class="xuanze">{{ite.options.B}}</el-radio>
            <el-radio v-model="yuedu[i][y]" label="C"  class="xuanze">{{ite.options.C}}</el-radio>
            <el-radio v-model="yuedu[i][y]" label="D"  class="xuanze">{{ite.options.D}}</el-radio>
        </div>
    </div>
</div>


<!-- 短文改错的demo -->
<div class="dwgcs" :class="tab!=tabs[10]?'tt':''">
    <p class="headp">短文改错</p>
    <div class="dwgc zong" v-for="(item,i) in allmsg.text_mistake" :key="i">
        <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
    </div>
</div>


<!-- 翻译的demo -->

<div class="fys" :class="tab!=tabs[11]?'tt':''">
     <p class="headp">翻译</p>
     <div class="fy zong" v-for="(item,i) in allmsg.translation" :key="i">
        <p>{{item.topic_and_stem.title}}</p>
        <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="fy">
</el-input>
    </div>
</div>


<!-- 作文的demo -->

<div class="zws" :class="tab!=tabs[12]?'tt':''">
    <p class="headp">作文</p>
    <div class="zw zong" v-for="(item,i) in allmsg.composition" :key="i">
           <p>{{item.topic_and_stem.title}}</p>
                 <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="zw">
</el-input>
    </div>
</div>









    </div>
    <div class="con-right">
         <p class="headp">
            答题卡
        </p>

            <div class="tkt" v-for="(item,i) in tian" :key="i">
            <p>填空第{{i+1}}题</p>
            <el-input placeholder="请输入内容"  @input="updateView($event)" v-model="tian[i][y]" v-for="(ite,y) in tian[i]" :key="y"></el-input> -->
            
            </div>

            <div class="tkt" v-for="(item,i) in allmsg.text_mistake" :key="i">
            <p>短文改错第{{i+1}}题</p>
            <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="dwgc[i]">
</el-input>
          -->
            
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
        this.exammsg();
       
    },
       data() {
      return {
        //  所有的数据
        allmsg:{},
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
        // 选词填空
        xuan:[],
        // 完型填空
        wan:[],
        // 听力
        ting:[],
        // 非定向选择
        fei:[],
        // 阅读理解
        yuedu:[],
        // 短文该错
        dwgc:[],
        // 翻译
        fy:'',
        // 作文
        zw:'',
        // tab选项卡
        tab:1,
        // tab选项卡的四个
        tabs:[1,2,3,4,5,6,7,8,9,10,11,12,13],
        // 所有时间
        alltime:1800,
        // 分钟
        fen:'30',
        // 秒数
        miao:'0',
        // 音频
        mp3:'',
        // 判断
        hello:''
      }
    },
methods:{

    close:function(){
        this.sureclose = true;
    },
    examover:function(){
            this.$router.push("ziexamover")
        },
        // 获取传过来的值
        async exammsg(){
     var storage = window.sessionStorage; 
      let examid=storage.getItem("examid");
      
          let msg = await this.$http.get('exam/'+examid,{
               params:{
                 candidate_id:parseInt(examid),
               }
             });
             if(msg.data.code==0){
                   let ms = this.$decryptData(msg.data.data);
                   var xf = ms;
                   this.allmsg = ms;
                   console.log(ms)

          //单选题的处理
          if(xf.single_select){
 for(let i=0;i<this.allmsg.single_select.length;i++){
                       this.dan[i]=''
                    this.allmsg.single_select[i].topic_and_stem = JSON.parse(this.allmsg.single_select[i].topic_and_stem)
                   }
          }
                  
            // 多选题的处理
             if(xf.multi_select){
  for(let i=0;i<this.allmsg.multi_select.length;i++){
                       this.duo[i]=[];
                   
                    this.allmsg.multi_select[i].topic_and_stem = JSON.parse(this.allmsg.multi_select[i].topic_and_stem)
                   }
             }
          
             // 七选五的处理      
              if(xf.seven_selected_five){
 let l = [];     
                 for(let i=0;i<this.allmsg.seven_selected_five.length;i++){
                     l[i]=[];
                        for(let g=0;g<5;g++){
                            l[i][g]=""
                        }
                        this.qi=l;
                    this.allmsg.seven_selected_five[i].topic_and_stem = JSON.parse(this.allmsg.seven_selected_five[i].topic_and_stem)
                   }
              }    
            
               // 判断的处理
               if(xf.true_or_false){
for(let i=0;i<this.allmsg.true_or_false.length;i++){
                       this.pan[i]='';
                    this.allmsg.true_or_false[i].topic_and_stem = JSON.parse(this.allmsg.true_or_false[i].topic_and_stem)
                   } 
               }                
                    
                // 选词填空的处理
                if(xf.choose_fill_blank){
for(let i=0;i<this.allmsg.choose_fill_blank.length;i++){
                        this.xuan[i]=[];
                    this.allmsg.choose_fill_blank[i].topic_and_stem = JSON.parse(this.allmsg.choose_fill_blank[i].topic_and_stem);
                        for(let n=0;n<10;n++){
                            this.xuan[i][n]='';
                        }
                   } 
                }
                    
                // 完型填空的处理
              if(xf.fill_blank){
   for(let i=0;i<this.allmsg.fill_blank.length;i++){
                    this.allmsg.fill_blank[i].topic_and_stem = JSON.parse(this.allmsg.fill_blank[i].topic_and_stem);
                    this.wan.length=20;
                    for(let i=0;i<20;i++){
                        this.wan[i]=''
                    }
                        //  for(k in this.allmsg.fill_blank[i].topic_and_stem.options){
                        //     this.wan[wx]='';
                        //      wx++;
                        //      console.log(k)
                        //  }
                   } 
              }
              
                
                // 听力的处理
                 if(xf.listening){
   for(let i=0;i<this.allmsg.listening.length;i++){
                       this.ting[i]=[];
                       let k;
                       let m=0;
                    this.allmsg.listening[i].topic_and_stem = JSON.parse(this.allmsg.listening[i].topic_and_stem)
                    for(k in this.allmsg.listening[i].topic_and_stem.title){
                             this.ting[i][m]='';
                                    m++;
                    }
                   }
                 }
              
                // 非定向选择的处理
                if(xf.non_directional_select){
 for(let i=0;i<this.allmsg.non_directional_select.length;i++){
                       this.fei[i]=''
                    this.allmsg.non_directional_select[i].topic_and_stem = JSON.parse(this.allmsg.non_directional_select[i].topic_and_stem)
                   }
                }
               
                
                // 阅读理解的处理
                 if(xf.read_understand){
   for(let i=0;i<this.allmsg.read_understand.length;i++){
                      this.yuedu[i]=[];
                      let m=0;
                    this.allmsg.read_understand[i].topic_and_stem = JSON.parse(this.allmsg.read_understand[i].topic_and_stem)
                   for(let k in this.allmsg.read_understand[i].topic_and_stem[1]){
                            
                            this.yuedu[i][m]=''
                            m++;
                         }
                      
                  }
                 }
             
                  
                   
                    // 填空题的处理
                     if(xf.fill){
     for(let i=0;i<this.allmsg.fill.length;i++){
                       this.tian[i]=[];
                       for(let g=0;g<this.allmsg.fill[i].space_num;g++){
                           this.tian[i][g]=''
                   }
                    this.allmsg.fill[i].topic_and_stem = JSON.parse(this.allmsg.fill[i].topic_and_stem)
                   }
                     }
                 
                  

                    // 短文改错的处理
                     if(xf.text_mistake){
   for(let i=0;i<this.allmsg.text_mistake.length;i++){
                     this.dwgc[i]='';
                    this.allmsg.text_mistake[i].topic_and_stem = JSON.parse(this.allmsg.text_mistake[i].topic_and_stem)
                   }

                     }
                  
                    // 翻译的处理
                     if(xf.translation){
  for(let i=0;i<this.allmsg.translation.length;i++){
                    this.allmsg.translation[i].topic_and_stem = JSON.parse(this.allmsg.translation[i].topic_and_stem)
                   }
                     }
                  

                //  作文的处理
                if(xf.composition){
for(let i=0;i<this.allmsg.composition.length;i++){
                    this.allmsg.composition[i].topic_and_stem = JSON.parse(this.allmsg.composition[i].topic_and_stem)
                   }
                }


                    this.mp3 = this.allmsg.listening[0].topic_and_stem.accessory
                   console.log(this.allmsg)
             }else{
                 console.log(msg)
                this.$message.error("获取内容失败！")
             }
        },
        // 开始考试
        starexam:function(){
             
            let that = this;
            this.ishidden=true;
         setInterval(function(){
             that.alltime = that.alltime-1;
             that.fen = parseInt(that.alltime/60);
             that.miao = that.alltime%60;
             if(that.alltime == 0){
                   this.$message.success("考试结束！")
                    this.$router.push("testpage");
             }
         },1000)
      
        },
          //   提交考试
        async tijiao(){
            var xf  = this.allmsg;
                // 提交考试答案汇总！
                let solve ={}
            // 单选的处理
            if(xf.single_select){
solve.single_select=[]
            for(let x=0;x<this.allmsg.single_select.length;x++){
                let y = {}
                y.id = this.allmsg.single_select[x].id;
                y.ans = this.dan[x];
                solve.single_select.push(y)
            }
            }
          
            // 多选题的处理
              if(xf.multi_select){
                   solve.multi_select=[]
            for(let x=0;x<this.allmsg.multi_select.length;x++){
                let y = {}
                y.id = this.allmsg.multi_select[x].id;
                y.ans = this.duo[x];
                solve.multi_select.push(y)
            }
            }
         
            // 七选五的处理
            if(xf.seven_selected_five){
   solve.seven_selected_five=[]
            for(let x=0;x<this.allmsg.seven_selected_five.length;x++){
                let y = {}
                y.id = this.allmsg.multi_select[x].id;
                y.ans = {};
                for(let g=0;g<this.qi[x].length;g++){
                    y.ans[g+1]=this.qi[x][g]
                }
                solve.seven_selected_five.push(y)
            }
            }
         
            // 判断题的处理
            if(xf.true_or_false){
  solve.true_or_false=[]
            for(let x=0;x<this.allmsg.true_or_false.length;x++){
                let y = {}
                y.id = this.allmsg.true_or_false[x].id;
                y.ans = this.pan[x];
                solve.true_or_false.push(y)
            }
            }
           
            // 填空的处理
             if(xf.fill){
   solve.fill=[]
            for(let x=0;x<this.allmsg.fill.length;x++){
                let y = {}
                y.id = this.allmsg.fill[x].id;
                y.ans = {};
                for(let g=0;g<this.tian[x].length;g++){
                    y.ans[g+1]=this.tian[x][g]
                }
                solve.fill.push(y)
            }
             }
          
            // 选词填空的处理
             if(xf.choose_fill_blank){
      solve.choose_fill_blank=[]
            for(let x=0;x<this.allmsg.choose_fill_blank.length;x++){
                let y = {}
                y.id = this.allmsg.choose_fill_blank[x].id;
                y.ans = {};
                for(let g=0;g<this.xuan[x].length;g++){
                    y.ans[g+1]=this.xuan[x][g]
                }
                solve.choose_fill_blank.push(y)
            }
             }
           
            // 完形填空的处理
            if(xf.fill_blank){
solve.fill_blank=[]
            for(let x=0;x<this.allmsg.fill_blank.length;x++){
                let y = {}
                y.id = this.allmsg.fill_blank[x].id;
                y.ans = this.wan;
                solve.fill_blank.push(y)
            }
            }
            
            // 听力的处理
             if(xf.listening){
      solve.listening=[]
            for(let x=0;x<this.allmsg.listening.length;x++){
                let y = {}
                y.id = this.allmsg.listening[x].id;
                y.ans = {};
                 for(let g=0;g<this.ting[x].length;g++){
                    y.ans[g+1]=this.ting[x][g]
                }
                solve.listening.push(y)
            }
             }
       
            
                // 非定向选择的处理
                if(xf.non_directional_select){
 solve.non_directional_select=[]
            for(let x=0;x<this.allmsg.non_directional_select.length;x++){
                let y = {}
                y.id = this.allmsg.non_directional_select[x].id;
                y.ans = this.fei[x];
                solve.non_directional_select.push(y)
            }
                }

                // 阅读理解的处理
                  if(xf.read_understand){
      solve.read_understand=[]
            for(let x=0;x<this.allmsg.read_understand.length;x++){
                let y = {}
                y.id = this.allmsg.read_understand[x].id;
                y.ans = [];
                 y.ans=this.yuedu[x]
                solve.read_understand.push(y)
            }
                  }
           
            // 短文改错的处理
             if(xf.text_mistake){
     solve.text_mistake=[]
            for(let x=0;x<this.allmsg.text_mistake.length;x++){
                let y = {}
                y.id = this.allmsg.text_mistake[x].id;
                y.ans = {};
                y.ans[x]=this.dwgc[x]
               
                solve.text_mistake.push(y)
            }
             }
        
            // 翻译的处理
             if(xf.translation){
            solve.translation=[]
            for(let x=0;x<this.allmsg.translation.length;x++){
                let y = {}
                y.id = this.allmsg.translation[x].id;
                y.ans = '';
                y.ans=this.fy;
                solve.translation.push(y)
            }
             }
 
            // 作文的处理
             if(xf.composition){
           solve.composition=[]
            for(let x=0;x<this.allmsg.composition.length;x++){
                let y = {}
                y.id = this.allmsg.composition[x].id;
                y.ans = '';
                y.ans=this.zw;
                solve.composition.push(y)
            }
             }
  
            // 首先是id
             var storage = window.sessionStorage; 
             let examid=storage.getItem("examid");
            //  其次是数据
            let za = JSON.stringify(solve);
            console.log(za)
            // 最后的工作交互
          let msg = await this.$http.post('exam/'+examid,{
              candidate_id:examid,
              answer:za
             });
            if(msg.data.code==0){
                 this.$message.success("考试结束！")
         this.$router.push("testpage");
            }else{
                  this.$message.error("提交失败！")
            }

       
        },
        // 放弃考试
        fangqi:function(){
             this.$router.push("testpage")
        },
        // 绑定
        updateView(e) {
    this.$forceUpdate()
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
      max-height: 400px;
      overflow: auto;
      margin-right: 50px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
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
     max-height: 400px;
      overflow: auto;
      padding: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
      
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
.bigp{
    font-size: 26px;
    color: gray;
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
    margin-bottom: 0;
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
// 翻译的大盒子

</style>