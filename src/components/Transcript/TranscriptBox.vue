<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <ul class='transcript-container mb-0' v-chat-scroll>
                    <li class='transcript' v-for="message in finalText">{{ message }}</li>
                </ul>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class='w-100 bg-dark text-white transcript'>
                    <span class='ml-3'> > </span>
                    {{ interimText }}
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'transcript-box',
  sockets: {
    textSend({ results }) {
      if (results[0] && results[0].isFinal) {
        // This is a "finalized transcription" - add it to the final text
        this.finalText.push(`${results[0].alternatives[0].transcript}`);
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
};
</script>

<style lang="scss">
.transcript-container {
    overflow-x: auto;
    height: 350px;
    border: 2px solid black;
    list-style-type: none;
}

.transcript {
    font-family: 'Courier New', Courier, monospace;
    font-size: 2rem;
}

</style>
