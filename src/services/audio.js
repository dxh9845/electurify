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

  /**
   * Construct our audio processing class.
   * @param {string} socketPath - The path of the Websocket where we will send Audio data
   */
  constructor(socketPath) {
    this.socketPath = socketPath;
    this.socketHandle(socketPath);

    // Bind to our context
    this.socketHandle = this.socketHandle.bind(this);
    this.sendOnWebsocket = this.sendOnWebsocket.bind(this);
    this.openMicrophoneAndConnectToNodes = this.openMicrophoneAndConnectToNodes.bind(this);
    this.initializeAudioContext = this.initializeAudioContext.bind(this);
    this.startRecording = this.startRecording.bind(this);
  }

  /**
   * Open the websocket and define what happens on the event handlers.
   */
  socketHandle() {
    this.webSocket = new WebSocket(this.socketPath);

    this.webSocket.onopen = function wsOpen() {
      this.sendOnWebsocket('New user info');
      // webSocket.send('New user info');
      console.log('Socket opened');
    };
  }

  /**
   * Shorthand function for sending data to the websocket
   * @param {any} dataToSend - The data to send on the websocket
   */
  sendOnWebsocket(dataToSend) {
    this.webSocket(dataToSend);
  }

  /**
   * Create the microphone input source from media streams and connect the node
   * to our other audioNodes
   * @param {MediaDeviceInfo} mediaStream - the recording input devices
   */
  openMicrophoneAndConnectToNodes(mediaStream) {
    // Create the microphone input source from our context object
    this.microphoneNode = this.context.createMediaStreamSource(mediaStream);
    // Connect our node through the base audio context
    const volumeProcessor = new AudioWorkletNode(this.context, 'volume-processor');
    this.microphoneNode.connect(volumeProcessor);
    this.microphoneNode.connect(this.context.destination);
  }

  /**
   * Initialize and return audio context by grabbing it from the window and
   * constructing our volume processor.
   * @async
   * @returns AudioContext
   */
  // eslint-disable-next-line class-methods-use-this
  async initializeAudioContext() {
    // Get the audio context from the window object
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();

    try {
      // Add our volume processor module
      await context.audioWorklet.addModule('worklet/VolumeProcessor.js');
    } catch (err) {
      console.error(err);
    }

    return context;
  }

  /**
   * Starts the process of recording.
   * @param {MediaDeviceInfo} mediaStream - the recording input devices
   */
  async startRecording(mediaStream) {
    console.log('Attempting to start recording');

    // Initialize our audio context if uninitialized
    if (!this.context) {
      // Bind our context
      this.context = await this.initializeAudioContext(mediaStream);
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
      this.microphoneSource.mediaStream.getTracks()[0].stop();
    } catch (err) {
      console.log(`ERROR unable to close media stream: ${err}`); // triggers on Firefox
    }
    this.context.close();
  }
}

export default AudioHandler;
