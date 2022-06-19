<template>
  <div class="products-listing-container">
    <filters />
    <products />
  </div>
</template>

<script>
import Filters from "@/components/Filters";
import Products from "@/components/Products";
export default {
  name: "ProductsListing",
  components: {
    Products, Filters 
  }
};
</script>

<style scoped>
  .products-listing-container {
    background-color: #D3CBB8;
  }
</style>