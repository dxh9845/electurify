<template>
  <div id="app" class='d-flex flex-column h-100'>
    <b-navbar type="dark" variant="coral">
      <b-navbar-brand>Lecture Accessibility</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
          <b-btn variant="light" size="sm" class="my-sm-0">
            Start Recording
          </b-btn>
      </b-navbar-nav>
    </b-navbar>
    <b-container fluid class='flex-grow-1'>
      <b-row class='h-100'>
        <b-col class='h-100'>
          <router-view />
        </b-col>
        <router-view name='sidebar' />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SideNavbar from '@/components/Navigation/SideNavbar.vue';
export default {
  components: {
    SideNavbar
  }
}
</script>

<style lang="scss">

.fill {
  flex-grow: 1;
}
</style>
