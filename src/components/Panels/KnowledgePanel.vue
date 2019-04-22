<template>
  <div>
    <b-btn size='sm' @click="sendNLPRequest">Tell me more</b-btn>
    <wiki-summary></wiki-summary>
  </div>
</template>

<script>
import WikiSummary from './WikiSummary.vue';
import { GET_NLP } from '@/utils/message.types';

export default {
  name: 'knowledge-panel',
  components: {
    WikiSummary,
  },
  methods: {
    sendNLPRequest() {
      this.$socket.emit(GET_NLP, this.$store.state.transcript.lastTranscript);
    },
  },
};
</script>
