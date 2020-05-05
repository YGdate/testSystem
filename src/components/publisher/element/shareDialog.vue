<template>
  <el-dialog title="试卷共享" :visible.sync="isVisible" width="30%" :before-close="handleClose">
    <el-row>
      <span>试卷：全年级第一次月考</span>
      <span>作者：一般</span>
    </el-row>
   <el-row>
      <el-alert title="试卷共享码     | FASFASDFWEAFDSA" type="success" :closable="false">
    </el-alert>
   </el-row>
    <el-row>
      试卷：全年级第一次月考试卷：全年级第一次月考试卷：全年级第一次月考试卷：全年级第一次月考
    </el-row>
      <el-row class="btn">
        <el-button size="small" @click="isVisible = false">刷新共享码</el-button>
      <el-button size="small" type="primary" @click="isVisible = false">复制共享码</el-button>
      </el-row>
  
  </el-dialog>
</template>



<script>
  export default {
    props: {
      isVisible: {
        type: Boolean
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handleClose() {
       this.isVisible = false
      }
    }

  }
</script>
<style lang="less" scoped>
.el-row{
  margin-bottom: 20px;
}
.btn{
  display: flex;
  justify-content: flex-end;
  .el-button{
    margin-left: 20px;
  }
}
</style>