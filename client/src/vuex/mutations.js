import stores from 'storejs'
export default {
  checkTab (state, val) {
    state.TabState = val
    stores.set('TabState', val)
  },
  setHeader (state, val) {
    state.HeaderText = val
  }
}
