<template>
  <button
    type="button"
    :aria-label="`filter by category ${value}`"
    :class="['category', { active: isActive }]"
    @click="onClick"
  >
    {{ value }}
  </button>
</template>

<script>
import {
  mapState
} from "vuex";

export default {
  name: "Category",
  props: {
    value: {
      type: String,
      default: null
    }
  },
  computed:{
    ...mapState({
      category: state => state.category
    }),
    isActive() {
      return !!this.category && this.value === this.category;
    }
  },
  methods:{
    onClick() {
      this.$emit("click", this.value);
    }
  }
};
</script>

<style scoped>
  .category {
    padding: 1rem;
    border: 1px solid #ccc;
    color: #2c3e50;
    background-color: #f0fff0;
  }
  .active {
    background-color: #2c3e50;
    color: white;
  }
</style>