<template>
  <div class="fun-container">
    <top>作文</top>
    <div class="row">
      <div class="fun-content">
        <div class="content-title">选项录入</div>
        <div class="option-input">
          <analysis width="250px" title="题干"></analysis>
          <analysis placeholder=" " width="50px" title="答案"></analysis>
          <analysis width="250px" title="选项A"></analysis>
          <analysis width="250px" title="选项B"></analysis>
          <analysis width="250px" title="选项C"></analysis>
          <analysis width="250px" title="选项D"></analysis>
        </div>
        <div class="option-add">增加题目</div>
      </div>
      <div class="listion">
        <div class="title">听力题</div>
        <div class="content">
          <span style="margin-right: 10px">听力录音上传</span>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <i style="cursor: pointer" class="el-icon-upload2"></i>
          </el-upload>
        </div>
      </div>
    </div>
    <div style="margin-top: 15px;width:600px">
      <tmsz></tmsz>
    </div>
    <div class="end">
        <el-button type="primary">确定录入</el-button>
    </div>
  </div>
</template>

<style lang="less" scope>
@import url("./common.less");
.fun-content {
  width: 750px;
  padding: 10px;
  position: relative;
    box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
}
.row {
  display: flex;
}
.option-input {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.option-add {
  position: absolute;
  right: 0;
  cursor: pointer;
  text-align: center;
  top: 70px;
  padding: 0 5px;
  background-color: chocolate;
  color: #fff;
  width: 30px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.listion {
  margin-left: 15px;
  height: 250px;
  width: 200px;
    box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
  padding: 10px;
  .title {
    margin-bottom: 10px;
  }
}

</style>

<script>
import Tmsz from "./Tmsz";
import Analysis from "./Analysis";
import Top from '../Title'
export default {
  components: {
    Tmsz,
    Analysis,
    Top
  },
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>