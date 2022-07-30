<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区 -->
      <div class="avatar-box">
        <img src="../assets/logo.png" alt="显示图片" />
      </div>
      <!-- 登录表单区 -->
      <el-form :rules="rules" ref="insFormRef" :model="form">
        <!--用户名 -->
        <el-form-item prop="userName">
          <el-input
            prefix-icon="iconfont icon-icontouxiang"
            v-model="form.userName"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-lock"
            v-model="form.password"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="valodateForm">登录</el-button>
          <el-button type="info" @click="resetFullForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mockHttp } from '../service'
export default {
  name: 'LoginIn',
  data() {
    return {
      form: {
        userName: '',
        password: '1',
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    resetFullForm() {
      console.log('this>', this)
      this.$refs.insFormRef.resetFields()
    },
    valodateForm() {
      this.$refs.insFormRef.validate(async (valid) => {
        if (valid) {
          await mockHttp()
          this.$message.success('chenggongle')
          /* 登录成功需要做以下事情 */
          /* 1.登录成功要保存服务器分配过来的token值,存到客户端的sessionStorage中,以便后续调用登录后才能调用的API接口
          注意昂: 有些请求,服务器一定要知道你是登录成功的状态才能访问.那么怎么才能知道登录状态呢?
                ---token =>token是登录成功之后,服务器给我们颁发的登录成功状态,通过保存它,下次我们发请求的时候带上他,就可以拿到登录成功后的状态
          2.项目中除了登录之外的其他api接口,必须在登录之后才能访问
          3.token只应在当前网站打开期间生效,所以token保存在sessionStorage(localStorage 是持久化的保存机制；而sessionStorage是会话期间的保存机制)中
          4.通过编程式导航跳转到后台主页
          */
          window.sessionStorage.setItem('token', 'zheshitoken')
          this.$router.push('/home')
        }
      })
    },
  },
}
</script>








<style lang="less" scoped>
.login-container {
  background-color: lightblue;
  height: 100vh;
  .login-box {
    width: 500px;
    height: 40vh;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .avatar-box {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 150px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    .btns {
      display: flex;
      justify-content: flex-end;
    }
    .el-form {
      margin-top: 120px;
      padding: 20px;
    }
  }
}
</style>