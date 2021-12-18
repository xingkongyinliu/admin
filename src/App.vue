<template>
  <el-container class="container">
    <el-aside width="200px" style="background-color: #20222a;">
      <el-col class="aside">
        <div class="title">
          <h5>商务中心</h5>
        </div>
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo menu"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1" class="nav-list">
            <router-link class="link" to="./Home">
              <el-icon color="#fff"><home-filled /></el-icon>
              <span>首页</span>
            </router-link>
            <!-- <el-icon><icon-menu /></el-icon> -->
          </el-menu-item>
          <el-menu-item index="2" class="nav-list">
            <router-link class="link" to="/miniPrograms">
              <el-icon><wallet /></el-icon>
              <span>小程序</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3" class="nav-list">
            <router-link class="link" to="/myWallet">
              <el-icon><wallet /></el-icon>
              <span>我的钱包</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="4" class="nav-list">
            <router-link class="link" to="/myApply">
              <el-icon><setting /></el-icon>
              <span>我的申请</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="5" class="nav-list">
            <router-link class="link" to="/user">
              <el-icon><setting /></el-icon>
              <span>我的账号</span>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div class="header-left flex">
          <div class="inline"></div>
          <!-- <el-button type="primary" :icon="RefreshRight"></el-button> -->
          <div class="refresh-buttom flex">
            <el-icon style="font-size: 22px;"><refresh-right /></el-icon>
          </div>
          <div class="flex space buttom">
            <el-icon style="font-size: 20px; pading-top: 16px;"><home-filled /></el-icon>
            网站首页
          </div>
          <div class="buttom space flex">代理申请</div>
        </div>
        <div class="header-right flex">
          <div class="flex space buttom">
              <div style="margin-right: 5px">
                <el-avatar :size="30" :src="avatar"></el-avatar>
              </div>
              <span>test</span>
          </div>
          <div class="flex space buttom">
            <el-icon style="font-size: 20px; margin-right: 5px"><switch-button /></el-icon>
            <span>退出</span>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { HomeFilled, Setting, Wallet, RefreshRight, SwitchButton } from '@element-plus/icons-vue';

export default {
  name: 'App',
  components: {
    HomeFilled,
    Setting,
    Wallet,
    RefreshRight,
    SwitchButton
  },
  data: function () {
    return { 
        avatar: require('./assets/avatar.png') 
      }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
  background-color: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  color: #fff;
}

.container {
  height: 100%;
}
.aside {
  width: 100%;
  background-color: #20222a;
}
.menu {
  width: 100%;
  height: 100%;
  background-color: transparent !important;
  border-right: 0 !important;
}

h5 {
  margin: 0;
  padding: 0;
  font-weight: initial;
}
.title {
  padding: 15px;
  font-size: 18px;
  text-align: left;
  box-sizing: border-box;
}

.nav-list {
  padding: 0 !important;
}

.nav-list a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}

.nav-list:hover{
  border-left: #1686ef 4px solid;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header{
  background-color: #fff;
  color: #000;
  height: 50px !important;
}
.header-left {
  float: left;
  height: 50px;
}
.header-right {
  float: right;
  height: 50px;
}

.refresh-buttom {
  padding: 0 16px;
  cursor: pointer;
}
.inline {
  display: inline-block;
  vertical-align: top;
  padding: 0 16px;
}
.buttom {
  height: 100%;
}
.buttom:hover {
  background-color: #f2f2f2;
  cursor: pointer;
}
.space {
  padding: 0 16px;
}
.link {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
