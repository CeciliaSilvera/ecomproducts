<template>
  <div class="product">
    <div
      class="thumbnail"
      :style="{ backgroundImage: `url(${product.image})` }"
    />
    <div class="summary">
      <h4>{{ product.title }}</h4>
      <p>{{ product.description }}</p>
      <p>price: {{ product.price }}$</p>
      <p>category: {{ product.category }}</p>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from "vuex";

export default {
  name: "Product",
  computed: {
    ...mapState({
      allProducts: state => state.allProducts
    }),
    product() {
      return this.allProducts?.find((p) => {
        // don't type check
        return p.id == this.$route.params.id;
      });
    }
  }
};
</script>

<style scoped>
  .product {
    padding: 1.5rem;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    max-width: 70%;
  }

  .thumbnail {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  
  .summary {
    text-align: left;
    display: flex;
    flex-flow: column;
  }
</style>