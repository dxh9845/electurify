<template functional>
    <div :class='`bg-${props.variant}`'
        style='width: 50px; height: 50px;' 
        class="mx-auto mt-4 mb-2 d-flex justify-content-center align-items-center rounded-circle" aria-hidden>
        <fa-icon :icon="props.icon" class='text-white' size='lg' fixed-width></fa-icon>
    </div>
</template>

<script>
export default {
    name: 'section-icon',
    props: {
        icon: {
            type: String,
            required: true
        },
        variant: {
            type: String,
            default: 'lg'
        }
    }
}
</script>
