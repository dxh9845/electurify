import { mapState, mapGetters } from 'vuex';
import { DARK_THEME, LIGHT_THEME } from './view.types';

export default {
  computed: {
    ...mapGetters(['isDark', 'isLight', 'textColor', 'backgroundColor']),
    ...mapState({
      theme: state => state.theme.theme,
      themeColor: state => state.theme.color,
    }),
  },
};
