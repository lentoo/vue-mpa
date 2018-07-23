const mutations = {
  'UPDATE_CATNUM': (state, {carNum}) => {
    console.log('mutations', carNum)
    state.carNum = carNum
  }
}
export default mutations
