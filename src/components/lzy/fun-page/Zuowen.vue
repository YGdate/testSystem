<template>
  <div class="fun-container">
    <top>听力</top>
    <div class="row">
      <div class="fun-content">
        <div class="content-title">选项录入</div>
        <div v-for="(item,index) in list" :key="index" class="option-input">
          <analysis v-model="item.title" :content="item.title" width="250px" title="题干"></analysis>
          <analysis
            v-model="item.answer"
            :content="item.answer"
            placeholder=" "
            width="50px"
            title="答案"
          ></analysis>
          <analysis v-model="item.option_one" :content="item.option_one" width="250px" title="选项A"></analysis>
          <analysis v-model="item.option_two" :content="item.option_two" width="250px" title="选项B"></analysis>
          <analysis
            v-model="item.option_three"
            :content="item.option_three"
            width="250px"
            title="选项C"
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
      newData: ""
    };
  },
  created() {
    let paramData = this.$route.params.paramData;
    let newData = JSON.parse(paramData);
    this.newData = newData;
    console.log(newData)
    this.title = newData.topic_and_stem.title;
    this.answer = newData.right_ans.answer;

    let obj

  },
  mounted() {
    this.$refs.tmsz.analysis = this.newData.test_analyze;
    this.$refs.tmsz.knowledge_point = this.newData.knowledge_point;
    this.$refs.tmsz.isGrade = true;
    this.$refs.tmsz.isSemester = true;
    this.$refs.tmsz.isDifficulty = true;
    this.$refs.tmsz.checkedGrade = this.newData.grade;
    this.$refs.tmsz.checkedSemester = this.newData.semester;
    this.$refs.tmsz.checkedDifficulty = this.newData.degree_of_difficulty;
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleAdd() {
      this.list.push({
        title: "",
        answer: "",
        option_one: "",
        option_two: "",
        option_three: ""
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
      let grade = this.grade_c.indexOf(this.$refs.tmsz.checkedGrade);
      let semester = this.semester_c.indexOf(this.$refs.tmsz.checkedSemester);
      let difficulty = this.difficulty_c.indexOf(
        this.$refs.tmsz.checkedDifficulty
      );
      let analysis = this.$refs.tmsz.analysis;
      let knowledge_point = this.$refs.tmsz.knowledge_point;

      let title = {};
      let answer = {};
      for (let i = 0; i < this.list.length; i++) {
        let position = i + 1;
        title["question_" + position] = {
          title: this.list[i].title,
          options: {
            A: this.list[i].option_one,
            B: this.list[i].option_two,
            C: this.list[i].option_three
          }
        };
        answer["" + position] = this.list[i].answer;
      }
      this.title = title,
      this.answer = answer

        this.$http("question", {
          grade: grade,
          semester: semester,
          knowledge_point: knowledge_point,
          category: "translation",
          analyze: analysis,
          degree_of_difficulty: difficulty,
          title: this.title,
          answer: this.answer
        }).then(res => {
          this._msg(res.data);
        });
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