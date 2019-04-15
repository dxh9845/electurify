<template>
    <b-btn @click="toggle" variant="light" size="sm" class="my-sm-0" :pressed="recording">
        <span class='mr-1'>{{ icon }}</span> {{ text }}
    </b-btn>
</template>

<script>
import ScriptProcessor from '@/services/ScriptProcessor.js';
export default {
    name: 'record-button',
    data() {
        return {
            recording: false,
        }
    },
    computed: {
        icon: function() {
            return this.recording ? '⬛' : '🔴';
        },
        text: function() {
            return this.recording ? 'Stop recording' : 'Start recording';
        }
    },
    mounted() {
        this.sp = new ScriptProcessor(this.$socket);
    },
    methods: {
        async toggle() {
            switch (this.recording) {
                case false:
                    await this.askRecording();
                    break;
                case true:
                    this.stopRecording()
                    break;
            }
            this.recording = !this.recording;
        },
        async askRecording() {
            try {
                console.log("Ssdssad")
                await this.sp.startRecording();
            } catch (error) {
                console.error('Failed to start recording.')
            }
        },
        stopRecording() {
            this.sp.stopRecording();
        }
    }
}
</script>
