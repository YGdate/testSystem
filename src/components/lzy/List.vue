<template>
  <div class="list-container">
    <top>题库列表</top>
    <div class="content">
      <toplist
        ref="toplist"
        v-on:mul-delete="getMul"
        v-on:current-url="currentUrl($event)"
        v-on:handle-search="handleSearch($event)"
        v-on:get-data="upData($event)"
        :topData="tableData.data"
      ></toplist>
      <div class="table">
        <el-table
          ref="multipleTable"
          :data="tableData.data"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column align="center" label="序号">
            <template slot-scope="scope">{{ scope.row.id }}</template>
          </el-table-column>
          <el-table-column align="center" prop="grade" label="年级"></el-table-column>
          <el-table-column align="center" prop="semester" label="学期" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" prop="category" label="题型"></el-table-column>
          <el-table-column
            show-overflow-tooltip
            align="center"
            prop="topic_and_stem.title"
            label="题目"
          ></el-table-column>
          <el-table-column align="center" prop="degree_of_difficulty" label="难度"></el-table-column>
          <el-table-column align="center" prop="status" label="状态"></el-table-column>
          <el-table-column width="200" align="center" prop="status" label="操作">
            <template slot-scope="scope">
              <i @click="handleEdit(scope.row)" class="el-icon-edit blue"></i>
              <i @click="handleDelete(scope.row,scope.$index)" class="el-icon-delete blue"></i>
              <i @click="handleRefresh(scope.row,scope.$index)" class="el-icon-refresh blue"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="tableData.total"
      ></el-pagination>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./fun-page/common.less");
.pagination {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.blue {
  color: #409eff;
  margin-right: 7px;
  padding: 3px;
  cursor: pointer;
}
.list-container {
  .content {
    padding: 20px;
    border-radius: 5pxs;
    box-shadow: 2px 2px 1px gainsboro, -2px -2px 5px gainsboro;
  }
}
</style>

<script>
import top from "./Title";
import Toplist from "./fun-page/Toplist";

export default {
  components: {
    top,
    Toplist
  },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      model_data: "",
      top_title: "",
      idArray: [],
      s_grade: 0,
      s_semester: 0,
      s_category: 0,
      s_difficulty: 0,
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
      url: ""
    };
  },
  created() {
    this.$http.get("question").then(res => {
      let data = this.$decryptData(res.data.data);
      this.tableData = data;
      console.log(this.tableData);
    });
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      let array = [];
      for (let i = 0; i < val.length; i++) {
        array[i] = val[i].id;
      }
      this.idArray = array;
    },
    handleCurrentChange(val) {
      if (this.url == "") {
        this.$http.get("question" + "?page=" + val).then(res => {
          let data = this.$decryptData(res.data.data);
          this.tableData = data;
          console.log(data);
        });
      }else{
        this.$http.get(this.url+'&page='+val).then(res => {
          let data = this.$decryptData(res.data.data);
          this.tableData = data;
          console.log(data);
        });
      }
    },
    handleDelete(row, index) {
      this.$http.delete("question/" + row.id).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          this.$message({
            message: res.data.msg,
            type: "success"
          });
          this.tableData.data[index].status = "删除";
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    msg(res) {
      if (res.code == 0) {
        this.$message({
          message: res.msg,
          type: "success"
        });
      } else {
        this.$message.error(res.msg);
      }
    },
    handleRefresh(row, index) {
      this.$http.post("question/" + row.id).then(res => {
        if (res.data.code == 0) {
          this.$message({
            message: res.data.msg,
            type: "success"
          });
          this.tableData.data[index].status = "正常";
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    upData(event) {
      this.tableData = event;
    },
    getMul() {
      this.$http({
        url: "question",
        method: "delete",
        data: {
          array: this.idArray
        }
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: "success"
        });
        for (let i = 0; this.idArray.length; i++) {
          let index = this.idArray[i];
          if (this.tableData.data[i].id == index) {
            this.tableData.data[i].status = "删除";
          }
        }
        console.log(this.idArray);
      });
    },
    // 查看页面
    handleEdit(row) {
      console.log(row);
      let rowString = JSON.stringify(row);
      switch (row.category) {
        case "单选":
          this.$router.push({
            name: "dxuan",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "多选题":
          this.$router.push({
            name: "duoxuan",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "不定向选择":
          this.$router.push({
            name: "bdx",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "判断题":
          this.$router.push({
            name: "panduan",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "填空题":
          this.$router.push({
            name: "tiankong",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "七选五":
          this.$router.push({
            name: "qxw",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "阅读理解":
          this.$router.push({
            name: "ydlj",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "完型填空":
          this.$router.push({
            name: "wxtk",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "选词填空":
          this.$router.push({
            name: "xuanci",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "短文改错":
          this.$router.push({
            name: "dwgc",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "翻译":
          this.$router.push({
            name: "fanyi",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "作文":
          this.$router.push({
            name: "tingli",
            params: { paramData: rowString, type: "edit" }
          });
          break;
        case "听力":
          this.$router.push({
            name: "zuowen",
            params: { paramData: rowString, type: "edit" }
          });
          break;
      }
    },
    // 搜索页面
    handleSearch(event) {
      // console.log(event)
      this.tableData = event;
    },
    currentUrl(event) {
      this.url = event;
      console.log(event);
    }
  }
};
</script>