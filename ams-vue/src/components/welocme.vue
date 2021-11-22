<template>
<div>
    <el-breadcrumb separator="/" class="mbx">
    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="box">
    <el-card>
    <el-descriptions title="用户信息" v-for="i in userinfo" :key="i.name" >
    <el-descriptions-item label="用户名">{{ i.name }}</el-descriptions-item>
    <el-descriptions-item label="手机号">{{ i.telephone }}</el-descriptions-item>
    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>
    </el-card>
    </div>
    </div>
</template>
<script>
export default {
  created () {
    this.getInfo()
  },
  data () {
    return {
      userinfo: []
    }
  },
  methods: {
    async getInfo () {
      const { data: res } = await this.$http.get('/user/Info')
      if (res.name === '') return this.$message.error('用户数据获取失败')
      this.userinfo = res
    }
  }
}
</script>
<style >
.box{
  top: 14rem;
}
.el-card {
  position: relative;
  top: 1.5rem;
  height: auto;
}
</style>
