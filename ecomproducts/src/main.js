import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex";
import VueRouter from "vue-router";
import Products from "./components/Products";
import Product from "./components/Product";

Vue.config.productionTip = false
Vue.use(Vuex);
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
  render: h => h(App),
}).$mount('#app')
