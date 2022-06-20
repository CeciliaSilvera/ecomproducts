import * as actionTypes from "./actionTypes";
import * as mutationTypes from "../mutations/mutationTypes";
import * as getterTypes from "../getters/getterTypes";
import {
  STORE_NAME as PAGINATION_STORE_NAME,
  actionTypes as paginationActionTypes
} from "@/state/modules/pagination";

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
  [actionTypes.UPDATE_RANGE_MAX]: async ({
    commit, getters, state, dispatch
  }, rangeMax) => {
    const maxPrice = await getters[getterTypes.MAX_PRICE];
    const isMaxPriceSelected = maxPrice === rangeMax;
    state.filters.byPrice.isActive = !isMaxPriceSelected;
    dispatch(actionTypes.UPDATE_FILTERS, {
      ...state.filters
    });
    // reset pagination
    dispatch(`${ PAGINATION_STORE_NAME }/${ paginationActionTypes.UPDATE_CHUNK_INDEX }`, 0);
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
    // reset pagination
    dispatch(`${ PAGINATION_STORE_NAME }/${ paginationActionTypes.UPDATE_CHUNK_INDEX }`, 0);
    commit(mutationTypes.SET_CATEGORY, isSelectedTwice ? null : category);
  },
  [actionTypes.UPDATE_FILTERS]: ({
    commit
  }, filters) => {
    commit(mutationTypes.SET_FILTERS, filters);
  },
};

export default actions;