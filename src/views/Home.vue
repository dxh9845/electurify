<template>
  <div id="home" class='scroll-container'>
    <TranscriptBox></TranscriptBox>
  </div>
</template>

<script>
import TranscriptBox from '@/components/Transcript/TranscriptBox.vue';

export default {
  name: 'home',
  components: {
    TranscriptBox,
  },
  data() {
    return {
      connected: false,
      audioService: null,
    };
  },
  sockets: {
    connect() {
      console.log('Socket connected');
      this.connected = true;
    },
    disconnect() {
      this.connected = false;
    },
    messages(data) {
      console.log(data);
    },
  },
};
</script>
