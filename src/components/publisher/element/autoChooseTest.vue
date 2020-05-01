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
            <el-row class="selected-test-title" type="flex" justify="space-between">
              <el-col :span="4">
                已选试题
              </el-col>
              <el-col :span="10">
                <el-button size="small" type="primary" icon="el-icon-circle-plus-outline">添加一项</el-button>
              </el-col>
            </el-row>
            <el-row style="margin-top:20px">
              <el-row :gutter="10">
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
              </el-row>
              <el-divider></el-divider>
               <el-row :gutter="10">
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select size="mini" v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
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
      <el-button size="small">下一步</el-button>
    </el-row>

  </div>
</template>



<script>
  export default {
    data() {
      return {

      }

    },
    mounted() {
      this.drawgrade()
    },
    methods: {
      // 报表
      drawgrade() {
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