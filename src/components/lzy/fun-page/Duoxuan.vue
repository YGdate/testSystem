<template>
  <div class="fun-container">
    <top>英语多选题</top>
    <div class="fun-content">
      <div class="fun-row1">
        <analysis v-model="title" :content="title" title="题干"></analysis>
        <answer ref="answer"></answer>
        <div class="optionList" ref="optionList">
          <analysis v-model="answer_one" :content="answer_one" width="500px" title="选项A"></analysis>
          <analysis v-model="answer_two" :content="answer_two" width="500px" title="选项B"></analysis>
          <analysis v-model="answer_three" :content="answer_three" width="500px" title="选项C"></analysis>
          <analysis v-model="answer_four" :content="answer_four" width="500px" title="选项D"></analysis>
        </div>
      </div>
      <div class="fun-row3">
        <tmsz ref="tmsz" v-on:get-option="getOption($event)" width="600px"></tmsz>
      </div>
      <div class="fun-row4">
        <el-button @click.native="handleSubmit" type="primary">确定录入</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./common.less");

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
.optionList {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
}
</style>

<script>
import Tmsz from "./Tmsz";
import Analysis from "./Analysis";
import Top from "../Title";
import Answer from "./Answer";

export default {
  components: {
    Tmsz,
    Analysis,
    Top,
    Answer
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
      options: {},
      answer_one: "",
      answer_two: "",
      answer_three: "",
      answer_four: "",
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
      newData: ""
    };
  },
  created() {
    let paramData = this.$route.params.paramData;
    if (paramData != undefined) {
      let newData = JSON.parse(paramData);
      this.newData = newData;

      console.log(newData);
      this.title = newData.topic_and_stem.title;
      this.answer = newData.right_ans.answer.split(",");

      let options = newData.topic_and_stem.options;
      this.answer_one = options["A"].toString();
      this.answer_two = options["B"].toString();
      this.answer_three = options["C"].toString();
      this.answer_four = options["D"].toString();
    }
  },
  mounted() {
    if (this.newData != "") {
      console.log(this.$refs.tmsz);
      this.$refs.tmsz.analysis = this.newData.test_analyze;
      this.$refs.tmsz.knowledge_point = this.newData.knowledge_point;
      this.$refs.tmsz.isGrade = true;
      this.$refs.tmsz.isSemester = true;
      this.$refs.tmsz.isDifficulty = true;
      this.$refs.tmsz.checkedGrade = this.newData.grade;
      this.$refs.tmsz.checkedSemester = this.newData.semester;
      this.$refs.tmsz.checkedDifficulty = this.newData.degree_of_difficulty;
      // 答案
      this.$refs.answer.checkedCities = this.answer;
    }
  },
  methods: {
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
      console.log(this.$refs.tmsz);
      let grade = this.grade_c.indexOf(this.$refs.tmsz.checkedGrade);
      let semester = this.semester_c.indexOf(this.$refs.tmsz.checkedSemester);
      let difficulty = this.difficulty_c.indexOf(
        this.$refs.tmsz.checkedDifficulty
      );
      let analysis = this.$refs.tmsz.analysis;
      let knowledge_point = this.$refs.tmsz.knowledge_point;
      let answer_array = this.$refs.answer.checkedCities;
      let answer = answer_array.join(",");

      let option = {
        A: this.answer_one,
        B: this.answer_two,
        C: this.answer_three,
        D: this.answer_four
      };

      console.log(grade, semester, difficulty);

      if (
        grade != -1 &&
        semester != -1 &&
        difficulty != -1 &&
        analysis != "" &&
        option != "" &&
        answer_array.length != 1 &&
        answer_array.length != 0
      ) {
        if (this.$route.params.type == "edit") {
          this.$http
            .patch("question/" + this.newData.id, {
              grade: grade,
              semester: semester,
              degree_of_difficulty: difficulty,
              knowledge_point: knowledge_point,
              category: "multi_select",
              analyze: analysis,
              title: this.title,
              answer: answer,
              options: option
            })
            .then(res => {
              this._msg(res.data);
            });
        } else {
          this.$http
            .post("question", {
              grade: grade,
              semester: semester,
              degree_of_difficulty: difficulty,
              knowledge_point: knowledge_point,
              category: "multi_select",
              analyze: analysis,
              title: this.title,
              answer: answer,
              options: option
            })
            .then(res => {
              this._msg(res.data);
            });
        }
      } else {
        this.$message.error("请检查表格内容是否合理");
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