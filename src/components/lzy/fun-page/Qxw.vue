<template>
  <div class="fun-container">
    <top>英语七选五</top>
    <div class="cardContent">
      <div class="title">题目内容</div>
      <div class="content">
        <input v-model="title_content" class="area" type="text" />
      </div>
      <div @click="handleInsert" class="insert">插入空格</div>
    </div>
    <div class="anwser-edit">
      <div class="title">选项设置</div>
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
    <div class="bottom-flex">
      <div class="bottom-left">
        <div class="bottom-title">答案编辑</div>
        <div class="bottom-check">
          <Analysis
            v-for="(item,index) in option_edit"
            :key="index"
            :title="item.title"
            v-model="item.content"
            placeholder=" "
            width="50px"
          ></Analysis>
        </div>
      </div>
      <tmsz v-on:get-option="getOption($event)"></tmsz>
    </div>
    <div class="end">
      <el-button @click.native="handleSubmit" type="primary">确定录入</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
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
      count: 1,
      index: 0,
      answer_edit: [],
      option_edit: [],
      word: ["A", "B", "C", "D", "E", "F", "G", "H"],
      title_content: "",
      grade: "",
      semester: "",
      category: "",
      degree_of_difficulty: "",
      analyze: "",
      options: []
    };
  },
  methods: {
    handleInsert() {
      let position = this.count;
      let word = this.word[this.index];
      this.answer_edit.push({
        title: position.toString(),
        content: ""
      });
      this.option_edit.push({
        title: word,
        content: ""
      });
      this.count++;
      this.index++;
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
      let options = {};
      for (let i = 0; i < this.answer_edit.length; i++) {
        let title = this.answer_edit[i].title;
        let value = this.answer_edit[i].content;
        anwser[title] = value;
        let word = this.option_edit[i].title;
        let value2 = this.option_edit[i].content;
        options[word] = value2;
      }
      this.$http
        .post("question", {
          grade: this.grade,
          semester: this.semester,
          category: this.category,
          degree_of_difficulty: this.degree_of_difficulty,
          title: this.title_content,
          answer: anwser,
          options: options
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