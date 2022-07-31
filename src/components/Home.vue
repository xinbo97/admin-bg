<template>
  <div>
    <el-container class="home-container">
      <el-header>
        <div>
          <img src="../assets/logo.png" alt="显示图片" />
          <span>后台管理系统</span>
        </div>
        <el-button type="info" @click="logout"> 退出登陆 </el-button>
      </el-header>
      <el-container>
        <el-aside :width="collapse ? '64px' : '200px'">
          <el-menu
            background-color="#343d40"
            text-color="#fff"
            :unique-opened="false"
            :collapse="collapse"
            :collapse-transition="false"
            :router="true"
            :default-active="curActive"
          >
            <!-- 展开关闭 -->
            <div class="toggleBtn" @click="toggleBtn()">|||</div>
            <!-- 一级菜单 -->
            <el-submenu :index="itm.id" v-for="itm in menuList" :key="itm.id">
              <!-- 一级菜单模板区 -->
              <template slot="title">
                <i :class="iconObj[itm.id]"></i>
                <span>{{ itm.name }}</span>
              </template>

              <!-- 二级菜单 -->
              <el-menu-item
                :index="iItm.path"
                v-for="iItm in itm.children"
                :key="iItm.id"
                @click="saveNavState(iItm.path)"
              >
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{ iItm.name }}</span>
                </template>
              </el-menu-item>

              <!--    <!~~ 二级菜单嵌套三级菜单
              <el-submenu index="1-3">
                <template slot="title">二级菜单3</template>
                <!~~ <el-menu-item index="1-4-1">选项1</el-menu-item> ~~>
                <el-submenu index="1-4-1">
                  <template slot="title">三级菜单</template>
                  <el-menu-item index="1-4-1-1">选项11</el-menu-item>
                </el-submenu>
              </el-submenu> -->
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { menuList, iconObj } from '@/mock/mockData'

export default {
  name: 'homeVue',
  data() {
    return {
      menuList: menuList,
      iconObj: iconObj,
      collapse: false,
      curActive: '',
    }
  },
  created() {
    // this.curActive = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      // 退出登陆逻辑，清楚token并且跳转到登陆页即可
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    toggleBtn() {
      this.collapse = !this.collapse
    },
    // 保存链接激活高亮状态
    saveNavState(curActiveNav) {
      window.sessionStorage.setItem('activePath', curActiveNav)
      this.curActive = curActiveNav
    },
  },
}
</script>

<style lang="less">
.home-container {
  height: 100vh;
  .el-header {
    display: flex;
    justify-content: space-between;
    background-color: #343d40;
    padding-left: 0;
    align-items: center;
    color: #fff;
    > div {
      display: flex;
      align-items: center;
      span {
        margin-left: 20px;
      }
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .el-aside {
    background-color: #343d40;
    .iconfont {
      margin-right: 10px;
    }
    .el-menu {
      border-right: 0;
    }
  }
  .el-main {
    background-color: #e9eef3;
  }
  .toggleBtn {
    letter-spacing: 0.2em;
    text-align: center;
    cursor: pointer;
    background-color: blue;
    color: #eee;
  }
}
</style>