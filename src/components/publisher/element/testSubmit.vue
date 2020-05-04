<template>
  <div class="main">
    <el-tabs v-model="first" type="border-card">
      <el-tab-pane label="已提交" name="first">
        <el-row>
        <el-table :header-cell-style="tableHeaderStyle" style="width: 100%">
          <el-table-column type="index" label="序号">
          </el-table-column>
          <el-table-column prop="date" label="考生姓名">
          </el-table-column>
          <el-table-column prop="name" label="试卷总分">
          </el-table-column>
          <el-table-column prop="address" label="系统评分">
          </el-table-column>
          <el-table-column prop="address" label="手动评分">
          </el-table-column>
          <el-table-column prop="address" label="操作">
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-row style="margin-top:20px;text-align:center">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </el-row>
      </el-row>
      </el-tab-pane>
      <el-tab-pane label="未提交" name="second">
        <el-table :header-cell-style="tableHeaderStyle" style="width: 100%">
          <el-table-column type="index" label="序号">
          </el-table-column>
          <el-table-column prop="date" label="考生姓名">
          </el-table-column>
          <el-table-column prop="name" label="考生电话">
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-row style="margin-top:20px;text-align:center">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </el-row>
      </el-tab-pane>
      
    </el-tabs>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        activeName:'已完成'
      }
    },
    methods:{
      // 表格样式
      tableHeaderStyle() {
        return 'text-align: center;background:#24c9e3;color:#fff;'
      },
    }

  }
</script>
<style lang="less" scoped>
  .main {
    height: 100%;
    width: 100%;

    .el-tabs{
      width: 100%;
      
    }
  }
</style>