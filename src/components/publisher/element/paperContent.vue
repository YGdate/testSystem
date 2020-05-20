<template>
  <div class="main">
    <el-card v-if="isshow">
      <el-row class="title">
        <el-alert title="试卷列表" type="success" :closable="false">
        </el-alert>
      </el-row>
      <el-row>
        <el-col class="filter1" :span="14">
          <el-select @change='optionChange' size="mini" v-model="status" placeholder="考试状态">
            <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select @change='optionChange' size="mini" v-model="test_type" placeholder="组卷类型">
            <el-option v-for="item in testTypeoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select @change='optionChange' size="mini" v-model="test_method" placeholder="考试方式">
            <el-option v-for="item in testMethodoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select @change='optionChange' size="mini" v-model="test_from" placeholder="试卷来源">
            <el-option v-for="item in testFromoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col class="filter2" :span="10">
          <el-button size="mini" @click="deleteData" type="primary" plain>批量删除</el-button>
          <el-button size="mini" @click="exportWord" type="primary" plain>批量导出</el-button>
          <el-button size="mini" @click="addPaper" type="primary" plain>添加共享试卷</el-button>
        </el-col>
      </el-row>
      <el-row class="content">
        <el-table @selection-change="handleSelectionChange" :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-row class="expand-title" type="flex" justify="space-between">
                  <el-col :span="8">
                    <div>{{test_status(props.row.test_status)}}</div>
                    <div>ID：{{props.row.id}}</div>
                  </el-col>
                  <el-col :span="8">
                    <el-tag @click="paperShare(props.row.id)" style="cursor:pointer" size="small">试卷共享</el-tag>
                    <div><span style="color:#24c9e3">{{props.row.NOtOptionNumber}}</span>人已提交</div>
                    <div><span style="color:#24c9e3">{{props.row.CurrentTestNumber}}</span>人未提交</div>
                  </el-col>
                </el-row>
                <el-row style="font-size:12px">
                  {{props.row.subject}} | {{props.row.test_type==0?'自动组卷':'手动组卷'}} |
                  {{props.row.test_method==0?'公开申请':'验证码报考'}} | 试卷来源：{{props.row.test_from}}
                </el-row>
                <el-row class="expand-info" type="flex" justify="space-between">
                  <el-col :span="8"> {{props.row.test_use_time}} 分钟完成 | 总分{{props.row.all_score}} | </el-col>
                  <el-col :span="14">
                    <el-tag size="small">考试结束</el-tag>
                    <el-tag size="small">试卷修改</el-tag>
                    <el-tag @click="measureTest(props.row.id)" size="small">发布测评</el-tag>
                    <el-tag  size="small">作答情况</el-tag>
                    <el-tag size="small">考试设置</el-tag>
                    <el-tag @click="exportPaper(props.row.id)" size="small">导出试卷</el-tag>
                  </el-col>
                </el-row>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="考试状态" prop="test_status">
            <template scope="scope">
              <div>
                {{test_status(scope.row.test_status)}}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="组卷类型" prop="test_type">
            <template scope="scope">
              <div>
                {{scope.row.test_type==0?'自动组卷':'手动组卷'}}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="考试方式">
            <template scope="scope">
              <div>
                {{scope.row.test_method==0?'公开申请':'验证码报考'}}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="试卷来源" prop="test_from">
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

    <publishPaper @piblishPaper="piblishPaper" :paperID="paperID" v-if="!isshow"></publishPaper>
    
    <!-- 试卷共享 -->
    <shareDialog @shareVisible="shareVisible"  @updateCode="updateCode($event)" :isVisible="isVisible" :text="textpaperShare"></shareDialog>
    <!-- 添加试卷 -->
    <addPaperDialog @addPaperVisible="addPaperVisible" @updateData="updateData" :addVisible="addVisible"></addPaperDialog>

  </div>
</template>

<style lang="less" scoped>
  .main {
    width: 100%;
    .el-card {
      width: 100%;
    }

    .title {
      width: 100%;
    }

    .filter1 {
      margin-top: 20px;
      display: flex;
      justify-content: flex-start;

      >* {
        margin-right: 10px;
      }
    }

    .filter2 {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;

      >* {
        margin-left: 10px;
      }
    }

    .el-table {
      margin-top: 20px;

      .demo-table-expand {
        .el-row {
          margin-top: 20px;
        }
      }

      .expand-title {
        .el-col {
          display: flex;
          align-items: center;
        }

        .el-col:nth-of-type(1) {
          justify-content: flex-start;
          font-weight: 600;

          >* {
            margin-right: 10px;
          }
        }

        .el-col:nth-of-type(2) {
          justify-content: flex-end;

          >* {
            margin-left: 10px;
          }
        }

      }
      .el-tag{
          cursor: pointer;
        }

      .expand-info .el-col:nth-of-type(1) {
        display: flex;
        justify-content: flex-start;
        
        >* {
          margin-right: 10px;
        }
      }

      .expand-info .el-col:nth-of-type(2) {
        display: flex;
        justify-content: flex-end;

        >* {
          margin-left: 10px;
        }
      }
    }

  }
</style>

<script>
  import shareDialog from './shareDialog'
  import addPaperDialog from './addPaperDialog'
  import publishPaper from './publishPaper'
  export default {
    components: {
      shareDialog,
      addPaperDialog,
      publishPaper
    },
    data() {
      return {
        isshow:true,
        // 试卷id
        paperShareID:0,
        // 多选
        multipleSelection:[],
        textpaperShare:'',
        status: '',
        test_type: '',
        test_method: '',
        test_from: '',
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
        testMethodoptions: [{
            value: 0,
            label: '公开申请'
          },
          {
            value: 1,
            label: '验证码报考'
          }
        ],
        testFromoptions: [],
        isVisible: false,
        addVisible: false,
        tableData: [],
        current_page: 1,
        total: 0,
        per_page: 0,
        paperID:0,

      }
    },
    created() {
      this.getTestScore()
      this.getdropDown()
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
    methods: {
      piblishPaper(){
        this.isshow = true
        this.getTestScore()
      this.getdropDown()
      },
      measureTest(id){
        this.isshow = false
        this.paperID = id
      },
      updateData(){
        this.getTestScore()
      },
      shareVisible(visible){
        this.isVisible = visible
      },
      addPaperVisible(visible){
        this.addVisible = visible
      },
      //添加共享试卷
      //更新共享码
      updateCode(){
        this.$http.post('testPaper/updateShareCode',{id:this.paperShareID})
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            console.log(this.$decryptData(res.data.data));
            this.textpaperShare = this.$decryptData(res.data.data)
          }).catch(err => {
            this.$message({
              dangerouslyUseHTMLString: true,
              showClose: true,
              message: err.response.data.data.join('<br><br>'),
              type: 'error'
            });
          })
      },
      // 表格多选函数
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      exportPaper(id){
        let aEle = document.createElement("a")
        aEle.download = 'paper';
        
        aEle.href = 'http://47.113.121.50/api/word/export?ids='+id+'&token='+window.sessionStorage.getItem('token');// content为后台返回的下载地址
        aEle.click();
      },

      // 批量导出
      exportWord(){
        console.log(this.multipleSelection);
       let idList =  this.multipleSelection.map(e=>{
          return e.id
        })
        console.log(idList.join(','));
         let aEle = document.createElement("a")
        aEle.download = 'paper';
        aEle.href = 'http://47.113.121.50/api/word/export?ids='+idList.join(',')+'&token='+window.sessionStorage.getItem('token');// content为后台返回的下载地址
        aEle.click();
      },
      // 批量删除
      deleteData(){
       let idList =  this.multipleSelection.map(e=>{
          return e.id
        })
       let str =  idList.join(',')
         this.$http.post('testPaper/delete', this.$qs.stringify({id:str}))
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            this.getTestScore(this.current_page)
            return this.$message.success(res.data.msg)
            
          }).catch(err => {
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
        this.getTestScore(page)
      },
      // 下拉框
      optionChange() {
        this.getTestScore(this.current_page)
      },
      //获取试卷数据-----
      getTestScore(pages = 1) {
        let paramsData = {
          status: this.status,
          test_type: this.test_type,
          test_method: this.test_method,
          test_from: this.test_from
        }
        this.$http.get('testPaper/getTestManageInfo?page=' + pages, {
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
            //  let {}
          }).catch(err => {
            // console.log(err);
            this.$message({
              dangerouslyUseHTMLString: true,
              showClose: true,
              message: err.response.data.data.join('<br><br>'),
              type: 'error'
            });
          })
      },
      //获取下拉数据
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
      //试卷共享
      paperShare(id) {
        this.paperShareID = id
        this.isVisible = true
        this.$http.get('testPaper/findShareCode',{
          params:{
            id:id
          }
        })
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            console.log(this.$decryptData(res.data.data));
            this.textpaperShare = this.$decryptData(res.data.data)[0].share_code
          }).catch(err => {
            this.$message({
              dangerouslyUseHTMLString: true,
              showClose: true,
              message: err.response.data.data.join('<br><br>'),
              type: 'error'
            });
          })
      },
      //添加试卷
      addPaper() {
        this.addVisible = true
      }
    }
  }
</script>