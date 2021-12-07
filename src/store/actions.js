export default {
    commitEvents({commit},payload) {       
      console.log('act',payload);
      commit('stateEvents',payload)
    },
    commitEventsSplice({commit},payload) {       
      commit('stateEventsSplice',payload)
    },
}