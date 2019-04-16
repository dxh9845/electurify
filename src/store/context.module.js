import APIService from '@/services/APIService.js';
import { LOAD_CONTEXT } from './actions.type';
import { SET_CONTEXT, SET_CONTEXT_ERROR } from './mutations.type';

const state = {
  errorMessage: null,
  phraseList: [],
  apiService: new APIService(),
};

const getters = {

};

const actions = {
  async [LOAD_CONTEXT]({ state, commit }) {
    try {
      const { phrases } = await state.apiService.getContext();
      commit(SET_CONTEXT, phrases);
    } catch (err) {
      commit(SET_CONTEXT_ERROR, 'Failed to retrieve context.');
    }
  },
};

const mutations = {
  [SET_CONTEXT](state, phraseList) {
    state.phraseList = phraseList;
  },
  [SET_CONTEXT_ERROR](state, error) {
    state.errorMessage = error;
  },
};


export default {
  state,
  getters,
  actions,
  mutations,
};
