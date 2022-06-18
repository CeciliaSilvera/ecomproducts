import Vuex from "vuex";
import mutations from "@/state/mutations";
import actions from "@/state/actions";
import getters from "@/state/getters";
import Vue from "vue";
Vue.use(Vuex);

const getInitialState = () => {
  return {
    allProducts: [],
    activeProducts: [],
    rangeMax: 0,
    rangeMin: 0,
    category: null,
    filters: {
      category: {
        isActive: false
      },
      byPrice: {
        isActive: false
      }
    }
  };
};

const state = getInitialState();

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});