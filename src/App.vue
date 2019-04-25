<template>
  <div id="app">

    <!-- Take up a small amount of space at the top -->
    <b-navbar type="dark" :variant="themeColor">
      <b-navbar-brand :to="{ name: 'roles' }" :class="[fontClass]">electurify</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <RecordButton v-show="roomCreated"/>
      </b-navbar-nav>
    </b-navbar>

    <main class='d-flex overflow-hidden h-100' :class='[fontClass, backgroundColor]'>
      <router-view class='p-4 content-column' />
      <router-view name='sidebar' />
    </main>

  </div>
</template>

<script>
import RecordButton from '@/components/Common/RecordButton.vue';
import { mapState } from 'vuex';

export default {
  components: {
    RecordButton,
  },
  computed: {
    ...mapState({
      roomCreated: state => state.role.roomCreated,
    }),
  },
};
</script>

<style lang="scss">

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.fill {
  flex-grow: 1;
}
</style>
