<template>
  <div class="header">
    <span class="header-title">圈子</span>
    <Menu mode="horizontal" :active-name="activeMenu === '//' ? '/blogList/' : activeMenu" @on-select="selectMenu">
        <MenuItem name="/blogList/">
            <Icon type="ios-paper"></Icon>
            首页
        </MenuItem>
        <!-- <MenuItem name="/">
            <Icon type="person"></Icon>
            关于我
        </MenuItem> -->
    </Menu>
    <Input v-model="headerSearch" icon="ios-search-strong" placeholder="搜索" @on-click="searchInfo" @on-enter="searchInfo" class="header-search-input"></Input>
    <div class="">
      <router-link to="/login">
        <Button type="text" class="login-btn">登陆</Button>
      </router-link>
      <Button type="primary" shape="circle" size="large" class="register-btn">注册</Button>
    </div>
    <router-link to="/noteBooks" class="write-note">
      写文章
    </router-link>
  </div>
</template>

<script>
import utils_ from '@/tool/Utils'
export default {
  name: 'Header',
  data () {
    return {
      headerSearch: '',
      activeMenu: '/' + utils_.getRouteName(this.$route.path, 1) + '/' + utils_.getRouteName(this.$route.path, 2)
    }
  },
  mounted () {
  },
  methods: {
    // 搜索(包括回车搜索和点击搜索图标搜索)
    searchInfo: function () {
    },
    selectMenu: function (name) {
      this.$router.push(name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 60px;
  position: relative;
}
.header .login-btn {
  position: absolute;
  right: 420px;
  top: 13px;
  color: #969696;
  z-index: 9;
  font-size: 15px;
}
.header .register-btn {
  position: absolute;
  right: 330px;
  top: 13px;
  width: 80px;
  height: 38px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  background-color: #FFF;
  color: #ea6f5a;
  z-index: 9;
  font-size: 15px;
}
.header .ivu-menu-horizontal.ivu-menu-light:after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: #F0F0F0;
  position: absolute;
  bottom: 0;
  left: 0;
}
.header .header-title {
  position: absolute;
  left: 0;
  top: 0;
  height: 60px;
  line-height: 60px;
  width: 25%;
  text-align: center;
  color: #726DD1;
  z-index: 9;
  font-size: 24px;
}
.header .header-search-input {
  position: absolute;
  right: 40%;
  top: 14px;
  width: 200px;
  z-index: 9;
}
.header .write-note {
  position: absolute;
  right: 200px;
  z-index: 9;
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin: 10px 15px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
}
.header .ivu-menu-light {
  position: absolute;
  z-index: 1;
  background-color: #FFF;
  width: 100%;
  padding-left: 25%;
}
.header .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item {
  color: #000;
  border-bottom: 0;
  font-size: 16px;
}
.header .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active {
  color: #726DD1;
  border-bottom: 0;
}
.header .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover {
  border-bottom: 0;
}
</style>
