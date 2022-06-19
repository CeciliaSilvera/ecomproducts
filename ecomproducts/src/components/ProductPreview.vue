<template>
  <router-link
    class="product"
    :to="`/product/${product.id}`"
  >
    <div
      class="thumbnail"
      :style="{ backgroundImage: `url(${product.image})` }"
    />
    <div class="summary">
      <h4>{{ product.title }}</h4>
      <p>price: {{ product.price }}</p>
      <p>category: {{ product.category }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductPreview",
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .product {
    box-shadow: 0 0 4px #ccc;
    border: 1px solid #ccc;
    padding: 1.5rem;
    overflow: hidden;
    cursor: pointer;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 2rem;
    max-height: 20rem;
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