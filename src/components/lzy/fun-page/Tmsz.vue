<template>
  <div class="container" :style="{width: width, height: 250 + 'px'}">
    <div class="title">题目设置</div>
    <div class="option">
      <el-dropdown>
        <el-button type="primary">
          {{isGrade?checkedGrade:'年级选择'}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            @click.native="getGrade(index)"
            :key="index"
            v-for="(item,index) in grade"
          >{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <el-button type="primary">
          {{isSemester?checkedSemester:'学期选择'}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            @click.native="getSemester(index)"
            :key="index"
            v-for="(item,index) in semester"
          >{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <el-button type="primary">
          {{isDifficulty?checkedDifficulty:'难度选择'}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            @click.native="getDifficulty(index)"
            :key="index"
            v-for="(item,index) in difficulty"
          >{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <analysis v-model="analysis" :content="analysis" title="解析"></analysis>
    <analysis v-model="knowledge_point" :content="knowledge_point" title="知识点" placeholder="选填"></analysis>
  </div>
</template>

<style lang="less" scoped>
.container {
  padding: 10px;
  box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
  .title {
    margin-bottom: 20px;
  }
  .option {
    margin-bottom: 20px;
    .el-dropdown {
      margin-right: 5px;
    }
  }
}
</style>

<script>
import Analysis from "./Analysis";
export default {
  components: {
    Analysis
  },
  data() {
    return {
      grade: [
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
      difficulty: ["简单", "一般", "适中", "困难", "很难"],
      category: [
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
      analysis: "",
      knowledge_point: '',
      semester: ["上学期", "下学期"],
      isGrade: null,
      isSemester: null,
      isType: null,
      isDifficulty: null,
      checkedGrade: "",
      checkedSemester: "",
      checkedType: "",
      checkedDifficulty: "",
      data_grade: "",
      data_semester: "",
      data_difficulty: "",
      data_type: ""
    };
  },
  props: {
    width: String
  },
  watch: {
    totalOption: {
      handler: function(val) {
        this.$emit("get-option", val);
      },
      deep: true
    }
  },
  methods: {
    getGrade(index) {
      this.data_grade = index;
      let option = this.grade[index];
      this.isGrade = !this.isGrade;
      this.checkedGrade = option;
    },
    getSemester(index) {
      this.data_semester = index;
      let option = this.semester[index];
      this.isSemester = !this.isSemester;
      this.checkedSemester = option;
    },
    getDifficulty(index) {
      this.data_difficulty = index;
      let option = this.difficulty[index];
      this.isDifficulty = !this.isDifficulty;
      this.checkedDifficulty = option;
    }
  }
};
</script>