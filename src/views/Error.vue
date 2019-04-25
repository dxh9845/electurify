<template>
    <div class='d-flex flex-column justify-content-center align-items-center w-100'>
        <h1 class='display-4' :class="[textColor]">Oops! We don't know that page.</h1>
        <router-link class='h1 text-muted' :class="[textColor]" :to="{ name: 'home' }">Click to go back home.</router-link>
    </div>
</template>

<script>
export default {
    name: 'error',
}
</script>

