<template>
  <div class="main">
    <el-card>
      <el-row class="title">
        <el-alert title="试卷列表" type="success" :closable="false">
        </el-alert>
      </el-row>
      <el-row>
        <el-col class="filter1" :span="14">
          <el-select size="mini" v-model="value" placeholder="考试状态">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select size="mini" v-model="value" placeholder="组卷类型">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select size="mini" v-model="value" placeholder="考试方式">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select size="mini" v-model="value" placeholder="试卷来源">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col class="filter2" :span="10">
          <el-button size="mini" type="primary" plain>批量删除</el-button>
          <el-button size="mini" type="primary" plain>批量导出</el-button>
          <el-button size="mini" @click="addPaper" type="primary" plain>添加共享试卷</el-button>
        </el-col>
      </el-row>
      <el-row class="content">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-row class="expand-title" type="flex" justify="space-between">
                  <el-col :span="8">
                    <div>{{props.row.status}}</div>
                    <div>{{props.row.id}}</div>
                  </el-col>
                  <el-col :span="8">
                    <el-tag @click="paperShare" size="small">试卷共享</el-tag>
                    <div><span style="color:#24c9e3">{{props.row.submited}}</span>人已提交</div>
                    <div><span style="color:#24c9e3">{{props.row.nosubmit}}</span>人未提交</div>
                  </el-col>
                </el-row>
                <el-row style="font-size:12px">
                  语文 | 手动组卷 | 报名审核 | 试卷来源：DHSJg
                </el-row>
                <el-row class="expand-info" type="flex" justify="space-between">
                  <el-col :span="8"> 45分中完成 | 总分100 | </el-col>
                  <el-col  :span="14">
                    <el-tag size="small">考试结束</el-tag>
                    <el-tag size="small">试卷修改</el-tag>
                    <el-tag size="small">发布测评</el-tag>
                    <el-tag size="small">作答情况</el-tag>
                    <el-tag size="small">考试设置</el-tag>
                    <el-tag size="small">导出试卷</el-tag>
                  </el-col>
                </el-row>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="考试状态" prop="status">
          </el-table-column>
          <el-table-column label="组卷类型" prop="name">
          </el-table-column>
          <el-table-column label="试卷来源" prop="desc">
          </el-table-column>
          <el-table-column label="试卷来源" prop="desc">
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-row style="margin-top:20px;text-align:center">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </el-row>
      </el-row>
    </el-card>

    <!-- 试卷共享 -->
    <shareDialog :isVisible="isVisible"></shareDialog>
    <!-- 添加试卷 -->
    <addPaperDialog :addVisible="addVisible"></addPaperDialog>

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
      .demo-table-expand{
       .el-row{
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
          >*{
          margin-right: 10px;
        }
        }
        .el-col:nth-of-type(2) {
         justify-content: flex-end;
          >*{
          margin-left: 10px;
        }
        }

      }
      .expand-info .el-col:nth-of-type(1){
        display: flex;
        justify-content: flex-start;
        >*{
          margin-right: 10px;
        }
      }
      .expand-info .el-col:nth-of-type(2){
        display: flex;
        justify-content: flex-end;
        >*{
          margin-left: 10px;
        }
      }
    }

  }
</style>

<script>
import shareDialog  from './shareDialog'
import addPaperDialog  from './addPaperDialog'
  export default {
    components:{
      shareDialog,
      addPaperDialog
    },
    data() {
      return {
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
        value: '',
        isVisible:false,
        addVisible:false,
        tableData: [{
          status: '正在考试...',
          id: '123456',
          nosubmit: '20',
          submited: '13',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    },
    created(){
      this.getTestScore()
      this.getdropDown()
    },
    methods:{
      //获取试卷数据
      getTestScore(){
        this.$http.get('testPaper/getTestScore')
            .then(res => {
              if (res.data.code !=0) return this.$message.error(res.data.msg)
               console.log(res.data.data);
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
      //获取下拉数据
      getdropDown(){
        this.$http.get('testPaper/dropDown')
            .then(res => {
              console.log(res);
              if (res.data.code !=0) return this.$message.error(res.data.msg)
               console.log(res.data.data);
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
      //试卷共享
      paperShare(){
        this.isVisible = true
      },
      //添加试卷
      addPaper(){
        this.addVisible = true
      }
    }
  }
</script>