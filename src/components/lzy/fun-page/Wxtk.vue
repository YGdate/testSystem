<template>
  <div class="fun-container">
    <top>完型填空</top>
    <div class="cardContent">
      <div class="title">题目内容</div>
      <div class="content">
        <textarea :content="title_content" v-model="title_content" rows="10" cols="120"></textarea>
      </div>
      <div class="insert">插入空格</div>
    </div>
    <div class="anwser-edit">
      <div class="title">选项设置</div>
      <div>
        <Option
          ref="option"
          v-on:handle-delete="Delete(index)"
          v-for="(item,index) in option_list"
          :key="index"
          :title="item"
        ></Option>
      </div>
    </div>
    <div class="bottom-flex">
      <div class="bottom-left">
        <div class="bottom-title">答案编辑</div>
        <div class="bottom-check">
          <analysis :content="answer_1" v-model="answer_1" width="100px" title="选项1"></analysis>
          <analysis :content="answer_2" v-model="answer_2" width="100px" title="选项2"></analysis>
          <analysis :content="answer_3" v-model="answer_3" width="100px" title="选项3"></analysis>
          <analysis :content="answer_4" v-model="answer_4" width="100px" title="选项4"></analysis>
          <analysis :content="answer_5" v-model="answer_5" width="100px" title="选项5"></analysis>
          <analysis :content="answer_6" v-model="answer_6" width="100px" title="选项6"></analysis>
          <analysis :content="answer_7" v-model="answer_7" width="100px" title="选项7"></analysis>
          <analysis :content="answer_8" v-model="answer_8" width="100px" title="选项8"></analysis>
          <analysis :content="answer_9" v-model="answer_9" width="100px" title="选项9"></analysis>
          <analysis :content="answer_10" v-model="answer_10" width="100px" title="选项10"></analysis>
          <analysis :content="answer_11" v-model="answer_11" width="100px" title="选项11"></analysis>
          <analysis :content="answer_12" v-model="answer_12" width="100px" title="选项12"></analysis>
          <analysis :content="answer_13" v-model="answer_13" width="100px" title="选项13"></analysis>
          <analysis :content="answer_14" v-model="answer_14" width="100px" title="选项14"></analysis>
          <analysis :content="answer_15" v-model="answer_15" width="100px" title="选项15"></analysis>
          <analysis :content="answer_16" v-model="answer_16" width="100px" title="选项16"></analysis>
          <analysis :content="answer_17" v-model="answer_17" width="100px" title="选项17"></analysis>
          <analysis :content="answer_18" v-model="answer_18" width="100px" title="选项18"></analysis>
          <analysis :content="answer_19" v-model="answer_19" width="100px" title="选项19"></analysis>
          <analysis :content="answer_20" v-model="answer_20" width="100px" title="选项20"></analysis>
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
import Option from "./Option";

export default {
  components: {
    Analysis,
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
        "选项10",
        "选项11",
        "选项12",
        "选项13",
        "选项14",
        "选项15",
        "选项16",
        "选项17",
        "选项18",
        "选项19",
        "选项20"
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
      answer_11: "",
      answer_12: "",
      answer_13: "",
      answer_14: "",
      answer_15: "",
      answer_16: "",
      answer_17: "",
      answer_18: "",
      answer_19: "",
      answer_20: "",
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

    let newData = JSON.parse(paramData);
    this.newData = newData;

    this.title_content = newData.topic_and_stem.title;
    this.answer = newData.right_ans.answer;

    // 答案
    this.answer_1 = newData.right_ans.answer["1"];
    this.answer_2 = newData.right_ans.answer["2"];
    this.answer_3 = newData.right_ans.answer["3"];
    this.answer_4 = newData.right_ans.answer["4"];
    this.answer_5 = newData.right_ans.answer["5"];
    this.answer_6 = newData.right_ans.answer["6"];
    this.answer_7 = newData.right_ans.answer["7"];
    this.answer_8 = newData.right_ans.answer["8"];
    this.answer_9 = newData.right_ans.answer["9"];
    this.answer_10 = newData.right_ans.answer["10"];
    this.answer_11 = newData.right_ans.answer["11"];
    this.answer_12 = newData.right_ans.answer["12"];
    this.answer_13 = newData.right_ans.answer["13"];
    this.answer_14 = newData.right_ans.answer["14"];
    this.answer_15 = newData.right_ans.answer["15"];
    this.answer_16 = newData.right_ans.answer["16"];
    this.answer_17 = newData.right_ans.answer["17"];
    this.answer_18 = newData.right_ans.answer["18"];
    this.answer_19 = newData.right_ans.answer["19"];
    this.answer_20 = newData.right_ans.answer["20"];
  },
  mounted() {
    let options = this.newData.topic_and_stem.options;
    this.$refs.option[0].option_one = options["1"].A;
    this.$refs.option[0].option_one = options["1"].B;
    this.$refs.option[0].option_one = options["1"].C;
    this.$refs.option[0].option_one = options["1"].D;

    this.$refs.option[1].option_one = options["2"].A;
    this.$refs.option[1].option_one = options["2"].B;
    this.$refs.option[1].option_one = options["2"].C;
    this.$refs.option[1].option_one = options["2"].D;

    this.$refs.option[2].option_one = options["3"].A;
    this.$refs.option[2].option_one = options["3"].B;
    this.$refs.option[2].option_one = options["3"].C;
    this.$refs.option[2].option_one = options["3"].D;

    this.$refs.option[3].option_one = options["4"].A;
    this.$refs.option[3].option_one = options["4"].B;
    this.$refs.option[3].option_one = options["4"].C;
    this.$refs.option[3].option_one = options["4"].D;

    this.$refs.option[4].option_one = options["5"].A;
    this.$refs.option[4].option_one = options["5"].B;
    this.$refs.option[4].option_one = options["5"].C;
    this.$refs.option[4].option_one = options["5"].D;

    this.$refs.option[5].option_one = options["6"].A;
    this.$refs.option[5].option_one = options["6"].B;
    this.$refs.option[5].option_one = options["6"].C;
    this.$refs.option[5].option_one = options["6"].D;

    this.$refs.option[6].option_one = options["7"].A;
    this.$refs.option[6].option_one = options["7"].B;
    this.$refs.option[6].option_one = options["7"].C;
    this.$refs.option[6].option_one = options["7"].D;

    this.$refs.option[7].option_one = options["8"].A;
    this.$refs.option[7].option_one = options["8"].B;
    this.$refs.option[7].option_one = options["8"].C;
    this.$refs.option[7].option_one = options["8"].D;

    this.$refs.option[8].option_one = options["9"].A;
    this.$refs.option[8].option_one = options["9"].B;
    this.$refs.option[8].option_one = options["9"].C;
    this.$refs.option[8].option_one = options["9"].D;

    this.$refs.option[9].option_one = options["10"].A;
    this.$refs.option[9].option_one = options["10"].B;
    this.$refs.option[9].option_one = options["10"].C;
    this.$refs.option[9].option_one = options["10"].D;

    this.$refs.option[10].option_one = options["11"].A;
    this.$refs.option[10].option_one = options["11"].B;
    this.$refs.option[10].option_one = options["11"].C;
    this.$refs.option[10].option_one = options["11"].D;

    this.$refs.option[11].option_one = options["12"].A;
    this.$refs.option[11].option_one = options["12"].B;
    this.$refs.option[11].option_one = options["12"].C;
    this.$refs.option[11].option_one = options["12"].D;

    this.$refs.option[12].option_one = options["13"].A;
    this.$refs.option[12].option_one = options["13"].B;
    this.$refs.option[12].option_one = options["13"].C;
    this.$refs.option[12].option_one = options["13"].D;

    this.$refs.option[13].option_one = options["14"].A;
    this.$refs.option[13].option_one = options["14"].B;
    this.$refs.option[13].option_one = options["14"].C;
    this.$refs.option[13].option_one = options["14"].D;

    this.$refs.option[14].option_one = options["15"].A;
    this.$refs.option[14].option_one = options["15"].B;
    this.$refs.option[14].option_one = options["15"].C;
    this.$refs.option[14].option_one = options["15"].D;

    this.$refs.option[15].option_one = options["16"].A;
    this.$refs.option[15].option_one = options["16"].B;
    this.$refs.option[15].option_one = options["16"].C;
    this.$refs.option[15].option_one = options["16"].D;

    this.$refs.option[16].option_one = options["17"].A;
    this.$refs.option[16].option_one = options["17"].B;
    this.$refs.option[16].option_one = options["17"].C;
    this.$refs.option[16].option_one = options["17"].D;

    this.$refs.option[17].option_one = options["18"].A;
    this.$refs.option[17].option_one = options["18"].B;
    this.$refs.option[17].option_one = options["18"].C;
    this.$refs.option[17].option_one = options["18"].D;

    this.$refs.option[18].option_one = options["19"].A;
    this.$refs.option[18].option_one = options["19"].B;
    this.$refs.option[18].option_one = options["19"].C;
    this.$refs.option[18].option_one = options["19"].D;

    this.$refs.option[19].option_one = options["20"].A;
    this.$refs.option[19].option_one = options["20"].B;
    this.$refs.option[19].option_one = options["20"].C;
    this.$refs.option[19].option_one = options["20"].D;

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
    getOption(event) {
      this.grade = event[0];
      this.semester = event[1];
      this.category = event[2];
      this.degree_of_difficulty = event[3];
      this.analyze = event[4];
    },
    handleSubmit() {
      console.log(this.$refs.option);
      let grade = this.grade_c.indexOf(this.$refs.tmsz.checkedGrade);
      let semester = this.semester_c.indexOf(this.$refs.tmsz.checkedSemester);
      let difficulty = this.difficulty_c.indexOf(
        this.$refs.tmsz.checkedDifficulty
      );
      let analysis = this.$refs.tmsz.analysis;
      let knowledge_point = this.$refs.tmsz.knowledge_point;

      let answer = {
        "1": this.answer_1,
        "2": this.answer_2,
        "3": this.answer_3,
        "4": this.answer_4,
        "5": this.answer_5,
        "6": this.answer_6,
        "7": this.answer_7,
        "8": this.answer_8,
        "9": this.answer_9,
        "10": this.answer_10,
        "11": this.answer_11,
        "12": this.answer_12,
        "13": this.answer_13,
        "14": this.answer_14,
        "15": this.answer_15,
        "16": this.answer_16,
        "17": this.answer_17,
        "18": this.answer_18,
        "19": this.answer_19,
        "20": this.answer_20
      };

      let options = {};
      for (let i = 0; i < this.$refs.option.length; i++) {
        let position = i + 1;
        options[position] = {
          A: this.$refs.option[i].option_one,
          B: this.$refs.option[i].option_two,
          C: this.$refs.option[i].option_three,
          D: this.$refs.option[i].option_four
        };
      }

      this.$http
        .post("question", {
          grade: grade,
          semester: semester,
          knowledge_point: knowledge_point,
          category: "fill_blank",
          analyze: analysis,
          degree_of_difficulty: difficulty,
          title: this.title_content,
          options: options,
          answer: answer
        })
        .then(res => {
          this._msg(res.data);
        });
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