const actions = {
  UPDATE_CATNUM: ({commit, state}, carNum) => {
    return commit('UPDATE_CATNUM', {
      carNum: carNum
    })
  }
}

export default actions
