import {
  createLocalVue 
} from "@vue/test-utils";
import {
  mount 
} from "@vue/test-utils";
import Products from "@/components/Products";
import store from "@/state";
import * as actionTypes from "@/state/actions/actionTypes";
import * as getterTypes from "@/state/getters/getterTypes";
import Vuex from "vuex";
import allProducts from "@/tests/data/products";

const localVue = createLocalVue();
localVue.use(Vuex);


describe("Products", () => {
  beforeAll(() => {
    store.dispatch(actionTypes.UPDATE_ALL_PRODUCTS, allProducts);
  });
  xit("Should show exactly 20 products", () => {
    const wrapper = mount(Products, {
      localVue,
      store
    });
    const products = wrapper.findAllComponents({
      ref: "product-preview" 
    });
    expect(products.exists()).toBeTruthy();
    expect(products).toHaveLength(20);
  });
  it("Should find all 4 categories", () => {
    const categories = store.getters[getterTypes.CATEGORIES];
    expect(categories).toContain("women's clothing");
    expect(categories).toContain("electronics");
    expect(categories).toContain("jewelery");
    expect(categories).toContain("men's clothing");
    expect(categories).toHaveLength(4);
  });
  it("Should filter by category", () => {
    store.dispatch(actionTypes.UPDATE_CATEGORY, "women's clothing");
    const productsbyCategory = store.getters[getterTypes.PRODUCTSBY_CATEGORY];
    expect(productsbyCategory).toHaveLength(6);
    expect(productsbyCategory.at(0).category).toBe("women's clothing");
    expect(productsbyCategory.at(1).category).toBe("women's clothing");
    expect(productsbyCategory.at(2).category).toBe("women's clothing");
    expect(productsbyCategory.at(3).category).toBe("women's clothing");
    expect(productsbyCategory.at(4).category).toBe("women's clothing");
    expect(productsbyCategory.at(5).category).toBe("women's clothing");
  });
  it("Should set has active filter", () => {
    store.dispatch(actionTypes.UPDATE_CATEGORY, "mens's clothing");
    const hasActiveFilterBefore = store.getters[getterTypes.HAS_ACTIVE_FILTER];
    expect(hasActiveFilterBefore).toBeTruthy();
    // switch off
    store.dispatch(actionTypes.UPDATE_CATEGORY, "mens's clothing");
    const hasActiveFilterAfter = store.getters[getterTypes.HAS_ACTIVE_FILTER];
    expect(hasActiveFilterAfter).toBeFalsy();
  });
  it("Should get max price from allProducts", () => {
    const maxPrice = store.getters[getterTypes.MAX_PRICE];
    expect(maxPrice).toBe(1000);
  });
  it("Should get min price from allProducts", () => {
    const minPrice = store.getters[getterTypes.MIN_PRICE];
    expect(minPrice).toBe(7);
  });
});