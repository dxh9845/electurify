<template>
    <b-container class='transcript-container'>
        <b-row>
            <b-col>
                <div>
                    <p>{{ finalText }}</p>
                    <p>{{ interimText }}</p>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>


export default {
    name: 'transcript-box',
    sockets: {
        textSend: function({ results }) {
            if (results[0] && results[0].isFinal) {
                // This is a "finalized transcription" - add it to the final text
                this.finalText += `${results[0].alternatives[0].transcript}.\n`
                this.interimText = ""
            } else {
                this.interimText = results[0].alternatives[0].transcript;
            }
        }
    },
    data() { 
        return {
            finalText: "",
            interimText: "", 
        }
    }
}
</script>

<style>
.transcript-container {
    border: 2px solid black;
    overflow-y: scroll;
}
</style>
