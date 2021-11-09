import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: null
  },
  mutations: {
    city(state, str) {
      state.city=str;
    }
  },
  actions: {
    changeCity({
      commit
    }, str) {
      commit("city", str);
    }
  },
  getters: {
    city: (state) => state.city,
  }
});
