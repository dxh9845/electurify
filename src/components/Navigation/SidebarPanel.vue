<template>
    <div>
        <b-navbar class='d-inline-block py-0 w-100 border' type='light' variant='babypowder'>
                <b-navbar-brand>{{ title }}</b-navbar-brand>
        </b-navbar>
        <div class='mx-4 mt-2'>
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
            required: true
        },
        contentComponent: {
            type: Function,
            required: true,
        }
    },
}
</script>

<style>

</style>
