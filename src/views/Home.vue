<template>
  <div class="home">
    <TranscriptBox></TranscriptBox>
  </div>
</template>

<script>
import TranscriptBox from '@/components/Transcript/TranscriptBox.vue';

export default {
  name: 'home',
  components: {
    TranscriptBox
  },
  data() {
    return {
      connected: false,
      audioService: null,
    }
  },
  sockets: {
    connect: function() {
      console.log("Socket connected");
      this.connected = true;
    },
    disconnect: function() {
      this.connected = false;
    },
    messages: function(data) {
      console.log(data);
    }
  },
};
</script>

<style>
.transcript-row {
  height: 350px;
}
</style>

