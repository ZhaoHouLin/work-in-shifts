export default {
    stateEvents(state, payload) {             
      state.events.push(payload)
    },
    stateEventsSplice(state, payload) {             
      console.log(payload);
      state.events.splice(payload.start,payload.deleteCount)
    }
}