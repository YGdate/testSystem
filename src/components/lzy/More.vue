<template>
  <div>
    <el-card class="box-card">
      <div class="left">
        <img class="logo" src="./img/tishi.png" />
      </div>
      <div class="right">
        <div class="right-title">批量录入须知</div>
        <ol style>
          <li>通过下载系统模板表格来进行录入</li>
          <li>严格按照模板表格指定的内容进行录入</li>
          <li>批量录入仅包含以下4种题型，其他题型请单题录入</li>
        </ol>
        <div style="margin-left: 20px">
          <span style="color: blue;margin-right: 2px">[单选题]</span>
          <span style="color: blue;margin-right: 2px">[多选题]</span>
          <span style="color: blue;margin-right: 2px">[不定项选择]</span>
          <span style="color: blue;margin-right: 2px">[判断题]</span>
        </div>
      </div>
    </el-card>
    <div class="model">
      <button class="card"><a class="card_export" :href="'http://47.113.121.50/api/import/question?token='+token" download="">下载模板</a></button>
      <el-upload
        class="upload-demo"
        action="http://47.113.121.50/api/import/question"
        :headers="httpHeader"
        :on-change="handleChange"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">上传题目</el-button>
      </el-upload>
    </div>
  </div>
</template>

<style lang="less" scoped>
.el-card__body {
  display: flex;
  .left {
    margin-left: 100px;
    .logo {
      width: 100px;
      height: 100px;
    }
  }
  .right {
    margin-left: 100px;
    .right-title {
      text-align: center;
    }
  }
}
.model {
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  .card {
    border: 0;
    cursor: pointer;
    width: 85px;
    border-radius: 5px;
    height: 35px;
    color: #fff;
    background-color: cornflowerblue;
    display: flex;
    justify-content: center;
    align-items: center;
    .card_export{
      text-decoration: none;
      color: white;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      token:window.sessionStorage.getItem('token'),
      fileList: [],
      httpHeader: {
        Authorization: ''
      }
    };
  },
  created(){
    this.httpHeader.Authorization = sessionStorage.getItem('token')
  },  
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
      
    }
  }
};
</script>