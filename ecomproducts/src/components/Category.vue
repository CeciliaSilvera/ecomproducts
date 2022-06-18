<template>
  <div class="category">
    {{ category }}
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped>
  .category {
    padding: 1rem;
    border: 1px solid #ccc;
  }
</style>