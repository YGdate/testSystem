<template>
  <div class="main">
    <!-- 选择题型 -->
    <el-row>
      <div class="content-container">
        <span @click="leftSlide" class="point"><i class="el-icon-caret-left"></i></span>
        <div class="choose-type">
          <transition name="slide-fade">
            <div ref="chooseItem" class="choose-type-item">
              <el-card v-for="(item,index) in imgData" :key="index">
                <img style="width:60px;height:60px" :src="item.path" alt="">
                <span>单选题</span>
              </el-card>
            </div>
          </transition>
        </div>
        <span @click="rightSlide" class="point"><i class="el-icon-caret-right"></i></span>
      </div>
    </el-row>
    <!-- 选择题库 -->
    <el-row style=" margin-top: 30px;width:100%;">
      <el-row :gutter="20">
        <el-col :span="16">
          <el-tabs type="border-card" class="choose-test">
            <!-- 已选试题 -->
            <el-tab-pane label="已选试题">
              <el-row class="selected-test-title" type="flex" justify="space-between">
                <el-col :span="4">
                  已选试题
                </el-col>
                <el-col :span="10">
                  当前总分：100分 | 当前题数：12道
                </el-col>
              </el-row>
              <el-row style="margin-top:20px">
                <el-table size="mini" :header-cell-style="tableHeaderStyle" style="width: 100%">
                  <el-table-column type="index" label="序号" width="50">
                  </el-table-column>
                  <el-table-column prop="date" label="题干" width="50">
                  </el-table-column>
                  <el-table-column prop="name" label="选项A" width="60">
                  </el-table-column>
                  <el-table-column prop="address" label="选项B" width="60">
                  </el-table-column>
                  <el-table-column prop="address" label="选项C" width="60">
                  </el-table-column>
                  <el-table-column prop="address" label="选项D" width="60">
                  </el-table-column>
                  <el-table-column prop="address" label="知识点">
                  </el-table-column>
                  <el-table-column prop="address" label="难度" width="50">
                  </el-table-column>
                  <el-table-column prop="address" label="设置分值" width="70">
                  </el-table-column>
                  <el-table-column prop="address" width="40">
                  </el-table-column>
                </el-table>
                <!-- 分页 -->
                <el-row style="margin-top:20px;text-align:center">
                  <el-pagination background layout="prev, pager, next" :total="1000">
                  </el-pagination>
                </el-row>
              </el-row>
            </el-tab-pane>
            <!-- 题库 -->
            <el-tab-pane label="题库">
              <el-row class="choose-test-title">
                <el-select size="mini" v-model="value" placeholder="年纪选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <el-select size="mini" v-model="value" placeholder="章节选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <el-select size="mini" v-model="value" placeholder="知识点选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <el-select size="mini" v-model="value" placeholder="难度选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-row>
              <el-row style="margin-top:20px">
                <el-table size="mini" :header-cell-style="tableHeaderStyle" style="width: 100%">
                  <el-table-column type="index" label="序号" width="50">
                  </el-table-column>
                  <el-table-column prop="date" label="题干" width="50">
                  </el-table-column>
                  <el-table-column prop="name" label="选项A" width="60">
                  </el-table-column>
                  <el-table-column prop="address" label="选项B" width="60">
                  </el-table-column>
                  <el-table-column prop="address" label="选项C" width="60">
                  </el-table-column>
                  <el-table-column prop="address" label="选项D" width="60">
                  </el-table-column>
                  <el-table-column prop="address" label="知识点">
                  </el-table-column>
                  <el-table-column prop="address" label="学课" width="50">
                  </el-table-column>
                  <el-table-column prop="address" label="难度" width="50">
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
            </el-tab-pane>

          </el-tabs>
        </el-col>
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
      </el-row>
    </el-row>
     <!-- 下一步 -->
        <el-row class="content-footer">
          <el-button size="small">下一步</el-button>
          <el-button size="small">去发布</el-button>
        </el-row>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        // tabledata
        tableData: [

        ],
        value: '',
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
        //图标资源
        imgData: [{
            name: '单选题',
            path: require('../../../assets/img/icon/单选题.png')
          },
          {
            name: '不定项选择',
            path: require('../../../assets/img/icon/不定项选择.png')
          },
          {
            name: '判断题',
            path: require('../../../assets/img/icon/判断题.png')
          },
          {
            name: '听力',
            path: require('../../../assets/img/icon/听力.png')
          },
          {
            name: '填空题',
            path: require('../../../assets/img/icon/填空题.png')
          },
          {
            name: '多选题',
            path: require('../../../assets/img/icon/多选题.png')
          },
          {
            name: '完形填空',
            path: require('../../../assets/img/icon/完形填空.png')
          },
          {
            name: '短文改错',
            path: require('../../../assets/img/icon/短文改错.png')
          },
          {
            name: '翻译',
            path: require('../../../assets/img/icon/翻译.png')
          },
          {
            name: '选词填空',
            path: require('../../../assets/img/icon/选词填空.png')
          },
          {
            name: '阅读理解',
            path: require('../../../assets/img/icon/阅读理解.png')
          },
          {
            name: '作文',
            path: require('../../../assets/img/icon/作文.png')
          },
          {
            name: '七选五',
            path: require('../../../assets/img/icon/七选五.png')
          },

        ],
        ischeck: true
      }
    },
    mounted() {
      // 设置题目marginLeft
      this.$refs.chooseItem.style.marginLeft = '0'
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
      // 表格样式
      tableHeaderStyle() {
        return 'text-align: center;background:#24c9e3;color:#fff;'
      },
      
      leftSlide() {
        console.log(this.$refs.chooseItem.style.marginLeft);
        let len = parseInt(this.$refs.chooseItem.style.marginLeft)
        if (len >= 0) return
        let timeData = 0
        let item = setInterval(() => {
          timeData += 4
          len += 4
          this.$refs.chooseItem.style.marginLeft = (len) + 'px'

          if (timeData > 128) {
            clearInterval(item)
          }
        }, 10)
      },
      rightSlide() {
        let len = parseInt(this.$refs.chooseItem.style.marginLeft)
        console.log(len);
        if (len < -700) return;
        let timeData = 0
        let item = setInterval(() => {
          timeData -= 4
          len -= 4
          this.$refs.chooseItem.style.marginLeft = (len) + 'px'

          if (timeData < -128) {
            clearInterval(item)

          }
        }, 10)
      }
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

  // 题库选择
  .choose-test {

    width: 100%;

    .choose-test-title {
      display: flex;

      .el-select {
        margin-right: 10px;
        width: 100px;
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