<template>
  <div id="app">

    <!-- Take up a small amount of space at the top -->
    <b-navbar type="dark" variant="coral">
      <b-navbar-brand>Lecture Accessibility</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <RecordButton v-show="roomCreated"/>
      </b-navbar-nav>
    </b-navbar>

    <div class='d-flex overflow-hidden h-100'>
      <router-view class='p-4 content-column' />
      <router-view name='sidebar' />
    </div>

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
      // role: state => state.role.role,
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
