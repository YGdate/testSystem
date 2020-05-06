<template>
  <div class="fun-container">
    <top>英语填空题</top>
    <div class="cardContent">
      <div class="title">题目内容</div>
      <div class="content">sdfsdsf</div>
      <div class="insert">插入空格</div>
    </div>
    <div class="anwser-edit">
      <div class="title">答案编辑</div>
      <div class="flex">
        <Analysis title="A" width="150px"></Analysis>
        <Analysis title="B" width="150px"></Analysis>
        <Analysis title="C" width="150px"></Analysis>
        <Analysis title="D" width="150px"></Analysis>
        <Analysis title="E" width="150px"></Analysis>
      </div>
    </div>
    <tmsz></tmsz>
    <div class="end">
      <el-button type="primary">确定录入</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./common.less");

.cardContent {
  position: relative;
  height: 200px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
  .title {
    margin-bottom: 10px;
  }
  .content {
    text-indent: 2em;
  }
  .insert {
    position: absolute;
    right: 0;
    color: #fff;
    cursor: pointer;
    top: 70px;
    width: 30px;
    text-align: center;
    padding: 5px 7px;
    background-color: #f4c521;
  }
}
.anwser-edit {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
  .flex {
    display: flex;
    flex-wrap: wrap;
  }
  .title {
    margin-bottom: 10px;
  }
}
</style>

<script>
import Analysis from "./Analysis";
import Tmsz from "./Tmsz";
import Top from "../Title";

export default {
  components: {
    Analysis,
    Tmsz,
    Top
  }
};
</script>