<template>
  <div class="fun-container">
    <top>英语七选五</top>
    <div class="cardContent">
      <div class="title">题目内容</div>
      <div class="content">
        <textarea v-model="title" :content="title" rows="10" cols="120"></textarea>
      </div>
      <div @click="handleInsert" class="insert">插入空格</div>
    </div>
    <div class="anwser-edit">
      <div class="title">选项设置</div>
      <div class="flex">
        <analysis v-model="option_one" :content="option_one" width="450px" title="A"></analysis>
        <analysis v-model="option_two" :content="option_two" width="450px" title="B"></analysis>
        <analysis v-model="option_three" :content="option_three" width="450px" title="C"></analysis>
        <analysis v-model="option_four" :content="option_four" width="450px" title="D"></analysis>
        <analysis v-model="option_five" :content="option_five" width="450px" title="E"></analysis>
        <analysis v-model="option_six" :content="option_six" width="450px" title="F"></analysis>
        <analysis v-model="option_seven" :content="option_seven" width="450px" title="G"></analysis>
      </div>
    </div>
    <div class="bottom-flex">
      <div class="bottom-left">
        <div class="bottom-title">答案编辑</div>
        <div class="bottom-check">
          <analysis placeholder="A" :content="answer_one" v-model="answer_one" width="50px" title="1"></analysis>
          <analysis placeholder="A" :content="answer_two" v-model="answer_two" width="50px" title="2"></analysis>
          <analysis placeholder="A" :content="answer_three" v-model="answer_three" width="50px" title="3"></analysis>
          <analysis placeholder="A" :content="answer_four" v-model="answer_four" width="50px" title="4"></analysis>
          <analysis placeholder="A" :content="answer_five" v-model="answer_five" width="50px" title="5"></analysis>
        </div>
      </div>
      <tmsz ref="tmsz" v-on:get-option="getOption($event)"></tmsz>
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
      word: ["A", "B", "C", "D", "E", "F", "G"],
      title: "",
      grade: "",
      semester: "",
      category: "",
      degree_of_difficulty: "",
      analyze: "",
      // option
      option_one: "",
      option_two: "",
      option_three: "",
      option_four: "",
      option_five: "",
      option_six: "",
      option_seven: "",
      // answer
      answer_one: "",
      answer_two: "",
      answer_three: "",
      answer_four: "",
      answer_five: "",
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

    console.log(newData);
    this.title = newData.topic_and_stem.title;
    this.answer = newData.right_ans.answer;
    let options = newData.topic_and_stem.options;
    this.option_one = options["A"];
    this.option_two = options["B"];
    this.option_three = options["C"];
    this.option_four = options["D"];
    this.option_five = options['E']
    this.option_six = options['F']
    this.option_seven = options['G']
    // 答案
    this.answer_one = newData.right_ans.answer['1']
    this.answer_two = newData.right_ans.answer['2']
    this.answer_three = newData.right_ans.answer['3']
    this.answer_four = newData.right_ans.answer['4']
    this.answer_five = newData.right_ans.answer['5']
  },
  mounted() {
    console.log(this.$refs.tmsz);
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
    handleInsert() {},
    getOption(event) {
      this.grade = event[0];
      this.semester = event[1];
      this.category = event[2];
      this.degree_of_difficulty = event[3];
      this.analyze = event[4];
    },
    handleSubmit() {
      let options = {
        A: this.option_one,
        B: this.option_two,
        C: this.option_three,
        D: this.option_four,
        E: this.option_five,
        F: this.option_six,
        G: this.option_seven
      };
      let answer = {
        "1": this.answer_one,
        "2": this.answer_two,
        "3": this.answer_three,
        "4": this.answer_four,
        "5": this.answer_five
      };
      console.log(this.$refs.tmsz);
      let grade = this.grade_c.indexOf(this.$refs.tmsz.checkedGrade);
      let semester = this.semester_c.indexOf(this.$refs.tmsz.checkedSemester);
      let difficulty = this.difficulty_c.indexOf(
        this.$refs.tmsz.checkedDifficulty
      );
      let analysis = this.$refs.tmsz.analysis;
      let knowledge_point = this.$refs.tmsz.knowledge_point;

      if (
        this.title != "" &&
        this.option_one != "" &&
        this.option_two != "" &&
        this.option_three != "" &&
        this.option_four != "" &&
        this.option_five != "" &&
        this.option_six != "" &&
        this.option_seven != "" &&
        this.answer_one != "" &&
        this.answer_two != "" &&
        this.answer_three != "" &&
        this.answer_four != "" &&
        this.answer_five != "" &&
        grade != -1 &&
        semester != -1 &&
        difficulty != -1 &&
        analysis != ""
      ) {
        if (
          this.word.indexOf(this.answer_one) != -1 &&
          this.word.indexOf(this.answer_two) != -1 &&
          this.word.indexOf(this.answer_three) != -1 &&
          this.word.indexOf(this.answer_four) != -1 &&
          this.word.indexOf(this.answer_five) != -1
        ) {
          this.$http
            .post("question", {
              grade: grade,
              semester: semester,
              knowledge_point: knowledge_point,
              category: "seven_selected_five",
              analyze: analysis,
              title: this.title,
              degree_of_difficulty: difficulty,
              options: options,
              answer: answer
            })
            .then(res => {
              this._msg(res.data);
            });
        } else {
          this.$message.error("请检查答案格式");
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