<template>
  <div class="container">
    <div class="title">题库列表</div>
    <div class="content">
      <div class="top">
        <el-dropdown size="mini" split-button type="primary">
          选择年纪
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown size="mini" split-button type="primary">
          选择章节
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown size="mini" split-button type="primary">
          选择题型
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown size="mini" split-button type="primary">
          选择难度
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown size="mini" split-button type="primary">
          状态选择
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button style="background-color: #409EFF;color: #fff" size="mini">批量删除</el-button>
        <el-button style="margin: auto" size="mini" type="primary" icon="el-icon-search"></el-button>
      </div>
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
  }
}
</style>

<script>
export default {
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