<template>
  <div class="sidebar-container" ref="sidebar">
    <div v-if="isCollapse" class="sidebar-logo">V</div>
    <div v-else class="sidebar-logo">Vue Admin Template</div>
    <el-menu class="el-menu-vertical-demo" rel='122' @open="handleOpen" @close="handleClose" :collapse="Collapse" background-color="#304156" text-color="#fff">
      <el-submenu index="1" rel='123'>
        <template slot="title" rel='124'>
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4" rel="125" style="background-color: rgb(48, 65, 86);">
          <span slot="title" rel="127">选项4</span>
          <el-menu-item index="1-4-1" rel="126">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Sidebar',
  data () {
    return {
      Collapse: false
    }
  },
  computed: {
    ...mapState({
      isCollapse: 'isCollapse'
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log('open', key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log('close', key, keyPath)
    }
  },
  watch: {
    isCollapse () {
      this.Collapse = this.isCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .sidebar-container >>> .el-submenu__title, .el-menu-item
    color: #fff
    border: 0
    text-align: left
    transition: all 0s ease

  .sidebar-container >>> .el-menu-vertical-demo.el-menu--collapse.el-menu, .el-menu
    border: 0
    transition: all 0s ease

  .sidebar-container
    background: rgb(48, 65, 86)
    position: fixed
    width: 210px
    overflow: hidden
    top: 0
    left: 0
    bottom: 0
    z-index: 2
    transition: all .3s ease
    .sidebar-logo
      overflow: hidden
      background: #09c
      height: 60px
      width: 100%
      line-height: 60px
      color: #fff
      font-size: 18px
      font-weight: 600
  .el-menu-vertical-demo:not(.el-menu--collapse)
    width: 100%;
    min-height: 400px;
    text-color: #fff
    color: #fff
    active-text-color: #fff

  .active .sidebar-container
    background: rgb(48, 65, 86)
    position: fixed
    width: 64px
    overflow: hidden
    z-index: 2
    transition: all .3s ease
</style>
