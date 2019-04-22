<template>
  <div id="home" class='scroll-container'>
    <RolePanel></RolePanel>
    <TranscriptBox v-show="role"></TranscriptBox>
  </div>
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
  computed: {
    ...mapState({
      role: state => state.role.role,
    }),
  },
  mounted() {
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
