import Vuex from "vuex";
import mutations from "@/state/mutations";
import actions from "@/state/actions";
import getters from "@/state/getters";

const state = {
    allProducts: [],
    rangeMax: 0,
    rangeMin: 0
}

export default new Vuex.Store({
    mutations,
    actions,
    getters
});