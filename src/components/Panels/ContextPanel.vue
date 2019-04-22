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
                    <b-input type='text' id='context-input' v-model='tempPhrase'></b-input>
                    <b-input-group-append>
                        <b-btn size='sm' variant='primary' @click='addToPhraseList'>Add</b-btn>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
            <b-alert dismissible  v-if='contextError'>
              <p>{{ contextError }}</p>
              <!-- <b-progress variant='danger' :max= -->
              </b-alert>
            <b-list-group>
                <b-list-group-item class='d-flex justify-content-between' :key="index" v-for="(phrase, index) in phraseList">
                  {{ phrase }}
                  <b-btn size='sm' variant='danger' @click='deletePhrase(index)'>Delete</b-btn>
                </b-list-group-item>
            </b-list-group>
        </section>
    </div>
</template>

<script>
import SectionIcon from '@/components/Common/SectionIcon.vue';
import { LOAD_CONTEXT, UPDATE_CONTEXT, DELETE_PHRASE } from '@/store/actions.type.js';
import { mapState } from 'vuex';

export default {
  name: 'context-panel',
  components: {
    SectionIcon,
  },
  data() {
    return {
      errorDismiss: null,
      tempPhrase: '',
    };
  },
  mounted() {
    // this.$store.dispatch(LOAD_CONTEXT);
  },
  computed: {
    ...mapState({
      phraseList: state => state.context.phraseList,
      contextError: state => state.context.errorMessage,
    }),
  },
  methods: {
    addToPhraseList() {
      this.$store.dispatch(UPDATE_CONTEXT, [...this.phraseList, this.tempPhrase]);
      // this.$store.dispatch(UPDATE_CONTEXT, [...this.phraseList, this.tempPhrase])
      this.tempPhrase = '';
    },
    deletePhrase(indexOfPhrase) {
      let phrases = this.phraseList
      if (indexOfPhrase >= 0 && indexOfPhrase < phrases.length) {
        phrases.splice(indexOfPhrase, 1)
        this.$store.dispatch(UPDATE_CONTEXT, phrases)
      }
      // this.$store.dispatch(DELETE_PHRASE, indexOfPhrase)
    }
  },
};
</script>

<style>

</style>
