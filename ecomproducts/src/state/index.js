import Vuex from "vuex";
import mutations from "@/state/mutations";
import actions from "@/state/actions";
import getters from "@/state/getters";
import Vue from "vue";
Vue.use(Vuex);

const state = {
  allProducts: [],
  rangeMax: 0,
  rangeMin: 0
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});