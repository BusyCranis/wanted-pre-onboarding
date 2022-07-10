import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    project0: []






  },
  mutations: {

    addproject(state, payload) {

      state.project0.push(payload)


    }



  },
  actions: {
  },
  modules: {
  }
})
