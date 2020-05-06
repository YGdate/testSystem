<template>
  <div class="list-container">
    <top>题库列表</top>
    <div class="content">
      <toplist></toplist>
      <div class="table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column align="center" label="序号">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column align="center" prop="class" label="年级"></el-table-column>
          <el-table-column align="center" prop="article" label="章节" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" prop="titleForm" label="题型"></el-table-column>
          <el-table-column show-overflow-tooltip align="center" prop="title" label="题目"></el-table-column>
          <el-table-column align="center" prop="diff" label="难度"></el-table-column>
          <el-table-column align="center" prop="status" label="状态"></el-table-column>
          <el-table-column width="200" align="center" prop="status" label="操作">
            <template slot-scope="scope">
              <i class="el-icon-zoom-in blue"></i>
              <i class="el-icon-edit blue"></i>
              <i class="el-icon-delete blue"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('./fun-page/common.less');
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
import Toplist from './fun-page/Toplist'
export default {
  components: {
    top,
    Toplist
  },
  data() {
    return {
      tableData: [
        {
          date: "1",
          class: "一年级",
          article: "第一章节",
          titleForm: "单选题",
          title: "大幅改进了到十分士大夫但是",
          diff: "简单",
          status: "正常"
        },
        {
          date: "1",
          class: "一年级",
          article: "第一章节",
          titleForm: "单选题",
          title: "大幅改进了到",
          diff: "简单",
          status: "正常"
        },
        {
          date: "1",
          class: "一年级",
          article: "第一章节",
          titleForm: "单选题",
          title: "大幅改进了到",
          diff: "简单",
          status: "正常"
        }
      ],
      multipleSelection: []
    };
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
    }
  }
};
</script>