import { SET_LAST_TRANSCRIPT } from './mutations.type';

const state = {
  lastTranscript: '',
};

const getters = {

};

const actions = {

};

const mutations = {
  [SET_LAST_TRANSCRIPT](state, transcript) {
    state.lastTranscript = transcript;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
