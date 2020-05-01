<template>
  <div class="main">

    <!-- 手动选题 -->
    <el-card>
      <el-row class="choose-test-title">
        <el-select size="mini" v-model="value" placeholder="考试状态">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select size="mini" v-model="value" placeholder="组卷类型">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select size="mini" v-model="value" placeholder="考试方式">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-row>
      <el-row>
        <el-table :header-cell-style="tableHeaderStyle" style="width: 100%">
          <el-table-column type="index" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="date" label="评测名称">
          </el-table-column>
          <el-table-column prop="name" label="试卷类型">
          </el-table-column>
          <el-table-column prop="address" label="考试方式">
          </el-table-column>
          <el-table-column prop="address" label="当前考试人数">
          </el-table-column>
          <el-table-column prop="address" label="待操作人数">
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
    </el-card>

  </div>
</template>


<script>
  export default {

    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {
      // 表格样式
      tableHeaderStyle() {
        return 'text-align: center;background:#24c9e3;color:#fff;'
      },
    }

  }
</script>
<style lang="less" scoped>
  .main {
    width: 100%;
    .el-card{
      width: 100%;
    }
  }

  .choose-test-title {
    width: 100%;
    display: flex;
    margin-bottom: 20px;

    .el-select {
      margin-right: 10px;
      width: 150px;
    }
  }
</style>