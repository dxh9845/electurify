import {
  CHANGE_LAYOUT, CHANGE_COLOR, CHANGE_THEME, CHANGE_FONT,
} from './actions.type';
import {
  STACKED, CORAL, MAROON, LIGHT_THEME, DARK_THEME,
} from '../utils/view.types';

const state = {
  layout: STACKED,
  theme: LIGHT_THEME,
  color: MAROON,
  font: '',
};

const getters = {
  isDark(state) {
    return state.theme === DARK_THEME;
  },
  isLight(state) {
    return state.theme === LIGHT_THEME;
  },
  backgroundColor() {
    return state.theme === DARK_THEME ? 'bg-dark' : '';
  },
  textColor() {
    return state.theme === DARK_THEME ? 'text-white' : 'text-black';
  },
  fontClass() {
    return state.font;
  },
};

const actions = {
  [CHANGE_THEME]({ commit }, theme) {
    commit(CHANGE_THEME, theme);
  },
  [CHANGE_LAYOUT]({ commit }, layout) {
    commit(CHANGE_LAYOUT, layout);
  },
  [CHANGE_COLOR]({ commit }, color) {
    commit(CHANGE_COLOR, color);
  },
  [CHANGE_FONT]({ commit }, font) {
    commit(CHANGE_FONT, font);
  },
};

const mutations = {
  [CHANGE_THEME](state, newTheme) {
    state.theme = newTheme;
  },
  [CHANGE_LAYOUT](state, newLayout) {
    state.layout = newLayout;
  },
  [CHANGE_COLOR](state, newColor) {
    state.color = newColor;
  },
  [CHANGE_FONT](state, font) {
    state.font = font;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
