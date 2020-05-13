<template>
  <div class="list-container">
    <top>题库列表</top>
    <div class="content">
      <toplist v-on:mul-delete="getMul" v-on:get-data="upData($event)" :topData="tableData.data"></toplist>
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
              <i class="el-icon-zoom-in blue"></i>
              <i @click="handleEdit(scope.row)" class="el-icon-edit blue"></i>
              <i @click="handleDelete(scope.$index)" class="el-icon-delete blue"></i>
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
    <div v-if="is_model_one">
      <model-one :editData="model_data" v-on:handle-close="handleClose"></model-one>
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
import ModelOne from "./edit-page/ModelOne";

export default {
  components: {
    top,
    Toplist,
    ModelOne
  },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      is_model_one: false,
      model_data: ''
    };
  },
  created() {
    this.$http.get("question").then(res => {
      let data = this.$decryptData(res.data.data);
      this.tableData = data;
      console.log(data);
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
    },
    handleCurrentChange(val) {
      this.$http.get("question" + "?page=" + val).then(res => {
        let data = this.$decryptData(res.data.data);
        this.tableData = data;
        console.log(data);
      });
    },
    handleDelete(index) {
      let num = index + 1;
      this.$http.delete("question/" + num).then(res => {
        console.log(res);
        if (res == 0) {
          this.$message(res.msg);
        }
      });
    },
    upData(event) {
      console.log(event);
      this.tableData = event;
    },
    getMul() {
      let deleteArray = "";
      for (let i = 0; i < this.multipleSelection.length; i++) {
        let id = this.multipleSelection[i].序号;
        deleteArray += id;
      }
      this.$http.get("deleteLog?ids=" + deleteArray).then(res => {
        this.$message({
          message: res.data.msg,
          type: "success"
        });
      });
    },
    handleEdit(row) {
      this.is_model_one = !this.is_model_one
      let obj = {
        title: row.topic_and_stem.title,
        grade: row.grade,
        semester: row.semester,
        category: row.category,
        degree_of_difficultyL: row.degree_of_difficulty
      }
      this.model_data = obj
    },
    handleClose(){
      this.is_model_one = !this.is_model_one
    }
  }
};
</script>