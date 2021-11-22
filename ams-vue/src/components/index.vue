<template>
<div class="index_box">
<el-container >
  <el-aside class="menu_box" style="width: 12rem;">
    <el-menu >
      <el-submenu v-for="i in m" :key="i.id" :index="i.id + ''">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ i.menu }}</span>
        </template>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header style="height: 2.9rem;">
      <el-dropdown @command="handleCommand">
        <el-avatar class="user_avatra"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item></el-dropdown-item>
           <el-dropdown-item  v-for="item in userinfo" :key="item.name">用户: {{ item.name }}</el-dropdown-item>
           <el-dropdown-item  v-for="item in userinfo" :key="item.telephone">账号: {{ item.telephone }}</el-dropdown-item>
          <el-dropdown-item command="a">个人信息查看</el-dropdown-item>
          <el-dropdown-item command="b">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main class="main_box">
    <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</div>
</template>
<style>
   .index_box{
     position: absolute;
     width: 100%;
     height: 100%;
   }
   .el-container{
     position: relative;
     width: 100%;
     height: 100%;
   }
  .user_avatra{
    padding: 0 15px;
    bottom: 10px;
  }
  .el-header {
    background-color: #0d72f5;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
  .el-menu{
    height: 100%;

  }
  .el-dropdown{
    top: 5%;
    right: -95%;
  }
</style>

<script>
export default {
  created () {
    this.getInfo()
    this.getmenu()
  },
  data () {
    const item = {
      user_name: '杨',
      net_work_type: 'WAN',
      pc_type: '笔记本',
      pc_model: '华硕',
      address: '192.168.11.1',
      memmory_size: '24G',
      disk_size: '500G'
    }
    return {
      tableData: Array(50).fill(item),
      userinfo: [],
      m: []
    }
  },
  methods: {
    async getInfo () {
      const { data: res } = await this.$http.get('/user/Info')
      if (res.name === '') return this.$message.error('用户数据获取失败')
      this.userinfo = res
    },
    async getmenu () {
      const { data: res2 } = await this.$http.get('/user/menulist')
      if (res2.id === '') return this.$message.error('用户数据获取失败')
      this.m = res2
    },
    handleCommand (command) {
      if (command === 'b') {
        window.sessionStorage.clear()
        this.$message.success('登出成功')
        this.$router.push('/login')
      }
      if (command === 'a') {
      }
    }
  }
}
</script>
