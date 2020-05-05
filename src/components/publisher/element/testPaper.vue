<template>
  <div class="main">
    <el-row class="content-nav">
      <el-input size="mini" placeholder="试卷名称" suffix-icon="el-icon-search" v-model="search">
      </el-input>
      <el-select size="mini" v-model="value" placeholder="考试状态">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select size="mini" v-model="value" placeholder="组卷类型">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select size="mini" v-model="value" placeholder="试卷来源">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </el-row>
      
    <el-row :gutter="50">
      <el-col :span="6">
        <el-card class="box-card">手动组卷</el-card>
      </el-col>
    </el-row>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        search: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }

  }
</script>
<style lang="less" scoped>
  .main {
    height: 100%;
    width: 100%;
    .el-row{
      width: 100%;
    }
  }

  .content-nav {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    >* {
      width: 180px;
      margin-right: 10px;
    }


  }

  .el-card {
    width: 100%;
    height: 200px;
    background: rgb(140, 145, 143);
    color: #fff;
    font-size: 25px;
    font-weight: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
  }
</style>