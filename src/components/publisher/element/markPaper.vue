<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="7">
        <el-card>
          <el-row class="card">答题卡</el-row>
          <!-- 答题卡内容 -->
          <el-row>
            <el-row class="card-title">
              客观题（系统评分）
            </el-row>
            <el-row class="card-info" type="flex" :gutter="30">
              <el-col @click.native="chooseQuestionAuto(item.id,item.category,index)" :span="5"
                v-for="(item,index) in $store.state.autoQuestionTile" :key="index">
                <span :class="(isindexTitleAuto==index)?'truebg':''">{{index+1}}</span>
              </el-col>

            </el-row>
            <el-divider></el-divider>
          </el-row>
          <!-- 答题卡内容 -->
          <el-row>
            <el-row class="card-title">
              主观题（老师评分）
            </el-row>
            <el-row class="card-info" type="flex" :gutter="30">
              <el-col @click.native="chooseQuestion(item.id,item.category,index)" :span="5"
                v-for="(item,index) in $store.state.questionTile" :key="index">
                <span :class="(item.score!=0 || isindexTitle==index)?'truebg':''">{{index+1}}</span>
              </el-col>
            </el-row>
            <el-divider></el-divider>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="17" style="margin-bottom:40px">
        <el-card>
          <el-row class="paper-info" type="flex" justify="space-between">
            <el-col :span="6">试卷详情</el-col>
            <el-col :span="12">
              <el-button @click="quitScore" size="small">退出评分</el-button>
              <el-button @click="submitScore" size="small">提交评分</el-button>
            </el-col>
          </el-row>
          <el-row class="info-id">
            ID：123456
          </el-row>
          <el-row class="info-content" type="flex">
            <el-col>考试名称：{{test_name}}</el-col>
            <el-col>组卷方式：{{test_method==0?'手动组卷':'自动组卷'}}</el-col>
            <el-col>试卷科目：{{subject}}</el-col>
            <el-col>客观题得分：{{auto_score}}（60分）</el-col>
            <el-col>主观题得分：{{manual_score}}（60分）</el-col>
            <el-col>总分：{{all_score}}分</el-col>
          </el-row>
          <!-- 试题内容 -->


          <el-divider content-position="left">{{QuestionType(isQuestionType)}}</el-divider>
          <singleSelect :content="content" v-if="isQuestionType=='single_select'"></singleSelect>
          <listening :content="content" v-if="isQuestionType=='listening'"></listening>
          <fillBlank :content="content" v-if="isQuestionType=='fill_blank'"></fillBlank>
          <multiSelect :content="content" v-if="isQuestionType=='multi_select'"></multiSelect>
          <trueOrFalse :content="content" v-if="isQuestionType=='true_or_false'"></trueOrFalse>
          <readUnderstand :content="content" v-if="isQuestionType=='read_understand'"></readUnderstand>
          <chooseFillBlank :content="content" v-if="isQuestionType=='choose_fill_blank'"></chooseFillBlank>
          <sevenSelectedFive :content="content" v-if="isQuestionType=='seven_selected_five'"></sevenSelectedFive>
          <nonDiretionalSelect :content="content" v-if="isQuestionType=='non_directional_select'"></nonDiretionalSelect>
          <composition ref="com" :content="content" :scoreNum="scoreNum" v-if="isQuestionType=='composition'">
          </composition>
          <fill ref="com" :content="content" v-if="isQuestionType=='fill'"></fill>
          <translation ref="com" :content="content" :scoreNum="scoreNum" v-if="isQuestionType=='translation'">
          </translation>
          <textMistake ref="com" :content="content" :scoreNum="scoreNum" v-if="isQuestionType=='text_mistake'">
          </textMistake>
          <!-- <el-row class="selectBtn">
            <el-button @click="nextQuestion" size="mini">上一题</el-button>
            <el-button @click="lastQuestion" size="mini">下一题</el-button>
          </el-row> -->
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  import singleSelect from '../questionType/single_select'
  import composition from '../questionType/composition'
  import translation from '../questionType/translation'
  import fill from '../questionType/fill'
  import textMistake from '../questionType/textMistake'
  import listening from '../questionType/listening'
  import fillBlank from '../questionType/fill_blank'
  import multiSelect from '../questionType/multi_select'
  import trueOrFalse from '../questionType/true_or_false'
  import readUnderstand from '../questionType/read_understand'
  import chooseFillBlank from '../questionType/choose_fill_blank'
  import sevenSelectedFive from '../questionType/seven_selected_five'
  import nonDiretionalSelect from '../questionType/nonDiretionalSelect'
  export default {
    components: {
      singleSelect,
      composition,
      fill,
      translation,
      textMistake,
      listening,
      fillBlank,
      multiSelect,
      trueOrFalse,
      readUnderstand,
      chooseFillBlank,
      sevenSelectedFive,
      nonDiretionalSelect
    },
    data() {
      return {
        scoreNum: '',
        isindexTitle: '',
        isindexTitleAuto: '',
        isQuestionType: '',
        test_id: '',
        test_user_id: '',
        all_score: '',
        subject: '',
        test_method: '',
        auto_score: '',
        manual_score: '',
        test_name: '',
        questionData: [],
        content: {},
        allData: {}
      }
    },
    computed: {
      QuestionType() {
        return (text) => {
          if (text == 'composition') {
            return '作文'
          } else if (text == 'translation') {
            return '翻译';
          } else if (text == 'fill') {
            return '填空'
          } else if (text == 'text_mistake') {
            return '短文改错'
          } else if (text == 'non_directional_select') {
            return '不定向选择'
          } else if (text == 'true_or_false') {
            return '判断题'
          } else if (text == 'seven_selected_five') {
            return '七选五'
          } else if (text == 'single_select') {
            return '单选'
          } else if (text == 'listening') {
            return '听力'
          } else if (text == 'multi_select') {
            return '多选题'
          } else if (text == 'fill_blank') {
            return '完型填空'
          } else if (text == 'read_understand') {
            return '阅读理解'
          } else if (text == 'choose_fill_blank') {
            return '选词填空'
          }
        }
      }
    },
    created() {
      this.test_id = this.$store.state.paperId
      this.test_user_id = this.$store.state.paperUserId
      this.getData()
      this.getDataAuto()
    },
    methods: {
      nextQuestion() {
        if (this.isindexTitle != 0)
          this.isindexTitle--

        this.isQuestionType = this.$store.state.questionTile[this.isindexTitle].category
        let index = this.$store.state.questionTile[this.isindexTitle].id
        this.content = this.questionData[this.isQuestionType][index]
      },
      lastQuestion() {
        if (this.isindexTitle < this.$store.state.questionTile.length)
          this.isindexTitle++
        this.isQuestionType = this.$store.state.questionTile[this.isindexTitle].category
        let index = this.$store.state.questionTile[this.isindexTitle].id
        this.content = this.questionData[this.isQuestionType][index]
      },
      quitScore() {
        this.$confirm('退出之后，评分记录不会被保存, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {



          setTimeout(() => {

            this.$emit('quitScore')
          }, 1000)
          this.$message({
            type: 'success',
            message: '退出成功!'
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });
        });
      },
      submitScore() {
        this.$confirm('提交评分内容, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let scoreNum = 0
          this.$store.state.questionTile.forEach(item => {
            this.allData.content[item.category][item.id].score = item.score
            scoreNum += (item.score - 0)
          })
          console.log(this.allData);
          this.$http.put('testPaper/updateScore', {
              test_id: this.test_id,
              test_user_id: this.test_user_id,
              score: scoreNum,
              content: this.allData
            })
            .then(res => {
              if (res.data.code != 0) return this.$message.error(res.data.msg)
              this.$message.success(res.data.msg)

              setTimeout(() => {

                this.$emit('quitScore')
              }, 1500)
            }).catch(err => {
              this.$message({
                dangerouslyUseHTMLString: true,
                showClose: true,
                message: err.response.data.data.join('<br><br>'),
                type: 'error'
              });
            })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });
        });
      },
      chooseQuestionAuto(index, category, e) {
        this.isindexTitleAuto = e
        this.isQuestionType = category
        this.content = this.questionDataAuto[category][index]
        console.log(this.content);
      },

      chooseQuestion(index, category, e) {
        console.log(this.$store.state.questionTile);
        this.isindexTitle = e
        this.isQuestionType = category
        this.content = this.questionData[category][index]

        setTimeout(() => {
          console.log(this.$refs.com);
          this.$refs.com.change(this.content.id)
        }, 10)

      },
      getData() {
        this.$http.get('testPaper/getTestPaperInfoByTestId', {
            params: {
              test_id: this.test_id,
              test_user_id: this.test_user_id 
            }
          })
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            this.allData = this.$decryptData(res.data.data)
            this.all_score = this.$decryptData(res.data.data).all_score
            this.subject = this.$decryptData(res.data.data).subject
            this.test_method = this.$decryptData(res.data.data).test_method
            this.test_name = this.$decryptData(res.data.data).test_name
            this.auto_score = this.$decryptData(res.data.data).auto_score
            this.manual_score = this.$decryptData(res.data.data).manual_score
            this.questionData = this.$decryptData(res.data.data).content
            this.$store.commit('alertQuestionTile', this.dataEdit(this.questionData))
            
          }).catch(err => {
            this.$message({
              dangerouslyUseHTMLString: true,
              showClose: true,
              message: err.response.data.data.join('<br><br>'),
              type: 'error'
            });
          })
      },
      getDataAuto() {
        this.$http.get('testPaper/getObject', {
            params: {
              test_id: this.test_id,
              test_user_id: this.test_user_id
            }
          })
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            console.log(this.$decryptData(res.data.data));
            this.questionDataAuto = this.$decryptData(res.data.data)
            this.$store.commit('alertAutoQuestionTile', this.dataEdit(this.$decryptData(res.data.data)))

          }).catch(err => {
            this.$message({
              dangerouslyUseHTMLString: true,
              showClose: true,
              message: err.response.data.data.join('<br><br>'),
              type: 'error'
            });
          })
      },
      dataEdit(content) {
        let arr = []
        for (let item in content) {
          content[item].forEach((item1, index) => {
            let obj = {
              id: index,
              category: item1.category,
              idIndex: item1.id,
              score: ''
            }
            arr.push(obj)
          })
        }
        console.log(arr);
        return arr
      }
    }
  }
</script>

<style lang="less" scoped>
  .main {
    width: 997px;

    // 正确错误
    .truebg {
      background: #24c9e3;
      color: #fff;
    }

    .falsebg {
      background: red;
      color: #fff;
    }


    .paper-info {
      margin-bottom: 20px;

      .el-col:nth-of-type(1) {

        width: 100%;
        font-size: 18px;
        height: 28px;
        border-left: 5px solid #f4c521;
        box-sizing: border-box;
        padding-left: 10px;
      }

      .el-col:nth-of-type(2) {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .el-button:nth-of-type(2) {
          background: #24c9e3;
          color: #fff;
        }

        .el-button:nth-of-type(1) {
          background: #f4c521;
          color: #fff;
        }
      }
    }

    .info-id {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 10px;
    }

    .info-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .el-col {
        width: 30%;
        margin-bottom: 10px;
        font-size: 14px;
        color: #333;
        text-align: left;
      }
    }

    // // 试题样式
    // .question-content {
    //   >* {
    //     margin-bottom: 20px;
    //   }

    //   font-size: 14px;

    //   .questionTitle {
    //     .el-col:nth-of-type(1) {
    //       font-size: 14px;
    //     }

    //     .el-col:nth-of-type(2) {
    //       font-size: 14px;
    //       display: flex;
    //       justify-content: space-between;

    //     }
    //   }

    //   .questionSelect {
    //     .el-radio-group {
    //       display: flex;
    //       flex-wrap: wrap;

    //       .el-radio {
    //         width: 100%;
    //         margin-bottom: 10px;
    //       }
    //     }
    //   }

    //   .answer {
    //     span {
    //       font-weight: 600;
    //       color: #f4c521;
    //     }
    //   }

    //   .selectBtn {
    //     display: flex;
    //     margin: 0 auto;
    //     width: 50%;
    //     justify-content: space-around;

    //     .el-button {
    //       background: #24c9e3;
    //       color: #fff;
    //     }
    //   }
    // }

    >.el-row {
      width: 100%;
    }

    .card {
      margin-bottom: 20px;
      width: 100%;
      font-size: 18px;
      border-left: 5px solid #24c9e3;
      box-sizing: border-box;
      padding-left: 10px;
    }

    .card-title {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .card-info {
      display: flex;
      flex-wrap: wrap;

      .truebg {
        background: #24c9e3;
        color: #fff !important;
      }

      span {
        cursor: pointer;
        width: 31px;
        height: 31px;
        border-radius: 50%;
        margin: 6px;
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        justify-content: center;
      }

    }
  }
</style>