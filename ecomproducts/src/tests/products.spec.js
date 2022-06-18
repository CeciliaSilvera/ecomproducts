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
  beforeAll(async() => {
    await store.dispatch(actionTypes.UPDATE_ALL_PRODUCTS, allProducts);
  });
  it("Should show exactly 20 products", async() => {
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
});