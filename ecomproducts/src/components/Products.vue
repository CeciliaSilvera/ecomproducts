<template>
  <div>
    <div class="product-list">
      <product-preview
        v-for="(product, idx) in activeProducts"
        :key="idx"
        ref="product-preview"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
} from "vuex";
import {
  ACTIVE_PRODUCTS 
} from "@/state/getters/getterTypes";
import ProductPreview from "@/components/ProductPreview";

export default {
  name: "Products",
  components: {
    ProductPreview 
  },
  computed:{
    ...mapGetters({
      activeProducts: ACTIVE_PRODUCTS
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
