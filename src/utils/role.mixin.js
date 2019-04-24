import { mapState, mapGetters } from 'vuex';
import { DARK_THEME, LIGHT_THEME } from './view.types';

export default {
  computed: {
    ...mapState({
      role: state => state.role.role,
    }),
  },
};
