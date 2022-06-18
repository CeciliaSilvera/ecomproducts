<template>
  <div class="category-container">
    <category
      v-for="(cat, idx) in categories"
      :key="idx"
      :category="cat"
    />
  </div>
</template>

<script>
import {
  mapGetters
} from "vuex";
import * as getterTypes from "@/state/getters/getterTypes";
import Category from "@/components/Category";
export default {
  name: "Categories",
  components: {
    Category 
  },
  computed:{
    ...mapGetters({
      categories: getterTypes.CATEGORIES
    })
  }
};
</script>

<style scoped>
  .category-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
  }
</style>