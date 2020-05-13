<template>

  <el-row class="question-content">
    <el-row class="questionTitle" :gutter="10">
      <el-col :span="20">

        <aplayer autoplay :music="musicList">
        </aplayer>（{{scoer}}分）
      </el-col>
    </el-row>

    <!-- 选择内容 -->
    <el-row class="questionSelect" v-for="(item1,index1) in question" :key="index1">

      <el-row>
        <el-col style="margin-bottom:20px;"><span style="font-size:16px;font-weight:600">{{item1.name}}</span>
        <span> : {{item1.title}}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-radio-group v-model="radio[index1]">
          <el-radio v-for="(item2,i) in item1.value" :key="i" :label="item2.name">{{item2.name}}---{{item2.value}}</el-radio>
        </el-radio-group>
      </el-row>
    </el-row>

    <!-- 正确答案 -->
    <el-row class="answer">
      正确答案：<span>{{answer}}</span>
    </el-row>

    <el-row>
      答案解析：{{answerAnalyze}}
    </el-row>
  </el-row>

</template>
<script>
  import aplayer from 'vue-aplayer'
  export default {
    props: ['content'],
    components: {
      //别忘了引入组件
      aplayer: aplayer
    },
    data() {
      return {
        musicList: {
          title: "听力材料",
          author: "成都东软学院",
          url: 'http://localhost:1122/static/ceshi.mp3',
          pic: "",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        },
        radio: '',

        scoreALL: '',
        title: '',
        answer: '',
        scoer: 0,
        questionId: 0,
        answerAnalyze: '',
        question: []
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
        this.musicList.url = testData.accessory


        let newOption = []
        for (let item in testData.title) {
          let newData = []
          for(let item1 in testData.title[item].options){
            newData.push({
              value:testData.title[item].options[item1],
              name:item1
            }) 
          }
          newOption.push({
            title:testData.title[item].title,
            name: item,
            value: newData
          })
        }
        console.log(newOption);
        //选择题目
        this.question = newOption
        //正确答案
        let rightData = []
        for(let i in data.right_ans){
          rightData.push(data.right_ans[i])
        }
        this.radio = rightData
        //我的答案
        this.answer = data.ans
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