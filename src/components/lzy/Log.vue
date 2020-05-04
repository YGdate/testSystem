<template>
  <div class="container">
    <top>日志记录</top>
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
          <el-table-column align="center" prop="person" label="试题制作人"></el-table-column>
          <el-table-column width="120px" align="time" prop="status" label="最新修改时间"></el-table-column>
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
            <span>卡片名称</span>
            <i @click="handleCheck"  class="el-icon-close" style="float: right;cursor: pointer;"></i>
          </div>
          <div style="padding: 30px">
            <el-table :data="detailData" style="width: 100%">
              <el-table-column align="center" prop="person" label="操作人" width="100"></el-table-column>
              <el-table-column align="center" prop="time" label="时间" width="180"></el-table-column>
              <el-table-column align="center" prop="type" label="操作类型"></el-table-column>
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
      top: 100px;
      left: 230px;
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
import Toplist from './fun-page/Toplist'
import Top from './Title'
export default {
  components:{
    Toplist,
    Top
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
          person: "sa",
          time: "2018-12-61",
          log: "查看记录"
        },
        {
          date: "1",
          class: "一年级",
          article: "第一章节",
          titleForm: "单选题",
          title: "大幅改进了到十分士大夫但是",
          diff: "简单",
          person: "sa",
          time: "2018-12-61",
          log: "查看记录"
        },
        {
          date: "1",
          class: "一年级",
          article: "第一章节",
          titleForm: "单选题",
          title: "大幅改进了到十分士大夫但是",
          diff: "简单",
          person: "sa",
          time: "2018-12-61",
          log: "查看记录"
        }
      ],
      detailData: [
        {
          person: "Lisa",
          time: "2018-52-41",
          type: "录入"
        },
        {
          person: "Lisa",
          time: "2018-52-41",
          type: "录入"
        },
        {
          person: "Lisa",
          time: "2018-52-41",
          type: "录入"
        }
      ],
      multipleSelection: [],
      check: false
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
    },
    handleCheck() {
        this.check= !this.check
    }
  }
};
</script>