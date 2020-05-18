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
    <el-button @click.native="handleDelete" style="color: #409EFF" size="mini">批量删除</el-button>
    <el-button @click.native="handleSearch" type="primary" size="mini" icon="el-icon-search"></el-button>
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
    handleSearch() {
      console.log(
        this.checkedGrade,
        this.checkedSemester,
        this.checkedCategory,
        this.checkedDifficulty
      );
      let grade = this.grade.indexOf(this.checkedGrade);
      let semester = this.semester.indexOf(this.checkedSemester);
      let category = this.category[this.type.indexOf(this.checkedCategory)];
      let difficulty = this.difficulty.indexOf(this.checkedDifficulty);
      
      let obj = {}
      if(grade!=-1){
        obj['1'] = grade
      }
      if(semester!=-1){
        obj['2'] = semester
      }
      if(category!=undefined){
        obj['3'] = category
      }
      if(difficulty!=-1){
        obj['4'] = difficulty
      }
      console.log(obj)

      // let list_page = ["semester", "categoray", "degree_of_difficulty"];

      // if (list[0] != -1) {
      //   this.$http.get("question?grade=" + list[0]).then(res => {
      //     let data = this.$decryptData(res.data.data);
      //     this.$emit("get-data", data);
      //   });
      // }

      // let basic = "question?grade=" + list[0];
      // let i = 0;
      // for (i; i < list_page.length; i++) {
      //   basic = basic + "&" + list_page[i] + "=" + list[i + 1];
      //   if (list[i + 1] != -1 && list[i + 1] != undefined) {
      //     this.$http.get(basic).then(res => {
      //       console.log(res);
      //       let data = this.$decryptData(res.data.data);
      //       this.$emit("get-data", data);
      //     });
      //   }
      // }
    },
    getGrade(index) {
      if (this.isGrade == false) {
        this.isGrade = !this.isGrade;
      }
      this.checkedGrade = this.grade[index];
      // this.$http.get("question?grade=" + index).then(res => {

      //   let data = this.$decryptData(res.data.data);
      //   this.$emit("get-data", data);
      // });
    },
    getSemester(index) {
      // 取消选项
      // this.isGrade = false
      // this.isDifficulty = false
      // this.isCategory = false
      // this.checkedGrade = ''
      // this.checkedCategory = ''
      // this.checkedDifficulty = ''

      if (this.isSemester == false) {
        this.isSemester = !this.isSemester;
      }
      this.checkedSemester = this.semester[index];
      // this.$http.get("question?semester=" + index).then(res => {
      //   let data = this.$decryptData(res.data.data);
      //   this.$emit("get-data", data);
      // });
    },
    getCategory(index) {
      // 取消选项
      // this.isSemester = false
      // this.isDifficulty = false
      // this.isGrade = false
      // this.checkedGrade = ''
      // this.checkedSemester = ''
      // this.checkedDifficulty = ''

      if (this.isCategory == false) {
        this.isCategory = !this.isCategory;
      }
      this.checkedCategory = this.type[index];
      // let category = this.category[index]
      // this.$http.get("question?category=" + category).then(res => {
      //   let data = this.$decryptData(res.data.data);
      //   this.$emit("get-data", data);
      // });
    },
    getDifficulty(index) {
      // 取消选项
      // this.isSemester = false
      // this.isGrade = false
      // this.isCategory = false
      // this.checkedCategory = ''
      // this.checkedSemester = ''
      // this.checkedGrade = ''

      if (this.isDifficulty == false) {
        this.isDifficulty = !this.isDifficulty;
      }
      this.checkedDifficulty = this.difficulty[index];
      // this.$http.get("question?degree_of_difficulty=" + index).then(res => {
      //   let data = this.$decryptData(res.data.data);
      //   this.$emit("get-data", data);
      // });
    },
    handleDelete() {
      this.$emit("mul-delete");
    }
  }
};
</script>