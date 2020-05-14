<template>
    <el-row>
      <el-form ref="resetLoginRef" :rules="loginFormRules" :model="loginForm" label-width="80px">
              <el-form-item label="姓名:" prop="name" style="width:340px;">
                <el-input placeholder="name" v-model="loginForm.name"></el-input>
              </el-form-item>
              <el-form-item label="手机号:" prop="number" style="width:340px;">
                <el-input placeholder="手机号" v-model="loginForm.number" type="text"></el-input>
              </el-form-item>
             <el-row class="code">
               <el-col>
                 短信验证码：
               </el-col>
               <el-col>
                 <el-input style="width:100px" v-model="loginForm.code" size="mini"></el-input>
               </el-col>
               <el-col>
                 <el-button :disabled="idchecked" @click="sendCode" size="mini">{{thisCodeTitle}}</el-button>
               </el-col>
             </el-row>
              <el-form-item label="密码:" prop="password" style="width:340px;">
                <el-input placeholder="Password" type="password" v-model="loginForm.password" show-password></el-input>
              </el-form-item>
              <el-form-item class="login-submit-button " style="width:350px;">
                <el-button type="primary" @click="loginSubmit">注册</el-button>
              </el-form-item>
            </el-form>
    </el-row>
</template>
<script>
  export default {
    data() {
       let checkNum = (rule, value, callback) => {
        if (!(/^1[3456789]\d{9}$/.test(value))) {
        return callback(new Error('手机号码有误，请重填'));
        } 
        callback();
        
      };
      return {
        checked:false,
        thisCodeTitle:'发送验证码',
        idchecked:false,
        // 登录表单数据
        loginForm: {
          name: '',
          password: '',
          number:'',
          code:''
        },
        // 表单验证规则
        loginFormRules: {
           name: [{
              required: true,
              message: '请输入姓名',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 16,
              message: '长度在 2 到 10 个字符',
              trigger: 'blur'
            }
          ],
          number:[{
              required: true,
              message: '请输入电话号码',
              trigger: 'blur'
            },
            { validator: checkNum, trigger: 'blur' }],
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
    methods: {
      sendCode(){
      
        if(!(/^1[3456789]\d{9}$/.test(this.loginForm.number))) return this.$message.error('手机号码有误，请重填')
        
        this.$http.post('send_code',this.$qs.stringify({phone_number:this.loginForm.number}))
            .then(res => {
              if (res.data.code != 0) return this.$message.error(res.data.msg)
              this.$message.success(res.data.msg)
              let num = 60
              this.idchecked = true
             let inter = setInterval(()=>{
               num--;
               this.thisCodeTitle = num + 's 后发送'
               if(num<=0){
                clearInterval(inter)
                this.idchecked = false
                this.thisCodeTitle='发送验证码'
              }
              },1000)
              


            }).catch(err => {
              this.$message({
                dangerouslyUseHTMLString: true,
                showClose: true,
                message: err.response.data.data.join('<br><br>'),
                type: 'error'
              });
            })
      },
      // 点击登录
      loginSubmit() {
        this.$refs.resetLoginRef.validate(async valid => {
          // 判断验证是否通过
          if (!valid) return;
          //  发起请求
          
          this.$http.post('register', this.$qs.stringify({
            phone_number:this.loginForm.number,
            password:this.loginForm.password,
            name:this.loginForm.name,
            verification_code:this.loginForm.code
          }))
            .then(res => {
              if (res.data.code != 0) return this.$message.error(res.data.msg)
              return this.$message.success(res.data.msg)
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
     
    .code{
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
      margin-left: 14px;
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