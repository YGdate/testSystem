<template>
  <div class="main">
    <el-row class="content">
      <!-- <el-col class="content-left" :span="4">
        <el-button icon="el-icon-back">试卷选择</el-button>
      </el-col> -->
      <el-col class="content-center">
        <el-card>
          <el-row class="content-card-title">
            考生信息
          </el-row>
          <el-row type="flex" class="content-card-info" justify="space-between">
            <el-col :span="1">
              <div>参考人数</div>
              <div>{{allData.total}}</div>
            </el-col>
            <el-col :span="3">
              <div>考试开始时间</div>
              <div>{{allData.test_start}}</div>
            </el-col>
            <el-col :span="3">
              <div>考试结束时间</div>
              <div>{{allData.test_end}}</div>
            </el-col>
            <el-col :span="1">
              <div>试卷作者</div>
              <div>{{allData.user}}</div>
            </el-col>
            <el-col :span="1">
              <div>考试总分</div>
              <div>{{allData.all_score}}</div>
            </el-col>
            <el-col :span="1">
              <div>试卷总分</div>
              <div>{{allData.total_score}}</div>
            </el-col>
            <el-col :span="1">
              <div>考试时间</div>
              <div>{{allData.test_use_time}}s</div>
            </el-col>
            <el-col :span="1">
              <div>提交人数</div>
              <div>{{allData.submit}}</div>
            </el-col>
            <el-col :span="1">
              <div>弃考人数</div>
              <div>{{allData.unSubmit}}</div>
            </el-col>
            <el-col :span="1">
              <div>试卷数目</div>
              <div>{{allData.test_num}}</div>
            </el-col>
          </el-row>
        </el-card>
        <el-tabs type="border-card">
          <el-tab-pane label="统计信息">
            <el-row class="content-info" style="margin-bottom:20px;" :gutter="20">
              <el-col class="info-grade" :span="12">
                <el-card>
                  <el-row>
                    分数统计
                  </el-row>
                  <div class="echartImg">
                    <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
                  </div>
                </el-card>
              </el-col>
              <el-col class="history-grade" :span="12">
                <el-card>
                  <el-row>
                    历史成绩走势
                  </el-row>
                  <div class="echartImg">
                    <div ref="historyGrade" :style="{width: '100%', height: '100%'}"></div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-card>
                  <el-row>
                    题型得分占比
                  </el-row>
                  <div style="width:100%;height:180px;">
                    <div ref="testScores" :style="{width: '100%', height: '100%'}"></div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="16">
                <el-card>
                  <el-row>
                    题型得分率
                  </el-row>
                  <el-row :gutter="20" style="display:flex;flex-wrap:wrap;">
                    <el-col v-for="(item,i) in categoryNum" :key="i" class="testScores-item" :span="4">
                      <div>
                        <el-progress :width="80" type="circle" :percentage="item.value-0"></el-progress>
                      </div>
                      <div>{{item.name}}</div>
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
            <!-- 知识点 -->
            <el-row :gutter="20" style="margin-top:20px">
              <el-col :span="8">
                <el-card>
                  <el-row>
                    知识点分数占比
                  </el-row>
                  <div style="width:100%;height:180px;">
                    <div ref="intelletiveScores" :style="{width: '100%', height: '100%'}"></div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="16">
                <el-card>
                  <el-row>
                    知识点得分率
                  </el-row>
                  <el-row type="flex"  style="display:flex;flex-wrap:wrap;">
                    <el-col v-for="(item,i) in pointNum" :key="i" class="testScores-item" :span="4">
                      <div>
                        <el-progress :width="80" type="circle" :percentage="item.value-0"></el-progress>
                      </div>
                      <div>{{item.name}}</div>
                    </el-col>
                  </el-row>

                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="考试信息">

            <el-table :data="tableData" :header-cell-style="tableHeaderStyle" style="width: 100%">
              <el-table-column type="index" label="序号">
              </el-table-column>
              <el-table-column prop="user_id[1]" label="考生姓名" width="180">
              </el-table-column>
              <el-table-column label="提交状态" width="180">
                <template scope="scope">
                  <div>
                    {{scope.row.user_end_at!=null?'已提交':'未提交'}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="auto_score" label="系统评分">
              </el-table-column>
              <el-table-column prop="manual_score" label="手动评分">
              </el-table-column>
              <el-table-column prop="address" label="操作">
                <template scope="scope">
                  <el-button @click="lookReport(scope.row.user_id[0])" icon="el-icon-edit" type="text" size="small" >查看个人报告</el-button>
                </template>
              </el-table-column>
            </el-table>
             <!-- 分页 -->
        <el-row style="margin-top:20px;text-align:center">
          <el-pagination @current-change="handleCurrentChange" :page-size="10" :total="total" background
        layout="prev, pager, next">
        </el-pagination>
        </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>

    </el-row>
  </div>
</template>



<script>
  export default {
    props: ['paperId'],
    data() {
      return {
        allData: {},
        pointNum:[],
        categoryNum:[],
        current_page:1,
        total:0,
        tableData:[]
      }
    },
    created() {
      this.getdata()
      this.getAllTopicAndStem()
    },
    mounted() {
      this.drawgrade()
      this.historyGrade()
      this.testScores()
      this.intelletiveScores()
    },
    methods: {
      lookReport(id){
        console.log(id);
        window.sessionStorage.setItem('bgid',id)
        this.$router.push('/solve/chengjibaobiao')
      },
      getdata() {
        this.$http.get('testPaper/getTestAnalysis', {
            params: {
              test_id: this.paperId
            }
          })
          .then(res => {
            console.log(res);
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            console.log(this.$decryptData(res.data.data))
            this.allData = this.$decryptData(res.data.data)
            let categoryName = []
            let categoryNum = []
            categoryName.push('总分')
            categoryNum.push(this.allData.all_score)
            categoryName.push('平均分')
            categoryNum.push(this.allData.avgScore)
            categoryName.push('最高分')
            categoryNum.push(this.allData.maxScore)
            categoryName.push('最低分')
            categoryNum.push(this.allData.minScore)
            this.drawgrade(categoryName, categoryNum)

            let questionType = []
            let questionType1 = []
            for (let item in this.allData.category) {
              let data = {
                value: this.allData.category[item],
                name: item
              }
              let data1 = {
                value: (this.allData.category[item]*100).toFixed(),
                name: item
              }
              questionType.push(data)
              questionType1.push(data1)
            }
            this.testScores(questionType)
             this.categoryNum = questionType1

            let historyName = []
            for (let item in this.allData.history) {
              historyName.push('第' + ((Number(item) + 1)) + '次考试')
            }
            this.historyGrade(historyName, this.allData.history)

            let pointdata = []
            let pointdata1 = []
             for (let item in this.allData.point) {
               let data = {
                value: this.allData.point[item],
                name: item
              }
              let data1 = {
                value: (this.allData.point[item]*100).toFixed(),
                name: item
              }
              pointdata.push(data)
              pointdata1.push(data1)
            }
            this.pointNum = pointdata1,
            this.intelletiveScores(pointdata)
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
            // 分页
      handleCurrentChange(page) {
        this.current_page = page
        this.getAllTopicAndStem(page)
      },
       getAllTopicAndStem(pages = 1) {
        this.$http.get('testPaper/submit?page=' + pages, {
            params: {
              id:this.paperId
            }
          })
          .then(res => {
            console.log(res);
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            console.log(this.$decryptData(res.data.data))
            let {
              current_page,
              data,
              total
            } = this.$decryptData(res.data.data)
            console.log(data);
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
      tableHeaderStyle() {
        return 'text-align: center;background:rgba(133,176,248);color:#fff;'
      },
      drawgrade(categoryName = [], categoryNum = []) {
        if (categoryName.length == 0) {
          categoryName = []
          categoryNum = []
        }
        // 绘制图表
        let opt = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: '8%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: categoryName,
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '40%',
            data: categoryNum
          }]
        }

        setTimeout(() => {
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          myChart.setOption(opt)
        }, 0)
      },
      historyGrade(historyName = [], historyNum = []) {
        if (historyName.length == 0) {
          historyName = []
          historyNum = []
        }
        // 绘制图表
        let opt = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
          },
          grid: {
            top: '8%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: historyName
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: historyNum,
            type: 'line'
          }]
        };

        console.log(this.$refs.historyGrade);
        setTimeout(() => {
          let myChart = this.$echarts.init(this.$refs.historyGrade)
          myChart.setOption(opt)
        }, 0)
      },

      testScores(data) {
        // 绘制图表
        let opt = {
          tooltip: {
            trigger: 'item',
            formatter: '{b} <br/>值：{c} {d}%'
          },

          series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: data
          }]
        };
        setTimeout(() => {
          let myChart = this.$echarts.init(this.$refs.testScores)
          myChart.setOption(opt)
        }, 0)
      },
      intelletiveScores(data) {
        // 绘制图表
        let opt = {
          tooltip: {
            trigger: 'item',
            formatter: '{b} <br/> 值：{c} ({d}%)'
          },

          series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: data
          }]
        };
        setTimeout(() => {
          let myChart = this.$echarts.init(this.$refs.intelletiveScores)
          myChart.setOption(opt)
        }, 0)
      }
    },

  }
</script>
<style lang="less" scoped>
  .el-card {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15) !important;
    
  }

  .el-tabs--border-card {
    box-shadow: none !important;
  }

  .main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }


  .content {
    width: 100%;
    height: 350px;

    .content-left {
      .el-button {
        color: #fff;
        background-color: #118aff;

      }
    }

    .content-center {
      margin-bottom: 20px;

      >.el-card {
        margin-bottom: 20px;

      }

      .content-card-title {
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 10px;
      }

      .content-card-info {
        font-size: 14px;
        line-height: 25px;
        text-align: center;

        .el-col div:nth-of-type(2) {
          color: #118aff;
        }
      }

      .echartImg {
        height: 250px;
        width: 100%;
      }

      // 体系得分
      .testScores-item {
        margin-top: 40px;
        height: 140px;
        line-height: 30px;

        >div {

          text-align: center;
        }
      }
    }

    // 考生星系

  }
</style>