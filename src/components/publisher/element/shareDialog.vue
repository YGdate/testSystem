<template>
  <el-dialog title="试卷共享" :visible.sync="isVisible" width="30%" :before-close="handleClose">
    <el-row>
      <span>试卷：全年级第一次月考</span>
      <span>作者：一般</span>
    </el-row>
    <el-row>
      <el-alert :title="'试卷共享码 | '+text" type="success" :closable="false">
    </el-alert>
    </el-row>
    <el-row>
      试卷：全年级第一次月考试卷：全年级第一次月考试卷：全年级第一次月考试卷：全年级第一次月考
    </el-row>
    <el-row class="btn">
      <el-button size="small" @click="updateCode">刷新共享码</el-button>
      <el-button size="small" type="primary" @click="copyText">复制共享码</el-button>
    </el-row>
  </el-dialog>
</template>


<script>
  export default {
    props: ['isVisible', 'text'],
    data() {
      return {

      }
    },
    methods: {
      updateCode() {
        this.$emit('updateCode')
      },
      copyText() {
        var _input = document.createElement("input"); // 直接构建input
        _input.value = this.text; // 设置内容
        document.body.appendChild(_input); // 添加临时实例
        _input.select(); // 选择实例内容
        document.execCommand("Copy"); // 执行复制
        document.body.removeChild(_input); // 删除临时实例
        this.$message.success('复制成功！')
      },
      handleClose() {
        // this.isVisible = false
        this.$emit('shareVisible', false)
      }
    }

  }
</script>
<style lang="less" scoped>
  .el-row {
    margin-bottom: 20px;
  }


  .btn {
    display: flex;
    justify-content: flex-end;

    .el-button {
      margin-left: 20px;
    }
  }
</style>