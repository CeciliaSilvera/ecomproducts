import * as getterTypes from "./getterTypes";

const getters = {
  [getterTypes.MAX_PRICE]: () => {
    // TODO get allProducts max
  },
  [getterTypes.MIN_PRICE]: () => {
    // TODO get allProducts min
  },
  [getterTypes.CATEGORIES]: (state) => {
    return state.allProducts
      .reduce((prev, curr) => {
        if (!prev.includes(curr.category)) {
          return [curr.category, ...prev];
        } 
        return prev;
      }, []);
  },
  [getterTypes.PRODUCTSBY_CATEGORY]: (state) => {
    return state.allProducts.reduce((prev, curr) => {
      if (curr.category === state.category) {
        return [
          ...prev, curr 
        ];
      }
      return prev;
    }, []);
    // TODO filter from allProducts, categories and selected category
  },
  [getterTypes.PRODUCTSBY_RANGE]: () => {
    // TODO filter from allProducts, range min, range max and selected price
  },
  [getterTypes.HAS_ACTIVE_FILTER]: (state) => {
    return state.filters.category.isActive || state.filters.byPrice.isActive;
  },
  [getterTypes.ACTIVE_PRODUCTS]: (state, getters) => {
    if (!getters[getterTypes.HAS_ACTIVE_FILTER]) return state.allProducts;
    else return getters[getterTypes.PRODUCTSBY_CATEGORY];
  }
};

export default getters;