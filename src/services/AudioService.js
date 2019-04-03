import SocketWorklet from './SocketWorklet';

/**
 * Handles audio processing using AudioWorklet.
 * @class AudioHandler
 */
class AudioHandler {
  context;

  webSocket;

  socketPath = '';

  mediaRecorder;

  recording = false;

  microphoneNode;

  volumeProcessor;

  /**
   * Construct the Audio
   */
  constructor() {
    this.constructAudioContext = this.constructAudioContext.bind(this);
    // Bind the add module function to our new context
    this.addModule = this.addModule.bind(this);
    this.openMicrophoneAndConnectToNodes = this.openMicrophoneAndConnectToNodes.bind(this);
    this.startRecording = this.startRecording.bind(this);
  }

  /**
   * Construct our AudioContext upon the "Start Recording button" click.
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
   * Create the microphone input source from media streams and connect the node
   * to our other audioNodes
   * @param {MediaDeviceInfo} inputDevices - the recording input devices
   */
  openMicrophoneAndConnectToNodes(inputDevices) {
    // Create the microphone input source from our context object
    this.microphoneNode = this.context.createMediaStreamSource(inputDevices);
    // Connect our input to the volume processor
    this.microphoneNode.connect(this.volumeProcessor);
    // Pass the input back to the output
    this.microphoneNode.connect(this.context.destination);
  }

  /**
   * Add the Volume Processor to our Audio Worklet
   * @async
   * @returns AudioContext
   */
  async addModule() {
    try {
      // Add our volume processor module, served from our Public folder
      await this.context.audioWorklet.addModule(SocketWorklet);
      // After adding the module, register it to our context
      this.volumeProcessor = new AudioWorkletNode(this.context, 'socket-worklet-processor');
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Starts the process of recording.
   * @param {MediaDeviceInfo} mediaStream - the recording input devices
   */
  async startRecording(mediaStream) {
    console.log('Attempting to start recording');

    // First check if the Audio Context was constructed
    if (!this.context) {
      // Construct our audio context
      this.constructAudioContext();
      // Add our module if not already created
      await this.addModule();
    }


    // Open the microphone for recording
    this.openMicrophoneAndConnectToNodes(mediaStream);

    // Set the recording switch to True
    this.recording = true;

    console.log('Recording started');
  }

  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    try {
      console.log(this.microphoneNode.mediaStream);
      this.microphoneNode.mediaStream.getTracks()[0].stop();
    } catch (err) {
      console.log(`ERROR unable to close media stream: ${err}`); // triggers on Firefox
    }
    this.context.close();
    this.context = null;
  }
}

export default AudioHandler;
