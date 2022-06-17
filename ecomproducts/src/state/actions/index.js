import * as actionTypes from "./actionTypes";
import * as mutationTypes from "../mutations/mutationTypes";

const actions = {
    [actionTypes.UPDATE_ALL_PRODUCTS]: ({commit}, allProducts) => {
        commit(mutationTypes.SET_ALL_PRODUCTS, allProducts);
    },
    [actionTypes.UPDATE_RANGE_MIN]: ({commit}, rangeMin) => {
        commit(mutationTypes.SET_RANGE_MIN, rangeMin);
    },
    [actionTypes.UPDATE_RANGE_MAX]: ({commit}, rangeMax) => {
        commit(mutationTypes.SET_RANGE_MAX, rangeMax);
    },
}

export default actions;