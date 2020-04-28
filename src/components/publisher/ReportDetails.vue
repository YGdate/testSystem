<template>
  <div class="main">
    <el-row class="title">
      <div>
        全年级第一次月考
      </div>
    </el-row>
    <el-row class="content">
      <el-col class="content-left" :span="4">
        <el-button icon="el-icon-back">试卷选择</el-button>
      </el-col>
      <el-col class="content-center" :span="16">
        <el-card>
          <el-row class="content-card-title">
            考生信息
          </el-row>
          <el-row type="flex" class="content-card-info" justify="space-between">
            <el-col :span="2">
              <div>参考人数</div>
              <div>30</div>
            </el-col>
            <el-col :span="2">
              <div>参考人数</div>
              <div>30</div>
            </el-col>
            <el-col :span="2">
              <div>参考人数</div>
              <div>30</div>
            </el-col>
            <el-col :span="2">
              <div>参考人数</div>
              <div>30</div>
            </el-col>
            <el-col :span="2">
              <div>参考人数</div>
              <div>30</div>
            </el-col>
            <el-col :span="2">
              <div>参考人数</div>
              <div>30</div>
            </el-col>
            <el-col :span="2">
              <div>参考人数</div>
              <div>30</div>
            </el-col>
            <el-col :span="2">
              <div>参考人数</div>
              <div>30</div>
            </el-col>
            <el-col :span="2">
              <div>参考人数</div>
              <div>30</div>
            </el-col>
            <el-col :span="2">
              <div>参考人数</div>
              <div>30</div>
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
                  <el-row type="flex" justify="space-between">
                    <el-col class="testScores-item" :span="4">
                      <div> <el-progress :width="80" type="circle" :percentage="25"></el-progress></div>
                      <div>单选题</div>
                    </el-col>
                     <el-col class="testScores-item" :span="4">
                      <div> <el-progress :width="80" type="circle" :percentage="25"></el-progress></div>
                      <div>单选题</div>
                    </el-col>
                     <el-col class="testScores-item" :span="4">
                      <div> <el-progress :width="80" type="circle" :percentage="25"></el-progress></div>
                      <div>单选题</div>
                    </el-col>
                     <el-col class="testScores-item" :span="4">
                      <div> <el-progress :width="80" type="circle" :percentage="25"></el-progress></div>
                      <div>单选题</div>
                    </el-col>
                     <el-col class="testScores-item" :span="4">
                      <div> <el-progress :width="80" type="circle" :percentage="25"></el-progress></div>
                      <div>单选题</div>
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
                  <el-row type="flex" justify="space-between">
                    <el-col class="testScores-item" :span="4">
                      <div> <el-progress :width="80" type="circle" :percentage="25"></el-progress></div>
                      <div>单选题</div>
                    </el-col>
                     <el-col class="testScores-item" :span="4">
                      <div> <el-progress :width="80" type="circle" :percentage="25"></el-progress></div>
                      <div>单选题</div>
                    </el-col>
                     <el-col class="testScores-item" :span="4">
                      <div> <el-progress :width="80" type="circle" :percentage="25"></el-progress></div>
                      <div>单选题</div>
                    </el-col>
                     <el-col class="testScores-item" :span="4">
                      <div> <el-progress :width="80" type="circle" :percentage="25"></el-progress></div>
                      <div>单选题</div>
                    </el-col>
                     <el-col class="testScores-item" :span="4">
                      <div> <el-progress :width="80" type="circle" :percentage="25"></el-progress></div>
                      <div>单选题</div>
                    </el-col>

                  </el-row>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="考试信息">
            <el-table :header-cell-style="tableHeaderStyle" style="width: 100%">
              <el-table-column type="index" label="序号">
              </el-table-column>
              <el-table-column prop="date" label="考生姓名" width="180">
              </el-table-column>
              <el-table-column prop="name" label="提交状态" width="180">
              </el-table-column>
              <el-table-column prop="address" label="系统评分">
              </el-table-column>
              <el-table-column prop="address" label="手动评分">
              </el-table-column>
              <el-table-column prop="address" label="操作">
                <template>
                  <div>
                    查看个人报告
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>

    </el-row>
  </div>
</template>



<script>
  export default {
    data() {
      return {

      }
    },
    created() {

    },
    mounted() {
      this.drawgrade()
      this.historyGrade()
      this.testScores()
      this.intelletiveScores()
    },
    methods: {
      tableHeaderStyle() {
        return 'text-align: center;background:rgba(133,176,248);color:#fff;'
      },
      drawgrade() {
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            data: [10, 52, 200, 334, 390, 330, 220]
          }]
        }

        setTimeout(() => {
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          myChart.setOption(opt)
        }, 0)
      },
      historyGrade() {
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        };

        console.log(this.$refs.historyGrade);
        setTimeout(() => {
          let myChart = this.$echarts.init(this.$refs.historyGrade)
          myChart.setOption(opt)
        }, 0)
      },
      testScores() {
        // 绘制图表
        let opt = {
          tooltip: {
            trigger: 'item',
            formatter: '{b} <br/> {c} ({d}%)'
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
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [{
                value: 335,
                name: '直接访问'
              },
              {
                value: 310,
                name: '邮件营销'
              },
              {
                value: 234,
                name: '联盟广告'
              },
              {
                value: 135,
                name: '视频广告'
              },
              {
                value: 1548,
                name: '搜索引擎'
              }
            ]
          }]
        };
        setTimeout(() => {
          let myChart = this.$echarts.init(this.$refs.testScores)
          myChart.setOption(opt)
        }, 0)
      },
       intelletiveScores() {
        // 绘制图表
        let opt = {
          tooltip: {
            trigger: 'item',
            formatter: '{b} <br/> {c} ({d}%)'
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
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [{
                value: 335,
                name: '直接访问'
              },
              {
                value: 310,
                name: '邮件营销'
              },
              {
                value: 234,
                name: '联盟广告'
              },
              {
                value: 135,
                name: '视频广告'
              },
              {
                value: 1548,
                name: '搜索引擎'
              }
            ]
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

  .title {
    position: relative;
    width: 100%;
    height: 90px;
    text-align: center;
    display: flex;
    letter-spacing: 2px;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: #333;
    font-weight: 600;

    div {
      position: relative;
      height: 20px;
      display: inline-block;
      border-bottom: 10px solid #f4c521;
      line-height: 28px;
    }
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
        font-size: 16px;
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
        >div{
          
          text-align: center;
        }
      }
    }

    // 考生星系

  }
</style>