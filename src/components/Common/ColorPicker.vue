<template>
    <div>
        <b-list-group>
            <b-list-group-item button v-for="color in colors"
                :variant="color.color" @click="changeColor(color.color)">
                {{ color.text }}
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import {
  CORAL, MAROON, PINK, PURPLE, COLORS,
} from '../../utils/view.types.js';
import { CHANGE_COLOR, CHANGE_THEME, CHANGE_LAYOUT } from '../../store/actions.type';

export default {
  name: 'color-picker',
  data() {
    return {
      colors: COLORS,
    };
  },
  methods: {
    changeColor(color) {
      this.$store.dispatch(CHANGE_COLOR, color);
    },
  },
};
</script>

<style>

</style>
