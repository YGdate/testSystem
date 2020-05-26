<template>
  <div class="main">
    <!-- 手动选题 -->
    <el-card>
      <el-row class="choose-test-title">
      </el-row>
      <el-row>
        <el-table :data="tableData" :header-cell-style="tableHeaderStyle" style="width: 100%">
          <el-table-column type="index" label="序号" width="50">
          </el-table-column>
          <el-table-column  label="考生姓名">
            <template slot-scope="scope">
              <div>
                {{scope.row.user_id[1]}}
              </div>
            </template>
          </el-table-column>
          <el-table-column  label="考生联系方式">
             <template slot-scope="scope">
              <div>
                {{scope.row.user_id[2]}}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="apply_time" label="申请时间">
          </el-table-column>

          <el-table-column  label="当前状态">
            <template scope="scope">
              <div>
                {{current_status(scope.row.current_status)}}
              </div>
            </template>
          </el-table-column>

          <el-table-column  label="操作"  width="200">
            <template scope="scope">
               <el-button
          size="mini"
          icon="el-icon-edit"
          @click="editInfo(scope.row.user_id[0])">审核通过</el-button>
              <el-button
          size="mini"
          icon="el-icon-delete"
          type="warning"
          @click="deleteInfo(scope.row.user_id[0])">移除</el-button>
          
            </template>
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

  </div>
</template>


<script>
  export default {

    data() {
      return {
        tableData:[],
        current_page:1,
        total:0,
        user_id:1
      }
    },
    computed:{
      current_status(){
        return (text)=>{
          if (text == 0) {
            return '待审核'
          } else if (text == 1) {
            return '审核通过';
          } else if (text == 2) {
            return '审核不通过'
          }
        }
      }
    },
    created(){
      
    },
    methods: {
      editInfo(id){
        this.$http.put('testPaper/UpdateCandidateStatus',{
          test_id:this.user_id,
          test_user_id:id
        })
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            this.getdata(this.user_id,this.current_page)
            return this.$message.success(res.data.msg)
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
      deleteInfo(id){
        
        this.$http.delete('testPaper/deleteApplicationManageInfo',{
          params:{
            id:id
          }
        })
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            //  console.log(this.$decryptData(res.data.data));
            this.$message.success(res.data.msg)
            this.getdata(this.user_id,this.current_page)
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
      // 分页
      handleCurrentChange(page) {
        this.current_page = page
        this.getInfo(page)
      },
      getdata(id,pages = 1){
        console.log(id);
        this.user_id = id
        this.$http.get('testPaper/getApplicationManageInfo?page='+pages,{
          params:{
            test_id:id
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
             console.log( this.tableData);
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
      // 表格样式
      tableHeaderStyle() {
        return 'text-align: center;background:#24c9e3;color:#fff;'
      },
    }

  }
</script>
<style lang="less" scoped>
  .main {
    width: 100%;
    .el-card{
      width: 100%;
    }
  }
  .choose-test-title {
    width: 100%;
    display: flex;
    margin-bottom: 20px;

    .el-select {
      margin-right: 10px;
      width: 150px;
    }
  }
</style>