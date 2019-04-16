<template>
    <div class='d-flex flex-column'>
        <b-navbar class='d-inline-block py-0 w-100' type='dark' variant='dark'>
                <b-navbar-brand class='font-weight-bold'>{{ title }}</b-navbar-brand>
        </b-navbar>
        <div class='mx-4 mt-2 flex-grow-1'>
            <keep-alive>
                <component :is="contentComponent"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
  name: 'sidebar-panel',
  props: {
    title: {
      type: String,
      required: true,
    },
    contentComponent: {
      type: Function,
      required: true,
    },
  },
};
</script>
