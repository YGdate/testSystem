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
              <i @click="handleShow(scope.row)" class="el-icon-zoom-in blue"></i>
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
    <!-- Model -->
    <div v-if="is_model_one">
      <model-one
        :top_title="top_title"
        :editData="model_data"
        v-on:model-one-close="model_one_Close"
      ></model-one>
    </div>
    <div v-if="is_model_two">
      <model-two
        :top_title="top_title"
        :editData="model_data"
        v-on:model-two-close="model_two_Close"
      ></model-two>
    </div>
    <div v-if="is_model_three">
      <model-three
        :top_title="top_title"
        :editData="model_data"
        v-on:model-three-close="model_three_Close"
      ></model-three>
    </div>
    <div v-if="is_model_four">
      <model-four
        :top_title="top_title"
        :editData="model_data"
        v-on:model-four-close="model_four_Close"
      ></model-four>
    </div>
    <div v-if="is_model_five">
      <model-five
        :top_title="top_title"
        :editData="model_data"
        v-on:model-five-close="model_five_Close"
      ></model-five>
    </div>
    <!-- View -->
    <div v-if="is_view_one">
      <view-one :top_title="top_title" :editData="model_data" v-on:view-one-close="view_one_Close"></view-one>
    </div>
    <div v-if="is_view_two">
      <view-two :top_title="top_title" :editData="model_data" v-on:view-two-close="view_two_Close"></view-two>
    </div>
    <div v-if="is_view_three">
      <view-three
        :top_title="top_title"
        :editData="model_data"
        v-on:view-three-close="view_three_Close"
      ></view-three>
    </div>
    <div v-if="is_view_four">
      <view-four
        :top_title="top_title"
        :editData="model_data"
        v-on:view-four-close="view_four_Close"
      ></view-four>
    </div>
    <div v-if="is_view_five">
      <view-five
        :top_title="top_title"
        :editData="model_data"
        v-on:view-five-close="view_five_Close"
      ></view-five>
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
// Model
import ModelOne from "./edit-page/ModelOne";
import ModelTwo from "./edit-page/ModelTow";
import ModelThree from "./edit-page/ModelThree";
import ModelFour from "./edit-page/ModelFour";
import ModelFive from "./edit-page/ModelFive";
// View
import ViewOne from "./view-page/ViewOne";
import ViewTwo from "./view-page/ViewTwo";
import ViewThree from "./view-page/ViewThree";
import ViewFour from "./view-page/ViewFour";
import ViewFive from "./view-page/ViewFive";

export default {
  components: {
    top,
    Toplist,
    ModelOne,
    ModelTwo,
    ModelThree,
    ModelFour,
    ModelFive,
    ViewOne,
    ViewTwo,
    ViewThree,
    ViewFour,
    ViewFive
  },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      // model
      is_model_one: false,
      is_model_two: false,
      is_model_three: false,
      is_model_four: false,
      is_model_five: false,
      // view
      is_view_one: false,
      is_view_two: false,
      is_view_three: false,
      is_view_four: false,
      is_view_five: false,
      model_data: "",
      top_title: ""
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
      console.log(row);
      // 第一种
      if (
        row.category == "single_select" ||
        row.category == "multi_select" ||
        row.category == "non_directional_select" ||
        row.category == "true_or_false"
      ) {
        this.is_model_one = !this.is_model_one;
        this.model_data = row;
        if (row.category == "single_select") {
          this.top_title = "单选题";
        }
        if (row.category == "multi_select") {
          this.top_title = "多选题";
        }
        if (row.category == "non_directional_select") {
          this.top_title = "不定项选择";
        }
        if (row.category == "true_or_false") {
          this.top_title = "判断题";
        }
      }

      if (row.category == "fill" || row.category == "text_mistake") {
        this.is_model_two = !this.is_model_two;
        this.model_data = row;
        if (row.category == "fill") {
          this.top_title = "填空题";
        }
        if (row.category == "text_mistake") {
          this.top_title = "短文改错";
        }
      }
      if (
        row.category == "seven_selected_five" ||
        row.category == "fill_blank" ||
        row.category == "choose_fill_blank" ||
        row.category == "read_understand"
      ) {
        this.is_model_three = !this.is_model_three;
        this.model_data = row;
        if (row.category == "seven_selected_five") {
          this.top_title = "七选五";
        }
        if (row.category == "fill_blank") {
          this.top_title = "填空题";
        }
        if (row.category == "choose_fill_blank") {
          this.top_title = "选词填空";
        }
        if (row.category == "read_understand") {
          this.top_title = "阅读理解";
        }
      }
      if (row.category == "composition") {
        this.is_model_four = !this.is_model_four;
        this.model_data = row;
        this.top_title = "作文";
      }
      if (row.category == "translation") {
        this.is_model_five = !this.is_model_five;
        this.model_data = row;
        this.top_title = "翻译";
      }
    },
    handleShow(row) {
      console.log(row);
      // 第一种
      if (
        row.category == "single_select" ||
        row.category == "multi_select" ||
        row.category == "non_directional_select" ||
        row.category == "true_or_false"
      ) {
        this.is_view_one = !this.is_view_one;
        this.model_data = row;
        if (row.category == "single_select") {
          this.top_title = "单选题";
        }
        if (row.category == "multi_select") {
          this.top_title = "多选题";
        }
        if (row.category == "non_directional_select") {
          this.top_title = "不定项选择";
        }
        if (row.category == "true_or_false") {
          this.top_title = "判断题";
        }
      }

      if (row.category == "fill" || row.category == "text_mistake") {
        this.is_view_two = !this.is_view_two;
        this.model_data = row;
        if (row.category == "fill") {
          this.top_title = "填空题";
        }
        if (row.category == "text_mistake") {
          this.top_title = "短文改错";
        }
      }
      if (
        row.category == "seven_selected_five" ||
        row.category == "fill_blank" ||
        row.category == "choose_fill_blank" ||
        row.category == "read_understand"
      ) {
        this.is_view_three = !this.is_view_three;
        this.model_data = row;
        if (row.category == "seven_selected_five") {
          this.top_title = "七选五";
        }
        if (row.category == "fill_blank") {
          this.top_title = "填空题";
        }
        if (row.category == "choose_fill_blank") {
          this.top_title = "选词填空";
        }
        if (row.category == "read_understand") {
          this.top_title = "阅读理解";
        }
      }
      if (row.category == "composition") {
        this.is_view_four = !this.is_view_four;
        this.model_data = row;
        this.top_title = "作文";
      }
      if (row.category == "translation") {
        this.is_view_five = !this.is_view_five;
        this.model_data = row;
        this.top_title = "翻译";
      }
    },
    // model
    model_one_Close() {
      this.is_model_one = !this.is_model_one;
    },
    model_two_Close() {
      this.is_model_two = !this.is_model_two;
    },
    model_three_Close() {
      this.is_model_three = !this.is_model_three;
    },
    model_four_Close() {
      this.is_model_four = !this.is_model_four;
    },
    model_five_Close() {
      this.is_model_five = !this.is_model_five;
    },
    // View
    view_one_Close() {
      this.is_view_one = !this.is_view_one;
    },
    view_two_Close() {
      this.is_view_two = !this.is_view_two;
    },
    view_three_Close() {
      this.is_view_three = !this.is_view_three;
    },
    view_four_Close() {
      this.is_view_four = !this.is_view_four;
    },
    view_five_Close() {
      this.is_view_five = !this.is_view_five;
    }
  }
};
</script>