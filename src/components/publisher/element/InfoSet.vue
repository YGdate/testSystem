<template>
  <div class="main">
    <!-- 考试信息设置 -->
    <el-row class="content">

      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item prop="name" label="考试名称">
          <el-input v-model="form.name" placeholder="输入考试名称"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="12">
            <el-form-item prop="beginTime" label="考试开始时间">
              <el-date-picker v-model="form.beginTime" type="datetime" placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="endTime" label="考试结束时间">
              <el-date-picker v-model="form.endTime" type="datetime" placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="allScore" label="试卷总分">
              <el-input v-model="form.allScore"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="passScore" label="及格分数">
              <el-input v-model="form.passScore"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="num" label="试题数量">
              <el-input v-model="form.num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="testTime" label="考试时长">
              <el-input v-model="form.testTime">
                <template slot="append">分钟</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item prop="times" label="考试次数">
          <el-input v-model="form.times">
            <template slot="append">次</template>
          </el-input>
          <el-checkbox label="不限次数" name="type"></el-checkbox>
        </el-form-item>
        <el-form-item prop="function" label="查看功能">
          <el-radio-group v-model="form.function">
            <el-radio label="0">开启</el-radio>
            <el-radio label="1">关闭</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-row class="btn">
          <el-button @click="submitForm('form')" type="primary">完成组卷</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
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
      var checkNum = (rule, value, callback) => {
        if (!Number.isInteger(value - 0) || isNaN(Number(value))) {
          callback(new Error('请输入数字值'))
        } else {
          callback()
        }

      };
      return {
        //
        table: [],
        input1: '',
        value1: '',
        form: {
          name: '',
          beginTime: '',
          endTime: '',
          allScore: '',
          passScore: '',
          num: '',
          testTime: '',
          times: '',
          function: ''
        },
        rules: {
          name: [{
              required: true,
              message: '请输入考试名称',
              trigger: 'blur'
            },
            {
              min: 0,
              max: 20,
              message: '长度在 0 到 20 个字符',
              trigger: 'blur'
            }
          ],
          beginTime: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          endTimeL: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          allScore: [{
            required: true,
            message: '请输入试卷总分',
            trigger: 'blur'
          }, {
            validator: checkNum,
            trigger: 'blur'
          }],
          passScore: [{
              required: true,
              message: '请输入及格分数',
              trigger: 'blur'
            },
            {
              validator: checkNum,
              trigger: 'blur'
            }
          ],
          num: [{
              required: true,
              message: '请输入试题数量',
              trigger: 'blur'
            },
            {
              validator: checkNum,
              trigger: 'blur'
            }
          ],
          testTime: [{
              required: true,
              message: '请输入考试时长',
              trigger: 'blur'
            },
            {
              validator: checkNum,
              trigger: 'blur'
            }
          ],
          times: [{
              required: true,
              message: '请输入考试次数',
              trigger: 'blur'
            },
            {
              validator: checkNum,
              trigger: 'blur'
            }
          ],
          function: [{
            required: true,
            message: '请选择查看功能',
            trigger: 'change'
          }]
        }
      }
    },
    created() {

    },
    methods: {
      formatDate(date1) {

        var date = new Date(date1);

        var YY = date.getFullYear() + '-';

        var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';

        var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());

        var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';

        var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';

        var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());

        return YY + MM + DD + " " + hh + mm + ss;

      },
      submitForm(formName) {
        if (this.$store.state.isAuto == true) {
          const autoTableData = this.$store.state.autoTableData
          let basicInfo1 = {}
          console.log(autoTableData);
          autoTableData.forEach((item,index)=>{
            item.number = item.number-0
            item.single_score = item.single_score-0
            basicInfo1[index] = item
          })

          this.submitFun(formName, 'testPaper/autoMakePaper',basicInfo1)
        } else {
          const tableData = this.$store.state.tableData
          let tableClass = []
          for (let item in tableData) {
            tableClass.push(tableData[item].category)
          }

          let basicInfo = {}
          let tableCategory = [...new Set(tableClass)]
          tableCategory.forEach((e) => {
            basicInfo[e] = {}
          })

          tableData.forEach((item, index) => {
            for (let item1 in basicInfo) {
              if (item.category == item1) {
                basicInfo[item1][index] = {
                  id: item.id,
                  score: item.score - 0
                }
              }
            }
          })
          this.submitFun(formName, 'testPaper/handMakerPaper',basicInfo)
        }

      },
      submitFun(formName, url,basicInfo) {
        this.$refs[formName].validate((valid) => {
          if (!valid) return;

          let config = {
            "testName": this.form.name,
            "test_start": this.formatDate(this.form.beginTime),
            "test_end": this.formatDate(this.form.endTime),
            "all_score": this.form.allScore - 0,
            "pass_score": this.form.passScore - 0,
            "test_use_time": this.form.num - 0,
            "test_num": this.form.testTime - 0,
            "test_time": this.form.times - 0,
            "can_view": this.form.function-0
          }


          let FormDataItem = {
            "basicInfo": basicInfo,
            "config": config
          }

          this.$http.post(url, FormDataItem)
            .then(res => {
              console.log(res);
              if (res.data.code != 0) return this.$message.error(res.data.msg)
              this.$message.success(res.data.msg)
              console.log(11111);
              this.$emit('forceUpdate')

            }).catch(err => {
              console.log(err);
              this.$message({
                dangerouslyUseHTMLString: true,
                showClose: true,
                message: err.response.data.data.join('<br><br>'),
                type: 'error'
              });
            })
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
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

    .btn {
      margin: 0 auto;
      width: 50%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
    }

    .footer {
      text-align: center;
      font-size: 14px;
      color: #ccc;
      cursor: pointer;
      margin-bottom: 20px;
    }


  }
</style>