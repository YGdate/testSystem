<template>
  <div class="editContainer">
    <div @click="handleClose" class="close">
      <i class="el-icon-error"></i>
    </div>
    <div class="fun-container">
      <top>作文</top>
      <div class="row">
        <div class="fun-content">
          <div class="content-title">选项录入</div>
          <div class="option-input">
            <analysis v-model="title" width="250px" title="题干"></analysis>
            <analysis v-model="answer" placeholder=" " width="50px" title="答案"></analysis>
            <analysis
              v-model="item.content"
              v-for="(item,index) in optionItem"
              :key="index"
              :title="item.title"
              width="250px"
            ></analysis>
          </div>
          <div @click="handleAdd" class="option-add">增加题目</div>
        </div>
        <div class="listion">
          <div class="title">听力题</div>
          <div class="content">
            <span style="margin-right: 10px">听力录音上传</span>
            <el-upload
              class="upload-demo"
              action="http://47.113.121.50/api/question"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :headers="submitFile"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <div slot="tip" class="el-upload__tip">只能上传mp3文件</div>
              <i style="cursor: pointer" class="el-icon-upload2"></i>
            </el-upload>
          </div>
        </div>
      </div>
      <div style="margin-top: 15px;width:600px">
        <tmsz v-on:get-option="getOption($event)"></tmsz>
      </div>
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
@import url("../fun-page/common");
.fun-content {
  width: 750px;
  padding: 10px;
  position: relative;
  box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
}
.row {
  display: flex;
}
.option-input {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.option-add {
  position: absolute;
  right: 0;
  cursor: pointer;
  text-align: center;
  top: 70px;
  padding: 0 5px;
  background-color: chocolate;
  color: #fff;
  width: 30px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.listion {
  margin-left: 15px;
  height: 250px;
  width: 200px;
  box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
  padding: 10px;
  .title {
    margin-bottom: 10px;
  }
}
</style>

<script>
import Analysis from "../fun-page/Analysis";
import Tmsz from "../fun-page/Tmsz";
import Top from "../Title";
export default {
  components: {
    Analysis,
    Tmsz,
    Top
  },
  props: {
    top_title: String,
    editData: Object
  },
  data() {
    return {
      fileList: [],
      optionItem: [],
      option: ["A", "B", "C", "D"],
      index: 0,
      grade: "",
      semester: "",
      category: "",
      degree_of_difficulty: "",
      analyze: "",
      title: "",
      answer: "",
      submitFile: {
        Authorization: sessionStorage.getItem("token")
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleAdd() {
      this.optionItem.push({
        title: "选项" + this.option[this.index],
        content: ""
      });
      this.index++;
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
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
          title: this.title,
          answer: this.answer
        })
        .then(res => {
          this.$message({
            message: res.data.msg,
            type: "success"
          });
        });
    },
    handleClose() {
      this.$emit("model-four-close");
    }
  }
};
</script>