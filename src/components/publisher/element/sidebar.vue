<template>
  <div class="main">
      <el-col class="content-left" :span="4">
        <el-button @click="skipBtn($attrs.name)" icon="el-icon-back">{{$attrs.name}}</el-button>
      </el-col>
  </div>
</template>



<script>

  export default {
    methods:{
      skipBtn(text){
        this.$emit('skipBtn',text)
      },
    }
  }
</script>
<style lang="less" scoped>
  .main {
    width: 100%;
  }
    .content-left {
      .el-button {
        color: #fff;
        background-color: #24c9e3;
      }
    }
</style>