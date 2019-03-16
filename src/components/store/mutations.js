export default {
  changeScreenWidth (state, width) {
    state.screenWidth = width
  },
  changeScreenHeight (state, height) {
    state.screenHeight = height
  },
  changeCollapseSwitch (state, status) {
    state.isCollapse = status
    try {
      localStorage.isCollapse = status
    } catch (e) {
      console.log(e)
    }
  }
}
