<template>
  <div class="main">

    <!-- 手动选题 -->
    <el-card>
      <el-row class="choose-test-title">
        <el-select size="mini" v-model="satusValue" placeholder="考试状态">
          <el-option v-for="item in optionStatus" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select size="mini" v-model="typeValue" placeholder="组卷类型">
          <el-option v-for="item in optionType" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select size="mini" v-model="methodValue" placeholder="考试方式">
          <el-option v-for="item in optionMethod" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-row>
      <el-row>
        <el-table v-model="tableData" :header-cell-style="tableHeaderStyle" style="width: 100%">
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
        // 组卷类型   0 自动组卷 1 手动组卷
// 报考方式   0 公开申请 1 验证码报考
        optionStatus: [{
          value: '0',
          label: '表示未发布'
        }, {
          value: '1',
          label: '已发布'
        }, {
          value: '2',
          label: '正在考试'
        },
        {
          value: '3',
          label: '考试结束'
        }],
        satusValue: '',
        optionType: [{
          value: '0',
          label: '自动组卷'
        }, {
          value: '1',
          label: '手动组卷'
        }],
        typeValue: '',
        optionMethod: [{
          value: '0',
          label: '公开申请'
        }, {
          value: '1',
          label: '验证码报考'
        }],
        methodValue: '',
        tableData:[
          {
            date:'test',
            name:'test',
            address:'test'
          }
        ]
      }
    },
    created(){
      this.getInfo()
    },
    mounted() {

    },
    methods: {
      //获取报考管理信息
      getInfo() {
        this.$http.get('testPaper/getApplicationManageByCondition',{
          params:{
            status:0,
            test_type:0,
            test_method:0,
          }
        })
          .then(res => {
            console.log(res);
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            
            //  let {}
          }).catch(err => {
            console.log(err);
            this.$message({
              dangerouslyUseHTMLString: true,
              showClose: true,
              message: err.response.data.data.join('<br><br>'),
              type: 'error'
            });
          })
      },
      //获取知识点
      getQuestionPoint(){
        this.$http.get('/questionInfo/getQuestionPoint',{
          params:{
            status:0,
            test_type:0,
            test_method:0,
          }
        })
          .then(res => {
            console.log(res);
            if (res.data.code != 0) return this.$message.error(res.data.msg)
          }).catch(err => {
            console.log(err);
            this.$message({
              dangerouslyUseHTMLString: true,
              showClose: true,
              message: err.response.data.data.join('<br><br>'),
              type: 'error'
            });
          })
      },
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