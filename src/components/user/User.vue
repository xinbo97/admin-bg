<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图 -->
    <el-card class="box-card">
      <div>
        <el-row :gutter="20">
          <el-col :span="9">
            <el-input placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="5"
            ><el-button type="primary" @click="addDialog"
              >添加用户</el-button
            ></el-col
          >
        </el-row>

        <!-- 列表区 -->
        <el-table :data="infoList" border stripe>
          <el-table-column type="index"></el-table-column>
          <el-table-column label="姓名" prop="userName"></el-table-column>
          <el-table-column label="邮箱" prop="email"></el-table-column>
          <el-table-column label="电话" prop="phone"></el-table-column>
          <el-table-column label="角色" prop="role"></el-table-column>
          <el-table-column label="状态" prop="status">
            <!-- 有作用域插槽，状态列的prop失效 -->
            <template slot-scope="scope">
              <!-- scope.row可以拿到行数据  -->
              <el-switch
                v-model="scope.row.status"
                @change="userSwitchChang(scope.row.status)"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180px">
            <template slot-scope="scope">
              <!-- scope.row可以拿到行数据  -->
              <!-- 修改按钮 -->
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="small"
              ></el-button>
              <!-- 删除按钮 -->
              <el-button type="danger" icon="el-icon-delete" size="small">
              </el-button>
              <!-- 分配权限 -->
              <el-tooltip
                effect="dark"
                content="分配角色"
                :enterable="false"
                placement="top"
              >
                <el-button
                  type="warning"
                  icon="el-icon-setting"
                  size="small"
                ></el-button
              ></el-tooltip>

              <el-input v-model="scope.row.userName"> </el-input>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryData.pageNum"
          :page-sizes="[1, 3, 5, 10]"
          :page-size="queryData.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </el-card>

    <!-- 添加用户的对话框 -->
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="30%">
      <!--内容主题区 -->
      <span>这是一段信息</span>
      <!-- 底部区 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script >
import { mockHttp } from '@/mock'
export default {
  name: 'UserV',
  data() {
    return {
      userData: {
        name: 'sdfsfdsd',
      },
      dialogVisible: false,
      queryData: {
        // 页数
        pageNum: 1,
        // 当前页显示的数据数
        pageSize: 10,
      },
      infoList: [{}, {}],
      total: 0,
    }
  },
  created() {
    this.getInfoList()
  },
  methods: {
    // 对话框
    addDialog() {
      this.dialogVisible = true
    },
    // 监听开关状态
    userSwitchChang(status) {
      // 调用接口
      // http
      console.log(status)
    },
    async getInfoList() {
      await mockHttp
      this.infoList = [
        {
          userName: 'sd1sf',
          email: '@werrwe',
          phone: 3232332,
          role: 'admin',
          status: true,
        },
        {
          userName: 's2dsf',
          email: '@werrwe',
          phone: 3232332,
          role: 'admin',
        },
        {
          userName: 'sds3f',
          email: '@werrwe',
          phone: 3232332,
          role: 'admin',
        },
      ]
      this.total = Math.random()
    },
    // 监听pagesize改变
    handleSizeChange(newSize) {
      console.log('newSize>>>', newSize)
      this.queryData.pageSize = newSize
    },
    // 监听页码值改变的事件
    handleCurrentChange(newPage) {
      console.log(newPage)
      this.queryData.pageNum = newPage
    },
  },
}
</script>

<style lang="less" scoped>
.el-table {
  margin-top: 20px;
}
</style>