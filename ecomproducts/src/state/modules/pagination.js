import * as rootGetterTypes from "@/state/getters/getterTypes";
export const STORE_NAME = "paginationStore";

const state = {
  chunkIndex: 0
};

export const actionTypes = {
  UPDATE_CHUNK_INDEX: "updateChunkIndex"
};

export const getterTypes = {
  DISPLAY_PRODUCTS: "displayProducts",
  CHUNKS: "chunks"
};

const mutationTypes = {
  SET_CHUNK_INDEX: "updateChunkIndex"
};

const actions = {
  [actionTypes.UPDATE_CHUNK_INDEX]: ({
    commit, getters
  }, chunkIndex) => {
    const chunks = getters[getterTypes.CHUNKS];
    // Don't update if outside realms of actual chunks
    if (chunkIndex >= 0 && (chunkIndex < chunks.length || chunks.length === 0)) {
      commit(mutationTypes.SET_CHUNK_INDEX, chunkIndex);
    }
  }
};

const mutations = {
  [mutationTypes.SET_CHUNK_INDEX]: (state, chunkIndex) => {
    state.chunkIndex = chunkIndex;
  }
};

const getters = {
  [getterTypes.DISPLAY_PRODUCTS]: (state, getters) => {
    const chunks = getters[getterTypes.CHUNKS];
    return chunks[state.chunkIndex];
  },
  [getterTypes.CHUNKS]: (state, getters, rootState, rootGetters) => {
    const activeProducts = rootGetters[rootGetterTypes.ACTIVE_PRODUCTS];
    return activeProducts?.reduce((prev, curr, index) => {
      const chunkIndex = Math.floor(index/8);
      if (!prev[chunkIndex]) {
        prev[chunkIndex] = []; // start a new chunk
      }
      prev[chunkIndex].push(curr);
      return prev;
    }, []) ?? [];
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};


