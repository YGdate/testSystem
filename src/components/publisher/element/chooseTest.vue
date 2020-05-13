<template>
  <div class="main">
    <!-- 选择题型 -->
    <el-row>
      <div class="content-container">
        <span @click="leftSlide" class="point"><i class="el-icon-caret-left"></i></span>
        <div class="choose-type">
          <transition name="slide-fade">
            <div ref="chooseItem" class="choose-type-item">
              <el-card :class="categoryIndex==index?'stylecategory':''" v-for="(item,index) in imgData"
                @click.native="chooseItem(index)" :key="index">
                <img style="width:60px;height:60px" :src="item.path" alt="">
                <span style="font-size:14px">{{item.name}}</span>
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
                <el-table size="mini" height="300" :data="selectQuestionData" :header-cell-style="tableHeaderStyle"
                  :cell-style="{'vertical-align':'top'}" style="width: 100%">
                  <el-table-column type="index" label="序号" width="50">
                  </el-table-column>
                  <el-table-column prop="category" label="题目类型" width="100">
                  </el-table-column>
                  <el-table-column label="题干">
                    <template scope="scope">
                      <div class="topic_and_stem">
                        {{JSON.parse(scope.row.topic_and_stem).title}}
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="knowledge_point" label="知识点" width="100">
                  </el-table-column>
                  <el-table-column label="难度" width="50">
                    <template scope="scope">
                      <div>
                        {{difficultyDegree(scope.row.degree_of_difficulty)}}
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column  prop="score" label="设置分值" width="80">
                    <template slot-scope="scope">
                        <el-input size="mini" @blur="inputValue(scope.row.score)" @input="change($event)" type="text"  placeholder="分数" v-model="scope.row.score"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column  label="操作" width="50">
                   <template scope="scope">
                     <div>
                        <el-button size="mini" type="danger" icon="el-icon-delete" circle  @click="deleteQuestion(scope.row)">
                    </el-button>
                     </div>
                   </template>
                  </el-table-column>
                </el-table>
                <!-- 分页 -->
                <!-- <el-row style="margin-top:20px;text-align:center">
                  <el-pagination background layout="prev, pager, next" :total="questionTotal">
                  </el-pagination>
                </el-row> -->
              </el-row>
            </el-tab-pane>
            <!-- 题库 -->
            <el-tab-pane label="题库">
              <el-row class="choose-test-title">
                <el-select @change="questionChoose" size="mini" v-model="gradeValue" placeholder="年级选择">
                  <el-option v-for="item in gradeOptions" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <el-select @change="questionChoose" size="mini" v-model="semesterValue" placeholder="章节选择">
                  <el-option v-for="item in semesterOptions" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <el-select @change="questionChoose" size="mini" v-model="questionValue" placeholder="知识点选择">
                  <el-option v-for="item in questionOptions" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
                <el-select @change="questionChoose" size="mini" v-model="diffValue" placeholder="难度选择">
                  <el-option v-for="item in diffValueOptions" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-row>
              <el-row style="margin-top:20px">
                <el-table size="mini" :data="tabalData" :header-cell-style="tableHeaderStyle" style="width: 100%">
                  <el-table-column type="index" label="序号" width="50">
                  </el-table-column>
                  <el-table-column label="题干">
                    <template scope="scope">
                      <div class="topic_and_stem">
                        {{JSON.parse(scope.row.topic_and_stem).title}}
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="knowledge_point" label="知识点" width="100">
                  </el-table-column>
                  <el-table-column prop="subject" label="学课" width="50">
                  </el-table-column>
                  <el-table-column prop="degree_of_difficulty" label="难度" width="50">
                    <template scope="scope">
                      <div>
                        {{difficultyDegree(scope.row.degree_of_difficulty)}}
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="address" label="操作" width="100">
                    <template scope="scope">
                      <el-button type="text" size="small">详情</el-button>
                      <el-button @click="addQuestion(scope.row)" type="text" size="small">添加</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <!-- 分页 -->
                <el-row style="margin-top:20px;text-align:center">
                  <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange"
                    :current-page="current_page" :page-size="10" :total="total">
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
      <el-button @click="nextStep"  size="small">下一步</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 当前题型
        categoryIndex: 0,
        // tabledata
        tableData: [

        ],
        gradeValue: '',
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
        semesterValue: '',
        semesterOptions: [{
          value: 0,
          label: '上学期'
        }, {
          value: 1,
          label: '下学期'
        }],
        questionValue: '',
        questionOptions: [],
        diffValue: '',
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
        tabalData: [],
        //表格标签

        //图标资源
        imgData: [{
            name: '单选题',
            path: require('../../../assets/img/icon/单选题.png'),
            name1: 'single_select'
          },
          {
            name: '不定项选择',
            path: require('../../../assets/img/icon/不定项选择.png'),
            name1: 'non_directional_select'
          },
          {
            name: '判断题',
            path: require('../../../assets/img/icon/判断题.png'),
            name1: 'true_or_false'
          },
          {
            name: '听力',
            path: require('../../../assets/img/icon/听力.png'),
            name1: 'listening'
          },
          {
            name: '填空题',
            path: require('../../../assets/img/icon/填空题.png'),
            name1: 'fill'
          },
          {
            name: '多选题',
            path: require('../../../assets/img/icon/多选题.png'),
            name1: 'multi_select '
          },
          {
            name: '完形填空',
            path: require('../../../assets/img/icon/完形填空.png'),
            name1: 'fill_blank'
          },
          {
            name: '短文改错',
            path: require('../../../assets/img/icon/短文改错.png'),
            name1: 'text_mistake'
          },
          {
            name: '翻译',
            path: require('../../../assets/img/icon/翻译.png'),
            name1: 'translation'
          },
          {
            name: '选词填空',
            path: require('../../../assets/img/icon/选词填空.png'),
            name1: 'choose_fill_blank'
          },
          {
            name: '阅读理解',
            path: require('../../../assets/img/icon/阅读理解.png'),
            name1: 'read_understand'
          },
          {
            name: '作文',
            path: require('../../../assets/img/icon/作文.png'),
            name1: 'composition'
          },
          {
            name: '七选五',
            path: require('../../../assets/img/icon/七选五.png'),
            name1: 'seven_selected_five'
          },

        ],
        ischeck: true,
        current_page: 1,
        total: 0,
        // questionCurrentPage: 1,
        // questionTotal: 0,
        // 已选试题
        selectQuestionData: [],
        reportClass:[],
        reportNum:[]
      }
    },
    computed: {
      difficultyDegree() {
        return function (text) {
          // 难度 0-4分别对应；简单，一般，适中，困难，艰难
          if (text == 0) {
            return '简单'
          } else if (text == 1) {
            return '一般';
          } else if (text == 2) {
            return '适中'
          } else if (text == 3) {
            return '困难'
          } else if (text == 4) {
            return '艰难'
          }
        }
      }
    },
    mounted() {
      // 设置题目marginLeft
      this.$refs.chooseItem.style.marginLeft = '0'
      this.drawgrade()
    },
    created() {
      this.getAllTopicAndStem()
      this.getQuestionPoint()
    },
    methods: {
      // 下一步
      nextStep(){
        this.$emit('nextStep')
      },
      // 分数输入验证
      inputValue(e){
        if(typeof(Number(e))!='number'||isNaN(Number(e))){
          this.$message.warning('请输入合法分数！')
        }
      },
      // input输入
      change(){
        this.$forceUpdate()
      },
      // 移除题目
      deleteQuestion(row) {
        
        let index1 = 0
        this.selectQuestionData.forEach((item,index)=>{
          if(item.id == row.id){
            index1 = index
          }
        })
        let index2 = this.reportClass.findIndex((item)=>{
          return item==row.category
        })
        console.log(index1);
        console.log(index2);
        if( this.reportNum[index2]<=1){
          this.reportClass.splice(index2,1)
        }else{
          this.reportNum[index2]--
        }
        

         this.drawgrade(this.reportClass,this.reportNum)
         
         this.selectQuestionData.splice(index1,1)
         this.$message.success('删除成功！')
        this.$store.commit('alertTableData',this.selectQuestionData)
      },
      questionChoose() {
        this.getAllTopicAndStem()
      },
      handleCurrentChange(pages) {
        this.getAllTopicAndStem(pages)
      },
      // 添加到试卷
      addQuestion(row) {

        if(this.reportClass.includes(row.category)){
          let index = this.reportClass.findIndex((item)=>{
          return item==row.category
        })
          console.log(index);
          this.reportNum[index]++
        }else{
          this.reportClass.push(row.category)
           this.reportNum.push(1)
        }

        this.drawgrade(this.reportClass,this.reportNum)
        let rowData = row
        rowData.score= ''
        console.log(rowData);
        this.$message.success('添加成功！')
        this.selectQuestionData.push(rowData)
        this.$store.commit('alertTableData',this.selectQuestionData)
      },
      chooseItem(index) {
        this.categoryIndex = index
        this.getQuestionPoint()
        this.getAllTopicAndStem()
      },
      //获取题库信息
      getAllTopicAndStem(pages = 1) {
        this.$http.get('questionInfo/getAllTopicAndStem?page=' + pages, {
            params: {
              grade: this.gradeValue,
              semester: this.semesterValue,
              question_point: this.questionValue,
              diff: this.diffValue,
              category: this.imgData[this.categoryIndex].name1
            }
          })
          .then(res => {
            console.log(res);
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            console.log(this.$decryptData(res.data.data))
            this.tabalData = this.$decryptData(res.data.data).data
            this.current_page = this.$decryptData(res.data.data).current_page
            this.total = this.$decryptData(res.data.data).total

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
      getQuestionPoint() {
        this.$http.get('questionInfo/getQuestionPoint', {
            params: {
              grade: this.gradeValue,
              semester: this.semesterValue,
              diff: this.diffValue,
              category: this.imgData[this.categoryIndex].name1
            }
          })
          .then(res => {
            console.log(res);
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            let arr = this.$decryptData(res.data.data)
            let newArr = []
            arr.forEach(item => {
              let val = {
                value: item,
                label: item
              }
              newArr.push(val)
            })
            this.questionOptions = newArr
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

      // 报表
      drawgrade(arrTest=[],num=[]) {
        if(this.reportClass.length==0){
          arrTest=[]
          num=[]
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
            data: arrTest,
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: '题型数量',
            type: 'bar',
            barWidth: '40%',
            data: num
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
  //题型选择样式
  .stylecategory {
    background: rgb(241, 241, 241);
  }

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
    .topic_and_stem {
      display: inline-block !important;
      white-space: nowrap !important;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

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