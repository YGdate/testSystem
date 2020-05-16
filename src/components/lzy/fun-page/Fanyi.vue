<template>
  <div class="fun-container">
    <top>翻译</top>
    <div class="row">
      <div class="left">
        <div class="title">翻译文本</div>
        <textarea :content="title" class="fy" v-model="title" rows="10" cols="120"></textarea>
      </div>
      <div class="right">
        <div class="title">翻译范文</div>
        <textarea :content="answer" class="fy" v-model="answer" rows="10" cols="120"></textarea>
      </div>
    </div>
    <tmsz ref="tmsz" v-on:get-option="getOption($event)"></tmsz>
    <div class="end">
      <el-button @click.native="handleSubmit" type="primary">确定录入</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./common.less");

.row {
  display: flex;
  margin-bottom: 20px;
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
import Tmsz from "./Tmsz";
import Top from "../Title";

export default {
  components: {
    Tmsz,
    Top
  },
  data() {
    return {
      title: "",
      answer: "",
      word: [],
      grade: "",
      semester: "",
      category: "",
      degree_of_difficulty: "",
      analyze: "",
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
      ]
    };
  },
    created() {
    let paramData = this.$route.params.paramData;

    let newData = JSON.parse(paramData);
    this.newData = newData;

    this.title = newData.topic_and_stem.title;
    this.answer = newData.right_ans.answer;
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
      console.log(this.$refs.xuanci_option);
      let grade = this.grade_c.indexOf(this.$refs.tmsz.checkedGrade);
      let semester = this.semester_c.indexOf(this.$refs.tmsz.checkedSemester);
      let difficulty = this.difficulty_c.indexOf(
        this.$refs.tmsz.checkedDifficulty
      );
      let analysis = this.$refs.tmsz.analysis;
      let knowledge_point = this.$refs.tmsz.knowledge_point;

      if (
        grade != -1 &&
        semester != -1 &&
        difficulty != -1 &&
        analysis != "" &&
        this.title != "" &&
        this.answer != ""
      ) {
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
      } else {
        this.$message.error("请检查内容是否合理");
      }
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
  }
};
</script>