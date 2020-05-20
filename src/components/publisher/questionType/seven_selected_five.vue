<template>

  <el-row class="question-content">
    <el-row class="questionTitle" :gutter="10">
      <el-col :span="24" style="text-align: justify;text-justify:inter-ideograph;">
        {{title}}（{{scoer}}分）
      </el-col>
    </el-row>

    <el-row>
      <el-row>
        答案选择：
      </el-row>
      <el-row style="dispaly:flex;flex-warp:warp;margin-top:20px" >
        <el-col style="margin-bottom:10px" :span="24" v-for="(item,i) in option" :key="i">{{item.name}} : {{item.value}}</el-col>
      </el-row>
    </el-row>

    <!-- 选择内容 -->
    <el-row class="questionSelect">
      <el-col style="font-weight:600;margin-bottom:10px">
        考生答案：
      </el-col>
     <span v-for="(item,i) in question" :key="i">{{item.name}}--{{item.value}} ， </span>
    </el-row>

    <!-- 正确答案 -->
    <el-row class="answer">
     <el-row style="font-weight:600;margin-bottom:10px">
        正确答案：
       </el-row><span>{{answer}}</span>
    </el-row>

    <el-row>
      答案解析：{{answerAnalyze}}
    </el-row>
  </el-row>

</template>
<script>
  export default {
    props: ['content'],

    data() {
      return {
        radio: '',
        scoreALL: '',
        title: '',
        answer: '',
        scoer: 0,
        questionId: 0,
        answerAnalyze: '',
        question: [],
        option: []
      }
    },
    created() {
      this.dataComputed()
    },
    methods: {
      dataComputed() {
        let data = this.content
        console.log(this.content);
        let testData = JSON.parse(data.topic_and_stem)
        console.log(testData);
        this.title = testData.title
        let newOption = []
       
        for(let item in testData.options){
          newOption.push({
            name:item,
            value:testData.options[item]
          })
        }
       
        this.option = newOption
         console.log(this.option);
        //选择题目
        let newQuestion = []
        for(let item in data.right_ans){
          newQuestion.push({
            name:item,
            value:data.right_ans[item]
          })
        }
        this.question = newQuestion
        console.log(this.question);
        //正确答案
        let rightData = []
        for (let i in data.ans) {
          rightData.push(data.ans[i])
        }
        this.radio = rightData
        //我的答案
        this.answer = data.right_ans
        //解析
        this.answerAnalyze = data.test_analyze
        //分数
        this.scoer = data.score
      }
    }
  }
</script>

<style lang="less" scoped>
  .main {
    width: 100%;
    height: 100%;

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