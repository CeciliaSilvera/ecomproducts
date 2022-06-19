<template>
  <div class="filter-container">
    <categories />
    <range />
  </div>
</template>

<script>
import Categories from "@/components/Categories";
import Range from "@/components/Range";
export default {
  name: "Filters",
  components: {
    Range,
    Categories 
  }
};
</script>

<style scoped>
  .filter-container {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>