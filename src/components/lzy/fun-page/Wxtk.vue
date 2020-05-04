<template>
  <div class="fun-container">
    <top>完型填空</top>
    <div class="cardContent">
      <div class="title">题目内容</div>
      <div class="content">sdfsdsf</div>
      <div class="insert">插入空格</div>
    </div>
    <div class="anwser-edit">
      <div class="title">选项设置</div>
      <div class="flex">
        <Analysis bgr="#74b9ff" title="A" width="750px">
          <span style="cursor: pointer;color:#30336b;margin-left:10px;position:relative;right:55px;top:12px">删除</span>
        </Analysis>
        <Analysis bgr="#74b9ff" title="B" width="750px">
          <span style="cursor: pointer;color:#30336b;margin-left:10px;position:relative;right:55px;top:12px">删除</span>
        </Analysis>
        <Analysis bgr="#74b9ff" title="C" width="750px">
          <span style="cursor: pointer;color:#30336b;margin-left:10px;position:relative;right:55px;top:12px">删除</span>
        </Analysis>
        <Analysis bgr="#74b9ff" title="D" width="750px">
          <span style="cursor: pointer;color:#30336b;margin-left:10px;position:relative;right:55px;top:12px">删除</span>
        </Analysis>
      </div>
    </div>
    <div class="bottom-flex">
      <div class="bottom-left">
        <div class="bottom-title">答案编辑</div>
        <div class="bottom-check">
          <Analysis bgr="#74b9ff" title="A" placeholder=" " width="300px"></Analysis>
          <Analysis bgr="#74b9ff" title="B" placeholder=" " width="300px"></Analysis>
          <Analysis bgr="#74b9ff" title="C" placeholder=" " width="300px"></Analysis>
          <Analysis bgr="#74b9ff" title="D" placeholder=" " width="300px"></Analysis>
        </div>
      </div>
      <tmsz></tmsz>
    </div>
    <div class="end">
      <el-button type="primary">确定录入</el-button>
    </div>
  </div>
</template>

<style lang="less" scope>
@import url("./common.less");
.card-title {
  position: relative;
  width: 800px;
  height: 200px;
  padding: 15px;
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
    top: 70px;
    width: 30px;
    text-align: center;
    padding: 5px 7px;
    background-color: yellowgreen;
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
.bottom-title {
  margin-bottom: 10px;
}
.bottom-flex {
  display: flex;
}
.bottom-left{
  width: 400px;
  box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
  margin-right: 20px;
  padding: 10px;
}
.bottom-check{
  display: flex;
  flex-wrap: wrap;
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