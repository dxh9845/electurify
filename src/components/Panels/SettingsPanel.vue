<template>
    <div>
        <section>
            <section-icon icon='microphone' variant='lg'></section-icon>
            <h4>Improve voice recognition </h4>
            <p>
                Help improve voice recognition by adding words and phrases that will be discussed!
                <router-link to="context">Click here.</router-link>
            </p>
        </section>

        <section>
            <section-icon icon='info' variant='lg'> </section-icon>
            <h4>About</h4>
            <p>HannibalLecture was written by Daniel Herzig and Regina Wang, © 2019.</p>
        </section>
    </div>
</template>

<script>
import SectionIcon from '@/components/Common/SectionIcon.vue';

export default {
  name: 'settings-panel',
  components: {
    SectionIcon,
  },
};
</script>
