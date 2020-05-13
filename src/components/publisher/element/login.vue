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
     mounted() {
    this.getCookie();
  },
    methods: {
      // 点击登录
      loginSubmit() {
        this.$refs.resetLoginRef.validate(async valid => {
          if (!valid) return;
          if(this.checked==true)this.setCookie(this.loginForm.phone_number, this.loginForm.password, 7);
          else this.clearCookie();
        
          this.$http.post('login', this.$qs.stringify(this.loginForm))
            .then(res => {
               console.log(res);
              if (res.status != 200) return this.$message.error(res.data.msg)

              window.sessionStorage.setItem("token", "" + res.data.data)
              this.$message.success(res.data.msg);
              this.$router.push('/solve');
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
      // getName(){
      //   this.$http.post('info')
      //     .then(res => {
      //         console.log(res);
      //       if (res.status != 200) return this.$message.error(res.data.msg)
      //       window.sessionStorage.setItem("token", "" + res.data.data)
      //       this.$message.success(res.data.msg);
      //       this.$router.push('/list');
      //     }).catch(err => {
      //       this.$message({
      //         dangerouslyUseHTMLString: true,
      //         showClose: true,
      //         message: err.response.data.data.join('<br><br>'),
      //         type: 'error'
      //       });
      //     })
      // },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
        //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    },

        getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.loginForm.phone_number = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.loginForm.password = arr2[1];
          }
        }
      }
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