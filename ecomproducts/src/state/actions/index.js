import * as actionTypes from "./actionTypes";
import * as mutationTypes from "../mutations/mutationTypes";

const actions = {
  [actionTypes.UPDATE_ALL_PRODUCTS]: ({
    commit 
  }, allProducts) => {
    commit(mutationTypes.SET_ALL_PRODUCTS, allProducts);
  },
  [actionTypes.UPDATE_RANGE_MIN]: ({
    commit 
  }, rangeMin) => {
    commit(mutationTypes.SET_RANGE_MIN, rangeMin);
  },
  [actionTypes.UPDATE_RANGE_MAX]: ({
    commit 
  }, rangeMax) => {
    commit(mutationTypes.SET_RANGE_MAX, rangeMax);
  },
  [actionTypes.UPDATE_CATEGORY]: ({
    commit, state, dispatch
  }, category) => {
    const isSelectedTwice = state.category === category;
    state.filters.category.isActive = !isSelectedTwice;
    dispatch(actionTypes.UPDATE_FILTERS, {
      ...state.filters 
    });
    commit(mutationTypes.SET_CATEGORY, isSelectedTwice ? null : category);
  },
  [actionTypes.UPDATE_FILTERS]: ({
    commit
  }, filters) => {
    commit(mutationTypes.SET_FILTERS, filters);
  },
};

export default actions;