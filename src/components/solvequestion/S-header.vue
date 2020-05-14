<template>
  <div class="header">
    <div class="content">
      <div class="left">
        在线考试系统
      </div>
      <div class="right">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <div class="name" style="margin-left:10px;">{{name}}</div>
          </span>
          <el-dropdown-menu slot="dropdown" :split-button="true">
            <el-dropdown-item  command="修改密码">修改密码</el-dropdown-item>
            <el-dropdown-item  command="退出">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    data(){
      return{
        name:''
      }
    },
     created() {
      this.val = window.sessionStorage.getItem('index')
      this.name = window.sessionStorage.getItem('username')
    },
    methods: {
      handleCommand(command) {
        // 清空token 跳转修页面
        window.sessionStorage.clear()
        if (command == '修改密码') {
          this.$router.push('/alertPwd')
        } else this.$router.push('/login')
      },
    }
  }
</script>
<style lang="less" scoped>
  .header {
    height: 60px;
    min-width: 1000px;
    width: 100%;
    background: #24c9e3;
    box-shadow: 0 0 15px rgb(97, 97, 97);
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }

  .content {
    width: 100%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      margin-left: 20px;
      font-family: '华文行楷';
      font-size: 26px;
      letter-spacing: 3px;
      color: #fff;
      font-weight: 600;
      display: flex;
      justify-content: flex-start;
      align-items: center;

    }

    .right {
      margin-right: 20px;
      display: flex;

      justify-content: flex-end;
      align-items: center;
      font-size: 18px;
      font-weight: 400;
    }
  }
</style>