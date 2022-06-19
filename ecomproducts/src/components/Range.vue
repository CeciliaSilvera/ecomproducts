<template>
  <div class="range-container">
    <label
      for="range" 
      aria-label="Filter by price"
    >
      <input
        id="range"
        name="range"
        type="range"
        :min="minPrice"
        :max="maxPrice"
        :value="maxPrice"
        class="range-input"
        @input="onInput"
        @change="onChange"
      >
      <output ref="rangevalue">${{ maxPrice }}</output>
      <span class="min">${{ 0 }}</span>
      <span class="max">${{ maxPrice }}</span>
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
    onInput(e) {
      this.$refs.rangevalue.value = e.target.value;
    },
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
    padding-top: 1rem;
    position: relative;
    background-color: #D3CBB8;
  }
  
  label {
    display: flex;
    flex-flow: column;
    width: 25rem;
    box-sizing: border-box;
    position: relative;
    background-color: #D3CBB8;
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
  input[type="range"]{
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    outline: none !important;
    appearance:none;
    border:none;
    border-radius:30px;
  }
  input[type="range"]::-moz-focus-outer {
    border: 0;
  }
  input[type="range"]:hover {
    outline:none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    background: #6D6027;
    cursor: pointer;
    border-radius: 50%;
    outline:none;
  }
  input[type="range"]::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #6D6027;
    cursor: pointer;
    border-radius:50%;
    border:none;
    outline:none;
  }
  input[type="range"]::-moz-range-progress {
    background-color: #6D6027;
    height: 100%;
    border-radius:30px;
    border:none;
  }
  input[type="range"]::-moz-range-track {
    background-color: #6D6027;
    border-radius:30px;
    border:none;
    height: 100%;
  }
  input[type="range"]::-ms-fill-lower {
    background-color: #fff;
    height: 100%;
    border-radius:30px;
    border:none;
  }
  input[type="range"]::-ms-fill-upper {
    background-color: #ccc;
    border-radius:30px;
    border:none;
    height: 100%;
  }
</style>