<template>
  <div class="fun-container">
    <top>不定项选择</top>
    <div class="fun-content">
      <div class="fun-row1">
        <analysis title="题干"></analysis>
        <analysis placeholder=" " title="答案" width="50px"></analysis>
        <analysis title="选项A"></analysis>
        <analysis title="选项B"></analysis>
      </div>
      <div class="fun-row2">
        <button style="background-color: #f4c521" class="fun-button" type="button">删除一个选项</button>
        <button style="background-color: #f4c521" class="fun-button" type="button">添加一个选项</button>
      </div>
      <div class="fun-row3">
        <tmsz width="600px"></tmsz>
      </div>
      <div class="fun-row4">
        <el-button type="primary">确定录入</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./common.less");

.fun-container {
  .fun-content {
    width: 1200px;
    .fun-row1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .fun-row2 {
      margin-top: 10px;
      .fun-button {
        width: 150px;
        border: 0;
        color: #fff;
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 10px 0;
      }
    }
    .fun-row4 {
      margin: 20px 0;
      display: flex;
      justify-content: center;
    }
  }
}
</style>

<script>
import Tmsz from "./Tmsz";
import Analysis from "./Analysis";
import Top from '../Title'
export default {
  components: {
    Tmsz,
    Analysis,
    Top
  }
};
</script>