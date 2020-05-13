<template>

  <el-row class="question-content">
    <el-row class="questionTitle" :gutter="10">
      <el-col :span="24" style="text-align: justify;text-justify:inter-ideograph;">
         {{title}}（{{scoer}}分）
      </el-col>
      <!-- <el-col :span="4">
        <el-button size="mini" :class="isright ?'':'falsebg'" icon="el-icon-check" circle></el-button>
        <el-button size="mini" :class="!isright ?'':'truebg'" icon="el-icon-close" circle></el-button>
      </el-col> -->
    </el-row>

    <!-- 选择内容 -->
    <el-row class="questionSelect">
      <el-checkbox-group v-model="radio">
          <el-checkbox style="dipaly:block;width:100%;margin-bottom:10px" v-for="(item,i) in option" :key="i" :label="item.name">{{item.name}}---{{item.value}}</el-checkbox>
      </el-checkbox-group>
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
        isright:true,
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
        let newdata = []
        for(let i in testData.options){
          newdata.push({
            name:i,
            value:testData.options[i]
          })
        }
        this.option =newdata 
        this.radio = data.right_ans.split(',')
        console.log(this.radio);
        this.answer = data.ans
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