<template>

  <el-row class="question-content">
    <el-row class="questionTitle" :gutter="10">
      <el-col :span="24">
         {{title}}（{{scoer}}分）
      </el-col>
    </el-row>

    <!-- 选择内容 -->
    <el-row class="questionSelect">
      <el-radio-group v-model="radio">
        <el-radio v-for="(item,i) in option" :key="i" :label="item.name">{{item.name}}---{{item.value}}</el-radio>
      
      </el-radio-group>
    </el-row>
    <!-- 正确答案 -->
    <el-row class="answer">
      正确答案：<span>{{answer}}</span>
    </el-row>

    <el-row >
      答案解析：{{answerAnalyze}}
    </el-row>
  </el-row>

</template>
<script>
  export default {
    props: ['content'],
    data() {
      return {
        radio:'',
        
        scoreALL: '',
        title: '',
        answer: '',
        scoer: 0,
        questionId: 0,
        answerAnalyze:'',
        option:[]
      }
    }, 
    created() {
      console.log(this.content);
      this.dataComputed()
    },
    methods:{
      dataComputed() {
        console.log(this.scoreALL);
        let data = this.content
        let testData = JSON.parse(data.topic_and_stem)
        this.title = testData.title
        
        console.log(this.option);
        let newOption = []
          for(let item in testData.options){
          newOption.push(
            {name:item,
            value:testData.options[item]}
          )
        }
        this.option = newOption
        this.radio = data.ans
        this.answer = data.right_ans
        
        this.answerAnalyze = data.test_analyze
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