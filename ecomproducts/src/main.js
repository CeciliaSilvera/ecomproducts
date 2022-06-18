import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Product from "./components/Product";
import store from "./state";
import ProductsListing from "@/components/ProductsListing";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  {
    path: "/", component: ProductsListing
  },
  {
    path: "/product/:id", component: Product
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
