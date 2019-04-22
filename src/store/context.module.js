import APIService from '@/services/APIService';
import { LOAD_CONTEXT, UPDATE_CONTEXT, DELETE_PHRASE } from './actions.type';
import { SET_CONTEXT, SET_CONTEXT_ERROR } from './mutations.type';
import { SEND_CONTEXT } from '@/utils/message.types';

const state = {
  errorMessage: null,
  phraseList: [],
  apiService: new APIService(),
};

const getters = {

};

const actions = {
  // async [LOAD_CONTEXT]({ state, commit }) {
  //   try {
  //     const { phrases } = await state.apiService.getContext();
  //     commit(SET_CONTEXT, phrases);
  //   } catch (err) {
  //     commit(SET_CONTEXT_ERROR, 'Failed to retrieve context.');
  //   }
  // },
  async [UPDATE_CONTEXT]({ state, commit }, newPhrases) {
    try {
      // const { phrases } = await state.apiService.putContext({ phrases: newPhrases });
      // eslint-disable-next-line no-underscore-dangle
      this._vm.$socket.emit(SEND_CONTEXT, { phrases: newPhrases });
      commit(SET_CONTEXT, newPhrases);
    } catch (err) {
      commit(SET_CONTEXT_ERROR, 'Failed to add to the context.');
    }
  },
  // async [DELETE_PHRASE]({ state, commit, dispatch }, index) {
  //   try {
  //     const { phrases } = await state.apiService.deleteContext({ index });
  //     commit(SET_CONTEXT, phrases);
  //   } catch (err) {
  //     commit(SET_CONTEXT_ERROR, 'Failed to delete context');
  //   }
  // },
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
