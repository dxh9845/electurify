<template>
    <b-list-group>
        <b-list-group-item :active="fontClass != ''" class='d-flex justify-content-around align-items-center'
            :class="[odFont]"
            button 
            @click='changeFont(odFont)'>
            OpenDyslexic
        </b-list-group-item>
        <b-list-group-item class='d-flex justify-content-around align-items-center'
            :active="fontClass === ''"
            button @click='changeFont("")'>
            Regular
        </b-list-group-item>
    </b-list-group>
</template>

<script>
import { CHANGE_FONT } from '@/store/actions.type';
import { OPEN_DYSLEXIC } from '@/utils/view.types.js';

export default {
  name: 'theme-picker',
  data() {
      return { 
          odFont: OPEN_DYSLEXIC
      }
  },
  methods: {
    changeFont(fontChoice) {
      this.$store.dispatch(CHANGE_FONT, fontChoice);
    },
  },
};
</script>
