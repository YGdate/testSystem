<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="7">
        <el-card>
          <el-row class="card">答题卡</el-row>
          <!-- 答题卡内容 -->
          <el-row>
            <el-row class="card-title">
              客观题（系统评分）
            </el-row>
            <el-row class="card-info">
              <span :class="'truebg'">1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </el-row>
            <el-divider></el-divider>
          </el-row>
          <!-- 答题卡内容 -->
          <el-row>
            <el-row class="card-title">
              主观题（老师评分）
            </el-row>
            <el-row class="card-info">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </el-row>
            <el-divider></el-divider>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="17">
        <el-card>
          <el-row class="paper-info" type="flex" justify="space-between">
            <el-col :span="6">试卷详情</el-col>
            <el-col :span="12">
              <el-button size="small">退出评分</el-button>
              <el-button size="small">提交评分</el-button>
            </el-col>
          </el-row>
          <el-row class="info-id">
            ID：123456
          </el-row>
          <el-row class="info-content" type="flex">
            <el-col>考试名称：第一次月考</el-col>
            <el-col>组卷方式：手动组卷</el-col>
            <el-col>组卷总分：120分</el-col>
            <el-col>客观题得分：58（60分）</el-col>
            <el-col>主观题得分：58（60分）</el-col>
            <el-col>总分：100分</el-col>
          </el-row>
          <!-- 试题内容 -->
          <el-divider content-position="left">单选题</el-divider>
          <el-row class="question-content">

            <el-row class="questionTitle" :gutter="10">
              <el-col :span="18">
                1.我是题目，我是我是题目，我是我是题目，我是我是题目，我是我是题目，我是我是题目，我是（3分）
              </el-col>
              <el-col :span="6">
                <el-button size="mini" :class="isright ?'':'falsebg'" icon="el-icon-check" circle></el-button>
                <el-button size="mini" :class="!isright ?'':'truebg'" icon="el-icon-close" circle></el-button>
                <div style="display:flex;justify-content:flex-end;align-items:center">
                  <el-input size="mini" maxlength="3" type="number" style="width:80%;margin:0 5px" v-model="balue"
                    placeholder="0.0">
                  </el-input><span> 分</span>
                </div>
              </el-col>
            </el-row>

            <!-- 选择内容 -->
            <el-row class="questionSelect">
              <el-radio-group v-model="radio">
                <el-radio :label="3">备选项</el-radio>
                <el-radio :label="6">备选项</el-radio>
                <el-radio :label="9">备选项</el-radio>
                 <el-radio :label="10">备选项</el-radio>
              </el-radio-group>
            </el-row>

            <!-- 正确答案 -->
            <el-row class="answer">
              正确答案：<span>B</span>
            </el-row>

            <el-row class="analysis">
             答案解析：我是解析我是解析我是解析我是解析我是解析我是解析我是解析我是解析我是解析我是解析我是解析我是解析我是解析
            </el-row>
            <el-row class="selectBtn">
              <el-button size="mini">上一题</el-button>
              <el-button size="mini">下一题</el-button>
            </el-row>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        isright: true,
        balue: '',
        radio:''
      }
    }
  }
</script>

<style lang="less" scoped>
  .main {
    width: 997px;

    // 正确错误
    .truebg {
      background: #24c9e3;
      color: #fff;
    }

    .falsebg {
      background: red;
      color: #fff;
    }


    .paper-info {
      margin-bottom: 20px;

      .el-col:nth-of-type(1) {

        width: 100%;
        font-size: 18px;
        height: 28px;
        border-left: 5px solid #f4c521;
        box-sizing: border-box;
        padding-left: 10px;
      }

      .el-col:nth-of-type(2) {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .el-button:nth-of-type(2) {
          background: #24c9e3;
          color: #fff;
        }

        .el-button:nth-of-type(1) {
          background: #f4c521;
          color: #fff;
        }
      }
    }

    .info-id {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 10px;
    }

    .info-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .el-col {
        width: 30%;
        margin-bottom: 10px;
        font-size: 14px;
        color: #333;
        text-align: left;
      }
    }

    // 试题样式
    .question-content {
      >*{
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
      .questionSelect{
        .el-radio-group {
          display: flex;
          flex-wrap: wrap;
          .el-radio{
            width: 100%;
            margin-bottom: 10px;
          }
        }
      }
      .answer{
        span{
          font-weight: 600;
          color: #f4c521;
        }
      }
      .selectBtn{
        display: flex;
        margin: 0 auto;
        width: 50%;
        justify-content: space-around;
        .el-button{
          background: #24c9e3;
          color: #fff;
        }
      }
    }

    >.el-row {
      width: 100%;
    }

    .card {
      margin-bottom: 20px;
      width: 100%;
      font-size: 18px;
      border-left: 5px solid #24c9e3;
      box-sizing: border-box;
      padding-left: 10px;
    }

    .card-title {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .card-info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .truebg {
        background: #24c9e3;
        color: #fff !important;
      }

      span {
        cursor: pointer;
        width: 31px;
        height: 31px;
        border-radius: 50%;
        margin: 6px;
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        justify-content: center;
      }

      div {
        width: 31px;
        border-radius: 50%;
        margin: 0 6px;
      }
    }
  }
</style>