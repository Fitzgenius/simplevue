import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

const state = {
  data: {
    currentVideoId: 1,
    videoTitle: undefined,
    videoDescription: undefined,
    videoUrl: undefined,
  }
}

const mutations = {
  ADD_DATA(state, payload) {
    Object.assign(state.data, payload)
  }
}

const actions = {
  addData(context, data) {
    context.commit('ADD_DATA', data)
  }
}

const getters = {
  getData(state) {
    return state.data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [vuexLocal.plugin],
})
