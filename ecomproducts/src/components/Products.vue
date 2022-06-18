<template>
  <div>
    <div class="heading">
      <h1>Products</h1>
    </div>
    <div class="product-list">
      <div
        v-for="(prod, idx) in allProducts"
        :key="idx"
        class="product"
      >
        <div
          class="thumbnail"
          :style="{ backgroundImage: `url(${prod.image})` }"
        />
        <div class="summary">
          <h4>{{ prod.title }}</h4>
          <p>price: {{ prod.price }}</p>
          <p>category: {{ prod.category }}</p>
        </div>
      </div>
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

<style scoped>
  .product {
    box-shadow: 0 0 4px #ccc;
    border: 1px solid #ccc;
    padding: 1.5rem;
    overflow: hidden;
    cursor: pointer;
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-row-gap: 2rem;
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
  
  .product-list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, 15rem);
  }
</style>
