import * as getterTypes from "./getterTypes";

const getters = {
  [getterTypes.MAX_PRICE]: () => {
    // TODO get allProducts max
  },
  [getterTypes.MIN_PRICE]: () => {
    // TODO get allProducts min
  },
  [getterTypes.CATEGORIES]: () => {
    // TODO get categories from allProducts
  },
  [getterTypes.PRODUCTSBY_CATEGORY]: () => {
    // TODO filter from allProducts, categories and selected category
  },
  [getterTypes.PRODUCTSBY_RANGE]: () => {
    // TODO filter from allProducts, range min, range max and selected price
  },
};

export default getters;