<template>
  <div class="main">

    <!-- 手动选题 -->
    <el-card>
      <el-row class="choose-test-title">
        <el-select @change="changeStatus" size="mini" v-model="satusValue" placeholder="考试状态">
          <el-option v-for="item in optionStatus" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select @change="changeStatus" size="mini" v-model="typeValue" placeholder="组卷类型">
          <el-option v-for="item in optionType" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select @change="changeStatus" size="mini" v-model="methodValue" placeholder="考试方式">
          <el-option v-for="item in optionMethod" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-row>
      <el-row>
        <el-table :data="tableData" :header-cell-style="tableHeaderStyle" style="width: 100%">
          <el-table-column type="index" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="test_name" label="评测名称">
          </el-table-column>
          <el-table-column prop="test_type" label="试卷类型">
            <template scope="scope">
              <div>
                {{scope.row.test_type=='0'?'自动组卷':'手动组卷'}}
              </div>
            </template>
          </el-table-column>
          <el-table-column  label="考试方式">
            <template scope="scope">
              <div>
                {{scope.row.test_method=='0'?'公开申请':'验证码报考'}}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="CurrentTestNumber" label="当前考试人数">
          </el-table-column>
          <el-table-column prop="NOtOptionNumber" label="待操作人数">
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template scope="scope">
              <el-button
          size="mini"
          icon="el-icon-edit"
          @click="handleInfo(scope.row.id)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-row style="margin-top:20px;text-align:center">
          <el-pagination @current-change="handleCurrentChange" :page-size="10" :total="total" background
        layout="prev, pager, next">
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
        tableData:[],
        current_page:1,
        total:0,
      }
    },
    created(){
      this.getInfo()
      // this.getQuestionPoint()

    },
    mounted() {

    },
    methods: {
      changeStatus(){
        this.getInfo(this.current_page)
      },
      handleInfo(id){
        this.$emit('handleInfo',id)
      },
      // 分页
      handleCurrentChange(page) {
        this.current_page = page
        this.getInfo(page)
      },
      //获取报考管理信息
      getInfo(pages = 1) {
        this.$http.get('testPaper/getApplicationManageByCondition?page='+pages,{
          params:{
            status:this.satusValue,
            test_type:this.typeValue,
            test_method:this.methodValue,
          }
        })
          .then(res => {
            console.log(res);
            if (res.data.code != 0) return this.$message.error(res.data.msg)
             console.log(this.$decryptData(res.data.data));
              let {
              current_page,
              data,
              total

            } = this.$decryptData(res.data.data)
            this.tableData = data
            this.current_page = current_page
            this.total = total
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
      // getQuestionPoint(){
      //   this.$http.get('/questionInfo/getQuestionPoint',{
      //     params:{
      //       status:this.satusValue,
      //       test_type:this.typeValue,
      //       test_method:this.methodValue,
      //     }
      //   })
      //     .then(res => {
      //       console.log(res);
      //       if (res.data.code != 0) return this.$message.error(res.data.msg)
      //        console.log(this.$decryptData(res.data.data));
      //     }).catch(err => {
      //       console.log(err);
      //       this.$message({
      //         dangerouslyUseHTMLString: true,
      //         showClose: true,
      //         message: err.response.data.data.join('<br><br>'),
      //         type: 'error'
      //       });
      //     })
      // },
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