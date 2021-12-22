export default {
  commitResetList({ commit }) {
    commit('stateResetList')
  },


  commitDeleteGoogleUserInfo({ commit }) {
    commit('stateDeleteGoogleUserInfo')
  },
  commitDeleteEvents({ commit }) {
    commit('stateDeleteEvents')
  },

  //list
  commitEmployeeList({ commit },payload) {
    commit('stateEmployeeList',payload)
  },
  commitEmployeeWeekendList({ commit },payload) {
    commit('stateEmployeeWeekendList',payload)
  },
  commitArrangeEmployeeList({ commit },payload) {
    commit('stateArrangeEmployeeList',payload)
  },
  commitArrangeWeekendEmployeeList({ commit },payload) {
    commit('stateArrangeWeekendEmployeeList',payload)
  },

  //splice
  commitEmployeelistSplice({ commit },payload) {
    commit('stateEmployeelistSplice',payload)
  },
  commitEmployeeWeekendListSplice({ commit },payload) {
    commit('stateEmployeeWeekendListSplice',payload)
  },
  commitArrangeEmployeeListSplice({ commit },payload) {
    commit('stateArrangeEmployeeListSplice',payload)
  },
  commitArrangeWeekendEmployeeListSplice({ commit },payload) {
    commit('stateArrangeWeekendEmployeeListSplice',payload)
  },
  commitEventsSplice({ commit }, payload) {
    commit('stateEventsSplice', payload)
  },

  //concat
  commitListConcat({ commit },payload) {
    commit('stateListConcat',payload)
  },
  commitWeekendListConcat({ commit }, payload) {
    commit('stateWeekendListConcat', payload)
  },

  commitEvents({ commit },payload) {       
    commit('stateEvents',payload)
  },
  commitStartTime({ commit },payload) {       
    commit('stateStartTime',payload)
  },
  commitEndTime({ commit },payload) {       
    commit('stateEndTime',payload)
  },
}