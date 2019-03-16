<template>
  <div class="navbar-container">
    <el-header style="text-align: right; font-size: 12px">
      <div class="sidebar-close iconfont" @click="SidebarSwitch">&#xe609;</div>
      <div class="content"></div>
      <el-popover
        placement="bottom"
        width="300"
        trigger="hover">
        <el-table :data="messageData">
          <el-table-column width="150" property="date" label="日期"></el-table-column>
          <el-table-column width="150" property="message" label="未读消息"></el-table-column>
        </el-table>
        <div class="message iconfont" slot="reference">&#xe640;</div>
      </el-popover>
      <el-popover
        placement="bottom"
        width="300"
        trigger="hover">
        <el-table :data="notifyData">
          <el-table-column width="150" property="date" label="日期"></el-table-column>
          <el-table-column width="150" property="message" label="未读通知"></el-table-column>
        </el-table>
        <div class="notify iconfont" slot="reference">&#xe605;</div>
      </el-popover>
      <el-dropdown>
        <div class="userinfo">
          <div class="img-wrapper">
            <div class="userimage"></div>
          </div>
          <div class="userdetail">
            <div class="job">开发工程师</div>
            <div class="username">方洪波</div>
          </div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <i class="iconfont">&#xe643;</i>用户信息
            </el-dropdown-item>
          <el-dropdown-item>
            <i class="iconfont">&#xe604;</i>用户设置
          </el-dropdown-item>
          <el-dropdown-item>
            <i class="iconfont">&#xe65f;</i>退出登陆
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      messageData: [{
        date: '2017-05-02 18:24:30',
        message: 'mysql数据异常'
      }, {
        date: '2017-05-02 18:25:00',
        message: 'API数据异常'
      }, {
        date: '2017-05-02 18:29:30',
        message: '带宽利用率超过90%'
      }, {
        date: '2017-05-02 18:42:30',
        message: '发现异常登陆信息'
      }],
      notifyData: [{
        date: '2017-05-02 18:24:30',
        message: '上线工单审批通过'
      }, {
        date: '2017-05-02 18:25:00',
        message: '设备申请工单被驳回'
      }, {
        date: '2017-05-02 18:29:30',
        message: '上线工单审批通过'
      }, {
        date: '2017-05-02 18:42:30',
        message: '上线工单审批通过'
      }]
    }
  },
  computed: {
    ...mapState(['isCollapse'])
  },
  methods: {
    SidebarSwitch () {
      this.changeCollapseSwitch(!this.isCollapse)
    },
    ...mapMutations(['changeCollapseSwitch'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.navbar-container
  background-color: #09c
  position: fixed
  height: 60px
  flex: 1
  top: 0
  left: 210px
  right: 0
  transition: all .3s ease
  z-index: 2

.active .navbar-container
  background-color: #09c
  position: fixed
  height: 60px
  flex: 1
  top: 0
  left: 64px
  transition: all .2s ease
  right: 0
  z-index: 2

.el-header
  background-color: #09c
  color: #fff
  line-height: 60px
  display: flex
  flex-direction: row
  align-items: center
  justify-content: flex-end
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04)
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04)
  .sidebar-close
    width: 60px
    text-align: left
    font-size: 18px
    transition: all .3s ease-in-out
    &:hover
      color: #eee
  .content
    flex: 1
  .userinfo
    width: 120px
    height: 60px
    display: flex
    flex-direction: row
    align-items: center
    justify-content: flex-end
    background: rgba(0, 0, 0, .05)
    padding-right: 20px
    .img-wrapper
      width: 40px
      height: 60px
      line-height: 60px
      display: flex
      flex-direction: column
      justify-content: center
      text-align: center
      align-items: center
      .userimage
        height: 32px
        width: 32px
        border-radius: 50%
        border-style: none
        background-image: url('/static/images/user.jpg')
        background-repeat: no-repeat
        background-size: 100%
        -moz-background-size: 100%
        display: inline-block
    .userdetail
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      line-height: 20px
      color: #fff
      font-size: 12px
      .job
        font-weight: 600
  .message, .notify
    width: 50px
    line-height: 60px
    display: flex
    text-align: left
    align-items: center
    justify-content: center

.el-dropdown-menu, .el-dropdown-item
    width: 140px
</style>
