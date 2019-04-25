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
import RolePanel from '@/components/RolePanel.vue';

export default {
  name: 'home',
  components: {
    RolePanel,
    TranscriptBox,
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
};
</script>
