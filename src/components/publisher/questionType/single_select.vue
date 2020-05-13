<template>

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
  </el-row>

</template>
<script>
  export default {
    data(){
      return{
        isright: true,
        radio:'',
        balue:''
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