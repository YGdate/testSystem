<template>
  <div class="fun-container">
    <top>短文改错</top>
    <div class="cardContent">
      <div class="title">题目内容</div>
      <div class="content">sdfsdsf士大夫大师傅</div>
      <div class="insert">插入空格</div>
    </div>
    <div class="anwser-edit">
      <div class="title">选项设置</div>
      <div class="flex">
        <Analysis placeholder=" " title="A" width="120px">
          <span style="cursor: pointer;color:#118aff;position:relative;right:40px;top:13px">删除</span>
        </Analysis>
        <Analysis placeholder=" " title="B" width="120px">
          <span style="cursor: pointer;color:#118aff;position:relative;right:40px;top:13px">删除</span>
        </Analysis>
        <Analysis placeholder=" " title="C" width="120px">
          <span style="cursor: pointer;color:#118aff;position:relative;right:40px;top:13px">删除</span>
        </Analysis>
        <Analysis placeholder=" " title="D" width="120px">
          <span style="cursor: pointer;color:#118aff;position:relative;right:40px;top:13px">删除</span>
        </Analysis>
        <Analysis placeholder=" " title="D" width="120px">
          <span style="cursor: pointer;color:#118aff;position:relative;right:40px;top:13px">删除</span>
        </Analysis>
        <Analysis placeholder=" " title="D" width="120px">
          <span style="cursor: pointer;color:#118aff;position:relative;right:40px;top:13px">删除</span>
        </Analysis>
        <Analysis placeholder=" " title="D" width="120px">
          <span style="cursor: pointer;color:#118aff;position:relative;right:40px;top:13px">删除</span>
        </Analysis>
        <Analysis placeholder=" " title="D" width="120px">
          <span style="cursor: pointer;color:#118aff;position:relative;right:40px;top:13px">删除</span>
        </Analysis>
      </div>
    </div>
      <tmsz></tmsz>
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
.bottom-left {
  width: 400px;
  box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
  margin-right: 20px;
  padding: 10px;
}
.bottom-check {
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

