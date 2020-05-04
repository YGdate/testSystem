<template>
  <div class="top-list">
    <el-dropdown size="mini" split-button>
      选择年级
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown size="mini" split-button>
      选择章节
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown size="mini" split-button>
      选择题型
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown size="mini" split-button>
      选择难度
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown size="mini" split-button>
      状态选择
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-button style="color: #409EFF" size="mini">批量删除</el-button>
    <el-button style="margin: auto" size="mini" type="primary" icon="el-icon-search"></el-button>
  </div>
</template>

<style lang="less">
.top-list {
  display: flex;
  margin-bottom: 20px;
}
.el-button--default{
  color: #409EFF !important;
}
.el-dropdown {
  margin-right: 10px;
}
</style>

<script>
export default {};
</script>