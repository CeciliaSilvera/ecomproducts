<template>
  <div>
    <div class="heading">
      <h1>Products</h1>
    </div>
    <div class="product-list">
      <product-preview
        v-for="(product, idx) in allProducts"
        :key="idx"
        ref="product-preview"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import {
  mapState
} from "vuex";
import ProductPreview from "@/components/ProductPreview";

export default {
  name: "Products",
  components: {
    ProductPreview 
  },
  computed:{
    ...mapState({
      allProducts: state => state.allProducts
    })
  }
};
</script>

<style scoped>
  .product-list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, 15rem);
  }
</style>
