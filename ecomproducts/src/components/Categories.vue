<template>
  <div class="category-container">
    <category
      v-for="(cat, idx) in categories"
      :key="idx"
      :value="cat"
      @click="updateCategory"
    />
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from "vuex";
import * as getterTypes from "@/state/getters/getterTypes";
import * as actionTypes from "@/state/actions/actionTypes";
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
  },
  methods:{
    ...mapActions({
      updateCategory: actionTypes.UPDATE_CATEGORY
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
    background-color: #D3CBB8;
  }
</style>