<template>
  <div id="app">

    <!-- Take up a small amount of space at the top -->
    <b-navbar type="dark" :variant="themeColor">
      <b-navbar-brand>Lecture Accessibility</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <RecordButton />
      </b-navbar-nav>
    </b-navbar>

    <main class='d-flex overflow-hidden h-100'>
      <router-view class='p-4 content-column' />
      <router-view name='sidebar' />
    </main>

  </div>
</template>

<script>
import RecordButton from '@/components/Common/RecordButton.vue';

export default {
  components: {
    RecordButton,
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
