<template>
  <div class="fun-container">
    <top>英语填空题</top>
    <div class="cardContent">
      <div class="title">题目内容</div>
      <div class="content">
        <textarea v-model="title_content" rows="10" cols="120"></textarea>
      </div>
      <div @click="handleInsert" class="insert">插入空格</div>
    </div>
    <div class="anwser-edit">
      <div class="title">答案编辑</div>
      <div class="flex">
        <Analysis
          v-for="(item,index) in answer_edit"
          :key="index"
          :title="index"
          :content="item.content"
          v-model="item.content"
          width="150px"
        ></Analysis>
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
      options: {},
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

      let answer = newData.right_ans.answer;
      this.answer_edit = answer;
      console.log(answer);
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
      let answer = {};
      for (let i in this.answer_edit) {
        answer[i] = this.answer_edit[i];
      }

      let grade = this.grade_c.indexOf(this.$refs.tmsz.checkedGrade);
      let semester = this.semester_c.indexOf(this.$refs.tmsz.checkedSemester);
      let difficulty = this.difficulty_c.indexOf(
        this.$refs.tmsz.checkedDifficulty
      );
      let analysis = this.$refs.tmsz.analysis;
      let knowledge_point = this.$refs.tmsz.knowledge_point;

      let isPass = false;
      for (let i = 0; i < this.answer_edit.length; i++) {
        if (
          this.answer_edit[i].content != "" &&
          this.title_content != "" &&
          grade != -1 &&
          semester != -1 &&
          difficulty != -1 &&
          analysis != ""
        ) {
          console.log(this.answer_edit[i].content)
          isPass = true;
        } else {
          isPass = false;
          this.$message.error("请检查表格内容是否合理");
          break
        }
      }
      if (isPass == true) {
        if (this.$route.params.type == "edit") {
          this.$http
            .patch("question/" + this.newData.id, {
              grade: grade,
              semester: semester,
              category: "fill",
              degree_of_difficulty: difficulty,
              analyze: analysis,
              knowledge_point: knowledge_point,
              title: this.title_content,
              answer: answer
            })
            .then(res => {
              this._msg(res.data);
            });
        } else {
          this.$http
            .post("question", {
              grade: grade,
              semester: semester,
              category: "fill",
              degree_of_difficulty: difficulty,
              analyze: analysis,
              knowledge_point: knowledge_point,
              title: this.title_content,
              answer: answer
            })
            .then(res => {
              this._msg(res.data);
            });
        }
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