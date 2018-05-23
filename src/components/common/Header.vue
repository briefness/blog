<template>
  <div class="header">
    <span class="header-title">圈子</span>
    <Menu mode="horizontal" :active-name="activeMenu === '//' ? '/blogList' : activeMenu" @on-select="selectMenu">
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
  right: 200px;
  top: 14px;
  width: 200px;
  z-index: 9;
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
