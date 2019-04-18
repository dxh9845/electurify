<template>
  <div id="home" class='scroll-container'>
    <b-row>
      <b-col>
        <b-button size='sm' @click="createLectureRoom">Create new lecture</b-button>
      </b-col>
      <b-col>
        <p>Lecture code: {{ newLecture }}</p>
      </b-col>
    </b-row>
    <b-row>
    </b-row>
    <b-form-group
      label='Enter the lecture code'
      label-for='room-input'>
      <b-input-group>
        <b-input type='text' id='lecture-input' v-model="lectureCode"></b-input>
        <b-input-group-append>
          <b-btn size='sm' @click="joinLectureRoom">Submit</b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <p> {{ joinConfirmation }}</p>
    <TranscriptBox></TranscriptBox>
  </div>
</template>

<script>
import TranscriptBox from '@/components/Transcript/TranscriptBox.vue';
import randomstring from 'randomstring';

export default {
  name: 'home',
  components: {
    TranscriptBox,
  },
  data() {
    return {
      audioService: null,
      newLecture: '',
      lectureCode: '',
      joinConfirmation: '',
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
  methods: {
    createLectureRoom() {
      const newLectureCode = randomstring.generate({
        length: 5,
        charset: 'alphabet',
        capitalization: 'uppercase',
      });
      this.newLecture = newLectureCode;
      this.$socket.emit('new-lecture', newLectureCode);
    },
    joinLectureRoom() {
      this.$socket.emit('join-lecture', this.lectureCode);
      joinConfirmation = 'Joined this.lectureCode';
    },
  },
};
</script>
