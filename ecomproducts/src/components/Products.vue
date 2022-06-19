<template>
  <div>
    <div v-if="chunks.length > 1">
      <button
        type="button"
        aria-label="show prev"
        class="pagination-btn"
        @click="goPrev"
      >
        Prev
      </button>
      <button
        type="button"
        aria-label="show next"
        class="pagination-btn"
        @click="goNext"
      >
        Next
      </button>
    </div>
    <div class="product-list">
      <product-preview
        v-for="(product, idx) in displayProducts"
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
  data() {
    return {
      displayProducts: [],
      chunkIndex: 0,
      chunks: []
    };
  },
  computed:{
    ...mapGetters({
      activeProducts: ACTIVE_PRODUCTS
    })
  },
  watch: {
    activeProducts() {
      this.chunks = this.activeProducts.reduce((prev, curr, index) => {
        const chunkIndex = Math.floor(index/8);
        if (!prev[chunkIndex]) {
          prev[chunkIndex] = []; // start a new chunk
        }
        prev[chunkIndex].push(curr);
        return prev;
      }, []);
      this.displayProducts = this.chunks[this.chunkIndex];
    },
    chunkIndex() {
      this.displayProducts = this.chunks[this.chunkIndex];
    }
  },
  methods:{
    goNext() {
      if (this.chunks.length === this.chunkIndex +1) return false;
      this.chunkIndex += 1;
    },
    goPrev() {
      if (this.chunkIndex === 0) return false;
      this.chunkIndex -= 1;
    }
  }
};
</script>

<style scoped>
  .product-list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, 15rem);
  }
  .pagination-btn {
    padding: 1rem;
    border: 1px solid #ccc;
    color: #2c3e50;
    background-color: #f0fff0;
  }
</style>
