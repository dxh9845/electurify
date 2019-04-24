<template>
  <div>
    <div id="teacher" class='fixed ml-3' v-show="role=='teacher'">
          <b-button class='mb-1' v-show='!roomJoined' size='md' @click="createLectureRoom">Create new lecture</b-button>
          <b-row v-show='roomJoined'>
            <b-col>
              <p class="pt-2" :class="[textColor]">{{ joinStatus }}</p>
            </b-col>
            <b-col>
              <b-btn size='sm' v-show='!lectureEnded' @click='endLecture'>End lecture</b-btn>
            </b-col>
          </b-row>
    </div>
    <div id="student" class='fixed pl-3' v-show="role=='student'">
      <b-form-group
        v-show="!roomJoined"
        label-cols-sm='4'
        label-cols-lg='3'
        :class=[textColor]
        label='Enter your lecture code'
        label-for='room-input'>
        <b-input-group class='col col-lg-4 col-sm-6'>
          <b-input type='text' id='lecture-input' v-model='lectureCode'></b-input>
          <b-input-group-append>
            <b-btn size='sm' @click='joinLectureRoom'>Submit</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
      <p class="pt-2" :class="[textColor]" v-show="roomJoined">{{ joinStatus }}</p>
      <b-btn size='sm' v-show='roomJoined' @click='endLecture'>End lecture</b-btn>
    </div>
  </div>
</template>

<script>
import { SET_ROLE, SET_ROOM_CREATED } from '@/store/mutations.type.js';
import { NEW_LECTURE, JOIN_LECTURE, END_LECTURE } from '@/utils/message.types.js';
import APIService from '@/services/APIService.js';

export default {
  name: 'role-panel',

  data() {
    return {
      lectureCode: '',
      joinStatus: '',
      roomJoined: false,
      lectureEnded: false,
    };
  },
  sockets: {
    roomId(id) {
      this.lectureCode = id;
      this.joinStatus = `Joined lecture ${this.lectureCode}.`;
    },
  },
  methods: {
    setRole(role) {
      this.role = role;
      this.$store.commit(SET_ROLE, role);
    },
    createLectureRoom() {
      this.$socket.emit(NEW_LECTURE, this.lectureCode);
      this.roomJoined = true;
      this.$store.commit(SET_ROOM_CREATED, true);
    },
    joinLectureRoom() {
      this.$socket.emit(JOIN_LECTURE, this.lectureCode);
      this.joinStatus = `Joined lecture ${this.lectureCode}`;
      this.roomJoined = true;
    },
    endLecture() {
      this.$socket.emit(END_LECTURE, this.lectureCode);
      this.joinStatus = 'Lecture ended';
      thislectureEnded = true;
    },
  },
};
</script>

<style>
/* .fixed {
  height:40px;
  max-height:80px;
} */
</style>
