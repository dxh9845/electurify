<template>
  <div>
    <b-btn size='sm' @click="sendNLPRequest">Tell me more</b-btn>
    <wiki-summary></wiki-summary>
  </div>
</template>

<script>
import WikiSummary from './WikiSummary.vue';

export default {
  name: 'knowledge-panel',
  components: {
    WikiSummary,
  },
  methods: {
    sendNLPRequest() {
      this.$socket.emit('get-nlp')
    }
  }
};
</script>
