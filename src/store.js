import Vue from 'vue';
import Vuex from 'vuex';

import ContextModule from './store/context.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    context: ContextModule,
  },
});
