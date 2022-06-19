<template>
  <button
    type="button"
    :aria-label="`filter by category ${value}`"
    :class="['category', { active: isActive }]"
    @click="onClick"
  >
    {{ pimpedValue }}
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
    },
    pimpedValue() {
      return this.value.toUpperCase();
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
    background-color: #D3CBB8;
    border-bottom: 2px solid #6D6027;
    margin: 0 5px;
    cursor: pointer;
  }
  .active {
    background-color: #6D6027;
    color: white;
  }
  .category:hover {
    background: linear-gradient(to right, #6d6027, #d3cbb8) ;
    color: #ffffff;
  }
</style>