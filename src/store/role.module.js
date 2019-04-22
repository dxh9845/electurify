import { SET_ROLE, SET_ROOM_CREATED } from './mutations.type';

const state = {
  role: '',
  roomCreated: false,
};

const getters = {

};

const actions = {

};

const mutations = {
  [SET_ROLE](state, role) {
    state.role = role;
  },
  [SET_ROOM_CREATED](state, created) {
    state.roomCreated = created;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
