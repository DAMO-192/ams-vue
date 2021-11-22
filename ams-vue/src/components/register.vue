<template>
    <div class="register">
    <div class="register_box">
        <img src="../assets/css/register.png" class="register_img">
        <div class="register_work">
         用户注册
        <el-form class="register_form"  :model="form" :rules="rules" ref="registerRef">
            <el-form-item label="用户名"  prop="name">
                <el-input prefix-icon="el-icon-user" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号"  prop="telephone">
                <el-input prefix-icon="el-icon-phone-outline" v-model="form.telephone"></el-input>
            </el-form-item>
            <el-form-item label="密码"  prop="passwd">
                <el-input prefix-icon="el-icon-lock" v-model="form.passwd" type="password"></el-input>
            </el-form-item>
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
        name: 'yang',
        passwd: '123456789',
        telephone: '17793708479'
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '请输入11位手机号', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '请输入11位手机号', trigger: 'blur' }
        ],
        passwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 255, message: '请输入最少六位的密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    register () {
      this.$refs.registerRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('user/register', JSON.stringify(this.form))
        console.log(res)
        if (res.msg === '注册成功') {
          this.$message.success('注册成功: 您的账号为 ' + res.telephone)
          this.$router.push('/login')
        }
        if (res.msg === '账号以存在') {
          this.$message.error('账号已存在')
        }
      })
    }
  }
}
</script>
<style scoped>
.register {
    background-color: aliceblue;
    height: 100%;
    }
.register_box{
    background:whitesmoke;
    width: 39rem;
    height: 39rem;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 3%;
    transform: translate(-50%,-50%);

}
.register_img{
    width: 39rem;
    height:39rem;
    border-radius: 3%;
}

.register_work{
    width: 50%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0%;
    background-color:white;
    font-size: 1.5rem;
    font-display: flex-end;
    text-align: center;
    line-height: 30px;
}
.register_form{
    position: absolute;
    bottom: 0.5rem;
    width: 90%;
    padding: 0 0.7rem;

}

</style>
