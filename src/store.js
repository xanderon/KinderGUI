/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    receipts: []
  },
  getters: {
    allReceipts: state => state.receipts
  },
  mutations: {
    setReceipts: (state, receipts) => {
      state.receipts = receipts;
    },
    addReceipt: (state, receipt) => {
      state.receipts.unshift(receipt);
    }
  },
  actions: {
    async fetchReceipts({ commit }) {
      const response = await axios.get('https://xanderon-kinderplanner.glitch.me/receipts');
      commit('setReceipts', response.data);
    },
    async saveReceiptToDB({ commit }, receipt) {
      const response = await axios.post('https://xanderon-kinderplanner.glitch.me/receipts/', receipt);
      commit('addReceipt', response.data);
    }
  },
});