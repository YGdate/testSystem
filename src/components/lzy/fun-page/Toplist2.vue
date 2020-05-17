<template>
  <div :topData="topData" class="top-list">
    <el-dropdown size="mini" split-button>
      {{isGrade?checkedGrade: '选择年级'}}
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          @click.native="getGrade(index)"
          v-for="(item,index) in grade"
          :key="index"
        >{{item}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown size="mini" split-button>
      {{isSemester?checkedSemester: '选择学期'}}
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          @click.native="getSemester(index)"
          :key="index"
          v-for="(item,index) in semester"
        >{{item}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown size="mini" split-button>
      {{isCategory?checkedCategory: '选择题型'}}
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          @click.native="getCategory(index)"
          :key="index"
          v-for="(item,index) in type"
        >{{item}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown size="mini" split-button>
      {{isDifficulty?checkedDifficulty: '选择难度'}}
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          @click.native="getDifficulty(index)"
          :key="index"
          v-for="(item,index) in difficulty"
        >{{item}}</el-dropdown-item>f
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style lang="less" scoped>
.top-list {
  display: flex;
  margin-bottom: 20px;
}
.el-button--default {
  color: #409eff !important;
}
.el-dropdown {
  margin-right: 10px;
}
</style>

<script>
export default {
  props: {
    topData: Array
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
      type: [
        "单选题",
        "多选题",
        "不定项选择",
        "判断题",
        "填空题",
        "7选5",
        "完型填空",
        "选词填空",
        "短文改错",
        "翻译",
        "阅读理解",
        "作文",
        "听力"
      ],
      category: ['single_select','multi_select','non_directional_select',
      'true_or_false','fill','seven_selected_five','fill_blank','choose_fill_blank',
      'text_mistake','translation','read_understand','composition','listening'],
      semester: ["上册", "下册"],
      isGrade: false,
      isSemester: false,
      isCategory: false,
      isDifficulty: false,
      checkedGrade: "",
      checkedSemester: "",
      checkedCategory: "",
      checkedDifficulty: ""
    };
  },
  methods: {
    getGrade(index) {
      this.$http.get("searchLog?grade=" + index).then(res => {
        // 取消选项
        this.isSemester =false;
        this.isDifficulty = false;
        this.isCategory =false;

        if (this.isGrade == false) {
          this.isGrade = !this.isGrade;
        }
        this.checkedGrade = this.grade[index];
        let data = this.$decryptData(res.data.data);
        this.$emit("get-data", data);
      });
    },
    getSemester(index) {
      // 取消选项
      this.isGrade = false
      this.isDifficulty = false
      this.isCategory = false

      if (this.isSemester == false) {
        this.isSemester = !this.isSemester;
      }
      this.checkedSemester = this.semester[index];
      this.$http.get("searchLog?semester=" + index).then(res => {
        let data = this.$decryptData(res.data.data);
        this.$emit("get-data", data);
      });
    },
    getCategory(index) {
        // 取消选项
        this.isSemester = false
        this.isDifficulty = false
        this.isGrade = false

      if (this.isCategory == false) {
        this.isCategory = !this.isCategory;
      }
      this.checkedCategory = this.type[index];
      let category = this.category[index]
      this.$http.get("searchLog?category=" + category).then(res => {
        let data = this.$decryptData(res.data.data);
        this.$emit("get-data", data);
      });
    },
    getDifficulty(index) {
        // 取消选项
        this.isSemester = false
        this.isGrade = false
        this.isCategory = false

      if (this.isDifficulty == false) {
        this.isDifficulty = !this.isDifficulty;
      }
      this.checkedDifficulty = this.difficulty[index];
      this.$http.get("searchLog?degree_of_difficulty=" + index).then(res => {
        let data = this.$decryptData(res.data.data);
        this.$emit("get-data", data);
      });
    }
  }
};
</script>