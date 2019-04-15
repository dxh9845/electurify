<template>
    <div>
        <section>
            <section-icon icon='comments' variant='lg'></section-icon>
            <h4>Improve voice recognition </h4>
            <p>
                Enter words below that will be in your lecture to improve accuracy of the voice recognition.
            </p>
            <b-form-group 
                label='Enter the word or phrase here.' 
                label-for='context-input'
                description="Words and phrases are accepted!">
                <b-input-group>
                    <b-input type='text' id='context-input'></b-input>
                    <b-input-group-append>
                        <b-btn size='sm'>Submit</b-btn>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
        </section>
    </div>
</template>

<script>
import SectionIcon from '@/components/Common/SectionIcon.vue';

export default {
    name: 'context-panel',
    components: {
        SectionIcon
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>
