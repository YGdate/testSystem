<template>
  <div class="editContainer">
    <div @click="handleClose" class="close">
      <i class="el-icon-error"></i>
    </div>
    <div class="fun-container">
      <top>翻译</top>
      <div class="row">
        <div class="left">
          <div class="title">翻译文本</div>
          <div class="fy">{{editData.topic_and_stem.title}}</div>
        </div>
        <div class="right">
          <div class="title">翻译范文</div>
          <div class="fy">{{editData.right_ans.answer}}</div>
        </div>
      </div>
      <div class="fun-row3">
        <el-button type="primary">年级：{{grade[editData.grade]}}</el-button>
        <el-button type="primary">学期： {{semester[editData.semester]}}</el-button>
        <el-button type="primary">题型： {{editData.category}}</el-button>
        <el-button type="primary">难度：{{difficulty[editData.degree_of_difficulty]}}</el-button>
        <analysis title="解析" :content="editData.test_analyze"></analysis>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("../fun-page/common");
.editContainer {
  padding: 10px;
  z-index: 100;
  background-color: #fff;
  position: absolute;
  top: 500px;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  .close {
    float: right;
    cursor: pointer;
  }
}
.row {
  display: flex;
  .left,
  .right {
    width: 350px;
    margin-right: 15px;
    height: 270px;
    box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
    padding: 10px;
    .title {
      margin-bottom: 10px;
    }
  }
}
.label {
  margin: 20px 0;
  .item {
    background-color: #118aff;
    color: #fff;
    border-radius: 15px;
    padding: 4px 5px;
    outline: none;
    border: 0;
    width: 70px;
    margin-left: 10px;
  }
}
.fy {
  width: 350px;
  //   height: 200px;
}
.add {
  background-color: orange;
  padding: 5px;
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
}
.fun-row3{
    margin-top: 70px;
}
</style>

<script>
import Top from "../Title";

export default {
  components: {
    Top
  },
  props: {
    editData: Object
  },
  data() {
    return {
      fy_text: "",
      fy_content: "",
      word: [],
      option: ["A", "B", "C", "D"],
      grade: [
        "一年级",
        "二年级",
        "三年级",
        "四年级",
        "五年级",
        "六年级",
        "初一",
        "初二",
        "初三",
        "高一",
        "高二",
        "高三",
        "大一",
        "大二",
        "大三",
        "大四"
      ],
      semester: ["上册", "下册"],
      difficulty: ["简单", "一般", "适中", "困难", "很难"],
      index: 0,
      optionItem: [],
      title: "",
      answer: "",
      category: "",
      degree_of_difficulty: "",
      analyze: "",
      options: {}
    };
  },
  methods: {
    handleClose() {
      this.$emit("view-five-close");
    }
  }
};
</script>