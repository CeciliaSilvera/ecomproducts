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
      <p>price: ${{ product.price }}</p>
      <div class="product-footer">
        <div :class="['badge', `${getColor(product.category)}`]">
          {{ product.category }}
        </div>
      </div>
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
  },
  methods: {
    getColor(category) {
      switch (category) {
      case "jewelery":
        return "pink";
      case "men's clothing":
        return "sand"; 
      case "women's clothing":
        return "blue";
      case "electronics":
        return "turquoise";
      }
    }
  }
};
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #2c3e50;
  }
  .product {
    box-shadow: 0 0 4px #6d6027;
    border: 1px solid #6d6027;
    padding: 1.5rem;
    overflow: hidden;
    cursor: pointer;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 2rem;
    max-height: 20rem;
    background-color: #ffffff;
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
  
  h4, p {
    margin: 0;
  }
  
  .badge {
    border-radius: 2px;
    padding: 2px 5px;
    display: inline;
    max-width: fit-content;
  }
  .badge.pink {
    background-color: #ec38bc;
    color: #ffffff;
  }
  .badge.sand {
    background-color: #d3cbb8;
  }
  .badge.turquoise {
    background-color: #40E0D0;
  }
  .badge.blue {
    background-color: #7303c0;
    color: #ffffff;
  }
  
  .product-footer {
    display: flex;
    justify-content: flex-end;
  }
</style>