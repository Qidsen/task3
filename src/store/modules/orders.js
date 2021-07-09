import axios from 'axios';

export default {
  namespaced: true,
  state: {
    orders: null,
  },
  mutations: {
    postForm(state, payload) {
      state.orders = payload;
    },
  },
  actions: {
    postOrder({ commit }, dataParams) {
      return axios.post('/orders', dataParams).then(({ data }) => {
        commit('postForm', data);
      });
    },
    getOrder({ commit }) {
      return axios.get('/orders').then(({ data }) => {
        commit('postForm', data);
      });
    },
  },
};
