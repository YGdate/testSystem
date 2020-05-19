<template>
  <div class="fun-container">
    <top>选词填空</top>
    <div class="cardContent">
      <div class="title">题目内容</div>
      <div class="content">
        <textarea v-model="title_content" rows="10" cols="120"></textarea>
      </div>
      <!-- <div class="insert">插入空格</div> -->
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
          :value="select_set"
        ></Option>
      </div>
    </div>
    <div class="bottom-flex">
      <div class="bottom-left">
        <div class="bottom-title">答案编辑</div>
        <div class="bottom-check">
          <div>
            选项1
            <el-select v-model="answer_1" placeholder="请选择">
              <el-option
                v-for="item in answer_option_1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            选项2
            <el-select v-model="answer_2" placeholder="请选择">
              <el-option
                v-for="item in answer_option_2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            选项3
            <el-select v-model="answer_3" placeholder="请选择">
              <el-option
                v-for="item in answer_option_3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            选项4
            <el-select v-model="answer_4" placeholder="请选择">
              <el-option
                v-for="item in answer_option_4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            选项5
            <el-select v-model="answer_5" placeholder="请选择">
              <el-option
                v-for="item in answer_option_5"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            选项6
            <el-select v-model="answer_6" placeholder="请选择">
              <el-option
                v-for="item in answer_option_6"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            选项7
            <el-select v-model="answer_7" placeholder="请选择">
              <el-option
                v-for="item in answer_option_7"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            选项8
            <el-select v-model="answer_8" placeholder="请选择">
              <el-option
                v-for="item in answer_option_8"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            选项9
            <el-select v-model="answer_9" placeholder="请选择">
              <el-option
                v-for="item in answer_option_9"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            选项10
            <el-select v-model="answer_10" placeholder="请选择">
              <el-option
                v-for="item in answer_option_10"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
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
      answer_option_1: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        },
        {
          value: "D",
          label: "D"
        },
        {
          value: "E",
          label: "E"
        },
        {
          value: "F",
          label: "F"
        },
        {
          value: "G",
          label: "G"
        },
        {
          value: "H",
          label: "H"
        },
        {
          value: "I",
          label: "I"
        },
        {
          value: "J",
          label: "J"
        }
      ],
      answer_option_2: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        },
        {
          value: "D",
          label: "D"
        },
        {
          value: "E",
          label: "E"
        },
        {
          value: "F",
          label: "F"
        },
        {
          value: "G",
          label: "G"
        },
        {
          value: "H",
          label: "H"
        },
        {
          value: "I",
          label: "I"
        },
        {
          value: "J",
          label: "J"
        }
      ],
      answer_option_3: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        },
        {
          value: "D",
          label: "D"
        },
        {
          value: "E",
          label: "E"
        },
        {
          value: "F",
          label: "F"
        },
        {
          value: "G",
          label: "G"
        },
        {
          value: "H",
          label: "H"
        },
        {
          value: "I",
          label: "I"
        },
        {
          value: "J",
          label: "J"
        }
      ],
      answer_option_4: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        },
        {
          value: "D",
          label: "D"
        },
        {
          value: "E",
          label: "E"
        },
        {
          value: "F",
          label: "F"
        },
        {
          value: "G",
          label: "G"
        },
        {
          value: "H",
          label: "H"
        },
        {
          value: "I",
          label: "I"
        },
        {
          value: "J",
          label: "J"
        }
      ],
      answer_option_5: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        },
        {
          value: "D",
          label: "D"
        },
        {
          value: "E",
          label: "E"
        },
        {
          value: "F",
          label: "F"
        },
        {
          value: "G",
          label: "G"
        },
        {
          value: "H",
          label: "H"
        },
        {
          value: "I",
          label: "I"
        },
        {
          value: "J",
          label: "J"
        }
      ],
      answer_option_6: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        },
        {
          value: "D",
          label: "D"
        },
        {
          value: "E",
          label: "E"
        },
        {
          value: "F",
          label: "F"
        },
        {
          value: "G",
          label: "G"
        },
        {
          value: "H",
          label: "H"
        },
        {
          value: "I",
          label: "I"
        },
        {
          value: "J",
          label: "J"
        }
      ],
      answer_option_7: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        },
        {
          value: "D",
          label: "D"
        },
        {
          value: "E",
          label: "E"
        },
        {
          value: "F",
          label: "F"
        },
        {
          value: "G",
          label: "G"
        },
        {
          value: "H",
          label: "H"
        },
        {
          value: "I",
          label: "I"
        },
        {
          value: "J",
          label: "J"
        }
      ],
      answer_option_8: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        },
        {
          value: "D",
          label: "D"
        },
        {
          value: "E",
          label: "E"
        },
        {
          value: "F",
          label: "F"
        },
        {
          value: "G",
          label: "G"
        },
        {
          value: "H",
          label: "H"
        },
        {
          value: "I",
          label: "I"
        },
        {
          value: "J",
          label: "J"
        }
      ],
      answer_option_9: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        },
        {
          value: "D",
          label: "D"
        },
        {
          value: "E",
          label: "E"
        },
        {
          value: "F",
          label: "F"
        },
        {
          value: "G",
          label: "G"
        },
        {
          value: "H",
          label: "H"
        },
        {
          value: "I",
          label: "I"
        },
        {
          value: "J",
          label: "J"
        }
      ],
      answer_option_10: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        },
        {
          value: "D",
          label: "D"
        },
        {
          value: "E",
          label: "E"
        },
        {
          value: "F",
          label: "F"
        },
        {
          value: "G",
          label: "G"
        },
        {
          value: "H",
          label: "H"
        },
        {
          value: "I",
          label: "I"
        },
        {
          value: "J",
          label: "J"
        }
      ],

      option_edit: [],
      option_list: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
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
      newData: "",
      select_set: ""
    };
  },
  created() {
    let paramData = this.$route.params.paramData;
    if (paramData != undefined) {
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
    }
  },
  mounted() {
    if (this.newData != "") {
      let options = this.newData.topic_and_stem.options;
      this.$refs.xuanci_option[0].value = options.A;
      this.$refs.xuanci_option[1].value = options.B;
      this.$refs.xuanci_option[2].value = options.C;
      this.$refs.xuanci_option[3].value = options.D;
      this.$refs.xuanci_option[4].value = options.E;
      this.$refs.xuanci_option[5].value = options.F;
      this.$refs.xuanci_option[6].value = options.G;
      this.$refs.xuanci_option[7].value = options.H;
      this.$refs.xuanci_option[8].value = options.I;
      this.$refs.xuanci_option[9].value = options.J;

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
        "1": this.answer_1,
        "2": this.answer_2,
        "3": this.answer_3,
        "4": this.answer_4,
        "5": this.answer_5,
        "6": this.answer_6,
        "7": this.answer_7,
        "8": this.answer_8,
        "9": this.answer_9,
        "10": this.answer_10
      };

      let options = {};
      let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
      let array_check = [];
      for (let i = 0; i < this.$refs.xuanci_option.length; i++) {
        let title = array[i];
        // options[position] = {
        //   A: this.$refs.xuanci_option[i].option_one,
        //   B: this.$refs.xuanci_option[i].option_two,
        //   C: this.$refs.xuanci_option[i].option_three,
        //   D: this.$refs.xuanci_option[i].option_four
        // };
        array_check[i] = this.$refs.xuanci_option[i].value;
        options[title] = this.$refs.xuanci_option[i].value;
      }

      var norepeat2 = array_check.filter(function(item, index, self) {
        return self.indexOf(item) === index && self.lastIndexOf(item) !== index;
      });

      if (norepeat2.length == 0) {
        if (this.$route.params.type == "edit") {
          this.$http
            .patch("question/" + this.newData.id, {
              grade: grade,
              semester: semester,
              knowledge_point: knowledge_point,
              category: "choose_fill_blank",
              analyze: analysis,
              degree_of_difficulty: difficulty,
              title: this.title_content,
              options: options,
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
              category: "choose_fill_blank",
              analyze: analysis,
              degree_of_difficulty: difficulty,
              title: this.title_content,
              options: options,
              answer: answer
            })
            .then(res => {
              this._msg(res.data);
            });
        }
      } else {
        this.$message.error("选项设置不能重复");
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