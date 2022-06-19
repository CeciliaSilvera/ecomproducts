<template>
  <div class="range-container">
    <label for="range">
      Filter by price
      <input
        id="range"
        name="range"
        type="range"
        :min="minPrice"
        :max="maxPrice"
        :value="maxPrice"
        class="range-input"
        @change="onChange"
      >
      <span class="min">{{ 0 }}</span>
      <span class="max">{{ maxPrice }}</span>
    </label>
  </div>
</template>

<script>
import {
  mapGetters, mapActions
} from "vuex";
import * as getterTypes from "@/state/getters/getterTypes";
import * as actionTypes from "@/state/actions/actionTypes";

export default {
  name: "Range",
  computed:{
    ...mapGetters({
      minPrice: getterTypes.MIN_PRICE,
      maxPrice: getterTypes.MAX_PRICE
    })
  },
  methods:{
    ...mapActions({
      updateRangeMax: actionTypes.UPDATE_RANGE_MAX
    }),
    onChange(e) {
      const currentValue = parseInt(e.target.value);
      this.updateRangeMax(currentValue);
    }
  }
};
</script>

<style scoped>
  .range-container {
    padding-bottom: 3.4rem;
    position: relative;
  }
  
  label {
    display: flex;
    flex-flow: column;
    width: 25rem;
    box-sizing: border-box;
    position: relative;
  }
  .min, .max {
    position: absolute;
    bottom: -1rem;
  }
  .min {
    left: 0;
  }
  .max {
    right: 0;
  }
  .current {
    position: absolute;
    right: 0;
    bottom: 1rem;
  }
</style>