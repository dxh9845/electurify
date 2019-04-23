<template>
    <div>
        <b-row>
            <b-col>
                <ul class='transcript-container mb-0' 
                  :class='[transcriptTheme.text, transcriptTheme.background, { animated : connected, stopped: !connected }]' 
                  v-chat-scroll>
                    <li class='transcript' v-for="message in finalText">{{ message }}</li>
                </ul>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class='w-100 text-white transcript' :class="[transcriptTheme.textChange]">
                    <span class='ml-3'> > </span>
                    {{ interimText }}
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { DARK_THEME, LIGHT_THEME } from '../../utils/view.types.js' 
import { mapState } from 'vuex';
import {SET_LAST_TRANSCRIPT} from '@/store/mutations.type'

export default {
  name: 'transcript-box',
  sockets: {
    textSend({ results }) {
      if (results[0] && results[0].isFinal) {
        // This is a "finalized transcription" - add it to the final text
        const final = results[0].alternatives[0].transcript;
        // this.finalText.push(`${results[0].alternatives[0].transcript}`);
        this.finalText.push(final);
        this.$store.commit(SET_LAST_TRANSCRIPT, final);
        this.interimText = '';
      } else {
        this.interimText = results[0].alternatives[0].transcript;
      }
    },
  },
  data() {
    return {
      finalText: [],
      interimText: '',
    };
  },
  computed: {
    transcriptTheme: function() {
      let retVal = {};
      switch (this.theme) {
        case DARK_THEME:
          retVal = Object.assign(retVal, { text: 'text-white', background: 'bg-darker', textChange: 'bg-black' })
          break;
        case LIGHT_THEME:
        default:
          retVal = Object.assign(retVal, { text: 'text-black', background: '', textChange: 'bg-dark' })
          break;
      }
      return retVal;
      
    },
    ...mapState({ connected: state => state.socket.connected }),
  },
};
</script>

<style lang="scss">
.transcript-container {
    overflow-x: auto;
    height: 350px;
    border: 2px solid transparent;
    // background-image:
    //     // linear-gradient(white, white),
    //     linear-gradient(270deg, #00D7B9, #B95DD7 50%, #FFB367 100%);

    background-repeat: no-repeat;
    background-origin: padding-box, border-box;
    list-style-type: none;
}

.transcript {
    font-family: 'Courier New', Courier, monospace;
    font-size: 2rem;
}

.stopped {
  border: 2px solid black;
}

.animated {
    // background-image:
    //   // linear-gradient(white, white),
    //   linear-gradient(180deg, cornflowerblue, purple 50%, cornflowerblue);

    background-repeat: no-repeat;
    background-size: 100% 100%, 100% 200%;
    background-position: 0 0, 0 100%;
    background-origin: padding-box, border-box;
    animation: highlight 10s infinite alternate;
  }

  @keyframes highlight {
    100% {
      background-position: 0 0, 0 0;
    }
  }

</style>
