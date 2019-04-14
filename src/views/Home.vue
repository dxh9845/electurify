<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <button @click="askRecord">Record</button>
          <button @click="stopRecord">Stop</button>
        </b-col>

      </b-row>
      <b-row>
        {{ connected }}
      </b-row>
      <transcript-box>

      </transcript-box>
    </b-container>
  </div>
</template>

<script>
import ScriptProcessor from '@/services/ScriptProcessor.js';
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
  mounted() {
    // Manage the browser recording with our wrapper class
    // this.scriptProcessor = new ScriptProcessor(this.$socket);
  },
  methods: {
    async askRecord() {
      try {
        // await this.scriptProcessor.startRecording();
      } catch (err) {
        console.error(err);
      }
      
    },

    stopRecord() {
      // this.scriptProcessor.stopRecording();
    }
  },
};
</script>
