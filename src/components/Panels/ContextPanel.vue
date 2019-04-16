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
                        <b-btn size='sm' v-model='tempPhrase' @click='addToPhraseList'>Submit</b-btn>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
            <b-list-group>
                <b-list-group-item :key="index" v-for="(phrase, index) in phraseList">{{ phrase }}</b-list-group-item>
            </b-list-group>
        </section>
    </div>
</template>

<script>
import SectionIcon from '@/components/Common/SectionIcon.vue';
import { LOAD_CONTEXT } from '@/store/actions.type.js';
import { mapState } from 'vuex';

export default {
  name: 'context-panel',
  components: {
    SectionIcon,
  },
  data() {
    return {
      tempPhrase: '',
    };
  },
  mounted() {
    this.$store.dispatch(LOAD_CONTEXT);
  },
  computed: {
    ...mapState({ phraseList: state => state.context.phraseList }),
  },
  methods: {
    addToPhraseList() {
      console.log(this.tempPhraseList);
      this.tempPhraseList.push(this.tempPhrase);
      this.tempPhrase = '';
    },
  },
};
</script>

<style>

</style>
