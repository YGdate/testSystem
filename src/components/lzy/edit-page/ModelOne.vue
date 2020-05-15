<template>
  <div class="editContainer">
    <div @click="handleClose" class="close">
      <i class="el-icon-error"></i>
    </div>
    <div class="fun-container">
      <top>{{top_title}}</top>
      <div class="fun-content">
        <div class="fun-row1">
          <analysis v-model="title" title="题干"></analysis>
          <analysis v-model="answer" placeholder=" " title="答案" width="50px"></analysis>
          <div class="optionList" ref="optionList">
            <analysis v-model="item.content" v-for="item in optionItem" :title="item.title"></analysis>
          </div>
        </div>
        <div class="fun-row2">
          <button
            style="background-color: #f4c521;cursor:pointer;"
            @click="handleDelete"
            class="fun-button"
            type="button"
          >删除一个选项</button>
          <button
            style="background-color: #f4c521;cursor:pointer;"
            @click="handleAdd"
            class="fun-button"
            type="button"
          >添加一个选项</button>
        </div>
        <div class="fun-row3">
          <tmsz v-on:get-option="getOption($event)" width="600px"></tmsz>
        </div>
        <div class="fun-row4">
          <el-button @click.native="handleSubmit" type="primary">确定录入</el-button>
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
  top: 700px;
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
import Tmsz from "../fun-page/Tmsz";
import Analysis from "../fun-page/Analysis";
import Top from "../Title";
export default {
  components: {
    Analysis,
    Tmsz,
    Top
  },
  props: {
    editData: Object,
    top_title: String
  },
  data() {
    return {
      option: ["A", "B", "C", "D"],
      index: 0,
      optionItem: [],
      title: "",
      answer: "",
      grade: "",
      semester: "",
      category: "",
      degree_of_difficulty: "",
      analyze: "",
      options: {}
    };
  },
  methods: {
    handleClose() {
      this.$emit("model-one-close");
    },
    handleDelete() {
      this.optionItem.pop();
    },
    handleAdd() {
      this.optionItem.push({
        title: "选项" + this.option[this.index],
        content: ""
      });
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
      let optionAnswer = [];
      let optionTitle = [];
      let options = {};
      for (let i = 0; i < this.optionItem.length; i++) {
        optionAnswer[i] = this.optionItem[i].content;
        optionTitle[i] = this.option[i];
        options[optionTitle[i]] = optionAnswer[i];
      }
      this.options = options;

      this.$http
        .patch("question/" + this.editData.id, {
          grade: this.grade,
          semester: this.semester,
          category: this.category,
          analyze: this.analyze,
          degree_of_difficulty: this.degree_of_difficulty,
          title: this.title,
          options: this.options,
          answer: this.answer
        })
        .then(res => {
          console.log(res);
          let msg = res.data.msg;
          this.$message({
            message: msg,
            type: "success"
          });
        });
    }
  }
};
</script>