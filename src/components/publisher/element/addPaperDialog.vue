<template>
  <el-dialog title="添加试卷" :visible.sync="addVisible" width="30%" :before-close="handleClose">
    <el-row>
      <span>输入共享码，添加共享试卷</span>
    </el-row>
    <el-row>
      <el-input type="text"></el-input>
    </el-row>

      <el-row class="btn">
      <el-button type="primary" size="small" @click="addVisible = false">搜索试卷</el-button>
      </el-row>

  </el-dialog>
</template>



<script>
  export default {
    props: {
      addVisible: {
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
  justify-content: space-around;
  
}
</style>