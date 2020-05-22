<template>

  <el-row class="question-content">
    <el-row class="questionTitle"  :gutter="10">
      <el-col :span="20" style="text-align: justify;text-justify:inter-ideograph;">
        {{title}}（{{score}}分）
      </el-col>
      <el-col :span="4">
        <div style="display:flex;justify-content:flex-end;align-items:center">
          <el-input @blur="changeValue" size="mini"  maxlength="3" type="number" style="width:80%;margin:0 5px" v-model="scoreALL"
            placeholder="0.0">
          </el-input><span> 分</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
     <el-row style="margin-bottom:10px">
        考生答案：
     </el-row>
      <el-row>
        {{aws}}
     </el-row>
    </el-row>


    <!-- 正确答案 -->
    <el-row class="answer">
      正确范文：
    </el-row>
    <el-row class="analysis" style="text-align: justify;text-justify:inter-ideograph;">
      {{answer}}
    </el-row>
  </el-row>

</template>
<script>
  export default {
    props:['content'],
    data(){
      return{
        scoreALL:'',
        title:'',
        answer:'',
        aws:'',
        score:0,
        questionId:0
      }
    },
    created(){
      console.log(this.content);
      this.dataComputed()
     
    },
   
    methods:{
      change(id) {
        this.questionId = id
        this.$store.state.questionTile.forEach(item => {
          if (item.idIndex == id) {
            this.scoreALL = item.score
          }
        })
      },
      changeValue(){
        if(Number(this.scoreALL)<0 || Number(this.scoreALL)>this.score)
        return this.$message.warning('评分大小不能超过0~'+this.score+'分')

        let questionData = this.$store.state.questionTile
        if(this.scoreALL!=''){
          questionData.forEach(item=>{
            if(item.idIndex==this.questionId){
              item.score = this.scoreALL
            }
          })
        }
         console.log(questionData);
        this.$store.commit('alertQuestionTile',questionData)
      },
      
     
      dataComputed(){
       let data = this.content
       console.log(data);
        this.title = JSON.parse(data.topic_and_stem).title
        this.answer = data.right_ans
        this.score = data.score
        // 答案
        this.aws = data.ans

      }
    }

  }
</script>

<style lang="less" scoped>
  .main {
    width: 997px;
    // 试题样式
    .question-content {
      >* {
        margin-bottom: 20px;
      }

      font-size: 14px;

      .questionTitle {
        .el-col:nth-of-type(1) {
          font-size: 14px;
        }

        .el-col:nth-of-type(2) {
          font-size: 14px;
          display: flex;
          justify-content: space-between;

        }
      }

      .questionSelect {
        .el-radio-group {
          display: flex;
          flex-wrap: wrap;

          .el-radio {
            width: 100%;
            margin-bottom: 10px;
          }
        }
      }

      .answer {
        span {
          font-weight: 600;
          color: #f4c521;
        }
      }

      .selectBtn {
        display: flex;
        margin: 0 auto;
        width: 50%;
        justify-content: space-around;

        .el-button {
          background: #24c9e3;
          color: #fff;
        }
      }
    }

  }
</style>