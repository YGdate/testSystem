<template>
  <div class="editContainer">
    <div @click="handleClose" class="close">
      <i class="el-icon-error"></i>
    </div>
    <div class="fun-container">
      <top>{{top_title}}</top>
      <div class="fun-content">
        <div class="fun-row1">
          <analysis :content="editData.topic_and_stem.title" title="题干"></analysis>
          <analysis :content="editData.right_ans.answer" placeholder=" " title="答案" width="50px"></analysis>
          <div class="optionList" ref="optionList">
            <analysis
              :content="item"
              v-for="(item,index) in editData.topic_and_stem.options"
              :key="index"
              :title="index"
            ></analysis>
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
  </div>
</template>

<style lang="less">
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
import Analysis from "../fun-page/Analysis";
import Top from "../Title";
export default {
  components: {
    Analysis,
    Top
  },
  props: {
    editData: Object,
    top_title: String
  },
  data() {
    return {
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
      this.$emit("view-one-close");
    },

  }
};
</script>