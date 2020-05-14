<template>
  <div class="header">
    <el-row type="flex" justify="space-around">
      <el-col :span="6">
        在线考试系统
      </el-col>
      <el-col :span="12">
        <div class="header-nav">
          <div :class="val==1?'yellowStyle':''" @click="skipPage(1)">首页</div>
          <div :class="val==2?'yellowStyle':''" @click="skipPage(2)">试卷评阅</div>
          <div :class="val==3?'yellowStyle':''" @click="skipPage(3)">手动组卷</div>
          <div :class="val==4?'yellowStyle':''" @click="skipPage(4)">自动组卷</div>
          <div :class="val==5?'yellowStyle':''" @click="skipPage(5)">试卷管理</div>
          <div :class="val==6?'yellowStyle':''" @click="skipPage(6)">报考管理</div>
          <div :class="val==7?'yellowStyle':''" @click="skipPage(7)">成绩报告</div>
        </div>
      </el-col>
      <el-col :span="6">

        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <div class="name" style="margin-left:10px;">{{name}}</div>
          </span>
          <el-dropdown-menu slot="dropdown" :split-button="true">
            <el-dropdown-item command="修改密码">修改密码</el-dropdown-item>
            <el-dropdown-item  command="退出">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-col>
    </el-row>

  </div>
</template>
<script>
  import mixin from '../../../mixins/skip'
  export default {
    mixins: [mixin],
    data() {
      return {
        val: 1,
        name:''
      }
    },
    // 监听路由改变
    watch: {
      '$route.path': function () {
        this.val = window.sessionStorage.getItem('index')
      }
    },
    created() {
      this.val = window.sessionStorage.getItem('index')
      this.name = window.sessionStorage.getItem('username')
    },
    components: {},
    methods: {
      skipPage(index) {
        this.skip(index)
      },
      // 点击下拉菜单事件
      handleCommand(command) {
        // 清空token 跳转修页面
        window.sessionStorage.clear()
        if (command === '修改密码') {
          this.$router.push('/alertPwd')
        } else this.$router.push('/login')
      },
    },
  }
</script>

<style lang="less" scoped>
  // 蓝:#24c9e3  黄：#f4c521  border-bottom: 3px solid #f4c521; 
  .header {
    .el-row {
      height: 100%;
      width: 100%;
    }

    .el-dropdown-link {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }

    .el-col:nth-of-type(1) {
      font-family: '华文行楷';
      font-size: 26px;
      letter-spacing: 3px;
      font-weight: 600;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .el-col:nth-of-type(2) {
      font-size: 14px;
      font-weight: 500;

      .header-nav {
        display: flex;
        justify-content: space-around;
        height: 100%;
        width: 100%;
        align-items: center;

        div {
          cursor: pointer;
          height: 50%;
          padding: 0 10px;
          display: flex;
          align-items: center;
        }
      }

      .yellowStyle {
        border-bottom: 3px solid #f4c521;
      }

    }

    .el-col:nth-of-type(3) {
      font-size: 18px;
      font-weight: 400;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>