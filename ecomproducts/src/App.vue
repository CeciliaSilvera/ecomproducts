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
  name: 'App',
  components:{
    MainLayout
  },
  methods:{
    ...mapActions({
      updateAllProducts: actionTypes.UPDATE_ALL_PRODUCTS
    })
  },
  async created() {
    const request = await client.getProducts();
    this.updateAllProducts(request?.data ?? []);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
