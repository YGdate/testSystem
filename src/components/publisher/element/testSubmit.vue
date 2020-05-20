<template>
  <div class="main"> 

    <el-tabs v-if="isshow" v-model="first" type="border-card">
      <el-tab-pane label="已提交" name="first">
        <el-row>
        <el-table :data="tableData" :header-cell-style="tableHeaderStyle" style="width: 100%">
          <el-table-column type="index" label="序号">
          </el-table-column>
          <el-table-column label="考生姓名">
            <template scope="scope">
              <div>
                {{scope.row.user_id[1]}}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="all_score" label="试卷总分">
          </el-table-column>
          <el-table-column prop="auto_score" label="系统评分">
          </el-table-column>
          <el-table-column prop="manual_score" label="手动评分">
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template scope="scope">
             <el-button @click="scoreEdit(scope.row.user_id[0])" size="mini" icon="el-icon-edit">评分</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-row style="margin-top:20px;text-align:center">
          <el-pagination @current-change="handleCurrentChange1" :page-size="10" :total="total" background
        layout="prev, pager, next">
      </el-pagination>
        </el-row>
      </el-row>
      </el-tab-pane>
      <el-tab-pane label="未提交" name="second">
        <el-table :data="tableNoSubmit" :header-cell-style="tableHeaderStyle" style="width: 100%">
          <el-table-column type="index" label="序号">
          </el-table-column>
          <el-table-column prop="user_id[1]" label="考生姓名">
          </el-table-column>
          <el-table-column prop="user_id[2]" label="考生电话">
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
    <markPaper @quitScore="quitScore" v-if="!isshow"></markPaper>

  </div>
</template>


 
<script>
import markPaper from './markPaper'
  export default {
    components:{
            markPaper
    },
    props:['paperID'],
    data() {
      return {
        first:'first',
        activeName:'已完成',
        tableData:[],
        tableNoSubmit: [],
        current_page: 1,
        total: 0,
        current_page1: 1,
        total1: 0,
        isshow:true,
      }
    },
    created(){
      this.getTestScore()
      this.getNoSubmit()
    },
    methods:{
      quitScore(){
        this.isshow = true
        this.getTestScore()
        this.getNoSubmit()
      },
      scoreEdit(id){
        this.isshow = false
        this.userID = id
        this.$store.commit('alertPaperUserId',id)
        this.$store.commit('alertPaperId',this.paperID)
      },
     getNoSubmit(pages = 1) {
        
        this.$http.get('testPaper/unsubmitted?page=' + pages, {
            params: {
              id:this.paperID
            }
          })
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            console.log(this.$decryptData(res.data.data));
            let {
              current_page,
              data,
              total
            } = this.$decryptData(res.data.data)
            this.tableNoSubmit = data
            this.current_page1 = current_page
            this.total1 = total
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
      handleCurrentChange1(page) {
        this.current_page1 = page
        this.getNoSubmit(page)
      },
      getTestScore(pages = 1) {

        this.$http.get('testPaper/getAnswers?page=' + pages, {
            params: {
              id:this.paperID
            }
          })
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            console.log(this.$decryptData(res.data.data));
            let {
              current_page,
              data,
              total
            } = this.$decryptData(res.data.data)
            this.tableData = data
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
      // 表格样式
      tableHeaderStyle() {
        return 'text-align: center;background:#24c9e3;color:#fff;'
      },
    }

  }
</script>
<style lang="less" scoped>
  .main {
    height: 100%;
    width: 100%;

    .el-tabs{
      width: 100%;
      
    }
  }
</style>