<template>
  <div>
    <h1>Products</h1>
    <div
      v-for="(prod, idx) in allProducts"
      :key="idx"
    >
      {{ prod.title }}
    </div>
  </div>
</template>

<script>
import {
  mapState
} from "vuex";

export default {
  name: "Products",
  computed:{
    ...mapState({
      allProducts: state => state.allProducts
    })
  }
};
</script>
