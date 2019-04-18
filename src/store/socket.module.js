

const state = {
  connected: false,
};

const getters = {

};

const actions = {

};

const mutations = {
  SOCKET_connect(state) {
    state.connected = true;
  },
  SOCKET_disconnect(state) {
    state.connected = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
