
import {
  AUDIO_CHANGE, START_STREAM, END_STREAM,
} from '../utils/events.types';

export default class ScriptProcessor {
    audioContext;

    mediaStream;

    microphoneNode;

    scriptProcessor;

    bufferSize;

    socketService;

    recording = false;

    streaming = false;

    /**
     * Creates a ScriptProcessor node and manages the state internally.
     * @param {*} bufferSize - the size of the Audio Buffer for the Script Processor node. Defaults to 2048
     * @param {*} socketService - A reference to the Socket.IO client instance.
     */
    constructor(socketService, bufferSize = 2048) {
      this.bufferSize = bufferSize;
      this.buffArray = [];

      this.constructAudioContext = this.constructAudioContext.bind(this);
      this.float32ToInt16 = this.float32ToInt16.bind(this);
      this.startRecording = this.startRecording.bind(this);
      this.stopRecording = this.stopRecording.bind(this);
      this.sendAudio = this.sendAudio.bind(this);
      this.downsampleBuffer = this.downsampleBuffer.bind(this);


      // Open our websocket
      this.socketService = socketService;
    }

    /**
     * Construct the audio context off the window.
     */
    constructAudioContext() {
      // Create the Audio Context object from the Window
      const AudioContext = (window.AudioContext || window.webkitAudioContext);
      this.context = new AudioContext({
        // Non-interactive, we need to just send the stream as quick as possible
        latencyHint: 'playback',
      });
    }

    /**
     * Start recording from the microphone script processor
     * @async
     */
    async startRecording() {
      // Are we already recording?
      if (this.recording) { return; }

      // Initialize the Google stream
      this.socketService.emit(START_STREAM);
      // We are now streaming data through the websocket
      this.streaming = true;

      // Construct our audio context
      if (!this.context) {
        this.constructAudioContext();
      }

      const { context, bufferSize, sendAudio } = this;

      // Specify the script processor with our buffer size with one input and one output
      // channel
      const scriptProcessor = context.createScriptProcessor(bufferSize, 1, 1);

      // Connect our script processor to the destination
      scriptProcessor.connect(context.destination);

      // Resume the context
      context.resume();

      // Now get the media stream
      const inputStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

      // Set these variables back to our class
      this.mediaStream = inputStream;
      //  Get the microphone input from our media stream
      this.microphoneNode = context.createMediaStreamSource(inputStream);
      // Connect the microphone to the processor
      this.microphoneNode.connect(scriptProcessor);

      // Upon audio data receieved, process it
      scriptProcessor.onaudioprocess = sendAudio;

      this.scriptProcessor = scriptProcessor;
      this.recording = true;
    }

    /**
     * Stop recording.
     * @async
     */
    async stopRecording() {
      if (!this.streaming) { return; }

      // We have stopped the socket
      this.recording = false;

      // const {
      //   socketService, mediaStream, scriptProcessor, context,
      // } = this;
      this.socketService.emit(END_STREAM);
      try {
        // Stop the stream
        this.mediaStream.getTracks()[0].stop();
        // Disconnect the microphone from the script processor
        this.microphoneNode.disconnect(this.scriptProcessor);
        // Disconnect the script processor from the destination
        this.scriptProcessor.disconnect(this.context.destination);
      } catch (err) {
        console.log(`ERROR unable to close media stream: ${err}`); // triggers on Firefox
      }

      const soundBlob = new Blob(this.buffArray);
      console.log(soundBlob);
      const audioUrl = URL.createObjectURL(soundBlob);
      console.log(audioUrl);
      const audio = new Audio(audioUrl);
      console.log(audio);
      try {
        audio.play();
      } catch (e) { console.error(e); }

      // Now close our context
      await this.context.close();
      // Reset these variables
      this.context = null;
      this.scriptProcessor = null;
      this.microphoneNode = null;
    }

    /**
     * Send the audio on the web socket
     * @param {AudioProcessingEvent} audioProcessingEvent -  audio processing event
     */
    sendAudio({ inputBuffer, outputBuffer }) {
      const inputData = inputBuffer.getChannelData(0);

      // UNCOMMENT if you want to hear the output
      // const outputData = outputBuffer.getChannelData(0);
      // const downsample = this.float32ToInt16(inputData);
      // console.log(downsample);
      const downsampledBuffer = this.downsampleBuffer(inputData, 44100, 16000);

      this.buffArray.push(downsampledBuffer);

      // this.socketService.streamAudio(downsampledBuffer);
      this.socketService.emit(AUDIO_CHANGE, downsampledBuffer);
    }

    // eslint-disable-next-line class-methods-use-this
    downsampleBuffer(buffer, sampleRate, outSampleRate) {
      if (outSampleRate == sampleRate) {
        return buffer;
      }
      if (outSampleRate > sampleRate) {
        throw Error('downsampling rate show be smaller than original sample rate');
      }
      const sampleRateRatio = sampleRate / outSampleRate;
      const newLength = Math.round(buffer.length / sampleRateRatio);
      const result = new Int16Array(newLength);
      let offsetResult = 0;
      let offsetBuffer = 0;
      while (offsetResult < result.length) {
        const nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
        let accum = 0;
        let count = 0;
        for (let i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
          accum += buffer[i];
          count++;
        }

        result[offsetResult] = Math.min(1, accum / count) * 0x7FFF;
        offsetResult++;
        offsetBuffer = nextOffsetBuffer;
      }
      return result.buffer;
    }
}
