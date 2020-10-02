import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerShow: false
  },
  mutations: {
    setDrawerShow(store, v) {
      store.drawerShow = v;
    },
    toggleDrawerShow(store) {
      store.drawerShow = !store.drawerShow;
    }
  },
  actions: {},
  modules: {}
});
