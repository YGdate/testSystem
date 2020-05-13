<template>
  <div class="main">

    <!-- 选择题库 -->
    <el-row style=" margin-top: 30px;width:100%;">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="chart">
            <el-row>
              已选题型数量
            </el-row>
            <el-row style="width:100%;height:200px;">
              <div ref="myChart" :style="{width: '100%', height: '100%'}"></div>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="16">
          <el-card>
            <el-row style="margin-bottom:20px" class="selected-test-title" type="flex" justify="space-between">
              <el-col :span="4">
                已选试题
              </el-col>
              <el-col :span="10">
                <el-button size="small" @click="addItem" type="primary" icon="el-icon-circle-plus-outline">添加一项
                </el-button>
              </el-col>
            </el-row>
            <el-row v-for="(item,index) in selectNum" :key="index">
              <el-row :gutter="10">
                <el-col :span="4">
                  <el-select size="mini" v-model="item.grade" placeholder="年纪选择">
                    <el-option v-for="item in gradeOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="item.semester" placeholder="章节选择">
                    <el-option v-for="item in semesterOptions" :key="item.value" :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" @change="chooseCategory" v-model="item.category" placeholder="题型选择">
                    <el-option v-for="item in questionClassOptions" :key="item.value" :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-input @blur="blurChange($event)" type="text" size="mini" placeholder="试题数量" v-model="item.number">
                  </el-input>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="item.difficult" placeholder="难度选择">
                    <el-option v-for="item in diffValueOptions" :key="item.value" :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-input type="text" size="mini" placeholder="单体分数" v-model="item.single_score">
                  </el-input>
                </el-col>
              </el-row>
              <el-divider></el-divider>
            </el-row>
          </el-card>
        </el-col>

      </el-row>
    </el-row>
    <!-- 下一步 -->
    <el-row class="content-footer">
      <el-button @click="nextStep" size="small">下一步</el-button>
    </el-row>

  </div>
</template>



<script>
  export default {
    data() {
      return {
        selectNum: [{
          "category": '',
          "grade": '',
          "semester": '',
          "number": '',
          "difficult": '',
          "single_score": ''
        }],
        gradeOptions: [{
            value: 0,
            label: '一年级'
          }, {
            value: 1,
            label: '二年级'
          }, {
            value: 2,
            label: '三年级'
          }, {
            value: 3,
            label: '四年级'
          }, {
            value: 4,
            label: '五年级'
          },
          {
            value: 5,
            label: '六年级'
          }, {
            value: 6,
            label: '七年级'
          }, {
            value: 7,
            label: '八年级'
          }, {
            value: 8,
            label: '九年级'
          }, {
            value: 9,
            label: '大学一年级'
          }, {
            value: 10,
            label: '大学二年级'
          }, {
            value: 11,
            label: '大学三年级'
          }, {
            value: 12,
            label: '大学四年级'
          }
        ],
        semesterOptions: [{
          value: 0,
          label: '上学期'
        }, {
          value: 1,
          label: '下学期'
        }],
        questionClassOptions: [{
            value: 'non_directional_select ',
            label: '不定向选择'
          }, {
            value: 'fill',
            label: '填空题'
          }, {
            value: 'true_or_false',
            label: '判断题'
          }, {
            value: 'seven_selected_five',
            label: '七选五'
          }, {
            value: 'single_select',
            label: '单选'
          },
          {
            value: 'listening',
            label: '听力'
          }, {
            value: 'multi_select',
            label: '多选题'
          }, {
            value: 'text_mistake',
            label: '短文改错'
          }, {
            value: 'fill_blank',
            label: '完型填空'
          }, {
            value: 'translation',
            label: '翻译'
          }, {
            value: 'composition',
            label: '作文'
          }, {
            value: 'choose_fill_blank',
            label: '选词填空'
          }, {
            value: 'read_understand',
            label: '阅读理解'
          }
        ],
        diffValueOptions: [{
            value: 0,
            label: '简单'
          }, {
            value: 1,
            label: '一般'
          },
          {
            value: 2,
            label: '适中'
          }, {
            value: 3,
            label: '困难'
          },
          {
            value: 4,
            label: '艰难'
          }
        ],
        reportClass: [],
        reportNum: []
      }

    },
    mounted() {
      this.drawgrade()
    },
    methods: {
      // 下一步
      nextStep() {
        this.selectNum.forEach(item => {
          let flag = true
          for (let i in item) {
            if (item[i] === '') {
              flag = false
            }
          }
          if (flag == false) return this.$message.warning('请完善数据填写')
          this.$emit('nextStep')
           this.$store.commit('alertAutoTableData',this.selectNum)
          return flag
        })
      },
      blurChange() {
        this.reportNum = []
        this.selectNum.forEach(item => {
          this.reportNum.push(item.number)
        })
        this.drawgrade(this.reportClass, this.reportNum)
      },
      chooseCategory() {
        this.reportClass = []
        this.selectNum.forEach(item => {
          this.reportClass.push(item.category)
        })
        this.drawgrade(this.reportClass, this.reportNum)

      },
      addItem() {
        let item = {
          "category": '',
          "grade": '',
          "semester": '',
          "number": '',
          "difficult": '',
          "single_score": ''
        }
        this.selectNum.push(item)
      },
      // 报表
      drawgrade(reportClass = [], reportNum = []) {
        if (reportClass.length == 0) {
          reportClass = []
          reportNum = []
        }
        // 绘制图表
        let opt = {
          color: ['#24c9e3'],
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
            bottom: '1%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: reportClass,
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: '题目数量',
            type: 'bar',
            barWidth: '40%',
            data: reportNum
          }]
        }

        setTimeout(() => {
          let myChart = this.$echarts.init(this.$refs.myChart)
          myChart.setOption(opt)
        }, 0)
      },


    }

  }
</script>
<style lang="less" scoped>
  //题型选择
  .content-container {
    height: 120px;
    width: 980px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .point {
      cursor: pointer;

    }

    .choose-type {
      height: 100%;
      width: 95%;
      overflow: hidden;
      display: flex;

      .choose-type-item {
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;

        .el-card {
          cursor: pointer;
          height: 95%;
          width: 110px;
          margin-right: 10px;
          margin-left: 10px;

          display: flex;
          justify-content: center;
          align-content: flex-start;

          span {
            width: 100%;
            display: block;
            text-align: center;
          }
        }
      }
    }
  }


  // 已选试题
  .selected-test-title {
    .el-col-4 {
      font-weight: 600;
    }

    .el-col-10 {
      font-size: 13px;
      font-weight: 400;
      text-align: right;
    }

  }


  // x下一步
  .content-footer {
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 40px;
    width: 40%;
    display: flex;
    justify-content: space-around;

    .el-button {
      background: #24c9e3;
      color: #fff;
    }
  }
</style>