<template>
  <el-dialog title="添加试卷" :visible.sync="status" width="30%" :before-close="handleClose">
    <el-row v-if="isShow">
      <el-row>
        <span>输入共享码，添加共享试卷</span>
      </el-row>
      <el-row>
        <el-input type="text" v-model="shareCode"></el-input>
      </el-row>

      <el-row class="btn">
        <el-button type="primary" size="small" @click="searchSharePaper">搜索试卷</el-button>
      </el-row>
    </el-row>
    <el-row v-else>
      <el-row>
        试卷：{{paperInfo.test_name}}
      </el-row>
      <el-row>
        作者：{{paperInfo.test_name}}
      </el-row>
      <el-row>
        <el-alert title="添加到你的试卷管理中，邀请考生作答" type="info">
        </el-alert>
      </el-row>
      <el-row class="btn">
        <el-button size="small" @click="configAdd">确认添加</el-button>
        <el-button size="small" type="primary" @click="cancelAdd">取消添加</el-button>
      </el-row>

    </el-row>
  </el-dialog>
</template>



<script>
  export default {
    props: ['addVisible'],
    watch: {
      addVisible() {
        this.status = this.addVisible
      }
    },
    data() {
      return {
        isShow: true,
        shareCode: '',
        paperInfo: {},
        status: this.addVisible
      }
    },
    created() {
      this.isShow = true
    },
    methods: {
      configAdd() {
        this.$http.post('testPaper/saveByShareCode', {
            shareCode: this.shareCode
          })
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)

            this.status = false
            this.$message.success(res.data.msg)
            setTimeout(() => {
               return  this.$emit('updateData')
            }, 1000);
          }).catch(err => {
            this.$message({
              dangerouslyUseHTMLString: true,
              showClose: true,
              message: err.response.data.data.join('<br><br>'),
              type: 'error'
            });
          })
      },
      cancelAdd() {
        this.status = false
        this.isShow = true
        this.$emit('addPaperVisible', false);
      },
      handleClose() {
        // this.addVisible = false
        this.isShow = true
        this.$emit('addPaperVisible', false);
      },
      searchSharePaper() {
        this.$http.get('testPaper/findByShareCode', {
            params: {
              shareCode: this.shareCode
            }
          })
          .then(res => {
            if (res.data.code != 0) return this.$message.error(res.data.msg)
            this.paperInfo = this.$decryptData(res.data.data)[0];
            console.log(this.paperInfo);
            this.isShow = false

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
    }

  }
</script>
<style lang="less" scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .el-row:nth-last-of-type(1) {
    margin-bottom: 0;
  }

  .btn {
    display: flex;
    justify-content: space-around;

  }
</style>