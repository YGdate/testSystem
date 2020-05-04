<template>
  <div class="container" :style="{width: width, height: 250 + 'px'}">
    <div class="title">题目设置</div>
    <div class="option">
      <el-dropdown>
        <el-button type="primary">
          年级选择
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <el-button type="primary">
          章节选择
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <el-button type="primary">
          知识点选择
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <el-button type="primary">
          难度选择
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <analysis title="解析"></analysis>
  </div>
</template>

<style lang="less" scoped>
.container {
  padding: 10px;
  box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
  .title {
    margin-bottom: 20px;
  }
  .option {
    margin-bottom: 20px;
    .el-dropdown {
      margin-right: 5px;
    }
  }

}
</style>

<script>
import Analysis from './Analysis'
export default {
    components:{
        Analysis
    },
  props: {
    width: String
  }
};
</script>