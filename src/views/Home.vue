<template>
  <b-container fluid id="home" class='scroll-container'>
    <RolePanel></RolePanel>

    <b-row>
      <b-col>
        <SlideContainer :variant='theme' style='height: 398px;'></SlideContainer>
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
import RolePanel from '@/components/RolePanel.vue';
import { SET_ROLE } from '@/store/mutations.type.js';
import { mapState } from 'vuex';

export default {
  name: 'home',
  props: {
    roleProp: {
      type: String,
      required: true,
    }
  },
  components: {
    RolePanel,
    TranscriptBox,
  },
  data() {
    return {
      audioService: null,
    };
  },
  created() {
    this.$store.commit(SET_ROLE, this.$props.roleProp);
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
