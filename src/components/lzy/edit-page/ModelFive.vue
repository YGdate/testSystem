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
          <input v-model="fy_text" class="fy" type="text" />
        </div>
        <div class="right">
          <div class="title">翻译范文</div>
          <input v-model="fy_content" class="fy" type="text" />
        </div>
      </div>
      <tmsz v-on:get-option="getOption($event)"></tmsz>
      <div class="end">
        <el-button @click.native="handleSubmit" type="primary">确定录入</el-button>
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
@import url("../fun-page/common.less");

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
  height: 200px;
}
.add {
  background-color: orange;
  padding: 5px;
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
}
</style>

<script>
import Tmsz from "../fun-page/Tmsz";
import Top from "../Title";
export default {
  components: {
    Tmsz,
    Top
  },
  props: {
    top_title: String,
    editData: Object
  },
  data() {
    return {
      fy_text: "",
      fy_content: "",
      word: [],
      grade: "",
      semester: "",
      category: "",
      degree_of_difficulty: "",
      analyze: ""
    };
  },
  methods: {
    handlInsert() {
      this.word.push({
        value: ""
      });
    },
    getOption(event) {
      this.grade = event[0];
      this.semester = event[1];
      this.category = event[2];
      this.degree_of_difficulty = event[3];
      this.analyze = event[4];
    },
    handleSubmit() {
      this.$http
        .patch("question/" + this.editData.id, {
          grade: this.grade,
          semester: this.semester,
          category: this.category,
          analyze: this.analyze,
          degree_of_difficulty: this.degree_of_difficulty,
          title: this.fy_text,
          answer: this.fy_content
        })
        .then(res => {
          this.$message({
            message: res.data.msg,
            type: "success"
          });
        });
    },
    handleClose() {
      this.$emit("model-five-close");
    }
  }
};
</script>