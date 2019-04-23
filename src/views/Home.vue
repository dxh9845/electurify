<template>
  <b-container fluid :class="[backgroundColor]" id="home" class='scroll-container'>
    <RolePanel></RolePanel>
    
    <b-row>
      <b-col>
        <!-- <SlideContainer :variant='theme' class='height: 40vh;'></SlideContainer> -->
      </b-col>

      <b-col>
        <TranscriptBox v-show='role' :variant='theme'></TranscriptBox>
      </b-col>
    </b-row>
    
  </b-container>
</template>

<script>
import TranscriptBox from '@/components/Transcript/TranscriptBox.vue';
// import APIService from '@/services/APIService.js';
// import Socket from 'socket.io-client';
import RolePanel from '@/components/RolePanel.vue'
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: {
    RolePanel,
    TranscriptBox,
  },
  data() {
    return {
      audioService: null,
    };
  },  
  sockets: {
    connect() {
      console.log('Socket connected');
    },
    disconnect() {
      console.log('Socket disconnected');
    },
    messages(data) {
      console.log(data);
    },
  },
  computed: {
    ...mapState({
      role: state => state.role.role,
    }),
  },
  sockets: {
    connect() {
      console.log('Socket connected');
    },
    disconnect() {
      console.log('Socket disconnected');
    },
    messages(data) {
      console.log(data);
    },
  },
  methods: {
  },
};
</script>
