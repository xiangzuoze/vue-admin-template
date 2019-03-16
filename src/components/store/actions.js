export default {
  changeScreenWidth (ctx, width) {
    ctx.commit('changeScreenWidth', width)
  },
  changeScreenHeight (ctx, height) {
    ctx.commit('changeScreenHeight', height)
  },
  changeCollapseSwitch (ctx, status) {
    ctx.commit('changeCollapseSwitch', status)
  }
}
