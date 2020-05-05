<template>
  <div class="main">
    <!-- 考试信息设置 -->
    <el-row class="content">

      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="考试名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="12">
            <el-form-item label="考试开始时间">
              <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="考试结束时间">
              <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="试卷总分">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="及格分数">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="试题数量">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="考试时长">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="考试次数">
          <el-input v-model="form.name"></el-input>
          <el-checkbox label="不限次数" name="type"></el-checkbox>
        </el-form-item>
        <el-form-item label="查看功能">
          <el-radio-group v-model="form.resource">
            <el-radio label="开启"></el-radio>
            <el-radio label="关闭"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-row class="btn">
 <el-button type="primary">完成组卷</el-button>
          <el-button >重置</el-button>
        </el-row>
         
        
        <el-row class="footer">
          前往试卷管理发布试卷>
        </el-row>

      </el-form>
    </el-row>

  </div>
</template>



<script>
  export default {
    data() {
      return {
        input1: '',
        value1: '',
        form: {

          name: ''
        }
      }
    },
    mounted() {

    },
    methods: {

    }

  }
</script>
<style lang="less" scoped>
  .content {
    margin: 0 auto;
    width: 80%;
    margin-top: 20px;

    .el-form-item {
      width: 340px;
    }
    .btn{
      margin: 0 auto;
      width: 50%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
    }
    .footer{
      text-align: center;
      font-size: 14px;
      color: #ccc;
      cursor: pointer;
      margin-bottom: 20px;
    }


  }
</style>