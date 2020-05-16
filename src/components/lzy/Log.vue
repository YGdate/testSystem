<template>
  <div class="container">
    <top>日志记录</top>
    <div class="content">
      <toplist2 v-on:mul-delete="getMul" v-on:get-data="upData($event)" :topData="tableData.data"></toplist2>
      <div class="table">
        <el-table
          ref="multipleTable"
          :data="tableData.data"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column align="center" label="序号">
            <template slot-scope="scope">{{ scope.row.序号}}</template>
          </el-table-column>
          <el-table-column align="center" prop="年级" label="年级"></el-table-column>
          <el-table-column align="center" prop="章节" label="章节" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" prop="题型" label="题型"></el-table-column>
          <el-table-column show-overflow-tooltip align="center" prop="题目" label="题目"></el-table-column>
          <el-table-column align="center" prop="难度" label="难度"></el-table-column>
          <el-table-column align="center" prop="试题制作人" label="试题制作人"></el-table-column>
          <el-table-column width="120px" align="center" prop="最新修改时间" label="最新修改时间"></el-table-column>
          <el-table-column width="120px" align="center" prop="log" label="日志记录">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleCheck(scope.$index, scope.row)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="detail" v-if="check">
        <el-card :body-style="{padding: 0}">
          <div slot="header" class="clearfix">
            <span>日志记录</span>
            <i @click="handleClose" class="el-icon-close" style="float: right;cursor: pointer;"></i>
          </div>
          <div style="padding: 30px">
            <el-table :data="detailData" style="width: 100%">
              <el-table-column align="center" prop="操作人" label="操作人" width="100"></el-table-column>
              <el-table-column align="center" prop="时间" label="时间" width="180"></el-table-column>
              <el-table-column align="center" prop="操作类型" label="操作类型"></el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.blue {
  color: #409eff;
  margin-right: 7px;
  padding: 3px;
  cursor: pointer;
}
.container {
  width: 1000px;
  .title {
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 40px;
    text-align: center;
  }
  .content {
    padding: 20px;
    border-radius: 5pxs;
    box-shadow: 2px 2px 1px gainsboro, -2px -2px 5px gainsboro;
    .top {
      display: flex;
      margin-bottom: 20px;
      .el-dropdown {
        margin-right: 10px;
      }
    }
    .detail {
      width: 450px;
      position: absolute;
      z-index: 100;
      top: 250px;
      left: 450px;
      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }
      .clearfix:after {
        clear: both;
      }
      .box-detail {
        width: 480px;
      }
    }
  }
}
</style>

<script>
import Toplist2 from "./fun-page/Toplist2";
import Top from "./Title";
export default {
  components: {
    Toplist2,
    Top
  },
  data() {
    return {
      tableData: [],
      detailData: [],
      multipleSelection: [],
      check: false
    };
  },
  created() {
    this.$http.get("getAllLog").then(res => {
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
    handleClose() {
      this.check = !this.check;
    },
    handleCheck(index, row) {
      this.$http.get("getLog?id=" + row.试题id).then(res => {
        let data = this.$decryptData(res.data.data);
        this.detailData = data;
        this.handleClose();
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
    }
  }
};
</script>