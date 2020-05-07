<template>
    <el-row>
      <el-form ref="resetLoginRef" :rules="loginFormRules" :model="loginForm" label-width="80px">
              <el-form-item label="账号:" prop="phone_number" style="width:340px;">
                <el-input placeholder="number" v-model="loginForm.phone_number"></el-input>
              </el-form-item>
              <el-form-item label="密码:" prop="password" style="width:340px;">
                <el-input placeholder="Password" type="password" v-model="loginForm.password" show-password></el-input>
              </el-form-item>
              <el-row  class="option">
                <el-checkbox v-model="checked">记住密码</el-checkbox>
                <el-link type="primary">忘记密码？</el-link>
              </el-row>
          
              <el-form-item class="login-submit-button " style="width:350px;">
                <el-button type="primary" @click="loginSubmit">登录</el-button>
              </el-form-item>
            </el-form>
    </el-row>
</template>
<script>
  export default {
    data() {
      return {
        checked:false,
        // 登录表单数据
        loginForm: {
          phone_number: '13155169239',
          password: '123456'
        },
        // 表单验证规则
        loginFormRules: {
           phone_number: [{
              required: true,
              message: '请输入账号',
              trigger: 'blur'
            },
            // {
            //   type: 'email',
            //   message: '请输入合法邮箱',
            //   trigger: 'blur'
            // }
          ],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 16,
              message: '长度在 6 到 16 个字符',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    created(){
      window.sessionStorage.clear()
    },
    methods: {
      // 点击登录
      loginSubmit() {
        this.$refs.resetLoginRef.validate(async valid => {
          if (!valid) return;
          this.$http.post('login', this.$qs.stringify(this.loginForm))
            .then(res => {
               console.log(res);
              if (res.status != 200) return this.$message.error(res.data.msg)
              window.sessionStorage.setItem("token", "" + res.data.data)
              this.$message.success(res.data.msg);
              this.$router.push('/list');
            }).catch(err => {
              this.$message({
                dangerouslyUseHTMLString: true,
                showClose: true,
                message: err.response.data.data.join('<br><br>'),
                type: 'error'
              });
            })
        })
      },
      // 跳转注册页面
      registered() {
        this.$router.push('/registered');
      }
    },
  }
</script>

<style lang="less" scoped>
  .el-row {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    .el-form {
     
     .option{
       display: flex;
       justify-content: space-between;
       align-items: center;
       width: 100%;
       padding: 0 0 0 60px;
     }
    }

    .login-submit-button {
      text-align: center;
      margin-top: 50px;


      .el-button {
       width:151px;
height:44px;
background:rgba(61,195,217,1);
border-radius:5px;

      }
    }
  


</style>