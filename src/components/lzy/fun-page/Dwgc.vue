<template>
  <div class="fun-container">
    <top>短文改错</top>
    <div class="cardContent">
      <div class="title">题目内容</div>
      <div class="content">
        <input v-model="title_content" class="area" type="text" />
      </div>
      <div @click="handleInsert" class="insert">插入空格</div>
    </div>
    <div class="anwser-edit">
      <div class="title">答案编辑</div>
      <div class="flex">
        <Analysis
          v-for="(item,index) in answer_edit"
          :key="index"
          :title="item.title"
          v-model="item.content"
          width="150px"
        ></Analysis>
      </div>
    </div>
    <tmsz v-on:get-option="getOption($event)"></tmsz>
    <div class="end">
      <el-button @click.native="handleSubmit" type="primary">确定录入</el-button>
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
    .area {
      height: 150px;
      width: 800px;
      padding: 0 10px;
    }
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
  },
  data() {
    return {
      answer_edit: [],
      count: 1,
      title_content: "",
      grade: "",
      semester: "",
      category: "",
      degree_of_difficulty: "",
      analyze: "",
      options: {}
    };
  },
  methods: {
    handleInsert() {
      let position = this.count;
      this.answer_edit.push({
        title: position.toString(),
        content: ""
      });
      this.count++;
    },
    getOption(event) {
      this.grade = event[0];
      this.semester = event[1];
      this.category = event[2];
      this.degree_of_difficulty = event[3];
      this.analyze = event[4];
    },
    handleSubmit() {
      let anwser = {};
      for (let i = 0; i < this.answer_edit.length; i++) {
        let title = this.answer_edit[i].title;
        let value = this.answer_edit[i].content;
        anwser[title] = value;
      }
      this.$http
        .post("question", {
          grade: this.grade,
          semester: this.semester,
          category: this.category,
          degree_of_difficulty: this.degree_of_difficulty,
          title: this.title_content,
          answer: anwser
        })
        .then(res => {
          this.$message({
            message: res.data.msg,
            type: "success"
          });
        });
    }
  }
};
</script>