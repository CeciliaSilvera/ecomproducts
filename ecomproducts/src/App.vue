<template>
  <div id="app">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "./components/MainLayout";
import client from "./client";
import {
  mapActions
} from "vuex";
import * as actionTypes from "./state/actions/actionTypes";

export default {
  name: "App",
  components:{
    MainLayout
  },
  async created() {
    const request = await client.getProducts();
    this.updateAllProducts(request?.data ?? []);
  },
  methods:{
    ...mapActions({
      updateAllProducts: actionTypes.UPDATE_ALL_PRODUCTS
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  min-height: 50rem;
}
html, body {
  padding: 0;
  margin: 0;
  background-color: #d3cbb8;
}
</style>
