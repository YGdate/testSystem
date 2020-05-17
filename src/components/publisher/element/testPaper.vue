<template>
  <div class="main">
    <el-row class="content-nav">
      <el-input size="mini" placeholder="试卷名称" suffix-icon="el-icon-search" @keyup.enter.native="searchTest"
        v-model="search">
      </el-input>
      <el-select @change="questionChoose" size="mini" v-model="testStatus" placeholder="考试状态">
        <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select @change="questionChoose" size="mini" v-model="testType" placeholder="组卷类型">
        <el-option v-for="item in testTypeoptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select @change="questionChoose" size="mini" v-model="testFrom" placeholder="试卷来源">
        <el-option v-for="item in testFromoptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </el-row>

    <el-row class="content-info">
      <el-col @click.native="skip(item.id)" :span="4" v-for="(item,index) in tableData" :key="index">
        <div class="box-card">
          <div>{{item.test_name}}</div>
          <div>{{test_status(item.test_status)}}</div>
          <div>{{item.test_type==0?'自动组卷':'手动组卷'}}</div>
        </div>
      </el-col>
    </el-row>

    <!-- 分页 -->
    <el-row style="margin:20px 0;text-align:center">
      <el-pagination @current-change="handleCurrentChange" :page-size="10" :total="total" background
        layout="prev, pager, next">
      </el-pagination>
    </el-row>

  </div>
</template>



<script>
  export default {
    data() {
      return {
        search: '',
        testStatus: '',
        testType: '',
        testFrom: '',
        statusoptions: [{
            value: 0,
            label: '未发布'
          },
          {
            value: 1,
            label: '已发布'
          }, {
            value: 2,
            label: '正在考试'
          }, {
            value: 3,
            label: '考试结束'
          }
        ],
        testTypeoptions: [{
            value: 0,
            label: '自动组卷'
          },
          {
            value: 1,
            label: '手动组卷'
          }
        ],
        testFromoptions: [],
        tableData: [],
        current_page: 1,
        total: 0,
        per_page: 0
      }
    },
     computed: {
      test_status() {
        return function (text) {
          if (text == 0) {
            return '未发布'
          } else if (text == 1) {
            return '已发布';
          } else if (text == 2) {
            return '正在考试'
          } else {
            return '考试结束'
          }
        }
      },
    },
    created() {
      this.getTestScore()
      this.getdropDown()
    },
    methods: {
      skip(id){
        this.$emit('paperInfo',id)
      },
      questionChoose() {
        this.getTestScore()
      },
      searchTest() {
        this.getTestScore()
      },
      // 分页
      handleCurrentChange(page) {
        this.current_page = page
        this.getTestScore(page)
      },
      getTestScore(pages = 1) {
        let paramsData = {
          testName: this.search,
          testStatus: this.testStatus,
          testType: this.testType,
          testFrom: this.testFrom
        }
        this.$http.get('testPaper/getTestScore?page=' + pages, {
            params: paramsData
          })
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            console.log(this.$decryptData(res.data.data));
            let {
              current_page,
              data,
              total,
              per_page
            } = this.$decryptData(res.data.data)
            this.tableData = data
            this.per_page = per_page
            this.current_page = current_page
            this.total = total
          }).catch(err => {
            this.$message({
              dangerouslyUseHTMLString: true,
              showClose: true,
              message: err.response.data.data.join('<br><br>'),
              type: 'error'
            });
          })
      },
      getdropDown() {
        this.$http.get('testPaper/dropDown')
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            console.log(this.$decryptData(res.data.data));
            const {
              test_from
            } = this.$decryptData(res.data.data)
            let testFromoptions = []
            for (let key in test_from) {
              let newdata = {
                value: test_from[key],
                label: test_from[key]
              }
              testFromoptions.push(newdata)
            }
            this.testFromoptions = testFromoptions
          }).catch(err => {
            console.log(err.response);
            this.$message({
              dangerouslyUseHTMLString: true,
              showClose: true,
              message: err.response.data.data.join('<br><br>'),
              type: 'error'
            });
          })
      },

    }

  }
</script>
<style lang="less" scoped>
  .main {
    height: 100%;
    width: 100%;

    .el-row {
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

  .content-info {
    display: flex;
    flex-wrap: wrap;

    >.el-col {
      cursor: pointer;
      margin: 0 18px;
      width: 16%;
    }
    .box-card{
      background: url('../../../assets/img/试卷.png');
      background-size: 100% 100%;
      width: 100%;
      height: 190px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
      align-content: space-around;
      padding: 20px 0 80px;
      div{
        
        width: 100%;
        text-align: center;

      }
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