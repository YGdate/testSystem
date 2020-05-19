<template>
  <div class="fun-container">
    <top>听力</top>
    <div class="row">
      <div class="fun-content">
        <div class="content-title">选项录入</div>
        <div v-for="(item,index) in list" :key="index" class="option-input">
          <analysis v-model="item.title" :content="item.title" width="250px" title="题干"></analysis>
          <analysis
            v-model="answer[index+1]"
            :content="answer[index+1]"
            placeholder=" "
            width="50px"
            title="答案"
          ></analysis>
          <analysis v-model="item.options.A" :content="item.options.A" width="250px" title="选项A"></analysis>
          <analysis v-model="item.options.B" :content="item.options.B" width="250px" title="选项B"></analysis>
          <analysis v-model="item.options.C" :content="item.options.C" width="250px" title="选项C"></analysis>
        </div>
        <div @click="handleAdd" class="option-add">增加题目</div>
      </div>
      <div class="listion">
        <div class="title">听力题</div>
        <div class="content">
          <span style="margin-right: 10px">听力录音上传</span>
          <el-upload
            class="upload-demo"
            ref="upload"
            action="http://47.113.121.50/api/qustion"
            :on-change="handleChange"
            :file-list="fileList"
            :auto-upload="false"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传mp3文件</div>
          </el-upload>
        </div>
      </div>
    </div>
    <div style="margin-top: 15px;width:600px">
      <tmsz ref="tmsz" v-on:get-option="getOption($event)"></tmsz>
    </div>
    <div class="end">
      <el-button @click.native="handleSubmit" type="primary">确定录入</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./common.less");
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
import Tmsz from "./Tmsz";
import Analysis from "./Analysis";
import Top from "../Title";
export default {
  components: {
    Tmsz,
    Analysis,
    Top
  },
  data() {
    return {
      fileList: [],
      optionItem: [],
      list: [],
      index: 0,
      grade: "",
      semester: "",
      category: "",
      degree_of_difficulty: "",
      analyze: "",
      title: "",
      answer: "",
      // _c
      semester_c: ["上学期", "下学期"],
      grade_c: [
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
      difficulty_c: ["简单", "一般", "适中", "困难", "很难"],
      category_c: [
        "single_select",
        "multi_select",
        "non_directional_select",
        "true_or_false",
        "fill",
        "seven_selected_five",
        "fill_blank",
        "choose_fill_blank",
        "text_mistake",
        "translation",
        "read_understand",
        "composition",
        "listening"
      ],
      submitFile: {
        Authorization: sessionStorage.getItem("token")
      },
      newData: "",
      voice: ""
    };
  },
  created() {
    let paramData = this.$route.params.paramData;
    if (paramData != undefined) {
      let newData = JSON.parse(paramData);
      this.newData = newData;
      console.log(newData);
      this.title = newData.topic_and_stem.title;
      this.answer = newData.right_ans.answer;

      let question_1 = newData.topic_and_stem.title.question_1;
      let question_2 = newData.topic_and_stem.title.question_2;
      let question_3 = newData.topic_and_stem.title.question_3;
      let question_4 = newData.topic_and_stem.title.question_4;

      this.list.push(question_1);
      this.list.push(question_2);
      this.list.push(question_3);
      this.list.push(question_4);
    }
  },
  mounted() {
    if (this.newData != "") {
      this.$refs.tmsz.analysis = this.newData.test_analyze;
      this.$refs.tmsz.knowledge_point = this.newData.knowledge_point;
      this.$refs.tmsz.isGrade = true;
      this.$refs.tmsz.isSemester = true;
      this.$refs.tmsz.isDifficulty = true;
      this.$refs.tmsz.checkedGrade = this.newData.grade;
      this.$refs.tmsz.checkedSemester = this.newData.semester;
      this.$refs.tmsz.checkedDifficulty = this.newData.degree_of_difficulty;
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleAdd() {
      if (this.list.length != 4) {
        this.list.push({
          title: "",
          answer: "",
          options: {
            option_one: "",
            option_two: "",
            option_three: ""
          }
        });
        this.index++;
      } else {
        this.$message.error("不能继续添加题目");
      }
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
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
      this.voice = file
    },
    handleSubmit() {
      let grade = this.grade_c.indexOf(this.$refs.tmsz.checkedGrade);
      let semester = this.semester_c.indexOf(this.$refs.tmsz.checkedSemester);
      let difficulty = this.difficulty_c.indexOf(
        this.$refs.tmsz.checkedDifficulty
      );
      let analysis = this.$refs.tmsz.analysis;
      let knowledge_point = this.$refs.tmsz.knowledge_point;

      let title = {};
      console.log(this.voice);
      // if (this.list.length != 0) {
      //   for (let i = 0; i < this.list.length; i++) {
      //     let num = i + 1;
      //     title["question_" + num] = this.list[i];
      //   }
      // }
      // if (this.$route.params.type == "edit") {
      //   this.$http
      //     .patch("question/" + this.newData.id, {
      //       grade: grade,
      //       semester: semester,
      //       knowledge_point: knowledge_point,
      //       category: "listening",
      //       analyze: analysis,
      //       degree_of_difficulty: difficulty,
      //       title: title,
      //       answer: this.answer
      //     })
      //     .then(res => {
      //       this._msg(res.data);
      //     });
      // } else {
      //   this.$http("question", {
      //     grade: grade,
      //     semester: semester,
      //     knowledge_point: knowledge_point,
      //     category: "listening ",
      //     analyze: analysis,
      //     degree_of_difficulty: difficulty,
      //     title: title,
      //     answer: this.answer,
      //     voice: ''
      //   }).then(res => {
      //     this._msg(res.data);
      //   });
      // }
    },
    _msg(res) {
      if (res.code == 0) {
        this.$message({
          message: res.msg,
          type: "success"
        });
      } else {
        this.$message.error(res.msg);
      }
    }
  },
  handleClose() {
    this.$emit("model-four-close");
  }
};
</script>