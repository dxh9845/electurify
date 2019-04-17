import APIService from '@/services/APIService.js';
import { LOAD_CONTEXT, UPDATE_CONTEXT, DELETE_PHRASE } from './actions.type';
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
  async [UPDATE_CONTEXT]({ state, commit }, newPhrases) {
    try {
      console.log(newPhrases);
      const { phrases } = await state.apiService.putContext({ phrases: newPhrases });
      commit(SET_CONTEXT, phrases);
    } catch (err) {
      commit(SET_CONTEXT_ERROR, 'Failed to add to the context.');
    }
  },
  async [DELETE_PHRASE]({ state, commit, dispatch }, index) {
    try {
      const { phrases } = await state.apiService.deleteContext({ index });
      commit(SET_CONTEXT, phrases);
    } catch (err) {
      commit(SET_CONTEXT_ERROR, 'Failed to delete context');
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
