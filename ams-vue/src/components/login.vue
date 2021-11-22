<template>
    <div  class="login">
     <div class="login_box">
        <img src="../assets/css/login.png" class="login_img">
        <div class="login_work">
         用户登录
        <el-form class="login_form"  :model="form" :rules="rules" ref="loginref">
            <el-form-item label="电话号"  prop="telephone">
                <el-input prefix-icon="el-icon-phone-outline" v-model="form.telephone"></el-input>
            </el-form-item>
            <el-form-item label="密码"  prop="passwd">
                <el-input prefix-icon="el-icon-lock" v-model="form.passwd" type="password"></el-input>
            </el-form-item>
             <el-button @click="login">登录</el-button>
             <el-button @click="register">注册</el-button>
        </el-form>
        </div>
     </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        telephone: '17793708479',
        passwd: '123456789'
      },
      rules: {
        telephone: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' }
        ],
        passwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 255, message: '请输入最少六位的密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginref.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('user/login', JSON.stringify(this.form))
        console.log(res)
        if (res.status !== 200) return this.$message.error('登录失败,请检查用户名或者密码')
        this.$message.success('登录成功')
        window.sessionStorage.setItem('token', res.token)
        this.$router.push('/index')
      })
    },
    register () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>
<style scoped>
.login {
    background-color: aliceblue;
    height: 100%;
    }
.login_box{
    background: aqua;
    width: 35rem;
    height: 19rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 3%;

}
.login_img{
    width: 50%;
    height: 100%;
    border-radius: 3%;
}
.login_work{
    width: 50%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0%;
    background-color:white;
    font-size: 1.5rem;
    font-display: flex-end;
    text-align: center;
}
.login_form{
    position: absolute;
    bottom: 0.5rem;
    width: 90%;
    padding: 0 0.7rem;

}
</style>
