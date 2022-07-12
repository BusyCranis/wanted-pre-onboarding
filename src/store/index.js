import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    project0: null,

    currenttask: null






  },
  mutations: {

    addproject(state, payload) {
      state.project0 = payload
      console.log(state.project0)
    },


    lookcurrent(state, payload) {

      state.currenttask = payload.member

      console.log(state.currenttask)

    }





  },
  actions: {
  },
  modules: {
  }
})
