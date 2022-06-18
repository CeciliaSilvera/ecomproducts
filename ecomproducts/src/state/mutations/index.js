import * as mutationTypes from "./mutationTypes";

const mutations = {
  [mutationTypes.SET_ALL_PRODUCTS]: (state, allProducts) => {
    state.allProducts = allProducts;
  },
  [mutationTypes.SET_RANGE_MIN]: (state, rangeMin) => {
    state.rangeMin = rangeMin;
  },
  [mutationTypes.SET_RANGE_MAX]: (state, rangeMax) => {
    state.rangeMax = rangeMax;
  },
  [mutationTypes.SET_CATEGORY]: (state, category) => {
    state.category = category;
  },
  [mutationTypes.SET_FILTERS]: (state, filters) => {
    state.filters = filters;
  },
};

export default mutations;