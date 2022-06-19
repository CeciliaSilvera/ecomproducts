import * as getterTypes from "./getterTypes";

const getters = {
  [getterTypes.MAX_PRICE]: (state) => {
    const prices = state.allProducts.flatMap((product) => {
      return product.price;
    });
    if (prices.length) {
      return Math.ceil(Math.max.apply(null, prices));
    }
    return null;
  },
  [getterTypes.MIN_PRICE]: (state) => {
    const prices = state.allProducts.flatMap((product) => {
      return product.price;
    });
    if (prices.length) {
      return Math.floor(Math.min.apply(null, prices));
    }
    return null;
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
  },
  [getterTypes.PRODUCTSBY_RANGE]: (state) => {
    state.allProducts.reduce((prev, curr) => {
      if (curr.price <= state.rangeMax) {
        return [curr, ...prev];
      }
      return prev;
    }, []);
  },
  [getterTypes.HAS_ACTIVE_FILTER]: (state) => {
    return state.filters.category.isActive || state.filters.byPrice.isActive;
  },
  [getterTypes.ACTIVE_PRODUCTS]: (state, getters) => {
    if (!getters[getterTypes.HAS_ACTIVE_FILTER]) return state.allProducts;
    else if (state.filters.category.isActive) {
      const categoryProducts = getters[getterTypes.PRODUCTSBY_CATEGORY];
      // filter price
      if (state.filters.byPrice.isActive) {
        return categoryProducts.reduce((prev, curr) => {
          if (curr.price <= state.rangeMax) {
            return [curr, ...prev];
          }
          return prev;
        }, []);
      } else {
        return categoryProducts;
      }
    } else {
      return getters[getterTypes.PRODUCTSBY_RANGE];
    }
  }
};

export default getters;