export default {

  stateGoogleUserInfo(state,payload) {
    state.googleUserInfo = payload
  },
  stateDeleteGoogleUserInfo(state) {
    state.googleUserInfo = null
  },
  stateDeleteEvents(state) {
    state.events = []
  },

  //list
  stateEmployeeList(state,payload) {
    state.employeeList.push(payload)
  },
  stateEmployeeWeekendList(state,payload) {
    state.employeeWeekendList.push(payload)
  },
  stateArrangeEmployeeList(state,payload) {
    state.arrangeEmployeeList.push(payload)
  },
  stateArrangeWeekendEmployeeList(state,payload) {
    state.arrangeWeekendEmployeeList.push(payload)
  },

  //splice
  stateEmployeelistSplice(state,payload) {
    state.employeeList.splice(payload.start,payload.deleteCount)
  },
  stateEmployeeWeekendListSplice(state,payload) {
    state.employeeWeekendList.splice(payload.start, payload.deleteCount)
  },
  stateArrangeEmployeeListSplice(state,payload) {
    state.arrangeEmployeeList.splice(payload.start,payload.deleteCount)
  },
  stateArrangeWeekendEmployeeListSplice(state,payload) {
    state.arrangeWeekendEmployeeList.splice(payload.start,payload.deleteCount)
  },
  stateEventsSplice(state, payload) {
    state.events.splice(payload.start, payload.deleteCount)
  },

  //concat
  stateListConcat(state,payload) {
    state.arrangeEmployeeList.push(...payload)
  },
  stateWeekendListConcat(state, payload) {
    state.arrangeWeekendEmployeeList.push(...payload)
  },

  stateEvents(state, payload) {   
    // console.log(payload);          
    state.events.push(payload)
  },
  
  stateStartTime(state, payload) {
    state.startTime = payload       
  },
  stateEndTime(state, payload) {             
    state.endTime = payload
  }
}