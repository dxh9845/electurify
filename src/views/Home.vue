<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <button @click="askRecord">Record</button>
          <button @click="stopRecord">Stop</button>
        </b-col>
        
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AudioService from '@/services/AudioService.js';
import SocketService from '@/services/SocketService.js';

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      audioService: null,
    }
  },
  created() {
    this.audioService = new AudioService(location.origin.replace(/^http/, 'ws'));
  },
  mounted() {
    let ss = new SocketService('http://localhost:8081');
  },
  methods: {
    async askRecord() {
      try {
        let devices = await navigator.mediaDevices.getUserMedia({ audio: true });
        await this.audioService.startRecording(devices);
      } catch (err) {
        console.error(err);
      }
      
    },

    stopRecord() {
      this.audioService.stopRecording();
    }
  },
};
</script>
