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
      >
        Loading products
      </product-preview>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters, mapState,
} from "vuex";
import ProductPreview from "@/components/ProductPreview";
import {
  STORE_NAME as PAGINATION_STORE_NAME,
  getterTypes as paginationGetterTypes,
  actionTypes as paginationActionTypes
} from "@/state/modules/pagination";
import * as getterTypes from "@/state/getters/getterTypes";
export default {
  name: "Products",
  components: {
    ProductPreview
  },
  computed:{
    ...mapState(PAGINATION_STORE_NAME, {
      chunkIndex: state => state.chunkIndex
    }),
    ...mapGetters({
      activeProducts: getterTypes.ACTIVE_PRODUCTS
    }),
    ...mapGetters(PAGINATION_STORE_NAME, {
      chunks: paginationGetterTypes.CHUNKS,
      displayProducts: paginationGetterTypes.DISPLAY_PRODUCTS
    }),
    showPagination() {
      return this.chunks?.length > 1;
    }
  },
  methods:{
    ...mapActions(PAGINATION_STORE_NAME, {
      updateChunkIndex: paginationActionTypes.UPDATE_CHUNK_INDEX
    }),
    goNext() {
      let nextIndex = this.chunkIndex;
      this.updateChunkIndex(nextIndex +=1);
    },
    goPrev() {
      let prevIndex = this.chunkIndex;
      this.updateChunkIndex(prevIndex -=1);
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
    min-height: 300px;
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
