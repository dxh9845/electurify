<template>
    <b-list-group horizontal>
        <b-list-group-item :active="isDark" class='d-flex justify-content-around align-items-center'
            button @click='changeTheme("dark")'>
            <fa-icon icon='moon' fixed-width size='lg'></fa-icon> Dark
        </b-list-group-item>
        <b-list-group-item class='d-flex justify-content-around align-items-center'
            :active="isLight"
            button @click='changeTheme("light")'>
            <fa-icon icon='sun' fixed-width size='lg' ></fa-icon> Light
        </b-list-group-item>
    </b-list-group>
</template>

<script>
import { CHANGE_THEME } from '@/store/actions.type';

export default {
  name: 'theme-picker',
  methods: {
    changeTheme(themeChoice) {
      this.$store.dispatch(CHANGE_THEME, themeChoice);
    },
  },
};
</script>

<style>

</style>
