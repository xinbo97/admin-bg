<template>
  <div>
    <div>home</div>
    <el-button type="info" @click="logout"> 退出登陆 </el-button>
  </div>
</template>

<script>
export default {
  name: 'homeVue',
  methods: {
    logout() {
      // 退出登陆逻辑，清楚token并且跳转到登陆页即可
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>