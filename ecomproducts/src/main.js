import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Products from "./components/Products";
import Product from "./components/Product";
import store from "./state";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  {
    path: "/", component: Products
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
