<template>
  <div>
    <div
      v-if="showPagination"
      class="pagination"
    >
      <button
        type="button"
        aria-label="show prev"
        class="btn prev"
        @click="goPrev"
      >
        <img
          src="../assets/caret-down.svg"
          alt="arrow"
          height="40"
          class="arrow-left"
        >
      </button>
      <button
        type="button"
        aria-label="show next"
        class="btn next"
        @click="goNext"
      >
        <img
          src="../assets/caret-down.svg"
          alt="arrow"
          height="40"
          class="arrow-right"
        >
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
  mapActions,
  mapGetters, mapState,
} from "vuex";
import ProductPreview from "@/components/ProductPreview";
import client from "@/client";
import * as actionTypes from "@/state/actions/actionTypes";
import * as getterTypes from "@/state/getters/getterTypes";
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
    ...mapState({
      allProducts: state => state.allProducts
    }),
    ...mapGetters({
      activeProducts: getterTypes.ACTIVE_PRODUCTS
    }),
    showPagination() {
      return this.chunks?.length > 1;
    }
  },
  watch: {
    // Note: There's a problem with these watchers that don't always update, 
    // TODO: They should be replaced by getters in store. Might solve it
    activeProducts() {
      this.chunks = this.activeProducts?.reduce((prev, curr, index) => {
        const chunkIndex = Math.floor(index/8);
        if (!prev[chunkIndex]) {
          prev[chunkIndex] = []; // start a new chunk
        }
        prev[chunkIndex].push(curr);
        return prev;
      }, []);
      // restart if on different index on filtering
      if (this.chunkIndex > this.chunks?.length) {
        this.chunkIndex = 0;
      }
      this.displayProducts = this.chunks ? this.chunks[this.chunkIndex] : [];
    },
    chunkIndex() {
      this.displayProducts = this.chunks ?  this.chunks[this.chunkIndex] : [];
    }
  },
  async mounted() {
    if (!this.activeProducts) {
      const request = await client.getProducts();
      this.updateAllProducts(request?.data ?? []);
    }
  },
  methods:{
    ...mapActions({
      updateAllProducts: actionTypes.UPDATE_ALL_PRODUCTS
    }),
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
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: 2rem;
    background-color: #fefefe;
  }
  
  .pagination {
    padding-bottom: 2rem;
  }
  .pagination .btn {
    padding: 1rem;
    border: none;
    color: transparent;
    background-color: transparent;
    cursor: pointer;
  }
  .arrow-left {
    transform: rotate(90deg);
  }
  .arrow-right {
    transform: rotate(-90deg);
  }
</style>
