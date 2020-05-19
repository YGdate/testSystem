<template>
  <div class="fun-container">
    <top>短文改错</top>
    <div class="cardContent">
      <div class="title">题目内容</div>
      <div class="content">
        <textarea v-model="title_content" rows="10" cols="120"></textarea>
      </div>
      <div class="insert">插入空格</div>
    </div>
    <div class="anwser-edit">
      <div class="title">选项设置</div>
      <div style="display: flex;flex-direction: row;
      flex-wrap: wrap">
        <Option
          ref="xuanci_option"
          v-on:handle-delete="Delete(index)"
          v-for="(item,index) in option_list"
          :key="index"
          :title="item"
        ></Option>
      </div>
    </div>
    <div class="bottom-flex">
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
import Tmsz from "./Tmsz";
import Top from "../Title";
import Option from "./XuanciOption";

export default {
  components: {
    Tmsz,
    Top,
    Option
  },
  data() {
    return {
      count: 1,
      index: 0,
      answer_edit: [],
      option_edit: [],
      option_list: [
        "选项1",
        "选项2",
        "选项3",
        "选项4",
        "选项5",
        "选项6",
        "选项7",
        "选项8",
        "选项9",
        "选项10"
      ],
      // answer
      answer_1: "",
      answer_2: "",
      answer_3: "",
      answer_4: "",
      answer_5: "",
      answer_6: "",
      answer_7: "",
      answer_8: "",
      answer_9: "",
      answer_10: "",
      //
      title_content: "",
      grade: "",
      semester: "",
      category: "",
      degree_of_difficulty: "",
      analyze: "",
      options: [],
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
      newData: ""
    };
  },
  created() {
    let paramData = this.$route.params.paramData;
    if (paramData != undefined) {
      let newData = JSON.parse(paramData);
      this.newData = newData;

      this.title_content = newData.topic_and_stem.title;
      this.answer = newData.right_ans.answer;
    }
  },
  mounted() {
    if (this.newData != "") {
      let options = this.newData.right_ans.answer;
      this.$refs.xuanci_option[0].value = options[0];
      this.$refs.xuanci_option[1].value = options[1];
      this.$refs.xuanci_option[2].value = options[2];
      this.$refs.xuanci_option[3].value = options[3];
      this.$refs.xuanci_option[4].value = options[4];
      this.$refs.xuanci_option[5].value = options[5];
      this.$refs.xuanci_option[6].value = options[6];
      this.$refs.xuanci_option[7].value = options[7];
      this.$refs.xuanci_option[8].value = options[8];
      this.$refs.xuanci_option[9].value = options[9];

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

      let answer = {
        "1": this.$refs.xuanci_option[0].value,
        "2": this.$refs.xuanci_option[1].value,
        "3": this.$refs.xuanci_option[2].value,
        "4": this.$refs.xuanci_option[3].value,
        "5": this.$refs.xuanci_option[4].value,
        "6": this.$refs.xuanci_option[5].value,
        "7": this.$refs.xuanci_option[6].value,
        "8": this.$refs.xuanci_option[7].value,
        "9": this.$refs.xuanci_option[8].value,
        "10": this.$refs.xuanci_option[9].value
      };

      if (this.$route.params.type == "edit") {
        this.$http
          .patch("question/" + this.newData.id, {
            grade: grade,
            semester: semester,
            knowledge_point: knowledge_point,
            category: "text_mistake",
            analyze: analysis,
            degree_of_difficulty: difficulty,
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
            knowledge_point: knowledge_point,
            category: "text_mistake",
            analyze: analysis,
            degree_of_difficulty: difficulty,
            title: this.title_content,
            answer: answer
          })
          .then(res => {
            this._msg(res.data);
          });
      }
    },
    Delete(index) {
      console.log(index);
      if (index == 0) {
        this.option_list.shift();
      }
      if (index == this.option_list.length - 1) {
        this.option_list.pop();
      } else {
        for (let i = index; i < this.option_list.length; i++) {
          this.option_list[index] = this.option_list[index + 1];
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