import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    project0: null






  },
  mutations: {

    addproject(state, payload) {

      state.project0 = payload

     
      console.log(state.project0[0])

    }



  },
  actions: {
  },
  modules: {
  }
})
