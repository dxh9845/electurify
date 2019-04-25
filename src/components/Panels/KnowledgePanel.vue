<template>
  <div>
    <b-btn block @click="sendNLPRequest" :variant="themeColor">Tell me more</b-btn>
    <wiki-summary></wiki-summary>
  </div>
</template>

<script>
import WikiSummary from './WikiSummary.vue';
import { GET_NLP } from '@/utils/message.types';
import { mapState } from 'vuex';

export default {
  name: 'knowledge-panel',
  components: {
    WikiSummary,
  },
  computed: {
    ...mapState({ 
      lastTranscript: state => state.transcript.lastTranscript
    })
  },
  mounted() {
    // console.log(this.$store.state)
    this.sendNLPRequest();
  },
  methods: {
    sendNLPRequest() {
      if (this.lastTranscript.length > 0) {
        console.log(this.lastTranscript)
        this.$socket.emit(GET_NLP, this.lastTranscript);
      } 
    },
  },
};
</script>
